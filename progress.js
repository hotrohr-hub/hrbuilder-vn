// Progress — quản lý tiến độ học viên.
// Lưu trữ: localStorage (cache local) + Firestore (cloud, đồng bộ qua máy).
// Quy ước: localStorage là nguồn nhanh. Firestore đồng bộ ngầm khi user đăng nhập.

const KEYS = {
  profile: 'hrbuilder_profile',
  progress: 'hrbuilder_progress',
  history: 'hrbuilder_history', // lưu chat history per lesson
  lastUid: 'hrbuilder_last_uid', // user uid của lần auth gần nhất — detect đổi tài khoản
};

// Clear local data — gọi khi đổi tài khoản hoặc logout. KHÔNG xoá lastUid.
function clearLocalUserData() {
  localStorage.removeItem(KEYS.profile);
  localStorage.removeItem(KEYS.progress);
  localStorage.removeItem(KEYS.history);
}

// === FIRESTORE SYNC ===
// Đẩy {profile, progress} lên Firestore (debounced ~1s).
let _saveTimer = null;
function _scheduleCloudSync() {
  if (typeof window === 'undefined' || !window.fb || !window.fb.currentUser?.()) return;
  clearTimeout(_saveTimer);
  _saveTimer = setTimeout(async () => {
    try {
      await window.fb.saveUserData(getProfile(), getProgress());
      console.log('[progress] cloud sync OK');
    } catch (e) {
      console.warn('[progress] cloud sync FAIL — sẽ thử lại khi save tiếp:', e?.message);
    }
  }, 1000);
}

// Pull dữ liệu từ Firestore về localStorage (gọi 1 lần khi user vừa đăng nhập).
async function pullFromCloud() {
  if (typeof window === 'undefined' || !window.fb || !window.fb.currentUser?.()) return null;
  try {
    const data = await window.fb.loadUserData();
    if (!data) return null;
    // Merge: cloud có dữ liệu thì ưu tiên cloud (vì máy mới đăng nhập, localStorage rỗng).
    if (data.profile) localStorage.setItem(KEYS.profile, JSON.stringify(data.profile));
    if (data.progress) localStorage.setItem(KEYS.progress, JSON.stringify(data.progress));
    console.log('[progress] pulled from cloud');
    return data;
  } catch (e) {
    console.warn('[progress] pull cloud FAIL:', e?.message);
    return null;
  }
}

// Push toàn bộ localStorage hiện tại lên cloud (gọi khi cần force sync).
async function pushToCloud() {
  if (typeof window === 'undefined' || !window.fb || !window.fb.currentUser?.()) return;
  try {
    await window.fb.saveUserData(getProfile(), getProgress());
    console.log('[progress] pushed to cloud');
  } catch (e) {
    console.warn('[progress] push cloud FAIL:', e?.message);
  }
}

// === PROFILE ===

function getProfile() {
  const raw = localStorage.getItem(KEYS.profile);
  return raw ? JSON.parse(raw) : null;
}

function saveProfile(profile) {
  localStorage.setItem(KEYS.profile, JSON.stringify({
    ...profile,
    onboardedAt: profile.onboardedAt || new Date().toISOString(),
  }));
  _scheduleCloudSync();
}

function isOnboarded() {
  return !!getProfile();
}

// === PROGRESS ===

function getProgress() {
  const raw = localStorage.getItem(KEYS.progress);
  return raw ? JSON.parse(raw) : { lessons: {}, totalXp: 0, streak: 0, startedAt: null };
}

function saveProgress(p) {
  localStorage.setItem(KEYS.progress, JSON.stringify(p));
  _scheduleCloudSync();
}

function markStepDone(lessonId, stepIdx, gradeResult) {
  const p = getProgress();
  if (!p.lessons[lessonId]) p.lessons[lessonId] = { steps: {}, doneAt: null };
  p.lessons[lessonId].steps[stepIdx] = {
    done: true,
    score: gradeResult.score,
    status: gradeResult.status,
    feedback: gradeResult,
    doneAt: new Date().toISOString(),
  };

  // Cộng XP nếu LESSONS đã load
  if (typeof LESSONS !== 'undefined' && LESSONS[lessonId]) {
    p.totalXp = (p.totalXp || 0) + LESSONS[lessonId].steps[stepIdx].xp;
  }

  // Đánh dấu lesson done nếu đủ tất cả step
  const totalSteps = LESSONS?.[lessonId]?.steps.length || 5;
  let allDone = true;
  for (let i = 0; i < totalSteps; i++) {
    if (!p.lessons[lessonId].steps[i]?.done) { allDone = false; break; }
  }
  if (allDone) p.lessons[lessonId].doneAt = new Date().toISOString();

  saveProgress(p);
  return p;
}

function getStepStatus(lessonId, stepIdx) {
  const p = getProgress();
  const stepData = p.lessons?.[lessonId]?.steps?.[stepIdx];

  if (stepData?.done) return 'done';

  // Bước đầu hoặc bước trước đã done → active
  if (stepIdx === 0) {
    // Buổi 1 luôn active step 0; buổi 2+ cần buổi trước done hết
    if (lessonId === 1) return 'active';
    if (isLessonDone(lessonId - 1)) return 'active';
    return 'locked';
  }

  const prev = p.lessons?.[lessonId]?.steps?.[stepIdx - 1];
  if (prev?.done) return 'active';
  return 'locked';
}

function isLessonDone(lessonId) {
  const p = getProgress();
  return !!p.lessons?.[lessonId]?.doneAt;
}

