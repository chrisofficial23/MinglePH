
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInAnonymously,
  onAuthStateChanged
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  query,
  limit,
  onSnapshot,
  serverTimestamp
} from 'firebase/firestore';
import './style.css';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvbaMFA4djEQ-797Hzmc4GWhFGY5zSScw",
  authDomain: "mingleph-6be1d.firebaseapp.com",
  databaseURL: "https://mingleph-6be1d-default-rtdb.firebaseio.com",
  projectId: "mingleph-6be1d",
  storageBucket: "mingleph-6be1d.firebasestorage.app",
  messagingSenderId: "145139207835",
  appId: "1:145139207835:web:211512babc83aee415803e",
  measurementId: "G-G5K3VD08KT"
};

const WORKER_URL =
  'wss://mingleph-matchmaker.crisepifanio23.workers.dev/ws';

const configured =
  !firebaseConfig.apiKey.startsWith('PASTE_') &&
  !firebaseConfig.projectId.startsWith('PASTE_');

const $ = selector => document.querySelector(selector);

const state = {
  mode: 'one',
  topics: [],
  user: null,
  roomId: null,
  queueId: null,
  nickname: '',
  listeners: [],
  pc: null,
  localStream: null,
  remoteStream: null,
  callUnsub: null,
  candidateUnsub: null,
  callId: null,
  callRole: null,
  handlingOffer: false,
  cameraEnabled: false,
  micEnabled: false,
  socket: null,
  partner: null,
  connected: false,
  intentionalClose: false,
  pendingCandidates: [],
  remoteDescriptionSet: false,
  starting: false,
  leaving: false,

  // Typing indicator state
  typingTimer: null,
  partnerTypingTimer: null,
  lastTypingSent: 0,
  partnerTyping: false
};

let db = null;
let auth = null;

if (configured) {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app);

  onAuthStateChanged(auth, user => {
    if (user) state.user = user;
  });
}

const cities = `Angeles City,Antipolo,Bacolod,Bacoor,Baguio,Batangas City,Biñan,Butuan,Cabanatuan,Cabuyao,Cadiz,Cagayan de Oro,Calamba,Calapan,Caloocan,Cavite City,Cebu City,Cotabato City,Dagupan,Danao,Dasmariñas,Davao City,Digos,Dipolog,Dumaguete,General Santos,Gingoog,Ilagan,Iligan,Iloilo City,Imus,Iriga,Isabela,Kabankalan,Kidapawan,Koronadal,La Carlota,Lamitan,Laoag,Lapu-Lapu,Las Piñas,Legazpi,Ligao,Lipa,Lucena,Makati,Malabon,Malaybalay,Malolos,Mandaluyong,Mandaue,Manila,Marawi,Marikina,Mati,Meycauayan,Muntinlupa,Naga (Camarines Sur),Naga (Cebu),Navotas,Olongapo,Ormoc,Oroquieta,Ozamiz,Pagadian,Palayan,Panabo,Parañaque,Pasay,Pasig,Passi,Puerto Princesa,Quezon City,Roxas City,Sagay,Samal,San Carlos (Negros Occidental),San Carlos (Pangasinan),San Fernando (La Union),San Fernando (Pampanga),San Jose,San Jose del Monte,San Juan,San Pablo,San Pedro,Santa Rosa,Santiago,Silay,Sipalay,Sorsogon City,Surigao City,Tabaco,Tabuk,Tacloban,Tacurong,Tagaytay,Tagbilaran,Taguig,Tagum,Talisay (Cebu),Talisay (Negros Occidental),Tanauan,Tandag,Tangub,Tanjay,Tarlac City,Tayabas,Toledo,Trece Martires,Tuguegarao,Urdaneta,Valencia,Valenzuela,Victorias,Vigan,Zamboanga City`.split(',');

for (const city of cities) {
  const option = document.createElement('option');
  option.value = city;
  option.textContent = city;
  $('#location').append(option);
}

function setStatus(message, type = '') {
  const el = $('#setup-status');
  el.textContent = message;
  el.className = `status-line ${type}`;
}

function setCallStatus(message, show = true) {
  $('#call-status').textContent = message;
  $('#call-status').classList.toggle('hidden', !show);
}

