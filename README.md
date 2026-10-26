# MinglePH — Random Online

Pink/dark Filipino random-chat web app starter with 1-on-1 and group text chat, 1-on-1 WebRTC voice/video call controls, Philippine city selector, optional topics (up to five), and your Discord invite link.

## Requirements
- Node.js and npm installed
- A Firebase project
- Browser with camera/microphone access for voice/video calls

## 1. Install and run on Windows
Open this folder in VS Code. In the VS Code terminal, run:

```bat
npm.cmd install
npm.cmd run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`). Camera/microphone permission is normally available on `localhost`. Deployed calls need HTTPS.

## 2. Configure Firebase
1. Open https://console.firebase.google.com/ and create a project.
2. Add a **Web app** in Project settings and copy its Firebase config.
3. Open `src/main.js` and replace the placeholder values in `firebaseConfig` with your actual values.
4. In Firebase Console → Authentication → Sign-in method, enable **Anonymous** sign-in.
5. In Firebase Console → Firestore Database, create a database.
6. Open Firestore Rules and paste the contents of `firestore.rules`, then publish.
7. Run the app again and test in two separate browser profiles/devices.

Never paste service-account private keys or Firebase Admin credentials into this frontend. The Firebase web config is designed for client apps, but access still depends on correctly configured security rules and Firebase App Check for production.

## 3. What works in this starter
- Pink/dark responsive UI and mode selector (1-on-1 and Group Chat)
- Optional temporary nickname, gender, location, and up to five topics
- Anonymous Firebase Auth
- Basic Firestore-based 1-on-1 waiting queue and group text room
- Real-time text messages
- 1-on-1 voice/video call offer/answer signaling with WebRTC and microphone/camera controls
- Report submission UI and Discord community link: https://discord.gg/pPt6q6tas

## Important limitations before public launch
- **This is a starter project, not a production-ready anonymous chat service.** Test matching and call flows with multiple users and review security rules before inviting the public.
- Voice/video calling uses public STUN servers only. Some mobile networks, NATs, or restrictive networks require a TURN server for reliable connectivity. Add a trusted TURN provider before production; never put private TURN credentials in a public repo.
- Voice/video calls are available in **1-on-1 mode only** in this version. Group chat is text-only.
- The current group room is topic-keyed and shared by matching topic key; add proper room membership, moderation, rate limiting, cleanup/expiry, and stronger validation before launch.
- Anonymous matching is best-effort. The starter queue can have race conditions and should be moved to trusted server-side matching (for example, Cloud Functions) before public use.
- The report form records reports but does not yet provide an admin moderation dashboard.
- Add privacy notice, age-appropriate rules, abuse handling, rate limits, App Check, and monitoring before launch. Do not promise “100% anonymous”; Firebase and hosting providers still process technical data.

## 4. Deploy to Vercel
1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Framework preset: Vite. Build command: `npm run build`; output directory: `dist`.
4. Deploy, then test on the HTTPS URL with two separate accounts/devices.

Your Discord footer link is already set to `https://discord.gg/pPt6q6tas`.
