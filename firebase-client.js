// Firebase client — auth + Firestore sync cho HR Builder VN
// Load Firebase SDK qua CDN (không cần npm). Expose ra global các hàm:
//   fb.signUp(email, pwd, displayName)
//   fb.signIn(email, pwd)
//   fb.signInGoogle()
//   fb.signOut()
//   fb.onAuthChange(cb)        — gọi cb(user) mỗi khi auth state đổi
//   fb.currentUser()           — lấy user hiện tại (sync, có thể null)
//   fb.saveUserData(profile, progress)  — ghi lên Firestore users/{uid}
//   fb.loadUserData()          — đọc Firestore → trả {profile, progress} hoặc null
//   fb.isReady()               — true nếu Firebase init xong

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as fbSignOut,
  onAuthStateChanged,
  updateProfile,
} from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyC8fmM7x7zTuwMR1S2E9k6PGR0udO8ryO8',
  authDomain: 'hrbuilder-vn.firebaseapp.com',
  projectId: 'hrbuilder-vn',
  storageBucket: 'hrbuilder-vn.firebasestorage.app',
  messagingSenderId: '924749327869',
  appId: '1:924749327869:web:103de71d2873ba17667d94',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

let _currentUser = null;
let _ready = false;

const fb = {
  isReady() { return _ready; },
  currentUser() { return _currentUser; },

  onAuthChange(cb) {
    return onAuthStateChanged(auth, (user) => {
      _currentUser = user;
      _ready = true;
      cb(user);
    });
  },

  async signUp(email, password, displayName) {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    if (displayName) {
      try { await updateProfile(cred.user, { displayName }); } catch (e) { /* ignore */ }
    }
    return cred.user;
  },

  async signIn(email, password) {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    return cred.user;
  },

  async signInGoogle() {
    const provider = new GoogleAuthProvider();
    const cred = await signInWithPopup(auth, provider);
    return cred.user;
  },

  async signOut() {
    await fbSignOut(auth);
  },

  async saveUserData(profile, progress) {
    if (!_currentUser) throw new Error('Chưa đăng nhập');
    const ref = doc(db, 'users', _currentUser.uid);
    const payload = {
      email: _currentUser.email || '',
      displayName: _currentUser.displayName || profile?.name || '',
      profile: profile || null,
      progress: progress || null,
      updatedAt: new Date().toISOString(),
    };
    await setDoc(ref, payload, { merge: true });
    return payload;
  },

  async loadUserData() {
    if (!_currentUser) return null;
    const ref = doc(db, 'users', _currentUser.uid);
    const snap = await getDoc(ref);
    return snap.exists() ? snap.data() : null;
  },
};

// Expose ra window để các script không-module dùng được
window.fb = fb;

// Bắn 1 event "fb-ready" khi auth state đầu tiên xong, để app code biết
fb.onAuthChange((user) => {
  document.dispatchEvent(new CustomEvent('fb-ready', { detail: { user } }));
});

console.log('[fb] Firebase client loaded — project: hrbuilder-vn');