// --------------------------------------------------
// MATCH NOTIFICATION SOUND
// --------------------------------------------------

let matchAudioContext = null;

function playMatchSound() {
  try {
    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return;

    if (!matchAudioContext) {
      matchAudioContext = new AudioContextClass();
    }

    if (matchAudioContext.state === 'suspended') {
      matchAudioContext.resume().catch(() => {});
    }

    const audio = matchAudioContext;
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(880, audio.currentTime);

    gain.gain.setValueAtTime(0.001, audio.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.15,
      audio.currentTime + 0.02
    );
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      audio.currentTime + 0.2
    );

    oscillator.connect(gain);
    gain.connect(audio.destination);

    oscillator.start();
    oscillator.stop(audio.currentTime + 0.21);

    oscillator.onended = () => {
      oscillator.disconnect();
      gain.disconnect();
    };
  } catch (error) {
    console.warn('Match sound unavailable:', error);
  }
}

function showChat() {
  $('#chat-panel').classList.remove('hidden');
  $('#chat-panel').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

function nickname() {
  return $('#nickname').value.trim()
    .replace(/[<>]/g, '')
    .slice(0, 24)
    || `Mingle${Math.floor(1000 + Math.random() * 9000)}`;
}

function topicKey() {
  return (state.topics.length ? state.topics : ['general'])
    .map(t =>
      t.toLowerCase()
        .replace(/[^a-z0-9-]/g, '')
        .slice(0, 24)
    )
    .filter(Boolean)
    .sort()
    .join('-')
    .slice(0, 90) || 'general';
}

function addTopic() {
  const value = $('#topic-input').value.trim()
    .replace(/^#+/, '')
    .replace(/[<>]/g, '')
    .slice(0, 30);

  if (!value) return;

  if (state.topics.length >= 5) {
    return setStatus('You can add up to 5 topics.', 'error');
  }

  if (state.topics.some(
    t => t.toLowerCase() === value.toLowerCase()
  )) {
    return setStatus('That topic is already added.', 'error');
  }

  state.topics.push(value);
  $('#topic-input').value = '';
  renderTopics();
  setStatus('');
}

function renderTopics() {
  $('#topic-count').textContent =
    `${state.topics.length}/5 ADDED`;

  const list = $('#topic-list');
  list.replaceChildren();

  if (!state.topics.length) {
    const hint = document.createElement('span');
    hint.className = 'topic-hint';
    hint.textContent =
      'Add up to 5 topics to help find your vibe.';
    list.append(hint);
    return;
  }

  state.topics.forEach((topic, i) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'topic-chip';
    button.textContent = `#${topic} ×`;
    button.title = 'Remove topic';

    button.addEventListener('click', () => {
      state.topics.splice(i, 1);
      renderTopics();
    });

    list.append(button);
  });
}

$('#add-topic').addEventListener('click', addTopic);

$('#topic-input').addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    event.preventDefault();
    addTopic();
  }
});

document.querySelectorAll('.mode-button').forEach(button => {
  button.addEventListener('click', () => {
    state.mode = button.dataset.mode;

    document.querySelectorAll('.mode-button').forEach(item => {
      item.classList.toggle('active', item === button);
    });

    setStatus('');
  });
});

async function ensureAuth() {
  if (!configured) {
    throw new Error(
      'Firebase is not configured. Check your Firebase web config.'
    );
  }

  if (auth.currentUser) {
    state.user = auth.currentUser;
    return state.user;
  }

  const result = await signInAnonymously(auth);
  state.user = result.user;
  return result.user;
}

function clearListeners() {
  state.listeners.forEach(unsubscribe => {
    try {
      unsubscribe();
    } catch {}
  });

  state.listeners = [];
}

function addListener(unsubscribe) {
  state.listeners.push(unsubscribe);
}

// --------------------------------------------------
// TYPING INDICATOR
// --------------------------------------------------

function ensureTypingIndicator() {
  let indicator = $('#typing-indicator');

  if (!indicator) {
    indicator = document.createElement('div');
    indicator.id = 'typing-indicator';
    indicator.className = 'typing-indicator';
    indicator.setAttribute('aria-live', 'polite');
    indicator.style.cssText = `
      display: none;
      min-height: 20px;
      padding: 3px 14px 6px;
      font-size: 12px;
      color: #999;
    `;

    const form = $('#message-form');

    if (form) {
      form.before(indicator);
    }
  }

  return indicator;
}

