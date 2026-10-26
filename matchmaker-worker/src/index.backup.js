
import { DurableObject } from "cloudflare:workers";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/" || url.pathname === "/health") {
      return Response.json({
        app: "MinglePH Matchmaker",
        status: "online",
        websocket: "/ws"
      });
    }

    if (url.pathname !== "/ws") {
      return new Response("Not found", { status: 404 });
    }

    if (request.headers.get("Upgrade")?.toLowerCase() !== "websocket") {
      return new Response("WebSocket upgrade required", { status: 426 });
    }

    const id = env.MATCHMAKER.idFromName("mingleph-global-queue");
    return env.MATCHMAKER.get(id).fetch(request);
  }
};

export class MatchmakerRoom extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env);
    this.waiting = null;
    this.matches = new Map();
  }

  async fetch(request) {
    const pair = new WebSocketPair();
    const client = pair[0];
    const server = pair[1];

    server.accept();

    const session = {
      socket: server,
      partner: null,
      closed: false
    };

    server.addEventListener("message", event => {
      this.handleMessage(session, event.data);
    });

    server.addEventListener("close", () => {
      this.disconnect(session);
    });

    server.addEventListener("error", () => {
      this.disconnect(session);
    });

    if (this.waiting && !this.waiting.closed) {
      const other = this.waiting;
      this.waiting = null;
      session.partner = other;
      other.partner = session;
      this.send(session, { type: "matched" });
      this.send(other, { type: "matched" });
    } else {
      this.waiting = session;
      this.send(session, { type: "waiting" });
    }

    return new Response(null, {
      status: 101,
      webSocket: client
    });
  }

  handleMessage(session, raw) {
    let data;

    try {
      data = JSON.parse(raw);
    } catch {
      this.send(session, { type: "error", message: "Invalid message format" });
      return;
    }

    if (data.type === "next") {
      this.disconnect(session, false);

      if (!session.closed) {
        if (this.waiting && this.waiting !== session) {
          const other = this.waiting;
          this.waiting = null;
          session.partner = other;
          other.partner = session;
          this.send(session, { type: "matched" });
          this.send(other, { type: "matched" });
        } else {
          this.waiting = session;
          this.send(session, { type: "waiting" });
        }
      }
      return;
    }

    if (data.type === "end") {
      this.disconnect(session);
      return;
    }

    const allowed = new Set([
      "chat",
      "offer",
      "answer",
      "ice-candidate",
      "typing"
    ]);

    if (!allowed.has(data.type)) return;

    if (data.type === "chat") {
      if (typeof data.text !== "string" || data.text.length > 1000) return;
    }

    if (session.partner && !session.partner.closed) {
      this.send(session.partner, data);
    }
  }

  send(session, data) {
    try {
      if (!session.closed && session.socket.readyState === 1) {
        session.socket.send(JSON.stringify(data));
      }
    } catch {
      this.disconnect(session);
    }
  }

  disconnect(session, closeSocket = true) {
    if (session.closed) return;

    session.closed = true;

    if (this.waiting === session) {
      this.waiting = null;
    }

    const partner = session.partner;
    session.partner = null;

    if (partner && !partner.closed) {
      partner.partner = null;
      this.send(partner, { type: "partner-left" });
    }

    if (closeSocket) {
      try {
        session.socket.close(1000, "Chat ended");
      } catch {}
    }
  }
}