function isLessonUnlocked(lessonId) {
  if (lessonId === 1) return true;
  return isLessonDone(lessonId - 1);
}

function getCurrentLesson() {
  const p = getProgress();
  for (let i = 1; i <= 10; i++) {
    if (!isLessonDone(i)) return i;
  }
  return 10;
}

function getOverallStats() {
  const p = getProgress();
  let lessonsCompleted = 0;
  let stepsCompleted = 0;

  for (let i = 1; i <= 10; i++) {
    if (p.lessons[i]?.doneAt) lessonsCompleted++;
    const steps = p.lessons[i]?.steps || {};
    stepsCompleted += Object.values(steps).filter(s => s.done).length;
  }

  return {
    totalXp: p.totalXp || 0,
    lessonsCompleted,
    stepsCompleted,
    totalSteps: 50, // 10 lessons × 5 steps
    percentComplete: Math.round((stepsCompleted / 50) * 100),
    streak: p.streak || 0,
  };
}

// === CHAT HISTORY (per lesson) ===

function getChatHistory(lessonId) {
  const raw = localStorage.getItem(KEYS.history);
  const all = raw ? JSON.parse(raw) : {};
  return all[lessonId] || [];
}

function appendChatHistory(lessonId, role, text) {
  const raw = localStorage.getItem(KEYS.history);
  const all = raw ? JSON.parse(raw) : {};
  if (!all[lessonId]) all[lessonId] = [];
  all[lessonId].push({ role, text, at: new Date().toISOString() });
  // Giữ tối đa 20 turn gần nhất để tránh phình
  if (all[lessonId].length > 20) all[lessonId] = all[lessonId].slice(-20);
  localStorage.setItem(KEYS.history, JSON.stringify(all));
}

// === RESET (cho dev test) ===

function resetAll() {
  localStorage.removeItem(KEYS.profile);
  localStorage.removeItem(KEYS.progress);
  localStorage.removeItem(KEYS.history);
}

// Khi auth state đổi:
//   - Logout → CLEAR local hết.
//   - Đổi tk (lastUid != user.uid) → CLEAR local + pull cloud user mới.
//   - Cùng uid (lastUid == user.uid) + local rỗng → pull cloud (đổi máy).
//   - Cùng uid + có local → push để chắc.
//   - LẦN ĐẦU AUTH (lastUid null) + có local → CLOUD-FIRST: pull cloud.
//     - Cloud có data → cloud là source of truth (user cũ login lại) → đè local
//     - Cloud rỗng → user vừa signup, giữ local + push (happy path onboard-rồi-signup)
//   Tránh bug "tạo tk mới mà bài lưu về tk cũ" do localStorage là key global.
if (typeof window !== 'undefined' && document) {
  document.addEventListener('fb-ready', async (e) => {
    const user = e.detail?.user;
    const lastUid = localStorage.getItem(KEYS.lastUid);

    // Logout → xoá hết local
    if (!user) {
      if (lastUid) {
        clearLocalUserData();
        localStorage.removeItem(KEYS.lastUid);
        console.log('[progress] logged out — cleared local user data');
      }
      return;
    }

    const hasLocal = !!getProfile() || !!localStorage.getItem(KEYS.progress);
    const switchedAccount = lastUid && lastUid !== user.uid;

    if (switchedAccount) {
      console.log('[progress] account switched ' + lastUid + ' → ' + user.uid + ' — clearing local');
      clearLocalUserData();
      localStorage.setItem(KEYS.lastUid, user.uid);
      await pullFromCloud();
      setTimeout(() => location.reload(), 200);
      return;
    }

    // Cùng uid hoặc lần đầu (lastUid null)
    const isFirstAuth = !lastUid;
    localStorage.setItem(KEYS.lastUid, user.uid);

    if (!hasLocal) {
      const cloud = await pullFromCloud();
      if (cloud && (cloud.profile || cloud.progress)) {
        setTimeout(() => location.reload(), 200);
      }
      return;
    }

    // Có local
    if (isFirstAuth) {
      // LẦN ĐẦU AUTH với local có sẵn — không phân biệt được local thuộc user
      // này hay session trước. Cloud-first: pull cloud xem có data không.
      const cloudData = await window.fb.loadUserData?.();
      if (cloudData && (cloudData.profile || cloudData.progress)) {
        // Cloud có → user đã từng dùng tk này, ưu tiên cloud
        console.log('[progress] first auth + cloud has data — cloud wins, clearing local');
        clearLocalUserData();
        if (cloudData.profile) {
          // Sync displayName Firebase vào profile.name nếu khác
          // (tránh mismatch avatar "E" vs greeting "Chào Three")
          const p = { ...cloudData.profile };
          if (user.displayName && p.name !== user.displayName) {
            p.name = user.displayName;
          }
          localStorage.setItem(KEYS.profile, JSON.stringify(p));
        }
        if (cloudData.progress) localStorage.setItem(KEYS.progress, JSON.stringify(cloudData.progress));
        setTimeout(() => location.reload(), 200);
      } else {
        // Cloud rỗng → tk mới, push local lên (user vừa onboard rồi signup)
        // Đồng bộ displayName Firebase vào profile.name nếu user vừa đăng ký
        // với tên khác tên onboard.
        if (user.displayName) {
          const p = getProfile();
          if (p && p.name !== user.displayName) {
            p.name = user.displayName;
            saveProfile(p);
          }
        }
        console.log('[progress] first auth + cloud empty — pushing local to cloud');
        pushToCloud();
      }
    } else {
      // Cùng uid như lần trước → push để chắc
      pushToCloud();
    }
  });
}