function showPartnerTyping(isTyping) {
  const indicator = ensureTypingIndicator();

  if (state.partnerTypingTimer) {
    clearTimeout(state.partnerTypingTimer);
    state.partnerTypingTimer = null;
  }

  state.partnerTyping = Boolean(isTyping);

  if (
    !state.partnerTyping ||
    !state.connected ||
    state.mode !== 'one'
  ) {
    indicator.textContent = '';
    indicator.style.display = 'none';
    return;
  }

  const partnerName =
    state.partner?.nickname || 'Your partner';

  indicator.textContent = `${partnerName} is typing...`;
  indicator.style.display = 'block';

  // Hide the indicator if no further typing event arrives.
  state.partnerTypingTimer = setTimeout(() => {
    state.partnerTyping = false;
    indicator.textContent = '';
    indicator.style.display = 'none';
    state.partnerTypingTimer = null;
  }, 2500);
}

function sendTypingStatus(isTyping) {
  if (state.mode !== 'one' || !state.connected) return;

  sendSocket({
    type: 'typing',
    typing: Boolean(isTyping)
  });
}

function resetTypingIndicator() {
  if (state.typingTimer) {
    clearTimeout(state.typingTimer);
    state.typingTimer = null;
  }

  if (state.partnerTypingTimer) {
    clearTimeout(state.partnerTypingTimer);
    state.partnerTypingTimer = null;
  }

  state.partnerTyping = false;
  state.lastTypingSent = 0;

  const indicator = $('#typing-indicator');

  if (indicator) {
    indicator.textContent = '';
    indicator.style.display = 'none';
  }
}

function stopTyping() {
  if (state.typingTimer) {
    clearTimeout(state.typingTimer);
    state.typingTimer = null;
  }

  sendTypingStatus(false);
  state.lastTypingSent = 0;
}

// Create the indicator early so it is ready when the chat opens.
ensureTypingIndicator();

// Show typing events while the user types in a 1-on-1 chat.
$('#message-input').addEventListener('input', () => {
  if (state.mode !== 'one' || !state.connected) return;

  const value = $('#message-input').value;

  if (!value.trim()) {
    stopTyping();
    return;
  }

  const now = Date.now();

  // Avoid sending a WebSocket event on every keystroke.
  if (now - state.lastTypingSent >= 800) {
    sendTypingStatus(true);
    state.lastTypingSent = now;
  }

  if (state.typingTimer) {
    clearTimeout(state.typingTimer);
  }

  // Automatically notify the partner when typing stops.
  state.typingTimer = setTimeout(() => {
    sendTypingStatus(false);
    state.typingTimer = null;
    state.lastTypingSent = 0;
  }, 1500);
});

// --------------------------------------------------
// CHAT DISPLAY
// --------------------------------------------------

function resetChatView() {
  resetTypingIndicator();

  $('#chat-messages').innerHTML =
    '<div class="empty-chat"><div class="loading-heart">♡</div><b>Ready when you are</b><span>Start a chat to meet someone new.</span></div>';

  $('#message-input').disabled = true;
  $('#send-message').disabled = true;
  $('#chat-title').textContent = 'Chat';
  $('#chat-subtitle').textContent =
    'Your conversation will appear here.';
  $('#chat-status').innerHTML = '<i></i> Not connected';
}

function appendMessage(data, mine) {
  const node = document.createElement('div');
  node.className = `message${mine ? ' mine' : ''}`;

  const author = document.createElement('small');
  author.textContent = data.nickname || 'Mingle';

  const body = document.createElement('div');
  body.textContent = data.text || '';

  node.append(author, body);

  $('#chat-messages').append(node);
  $('#chat-messages').scrollTop =
    $('#chat-messages').scrollHeight;
}

function showEmptyConversation() {
  $('#chat-messages').innerHTML =
    '<div class="empty-chat"><div class="loading-heart">♡</div><b>You’re connected!</b><span>Walang hiya-hiya, ikaw na mauna! 😉</span></div>';
}

function roomCollection() {
  return collection(db, 'groupRooms', state.roomId, 'messages');
}

