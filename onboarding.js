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
          <input id="onb-name" type="text" placeholder="Họ tên của anh chị (ví dụ: Vũ Thị Hoài Lan)" />
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
            <button class="btn-primary onboard-next" data-required="onb-pain">Tiếp →</button>
          </div>
        </div>

        <!-- Bước 6_5 (Claude plan) đã bỏ — không hỏi ngay onboarding nữa. Buổi 1 sẽ hướng dẫn cài Claude Code và bàn plan ở đó. -->

        <div class="onboard-step" data-step="7" style="display:none;">
          <h3>🔑 Bước cuối — Lấy Gemini API key</h3>
          <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 14px;">
            Để tôi chat với anh chị 24/7 + chấm bài tự động, tôi cần một cái Gemini API key. <strong>Free, mất hai phút lấy.</strong>
          </p>

          <div style="background: var(--primary-soft); border: 1px solid var(--primary-light); border-radius: 8px; padding: 14px 16px; margin-bottom: 14px;">
            <div style="font-weight: 700; color: var(--primary-dark); margin-bottom: 8px;">📺 Hướng dẫn từng bước (cho người lần đầu)</div>
            <ol style="margin-left: 18px; font-size: 13.5px; line-height: 1.7;">
              <li>Bấm vào link xanh: <a href="https://aistudio.google.com/apikey" target="_blank" style="color: var(--primary); font-weight: 600;">aistudio.google.com/apikey ↗</a></li>
              <li>Đăng nhập <strong>Google</strong> (Gmail bạn đang dùng cũng được)</li>
              <li>Click cái nút màu xanh <strong>"Create API Key"</strong></li>
              <li>Có khi nó hỏi "Create new project" → cứ click <strong>"OK"</strong></li>
              <li>Hiện ra một chuỗi dài bắt đầu <code>AIzaSy...</code> → bấm icon copy</li>
              <li>Paste vào ô dưới đây — xong</li>
            </ol>
          </div>

          <div style="background: var(--surface-2); border-radius: 8px; padding: 12px 14px; margin-bottom: 14px; font-size: 13px;">
            <strong>❓ Những nỗi sợ thường gặp, tôi xin trả lời trước:</strong>
            <ul style="margin-top: 6px; margin-left: 18px; line-height: 1.7;">
              <li><strong>"Có tốn tiền không?"</strong> → Free tier dùng cả khóa vẫn còn dư hết.</li>
              <li><strong>"Lỡ key bị lộ thì sao?"</strong> → Key lưu chỉ ở máy anh chị (localStorage), không gửi server, không gửi đâu cả.</li>
              <li><strong>"Tôi có biết Google Cloud đâu?"</strong> → Không cần biết. Aistudio.google.com là sản phẩm riêng cho người mới, dễ dùng lắm, không phải Google Cloud phức tạp.</li>
            </ul>
          </div>

          <input id="onb-apikey" type="password" placeholder="AIzaSy..." />
          <div style="display: flex; align-items: center; gap: 12px; margin: 12px 0; font-size: 13px; color: var(--text-muted);">
            <hr style="flex: 1; border: 0; border-top: 1px solid var(--border);" />
            <span>HOẶC</span>
            <hr style="flex: 1; border: 0; border-top: 1px solid var(--border);" />
          </div>
          <label style="display: block; padding: 12px 14px; border: 1px dashed var(--border-strong); border-radius: 8px; cursor: pointer; font-size: 13.5px; line-height: 1.5;" id="onb-cohort-key-wrap">
            <input type="checkbox" id="onb-use-cohort-key" style="margin-right: 8px;" />
            <strong>Dùng key tạm của khóa (Phase A — Buổi 1-3)</strong>
            <div style="margin-top: 6px; color: var(--text-muted);">Quota free 50 call/ngày. Đủ dùng Buổi 1-3 cảm nhận khóa. Từ Buổi 4 anh chị cần lấy key riêng — lúc đó tôi hướng dẫn 1-1 lấy nhanh.</div>
          </label>
          <div class="onboard-actions">
            <button class="btn-secondary onboard-back">← Quay lại</button>
            <button class="btn-primary" id="onb-finish">Lưu + Bắt đầu khóa</button>
          </div>
          <div id="onb-test-result" style="margin-top: 10px; font-size: 13px;"></div>
        </div>

        <div class="onboard-step" data-step="8" style="display:none;">
          <div class="onboard-loading">
            <div class="spinner"></div>
            <h3>Tôi đang vẽ lộ trình riêng cho anh chị — chờ tôi một lát…</h3>
            <p style="font-size: 13px; color: var(--text-muted);">Khoảng mười giây, không lâu đâu</p>
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
  // Step sequence (đặt rõ vì có step "6_5")
  const STEP_SEQ = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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

  // Step 7: API key + finish
  document.getElementById('onb-finish').addEventListener('click', async () => {
    const finishBtn = document.getElementById('onb-finish');
    const key = document.getElementById('onb-apikey').value.trim();
    const useCohortKey = document.getElementById('onb-use-cohort-key').checked;
    const resultEl = document.getElementById('onb-test-result');

    // Path A: Học viên chọn dùng key của khoá (Phase A) — không cần nhập key riêng
    if (useCohortKey && !key) {
      const proxyConfigured = typeof AI_CONFIG !== 'undefined' && AI_CONFIG.proxyUrl;
      if (!proxyConfigured) {
        resultEl.innerHTML = '⚠ Khoá chưa setup proxy. Bạn vẫn cần lấy key Gemini riêng — lấy ở <a href="https://aistudio.google.com/apikey" target="_blank">aistudio.google.com/apikey</a> (free 2 phút).';
        resultEl.style.color = 'var(--danger)';
        return;
      }
      finishBtn.disabled = true;
      finishBtn.textContent = '⏳ Đang setup…';
      localStorage.setItem('use_cohort_proxy', '1');
      resultEl.innerHTML = '✅ Dùng key tạm của khóa — bắt đầu khóa ngay!';
      resultEl.style.color = 'var(--success)';
      // Skip key test, save profile, lên loading
      saveProfile({
        name: data.name, role: data.role, company: data.company,
        area: data.area, pain: data.pain, claude_plan: 'none',
      });
      showStep(8);
      // Mock welcome (proxy mode)
      setTimeout(() => {
        document.getElementById('welcome-name').textContent = data.name.split(' ').pop();
        document.getElementById('welcome-msg').textContent =
          `Tôi đã ghi nhớ anh chị là ${data.role} mảng ${data.area} @ ${data.company}.\n\n` +
          `Anh chị đã chọn dùng key tạm của khóa cho Buổi 1-3 — quota free 50 call/ngày, đủ dùng hết. Từ Buổi 4, tôi sẽ hướng dẫn anh chị lấy key riêng — chỉ 2 phút.\n\n` +
          `Sẵn sàng rồi hả? Click bắt đầu, tôi đợi.`;
        showStep(9);
      }, 800);
      return;
    }

    if (!key) {
      resultEl.innerHTML = '⚠ Anh chị chưa điền API key vào ô trên — hoặc tick chọn "Dùng key tạm của khóa" ở dưới.';
      resultEl.style.color = 'var(--danger)';
      document.getElementById('onb-apikey').focus();
      return;
    }

    // Frontend pattern check trước khi gọi API — Gemini key dạng "AIzaSy..." 39 ký tự
    if (!/^AIzaSy[A-Za-z0-9_-]{33}$/.test(key)) {
      resultEl.innerHTML = '⚠ Key không đúng format Gemini. Key thật phải bắt đầu "AIzaSy..." và dài 39 ký tự. Bạn check lại — hoặc lấy lại từ <a href="https://aistudio.google.com/apikey" target="_blank">aistudio.google.com/apikey</a>.';
      resultEl.style.color = 'var(--danger)';
      return;
    }

    // Disable button + đổi text + scroll vào view kết quả
    finishBtn.disabled = true;
    const originalBtnText = finishBtn.textContent;
    finishBtn.textContent = '⏳ Đang test key…';
    resultEl.innerHTML = '⏳ Đang test thử API key (3-5 giây)…';
    resultEl.style.color = 'var(--primary)';
    resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    let test;
    try {
      test = await testApiKey(key);
    } catch (e) {
      test = { ok: false, message: 'Lỗi mạng: ' + (e.message || 'không kết nối được Gemini') };
    }

    if (!test.ok) {
      resultEl.innerHTML = `❌ Key chưa hợp lệ: ${test.message}<br><small>Bạn check key có đúng không, hoặc tạo key mới <a href="https://aistudio.google.com/apikey" target="_blank">tại đây</a>.</small>`;
      resultEl.style.color = 'var(--danger)';
      finishBtn.disabled = false;
      finishBtn.textContent = originalBtnText;
      return;
    }
    resultEl.innerHTML = '✅ API key OK rồi! Tôi đang vẽ lộ trình…';
    resultEl.style.color = 'var(--success)';

    setApiKey(key);

    // Save profile (bao gồm Claude plan)
    saveProfile({
      name: data.name,
      role: data.role,
      company: data.company,
      area: data.area,
      pain: data.pain,
      claude_plan: data.claude_plan || 'none',
    });

    // Move to loading
    showStep(8);

    // Generate welcome message via Gemini
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
      // Fallback nếu API lỗi
      document.getElementById('welcome-name').textContent = data.name.split(' ').pop();
      document.getElementById('welcome-msg').textContent =
        `Tôi đã ghi nhớ anh chị là ${data.role} mảng ${data.area} @ ${data.company}. Đầy đủ.\n\n` +
        `Lộ trình mười tuần đã được điều chỉnh theo cái khổ của anh chị. Buổi 1 — chưa dính HR ngay, anh chị build một cổng HR công ty có ba nút (xin nghỉ, hỏi luật, đăng ký team building). Lý do: làm quen "Bạn đồng hành" qua project an toàn, không sợ làm sai.\n\n` +
        `Sẵn sàng rồi hả? Click bắt đầu, tôi đợi.`;
      showStep(9);
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
