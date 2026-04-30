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
  sendPasswordResetEmail,
} from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  where,
  onSnapshot,
  serverTimestamp,
  updateDoc,
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

  async resetPassword(email) {
    await sendPasswordResetEmail(auth, email);
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

  // Check user hiện tại có là cohort member không (đã trả tiền, được anh Lân add vào whitelist)
  async isCohortMember() {
    if (!_currentUser) return false;
    try {
      const ref = doc(db, 'cohort_members', _currentUser.uid);
      const snap = await getDoc(ref);
      return snap.exists();
    } catch (e) {
      return false;
    }
  },

  // Check user hiện tại có là admin không (chỉ anh Lân + người được approve)
  async isAdmin() {
    if (!_currentUser) return false;
    try {
      const ref = doc(db, 'admins', _currentUser.uid);
      const snap = await getDoc(ref);
      return snap.exists();
    } catch (e) {
      return false;
    }
  },

  // Admin: list tất cả users (chỉ admin gọi được, rules sẽ chặn nếu không phải admin)
  async listAllUsers() {
    const colRef = collection(db, 'users');
    const q = query(colRef, orderBy('updatedAt', 'desc'), limit(200));
    const snap = await getDocs(q);
    const list = [];
    snap.forEach(d => list.push({ uid: d.id, ...d.data() }));
    return list;
  },

  // Admin: list cohort members
  async listCohortMembers() {
    const colRef = collection(db, 'cohort_members');
    const snap = await getDocs(colRef);
    const list = [];
    snap.forEach(d => list.push({ uid: d.id, ...d.data() }));
    return list;
  },

  // Admin: thêm 1 user vào cohort (set document cohort_members/{uid})
  async addCohortMember(uid, info) {
    const ref = doc(db, 'cohort_members', uid);
    await setDoc(ref, {
      ...info,
      addedBy: _currentUser?.email || 'unknown',
      addedAt: new Date().toISOString(),
    });
  },

  // === SUBMISSIONS ===
  // Học viên nộp bài. Doc id = `${uid}_${lessonId}_${stepIdx}`
  // → mỗi step chỉ có 1 submission active, nộp lại sẽ overwrite.
  async saveSubmission(lessonId, stepIdx, payload) {
    if (!_currentUser) throw new Error('Chưa đăng nhập');
    const subId = `${_currentUser.uid}_${lessonId}_${stepIdx}`;
    const ref = doc(db, 'submissions', subId);
    const data = {
      uid: _currentUser.uid,
      email: _currentUser.email || '',
      displayName: _currentUser.displayName || '',
      lessonId: Number(lessonId),
      stepIdx: Number(stepIdx),
      text: payload.text || '',
      images: payload.images || [],     // Array base64 data URLs
      submittedAt: new Date().toISOString(),
      status: 'pending',                 // pending → graded (pass/borderline/fail)
      gradeResult: null,                 // {score, status, summary, whatWorked[], improve[]}
      gradedAt: null,
      gradedBy: null,                    // 'human:<email>' or 'ai:claude-cli'
    };
    await setDoc(ref, data);
    return data;
  },

  // Lấy submission của user hiện tại cho 1 step
  async getMySubmission(lessonId, stepIdx) {
    if (!_currentUser) return null;
    const subId = `${_currentUser.uid}_${lessonId}_${stepIdx}`;
    const snap = await getDoc(doc(db, 'submissions', subId));
    return snap.exists() ? snap.data() : null;
  },

  // Listen real-time: khi worker chấm xong, frontend update ngay
  listenMySubmission(lessonId, stepIdx, cb) {
    if (!_currentUser) return () => {};
    const subId = `${_currentUser.uid}_${lessonId}_${stepIdx}`;
    return onSnapshot(doc(db, 'submissions', subId), (snap) => {
      cb(snap.exists() ? snap.data() : null);
    });
  },

  // Admin: list submissions theo status
  async listSubmissions(filterStatus = null) {
    const colRef = collection(db, 'submissions');
    let q;
    if (filterStatus) {
      q = query(colRef, where('status', '==', filterStatus), orderBy('submittedAt', 'desc'), limit(200));
    } else {
      q = query(colRef, orderBy('submittedAt', 'desc'), limit(200));
    }
    const snap = await getDocs(q);
    const list = [];
    snap.forEach(d => list.push({ id: d.id, ...d.data() }));
    return list;
  },

  // Admin: chấm bài
  async gradeSubmission(subId, result) {
    const ref = doc(db, 'submissions', subId);
    await updateDoc(ref, {
      status: result.status,        // 'pass' | 'borderline' | 'fail'
      gradeResult: result,
      gradedAt: new Date().toISOString(),
      gradedBy: result.gradedBy || `human:${_currentUser?.email || 'admin'}`,
    });
  },

  // === CLAUDE REQUEST QUEUE ===
  // Webapp ghi 1 doc vào claude_requests/{auto-id}, bridge.js (chạy trên máy Lân)
  // listen, gọi `claude --print`, ghi response back. Webapp listen snapshot doc đó.
  // Doc structure: {uid, email, payload, status, response, error, createdAt, ...}
  async enqueueClaudeRequest(payload) {
    if (!_currentUser) throw new Error('Bạn chưa đăng nhập — đăng nhập để dùng AI.');
    const colRef = collection(db, 'claude_requests');
    const newDocRef = doc(colRef); // auto-id
    await setDoc(newDocRef, {
      uid: _currentUser.uid,
      email: _currentUser.email || '',
      payload,                 // {system, user, history, model, temperature, maxTokens}
      status: 'pending',       // pending → processing → done | error
      response: '',
      error: '',
      workerId: '',
      createdAt: new Date().toISOString(),
      startedAt: null,
      completedAt: null,
    });
    return newDocRef.id;
  },

  // Listen 1 request cụ thể — callback nhận {status, response, error, ...} mỗi khi đổi
  // Trả về unsubscribe function. Webapp gọi unsubscribe khi resolve/reject xong.
  listenClaudeRequest(requestId, cb) {
    const ref = doc(db, 'claude_requests', requestId);
    return onSnapshot(ref, (snap) => {
      cb(snap.exists() ? snap.data() : null);
    });
  },
};

// Expose ra window để các script không-module dùng được
window.fb = fb;

// Bắn 1 event "fb-ready" khi auth state đầu tiên xong, để app code biết
fb.onAuthChange((user) => {
  document.dispatchEvent(new CustomEvent('fb-ready', { detail: { user } }));
});

console.log('[fb] Firebase client loaded — project: hrbuilder-vn');