function watchMessages() {
  const q = query(roomCollection(), limit(100));

  addListener(onSnapshot(q, snapshot => {
    const messages = snapshot.docs
      .map(item => ({ id: item.id, ...item.data() }))
      .sort((a, b) =>
        (a.createdAt?.toMillis?.() || 0) -
        (b.createdAt?.toMillis?.() || 0)
      );

    const box = $('#chat-messages');
    box.replaceChildren();

    if (!messages.length) {
      const empty = document.createElement('div');
      empty.className = 'empty-chat';
      empty.innerHTML =
        '<div class="loading-heart">♡</div><b>You’re connected!</b><span>Say kumusta to start the conversation.</span>';
      box.append(empty);
    }

    messages.forEach(message => {
      appendMessage(
        message,
        message.uid === state.user?.uid
      );
    });
  }, error => {
    setCallStatus(
      `Message listener error: ${error.message}`
    );
  }));
}

function activateChat(title, subtitle, mode) {
  state.mode = mode;
  showChat();

  $('#chat-title').textContent = title;
  $('#chat-subtitle').textContent = subtitle;
  $('#chat-status').innerHTML = '<i></i> Connected';
  $('#message-input').disabled = false;
  $('#send-message').disabled = false;

  const oneToOne = mode === 'one';

  ['#voice-call', '#video-call'].forEach(selector => {
    $(selector).disabled = !oneToOne;
  });

  setCallButtons(oneToOne && state.connected);

  if (oneToOne) {
    showEmptyConversation();
    setCallStatus('', false);
  } else {
    showPartnerTyping(false);
    watchMessages();

    setCallStatus(
      'Voice and video calls are available in 1-on-1 chats.',
      true
    );
  }
}

// --------------------------------------------------
// GROUP CHAT: Firebase Firestore
// --------------------------------------------------

async function startGroup() {
  await ensureAuth();

  const key = topicKey();
  const roomRef = doc(db, 'groupRooms', key);

  await setDoc(roomRef, {
    type: 'group',
    topicKey: key,
    topics: state.topics,
    active: true,
    updatedAt: serverTimestamp()
  }, { merge: true });

  state.roomId = key;

  activateChat(
    `Group: ${state.topics[0] || 'General chika'}`,
    'Group room · Anyone with matching topics can join',
    'group'
  );
}

// --------------------------------------------------
// ONE-TO-ONE MATCHING: Cloudflare Worker WebSocket
// --------------------------------------------------

function sendSocket(data) {
  if (
    !state.socket ||
    state.socket.readyState !== WebSocket.OPEN
  ) {
    return false;
  }

  try {
    state.socket.send(JSON.stringify(data));
    return true;
  } catch (error) {
    console.warn('Could not send WebSocket message:', error);
    return false;
  }
}

function closeSocket(sendEnd = true) {
  const socket = state.socket;

  state.intentionalClose = true;
  state.connected = false;

  stopTyping();
  resetTypingIndicator();

  state.partner = null;

  if (socket) {
    if (sendEnd && socket.readyState === WebSocket.OPEN) {
      try {
        socket.send(JSON.stringify({ type: 'end' }));
      } catch {}
    }

    try {
      socket.close();
    } catch {}
  }

  state.socket = null;
}

function updateConnectionStatus(message) {
  $('#chat-status').innerHTML = '';

  const dot = document.createElement('i');
  const text = document.createElement('span');

  text.textContent = message;

  $('#chat-status').append(dot, text);
}

