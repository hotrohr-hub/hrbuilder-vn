// Onboarding — Day 0 modal flow + welcome AI message

function showOnboardingIfNeeded() {
  if (isOnboarded()) return; // đã onboard rồi → skip
  showOnboardingModal();
}

function showOnboardingModal() {
  const html = `
    <div class="onboard-overlay" id="onboardOverlay">
      <div class="onboard-card">
        <div class="onboard-step" data-step="1">
          <div class="onboard-emoji">👋</div>
          <h2>Chào anh chị. Mời vào Cohort #1 HR Builder VN.</h2>
          <p>Tôi tên là <strong>Bạn đồng hành</strong> — cái tên hơi lạ tí, nhưng anh chị sẽ quen dần. Mười tuần tới tôi ngồi cạnh anh chị, không bỏ đi đâu, kể cả những lúc anh chị làm sai (mà chắc chắn anh chị sẽ làm sai — chuyện thường ngày ở huyện). Năm phút thôi, tôi xin phép hỏi vài câu, xong rồi vẽ lộ trình riêng cho anh chị.</p>
          <button class="btn-primary onboard-next">Bắt đầu →</button>
        </div>

        <div class="onboard-step" data-step="2" style="display:none;">
          <h3>1/5 — Anh chị tên là gì?</h3>
          <input id="onb-name" type="text" placeholder="Họ tên của anh chị (ví dụ: Nguyễn Thị Mai)" />
          <div class="onboard-actions">
            <button class="btn-secondary onboard-back">← Quay lại</button>
            <button class="btn-primary onboard-next" data-required="onb-name">Tiếp →</button>
          </div>
        </div>

        <div class="onboard-step" data-step="3" style="display:none;">
          <h3>2/5 — Anh chị làm vai trò gì?</h3>
          <input id="onb-role" type="text" placeholder="Ví dụ: HR Manager / TA Lead / HRBP / C&B Specialist..." />
          <div class="onboard-actions">
            <button class="btn-secondary onboard-back">← Quay lại</button>
            <button class="btn-primary onboard-next" data-required="onb-role">Tiếp →</button>
          </div>
        </div>

        <div class="onboard-step" data-step="4" style="display:none;">
          <h3>3/5 — Anh chị ở công ty nào?</h3>
          <input id="onb-company" type="text" placeholder="Tên công ty (chỉ dùng để personalize, không share công khai)" />
          <div class="onboard-actions">
            <button class="btn-secondary onboard-back">← Quay lại</button>
            <button class="btn-primary onboard-next" data-required="onb-company">Tiếp →</button>
          </div>
        </div>

        <div class="onboard-step" data-step="5" style="display:none;">
          <h3>4/5 — Anh chị chuyên mảng nào?</h3>
          <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px;">Chọn một — bài tập sẽ được điều chỉnh cho mảng này. Sau này đổi cũng được, không khắt khe gì.</p>
          <div class="onboard-radio-group">
            <label class="onboard-radio"><input type="radio" name="area" value="TA"><span>Tuyển dụng (TA)</span></label>
            <label class="onboard-radio"><input type="radio" name="area" value="C&B"><span>Lương thưởng phúc lợi (C&B)</span></label>
            <label class="onboard-radio"><input type="radio" name="area" value="L&D"><span>Đào tạo phát triển (L&D)</span></label>
            <label class="onboard-radio"><input type="radio" name="area" value="HRBP"><span>HRBP / Đối tác kinh doanh</span></label>
            <label class="onboard-radio"><input type="radio" name="area" value="Ops"><span>HR Ops / Tổng hợp</span></label>
          </div>
          <div class="onboard-actions">
            <button class="btn-secondary onboard-back">← Quay lại</button>
            <button class="btn-primary onboard-next" data-required="area">Tiếp →</button>
          </div>
        </div>

        <div class="onboard-step" data-step="6" style="display:none;">
          <h3>5/5 — Cái gì đang làm anh chị khổ nhất?</h3>
          <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 8px;">Ba đến năm dòng. Càng cụ thể càng tốt — bài tập sẽ được neo vào đó, không neo lung tung.</p>
          <textarea id="onb-pain" rows="4" placeholder="Ví dụ: Tuần nào cũng đọc 100+ CV cho 5 vị trí dev, mất 12-15 tiếng. Phản hồi ứng viên chậm 3-5 ngày, mất người giỏi sang đối thủ..."></textarea>
          <div class="onboard-actions">
            <button class="btn-secondary onboard-back">← Quay lại</button>
            <button class="btn-primary" id="onb-finish" data-required="onb-pain">Lưu + Bắt đầu khóa</button>
          </div>
          <div id="onb-test-result" style="margin-top: 10px; font-size: 13px;"></div>
        </div>

        <!-- Step 7 (API key) đã bỏ — kiến trúc mới dùng Claude CLI bridge của Lân, học viên không cần key riêng. -->

        <div class="onboard-step" data-step="8" style="display:none;">
          <div class="onboard-loading">
            <div class="spinner"></div>
            <h3>Tôi đang vẽ lộ trình riêng cho anh chị — chờ tôi một lát…</h3>
            <p style="font-size: 13px; color: var(--text-muted);">Khoảng năm tới ba mươi giây — bridge đang xử lý qua Claude.</p>
          </div>
        </div>

        <div class="onboard-step" data-step="9" style="display:none;">
          <div class="onboard-emoji">🎉</div>
          <h2>Chào <span id="welcome-name">anh chị</span>!</h2>
          <div class="onboard-welcome-msg" id="welcome-msg"></div>
          <button class="btn-primary" onclick="closeOnboarding()">Bắt đầu Buổi 1 →</button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', html);
  injectOnboardingStyles();
  attachOnboardingEvents();
}

function injectOnboardingStyles() {
  if (document.getElementById('onboard-styles')) return;
  const style = document.createElement('style');
  style.id = 'onboard-styles';
  style.textContent = `
    .onboard-overlay {
      position: fixed; inset: 0; z-index: 1000;
      background: rgba(15, 23, 42, 0.7);
      backdrop-filter: blur(8px);
      display: flex; align-items: center; justify-content: center;
      padding: 20px;
      animation: fadeIn 0.3s ease;
    }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    .onboard-card {
      background: white;
      border-radius: 16px;
      max-width: 540px; width: 100%;
      max-height: 90vh; overflow-y: auto;
      padding: 36px 40px;
      box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
      animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    .onboard-step h2 { font-size: 24px; font-weight: 800; letter-spacing: -0.5px; margin-bottom: 10px; line-height: 1.3; }
    .onboard-step h3 { font-size: 18px; font-weight: 700; margin-bottom: 14px; }
    .onboard-step p { color: var(--text-muted); margin-bottom: 18px; font-size: 14.5px; line-height: 1.55; }
    .onboard-emoji { font-size: 40px; margin-bottom: 12px; }
    .onboard-card input, .onboard-card textarea {
      width: 100%; padding: 12px 14px;
      border: 1px solid var(--border-strong);
      border-radius: 8px;
      font-family: inherit; font-size: 14.5px;
      margin-bottom: 16px;
      transition: border-color 0.15s;
    }
    .onboard-card input:focus, .onboard-card textarea:focus {
      outline: none; border-color: var(--primary);
      box-shadow: 0 0 0 3px var(--primary-soft);
    }
    .onboard-card textarea { resize: vertical; line-height: 1.5; }
    .onboard-radio-group { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; }
    .onboard-radio {
      display: flex; align-items: center; gap: 10px;
      padding: 10px 14px;
      border: 1px solid var(--border);
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.15s;
    }
    .onboard-radio:hover { border-color: var(--primary); background: var(--primary-soft); }
    .onboard-radio input { width: auto; margin: 0; }
    .onboard-actions { display: flex; gap: 10px; justify-content: space-between; }
    .onboard-actions .btn-primary { flex: 1; padding: 12px 24px; font-size: 14.5px; }
    .onboard-actions .btn-secondary { padding: 12px 18px; font-size: 14px; }
    .onboard-card code { background: #f3f4f6; padding: 2px 6px; border-radius: 4px; font-size: 12px; }
    .onboard-loading { text-align: center; padding: 30px 0; }
    .spinner {
      width: 40px; height: 40px;
      border: 3px solid var(--surface-3);
      border-top-color: var(--primary);
      border-radius: 50%;
      margin: 0 auto 18px;
      animation: spin 0.8s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .onboard-welcome-msg {
      background: linear-gradient(135deg, var(--accent-soft), #fef3c7);
      border-left: 4px solid var(--accent);
      padding: 16px 20px;
      border-radius: 0 8px 8px 0;
      font-size: 14.5px; line-height: 1.7;
      color: #78350f;
      margin-bottom: 24px;
      white-space: pre-wrap;
    }
  `;
  document.head.appendChild(style);
}

function attachOnboardingEvents() {
  // Step 7 (API key) đã bỏ — kiến trúc Claude CLI bridge không yêu cầu key riêng.
  const STEP_SEQ = [1, 2, 3, 4, 5, 6, 8, 9];
  let currentIdx = 0;
  const data = {};

  function showStep(stepKey) {
    document.querySelectorAll('.onboard-step').forEach(el => el.style.display = 'none');
    const target = document.querySelector(`.onboard-step[data-step="${stepKey}"]`);
    if (target) target.style.display = 'block';
    currentIdx = STEP_SEQ.indexOf(stepKey);
  }

  document.querySelectorAll('.onboard-next').forEach(btn => {
    btn.addEventListener('click', () => {
      const required = btn.dataset.required;
      if (required) {
        if (required === 'area' || required === 'claude_plan') {
          const checked = document.querySelector(`input[name="${required}"]:checked`);
          if (!checked) { alert('Anh chị chọn một mục cái đã!'); return; }
          data[required] = checked.value;
        } else {
          const el = document.getElementById(required);
          if (!el.value.trim()) { alert('Anh chị điền vào trước đã!'); el.focus(); return; }
          data[required.replace('onb-', '')] = el.value.trim();
        }
      }
      const nextKey = STEP_SEQ[currentIdx + 1];
      if (nextKey !== undefined) showStep(nextKey);
    });
  });

  document.querySelectorAll('.onboard-back').forEach(btn => {
    btn.addEventListener('click', () => {
      const prevKey = STEP_SEQ[currentIdx - 1];
      if (prevKey !== undefined) showStep(prevKey);
    });
  });

  // Step 6 — Lưu hồ sơ + chào (không còn step API key nữa)
  document.getElementById('onb-finish').addEventListener('click', async () => {
    const finishBtn = document.getElementById('onb-finish');
    const resultEl = document.getElementById('onb-test-result');

    // Validate pain (last required field)
    const painEl = document.getElementById('onb-pain');
    const painVal = painEl.value.trim();
    if (!painVal) {
      if (resultEl) {
        resultEl.innerHTML = '⚠ Anh chị mô tả cái khổ vào ô trên trước đã.';
        resultEl.style.color = 'var(--danger)';
      }
      painEl.focus();
      return;
    }
    data.pain = painVal;

    // Save profile (Claude bridge architecture — không cần API key)
    saveProfile({
      name: data.name,
      role: data.role,
      company: data.company,
      area: data.area,
      pain: data.pain,
      claude_plan: data.claude_plan || 'none',
    });

    finishBtn.disabled = true;
    const originalBtnText = finishBtn.textContent;
    finishBtn.textContent = '⏳ Đang vẽ lộ trình…';
    if (resultEl) {
      resultEl.innerHTML = '⏳ Tôi đang nhờ Bạn đồng hành chào anh chị (5-30 giây) — bridge của Lân xử lý qua Claude CLI…';
      resultEl.style.color = 'var(--primary)';
    }

    // Move to loading screen
    showStep(8);

    // Generate welcome message qua Claude bridge
    try {
      const welcome = await aiOnboarding({
        name: data.name,
        role: data.role,
        company: data.company,
        area: data.area,
        pain: data.pain,
      });

      document.getElementById('welcome-name').textContent = data.name.split(' ').pop();
      document.getElementById('welcome-msg').textContent = welcome;
      showStep(9);
    } catch (e) {
      // Fallback nếu bridge offline / timeout — vẫn cho học viên vào lớp với welcome generic
      console.warn('[onboarding] aiOnboarding failed, dùng fallback message:', e.message);
      document.getElementById('welcome-name').textContent = data.name.split(' ').pop();
      document.getElementById('welcome-msg').textContent =
        `Tôi đã ghi nhớ anh chị là ${data.role} mảng ${data.area} @ ${data.company}. Đầy đủ.\n\n` +
        `(Bạn đồng hành đang hơi bận chút — lộ trình cá nhân hóa sẽ hiện ra khi tôi rảnh tay. Bạn vào Buổi 1 trước nhé.)\n\n` +
        `Buổi 1 — chưa dính HR ngay, anh chị build một cổng HR công ty có ba nút (xin nghỉ, hỏi luật, đăng ký team building). Lý do: làm quen "Bạn đồng hành" qua project an toàn, không sợ làm sai.\n\n` +
        `Sẵn sàng rồi hả? Click bắt đầu, tôi đợi.`;
      showStep(9);
    } finally {
      finishBtn.disabled = false;
      finishBtn.textContent = originalBtnText;
    }
  });
}

function closeOnboarding() {
  document.getElementById('onboardOverlay').remove();
  // Refresh page hoặc đi đến lesson 1
  if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    window.location.href = 'lesson.html?id=1';
  } else {
    window.location.reload();
  }
}
