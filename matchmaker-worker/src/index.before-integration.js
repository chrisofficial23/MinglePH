
import { DurableObject } from "cloudflare:workers";

const MAX_MESSAGE_SIZE = 100_000;

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
    this.sessions = new Set();
  }

  async fetch() {
    const pair = new WebSocketPair();
    const client = pair[0];
    const server = pair[1];

    server.accept();

    const session = {
      socket: server,
      partner: null,
      profile: null,
      roomId: null,
      closed: false
    };

    this.sessions.add(session);

    server.addEventListener("message", event => {
      this.handleMessage(session, event.data);
    });

    server.addEventListener("close", () => {
      this.disconnect(session);
    });

    server.addEventListener("error", () => {
      this.disconnect(session);
    });

    this.send(session, { type: "connected" });

    return new Response(null, {
      status: 101,
      webSocket: client
    });
  }

  handleMessage(session, raw) {
    if (session.closed || typeof raw !== "string") return;

    if (raw.length > MAX_MESSAGE_SIZE) {
      this.send(session, {
        type: "error",
        message: "Message is too large."
      });
      return;
    }

    let data;

    try {
      data = JSON.parse(raw);
    } catch {
      this.send(session, {
        type: "error",
        message: "Invalid message format."
      });
      return;
    }

    if (!data || typeof data.type !== "string") return;

    if (data.type === "join") {
      this.join(session, data.profile);
      return;
    }

    if (data.type === "next") {
      if (!session.profile) return;
      this.detachPartner(session);
      this.enqueue(session);
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
      "typing",
      "call-ended"
    ]);

    if (!allowed.has(data.type)) return;

    if (!session.partner || session.partner.closed) {
      this.send(session, {
        type: "error",
        message: "You are not connected to a chat partner."
      });
      return;
    }

    if (
      data.type === "chat" &&
      (typeof data.text !== "string" ||
        data.text.trim().length === 0 ||
        data.text.length > 1000)
    ) {
      this.send(session, {
        type: "error",
        message: "Chat messages must be 1–1000 characters."
      });
      return;
    }

    if (
      data.type === "typing" &&
      typeof data.typing !== "boolean"
    ) {
      return;
    }

    if (
      ["offer", "answer"].includes(data.type) &&
      (!data.description || typeof data.description !== "object")
    ) {
      return;
    }

    if (
      data.type === "ice-candidate" &&
      data.candidate != null &&
      typeof data.candidate !== "object"
    ) {
      return;
    }

    // Forward only approved message types to the current partner.
    this.send(session.partner, {
      ...data,
      sender: session.profile.nickname
    });
  }

  join(session, profile) {
    if (session.profile) {
      this.send(session, {
        type: "error",
        message: "You have already joined matchmaking."
      });
      return;
    }

    if (
      !profile ||
      typeof profile.uid !== "string" ||
      profile.uid.length > 128 ||
      typeof profile.nickname !== "string" ||
      profile.nickname.trim().length < 1 ||
      profile.nickname.length > 40
    ) {
      this.send(session, {
        type: "error",
        message: "A valid user ID and nickname are required."
      });
      return;
    }

    session.profile = {
      uid: profile.uid,
      nickname: profile.nickname.trim(),
      gender: typeof profile.gender === "string"
        ? profile.gender.slice(0, 30)
        : "",
      location: typeof profile.location === "string"
        ? profile.location.slice(0, 80)
        : "",
      topics: Array.isArray(profile.topics)
        ? profile.topics
            .filter(topic => typeof topic === "string")
            .slice(0, 10)
            .map(topic => topic.slice(0, 40))
        : []
    };

    this.enqueue(session);
  }

  enqueue(session) {
    if (session.closed || !session.profile) return;

    if (
      this.waiting &&
      this.waiting !== session &&
      !this.waiting.closed &&
      !this.waiting.partner &&
      this.waiting.profile &&
      this.waiting.profile.uid !== session.profile.uid
    ) {
      const other = this.waiting;
      this.waiting = null;

      const roomId = crypto.randomUUID();

      session.partner = other;
      other.partner = session;
      session.roomId = roomId;
      other.roomId = roomId;

      this.send(session, {
        type: "matched",
        roomId,
        partner: other.profile
      });

      this.send(other, {
        type: "matched",
        roomId,
        partner: session.profile
      });

      return;
    }

    this.waiting = session;
    this.send(session, { type: "waiting" });
  }

  detachPartner(session) {
    if (this.waiting === session) {
      this.waiting = null;
    }

    const partner = session.partner;

    session.partner = null;
    session.roomId = null;

    if (partner && !partner.closed) {
      partner.partner = null;
      partner.roomId = null;
      this.send(partner, { type: "partner-left" });
    }
  }

  send(session, data) {
    if (!session || session.closed) return;

    try {
      if (session.socket.readyState === 1) {
        session.socket.send(JSON.stringify(data));
      }
    } catch {
      this.disconnect(session);
    }
  }

  disconnect(session) {
    if (!session || session.closed) return;

    session.closed = true;
    this.sessions.delete(session);

    if (this.waiting === session) {
      this.waiting = null;
    }

    const partner = session.partner;
    session.partner = null;

    if (partner && !partner.closed) {
      partner.partner = null;
      partner.roomId = null;
      this.send(partner, { type: "partner-left" });
    }

    try {
      session.socket.close(1000, "Chat ended");
    } catch {}
  }
}
