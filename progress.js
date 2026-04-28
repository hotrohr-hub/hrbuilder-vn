// Progress — quản lý tiến độ học viên qua localStorage
// Path A: localStorage. Path B: chuyển sang Supabase backend.

const KEYS = {
  profile: 'hrbuilder_profile',
  progress: 'hrbuilder_progress',
  history: 'hrbuilder_history', // lưu chat history per lesson
};

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