function handleWorkerMessage(message) {
  switch (message.type) {
    case 'connected':
      if (!state.user) {
        setStatus('Preparing your account...', '');
        return;
      }

      sendSocket({
        type: 'join',
        profile: {
          uid: state.user.uid,
          nickname: state.nickname,
          gender: $('#gender').value,
          location:
            $('#location').value || 'Any City / Philippines',
          topics: state.topics
        }
      });
      break;

    case 'waiting':
      resetTypingIndicator();

      updateConnectionStatus('Searching for a partner');

      $('#chat-title').textContent = 'Finding someone...';
      $('#chat-subtitle').textContent =
        'Keep this page open while we match you.';

      $('#chat-messages').innerHTML =
        '<div class="empty-chat"><div class="loading-heart">♡</div><b>Looking for your chat partner...</b><span>Matching may take a moment when few people are online.</span></div>';

      $('#message-input').disabled = true;
      $('#send-message').disabled = true;
      break;

    case 'matched': {
      resetTypingIndicator();

      state.connected = true;
      state.roomId = message.roomId || null;
      state.partner = message.partner || {};

      playMatchSound();

      const partnerName =
        state.partner.nickname || 'Mingle';

      activateChat(
        `Chat with ${partnerName}`,
        'You’re connected · Say kumusta!',
        'one'
      );

      updateConnectionStatus('Connected');
      break;
    }

    case 'chat':
      // Receiving a message means the partner is no longer
      // actively typing that message.
      showPartnerTyping(false);

      appendMessage({
        nickname:
          message.sender ||
          state.partner?.nickname ||
          'Mingle',
        text: message.text
      }, false);
      break;

    case 'typing':
      showPartnerTyping(message.typing === true);
      break;

    case 'offer':
      handleIncomingOffer(message);
      break;

    case 'answer':
      handleIncomingAnswer(message);
      break;

    case 'ice-candidate':
      handleIncomingCandidate(message);
      break;

    case 'call-ended':
      cleanupCall(false);
      setCallStatus('The other person ended the call.');
      break;

    case 'partner-left':
      state.connected = false;

      resetTypingIndicator();
      cleanupCall(false);

      updateConnectionStatus('Partner disconnected');

      $('#chat-title').textContent = 'Partner disconnected';
      $('#chat-subtitle').textContent =
        'Select Next to look for someone else.';

      $('#message-input').disabled = true;
      $('#send-message').disabled = true;

      setCallStatus(
        'Your chat partner left the conversation.'
      );
      break;

    case 'error':
      setStatus(
        message.message ||
          'The matching service returned an error.',
        'error'
      );
      break;

    default:
      console.log('Worker message:', message);
  }
}

async function startOneToOne() {
  await ensureAuth();

  state.mode = 'one';
  state.roomId = null;
  state.connected = false;
  state.partner = null;
  state.intentionalClose = false;

  resetTypingIndicator();

  showChat();

  $('#chat-title').textContent = 'Connecting...';
  $('#chat-subtitle').textContent =
    'Connecting to MinglePH matching.';

  updateConnectionStatus('Connecting');

  $('#message-input').disabled = true;
  $('#send-message').disabled = true;

  await new Promise((resolve, reject) => {
    const socket = new WebSocket(WORKER_URL);
    state.socket = socket;

    const timeout = setTimeout(() => {
      if (socket.readyState !== WebSocket.OPEN) {
        socket.close();

        reject(new Error(
          'Connection timed out. Check your Worker URL and internet.'
        ));
      }
    }, 12000);

    socket.onopen = () => {
      clearTimeout(timeout);
      resolve();
    };

    socket.onerror = () => {
      clearTimeout(timeout);

      reject(new Error(
        'Could not connect to the matching server. Check the Worker URL.'
      ));
    };

    socket.onmessage = event => {
      try {
        const message = JSON.parse(event.data);
        handleWorkerMessage(message);
      } catch (error) {
        console.warn('Invalid Worker message:', error);
      }
    };

    socket.onclose = () => {
      clearTimeout(timeout);

      if (state.socket === socket) {
        state.socket = null;
        state.connected = false;

        resetTypingIndicator();

        if (!state.intentionalClose) {
          updateConnectionStatus('Disconnected');

          $('#message-input').disabled = true;
          $('#send-message').disabled = true;

          setCallStatus(
            'Connection to the matching server was lost.'
          );
        }
      }
    };
  });
}

// --------------------------------------------------
// TEXT MESSAGING
// --------------------------------------------------

$('#message-form').addEventListener('submit', async event => {
  event.preventDefault();

  const text = $('#message-input').value.trim();

  if (!text || text.length > 1000 || !state.user) return;

  if (state.mode === 'one') {
    if (!state.connected) {
      return setCallStatus(
        'Wait until you are connected to a partner.'
      );
    }

    if (!sendSocket({ type: 'chat', text })) {
      return setCallStatus(
        'Message failed. Your connection may have been lost.'
      );
    }

    // Stop the typing indicator once the message is sent.
    stopTyping();
    showPartnerTyping(false);

    appendMessage({
      nickname: state.nickname,
      text
    }, true);

    $('#message-input').value = '';
    return;
  }

  if (!state.roomId || !db) return;

  $('#message-input').value = '';

  try {
    await addDoc(roomCollection(), {
      uid: state.user.uid,
      nickname: state.nickname,
      text,
      createdAt: serverTimestamp()
    });
  } catch (error) {
    setCallStatus(
      `Message failed: ${error.message}`,
      true
    );
  }
});

// --------------------------------------------------
// WEBRTC CALLS: signaling goes through Worker
// --------------------------------------------------

function setCallButtons(active) {
  $('#voice-call').disabled =
    !active || state.mode !== 'one';

  $('#video-call').disabled =
    !active || state.mode !== 'one';

  $('#toggle-mic').disabled = !state.localStream;
  $('#toggle-camera').disabled = !state.localStream;
  $('#end-call').disabled = !state.pc;
}

async function getMedia(video) {
  if (!navigator.mediaDevices?.getUserMedia) {
    throw new Error(
      'Camera/microphone needs HTTPS or localhost and a supported browser.'
    );
  }

  return navigator.mediaDevices.getUserMedia({
    audio: true,
    video: video ? { facingMode: 'user' } : false
  });
}

function createPeerConnection() {
  const pc = new RTCPeerConnection({
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' },
      { urls: 'stun:stun1.l.google.com:19302' }
    ]
  });

  state.pc = pc;
  state.remoteStream = new MediaStream();
  state.pendingCandidates = [];
  state.remoteDescriptionSet = false;

  $('#remote-video').srcObject = state.remoteStream;

  pc.ontrack = event => {
    const tracks =
      event.streams?.[0]?.getTracks() || [event.track];

    tracks.forEach(track => {
      if (!state.remoteStream.getTracks().some(
        item => item.id === track.id
      )) {
        state.remoteStream.addTrack(track);
      }
    });

    $('#video-stage').classList.remove('hidden');
  };

  pc.onicecandidate = event => {
    if (event.candidate) {
      sendSocket({
        type: 'ice-candidate',
        candidate: event.candidate.toJSON()
      });
    }
  };

  pc.onconnectionstatechange = () => {
    if (pc.connectionState === 'connected') {
      setCallStatus(
        'Call connected. Keep being respectful.'
      );
    } else if (pc.connectionState === 'connecting') {
      setCallStatus('Connecting call...');
    } else if (
      ['failed', 'disconnected'].includes(pc.connectionState)
    ) {
      setCallStatus(
        'Call connection interrupted. Try ending and starting the call again.'
      );
    }
  };

  if (state.localStream) {
    state.localStream.getTracks().forEach(track => {
      pc.addTrack(track, state.localStream);
    });
  }

  return pc;
}

async function flushPendingCandidates() {
  if (!state.pc || !state.remoteDescriptionSet) return;

  const candidates = state.pendingCandidates.splice(0);

  for (const candidate of candidates) {
    try {
      await state.pc.addIceCandidate(
        new RTCIceCandidate(candidate)
      );
    } catch (error) {
      console.warn(
        'Could not add queued ICE candidate:',
        error
      );
    }
  }
}

async function handleIncomingCandidate(message) {
  if (!message.candidate) return;

  if (!state.pc || !state.remoteDescriptionSet) {
    state.pendingCandidates.push(message.candidate);
    return;
  }

  try {
    await state.pc.addIceCandidate(
      new RTCIceCandidate(message.candidate)
    );
  } catch (error) {
    console.warn('Could not add ICE candidate:', error);
  }
}

async function beginCall(video) {
  if (state.mode !== 'one' || !state.connected) {
    return setCallStatus(
      'Connect to a 1-on-1 partner before calling.'
    );
  }

  if (state.pc) await cleanupCall(true);

  try {
    state.localStream = await getMedia(video);
    state.cameraEnabled = video;
    state.micEnabled = true;

    $('#local-video').srcObject = state.localStream;
    $('#video-stage').classList.remove('hidden');

    $('#toggle-mic').textContent = 'Mute mic';
    $('#toggle-camera').textContent =
      video ? 'Camera off' : 'Camera on';

    const pc = createPeerConnection();
    state.callRole = 'caller';

    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);

    const sent = sendSocket({
      type: 'offer',
      mode: video ? 'video' : 'voice',
      description: {
        type: offer.type,
        sdp: offer.sdp
      }
    });

    if (!sent) {
      throw new Error(
        'The matching server is disconnected.'
      );
    }

    setCallButtons(true);

    setCallStatus(
      video
        ? 'Video call invitation sent.'
        : 'Voice call invitation sent.'
    );
  } catch (error) {
    await cleanupCall(false);

    setCallStatus(
      error.message ||
        'Could not start the call. Check microphone/camera permissions.'
    );
  }
}

async function handleIncomingOffer(message) {
  if (
    state.handlingOffer ||
    state.pc ||
    !message.description
  ) {
    return;
  }

  const accepted = window.confirm(
    `${message.mode === 'video' ? 'Video' : 'Voice'} call incoming. Accept?`
  );

  if (!accepted) {
    sendSocket({ type: 'call-ended' });
    return;
  }

  state.handlingOffer = true;

  try {
    const video = message.mode === 'video';

    state.localStream = await getMedia(video);
    state.cameraEnabled = video;
    state.micEnabled = true;

    $('#local-video').srcObject = state.localStream;
    $('#video-stage').classList.remove('hidden');

    const pc = createPeerConnection();
    state.callRole = 'callee';

    await pc.setRemoteDescription(
      new RTCSessionDescription(message.description)
    );

    state.remoteDescriptionSet = true;
    await flushPendingCandidates();

    const answer = await pc.createAnswer();
    await pc.setLocalDescription(answer);

    const sent = sendSocket({
      type: 'answer',
      description: {
        type: answer.type,
        sdp: answer.sdp
      }
    });

    if (!sent) {
      throw new Error(
        'The matching server is disconnected.'
      );
    }

    $('#toggle-mic').textContent = 'Mute mic';
    $('#toggle-camera').textContent =
      video ? 'Camera off' : 'Camera on';

    setCallButtons(true);
    setCallStatus('Call accepted. Connecting...');
  } catch (error) {
    await cleanupCall(false);

    setCallStatus(
      `Could not accept the call: ${error.message}`
    );
  } finally {
    state.handlingOffer = false;
  }
}

async function handleIncomingAnswer(message) {
  if (
    !state.pc ||
    state.callRole !== 'caller' ||
    !message.description
  ) {
    return;
  }

  try {
    await state.pc.setRemoteDescription(
      new RTCSessionDescription(message.description)
    );

    state.remoteDescriptionSet = true;
    await flushPendingCandidates();

    setCallStatus('Answer received. Connecting...');
  } catch (error) {
    console.warn('Could not set remote answer:', error);
    setCallStatus(
      'Could not connect the call. Try again.'
    );
  }
}

async function cleanupCall(notifyRemote = false) {
  if (notifyRemote && state.pc) {
    sendSocket({ type: 'call-ended' });
  }

  if (state.callUnsub) state.callUnsub();
  state.callUnsub = null;

  if (state.candidateUnsub) state.candidateUnsub();
  state.candidateUnsub = null;

  if (state.pc) {
    state.pc.ontrack = null;
    state.pc.onicecandidate = null;
    state.pc.close();
  }

  state.pc = null;

  if (state.localStream) {
    state.localStream.getTracks().forEach(track => {
      track.stop();
    });
  }

  state.localStream = null;

  if (state.remoteStream) {
    state.remoteStream.getTracks().forEach(track => {
      track.stop();
    });
  }

  state.remoteStream = null;
  state.callId = null;
  state.callRole = null;
  state.cameraEnabled = false;
  state.micEnabled = false;
  state.pendingCandidates = [];
  state.remoteDescriptionSet = false;

  $('#local-video').srcObject = null;
  $('#remote-video').srcObject = null;
  $('#video-stage').classList.add('hidden');

  $('#toggle-mic').textContent = 'Mic on';
  $('#toggle-camera').textContent = 'Camera off';

  setCallButtons(
    Boolean(state.connected && state.mode === 'one')
  );
}

$('#voice-call').addEventListener(
  'click',
  () => beginCall(false)
);

$('#video-call').addEventListener(
  'click',
  () => beginCall(true)
);

$('#toggle-mic').addEventListener('click', () => {
  if (!state.localStream) return;

  state.micEnabled = !state.micEnabled;

  state.localStream.getAudioTracks().forEach(track => {
    track.enabled = state.micEnabled;
  });

  $('#toggle-mic').textContent =
    state.micEnabled ? 'Mute mic' : 'Unmute mic';
});

$('#toggle-camera').addEventListener('click', () => {
  if (!state.localStream) return;

  state.cameraEnabled = !state.cameraEnabled;

  state.localStream.getVideoTracks().forEach(track => {
    track.enabled = state.cameraEnabled;
  });

  $('#toggle-camera').textContent =
    state.cameraEnabled ? 'Camera off' : 'Camera on';
});

$('#end-call').addEventListener(
  'click',
  () => cleanupCall(true)
);

// --------------------------------------------------
// LEAVE / NEXT
// --------------------------------------------------

async function leaveChat(requeue = false) {
  if (state.leaving) return;

  state.leaving = true;

  const previousMode = state.mode;

  try {
    stopTyping();
    resetTypingIndicator();

    await cleanupCall(true);
    clearListeners();

    if (previousMode === 'one') {
      closeSocket(true);
    }

    state.roomId = null;
    state.queueId = null;
    state.connected = false;
    state.partner = null;

    resetChatView();
    setCallStatus('', false);

    if (requeue) {
      await startSelectedChat();
    }
  } finally {
    state.leaving = false;
  }
}

async function startSelectedChat() {
  clearListeners();
  await cleanupCall(false);

  resetTypingIndicator();

  state.roomId = null;
  state.queueId = null;

  if (state.mode === 'group') {
    if (state.socket) {
      closeSocket(true);
    }

    await startGroup();
  } else {
    if (state.socket) {
      closeSocket(true);
    }

    await startOneToOne();
  }
}

$('#leave-chat').addEventListener(
  'click',
  () => leaveChat(false)
);

$('#next-chat').addEventListener(
  'click',
  () => leaveChat(true)
);

// --------------------------------------------------
// START CHAT
// --------------------------------------------------

$('#start-chat').addEventListener('click', async () => {
  if (!$('#respect').checked) {
    return setStatus(
      'Please agree to follow the community rules before starting.',
      'error'
    );
  }

  if (state.starting) return;

  state.starting = true;
  $('#start-chat').disabled = true;
  $('#start-chat').style.opacity = '.65';

  state.nickname = nickname();

  setStatus('Connecting...');

  try {
    await startSelectedChat();
    setStatus('');
  } catch (error) {
    closeSocket(false);

    setStatus(
      error.message ||
        'Could not connect. Check your Firebase and Worker setup.',
      'error'
    );
  } finally {
    state.starting = false;
    $('#start-chat').disabled = false;
    $('#start-chat').style.opacity = '';
  }
});

// --------------------------------------------------
// REPORT SYSTEM: Firebase Firestore
// --------------------------------------------------

$('#report-chat').addEventListener('click', async () => {
  if (!state.roomId || !state.user || !db) {
    return setCallStatus(
      'Join a chat first to report it.'
    );
  }

  const reason = window.prompt(
    'What are you reporting? (harassment, spam, inappropriate content, other)'
  );

  if (!reason?.trim()) return;

  try {
    await addDoc(collection(db, 'reports'), {
      reporterUid: state.user.uid,
      roomId: state.roomId,
      mode: state.mode,
      reason: reason.trim().slice(0, 300),
      createdAt: serverTimestamp()
    });

    setCallStatus(
      'Report submitted. Thank you for helping keep MinglePH safer.'
    );
  } catch (error) {
    setCallStatus(
      `Could not submit report: ${error.message}`
    );
  }
});

// --------------------------------------------------
// PAGE CLEANUP
// --------------------------------------------------

window.addEventListener('beforeunload', () => {
  resetTypingIndicator();
  clearListeners();

  if (state.socket) {
    try {
      state.socket.close();
    } catch {}
  }

  if (state.localStream) {
    state.localStream.getTracks().forEach(track => {
      track.stop();
    });
  }

  if (state.remoteStream) {
    state.remoteStream.getTracks().forEach(track => {
      track.stop();
    });
  }

  if (state.pc) {
    state.pc.close();
  }
});
