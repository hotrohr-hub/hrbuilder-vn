// Auth UI — tự inject nút "Đăng nhập" vào header + modal đăng ký/đăng nhập.
// Phụ thuộc: firebase-client.js (load trước, expose window.fb).

const STYLE = `
/* Avatar header existing — gắn click + style khi chưa login */
.topbar .avatar, .header .avatar, header .avatar {
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
}
.topbar .avatar:hover, .header .avatar:hover, header .avatar:hover {
  transform: translateY(-1px);
  filter: brightness(1.1);
}
.avatar.auth-unauth {
  background: white !important;
  color: #94a3b8 !important;
  border: 2px dashed #cbd5e1 !important;
  box-shadow: none !important;
}

.auth-modal-bg {
  position: fixed; inset: 0; background: rgba(15,23,42,0.6);
  z-index: 9100; display: grid; place-items: center;
  animation: fadeIn 0.2s;
}
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.auth-modal {
  background: white; border-radius: 18px; padding: 32px 30px 28px;
  width: min(420px, 92vw); box-shadow: 0 30px 60px rgba(0,0,0,0.3);
}
.auth-modal h2 { font-size: 22px; font-weight: 800; margin-bottom: 6px; letter-spacing: -0.3px; }
.auth-modal p.sub { color: #64748b; font-size: 13px; margin-bottom: 18px; }
.auth-modal label { display: block; font-size: 12px; font-weight: 600; color: #475569; margin: 14px 0 6px; }
.auth-modal input {
  width: 100%; padding: 11px 14px; border: 1.5px solid #e2e8f0; border-radius: 10px;
  font-size: 14px; font-family: inherit; outline: none; transition: border 0.15s;
}
.auth-modal input:focus { border-color: #0ea5e9; }
.auth-modal .btn-primary {
  width: 100%; padding: 12px; border: none; border-radius: 10px;
  background: #0f172a; color: white; font-weight: 700; font-size: 14px;
  cursor: pointer; margin-top: 18px; transition: background 0.15s;
}
.auth-modal .btn-primary:hover { background: #1e293b; }
.auth-modal .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
.auth-modal .btn-google {
  width: 100%; padding: 11px; border: 1.5px solid #e2e8f0; border-radius: 10px;
  background: white; font-weight: 600; font-size: 14px; cursor: pointer;
  display: flex; align-items: center; justify-content: center; gap: 10px;
  margin-top: 10px; transition: background 0.15s;
}
.auth-modal .btn-google:hover { background: #f8fafc; }
.auth-modal .switch {
  text-align: center; margin-top: 16px; font-size: 13px; color: #64748b;
}
.auth-modal .switch a { color: #0ea5e9; font-weight: 600; cursor: pointer; }
.auth-modal .err {
  background: #fef2f2; border: 1px solid #fecaca; color: #991b1b;
  padding: 10px 12px; border-radius: 8px; font-size: 13px; margin-top: 12px;
}
.auth-modal .close {
  position: absolute; top: 14px; right: 18px;
  background: transparent; border: none; cursor: pointer; font-size: 22px; color: #94a3b8;
}
.auth-modal-wrapper { position: relative; }
.auth-divider {
  text-align: center; color: #94a3b8; font-size: 12px; margin: 14px 0;
  position: relative;
}
.auth-divider::before, .auth-divider::after {
  content: ''; position: absolute; top: 50%; width: calc(50% - 24px); height: 1px; background: #e2e8f0;
}
.auth-divider::before { left: 0; }
.auth-divider::after { right: 0; }
`;

function injectStyle() {
  if (document.getElementById('auth-ui-style')) return;
  const s = document.createElement('style');
  s.id = 'auth-ui-style';
  s.textContent = STYLE;
  document.head.appendChild(s);
}

function getInitials(user) {
  if (user?.displayName) return user.displayName.trim().charAt(0).toUpperCase();
  if (user?.email) return user.email.charAt(0).toUpperCase();
  return '?';
}

let _modalOpen = false;
function openModal(mode = 'signin') {
  if (_modalOpen) return;
  _modalOpen = true;

  const bg = document.createElement('div');
  bg.className = 'auth-modal-bg';
  bg.innerHTML = `
    <div class="auth-modal-wrapper">
      <div class="auth-modal">
        <button class="close" id="amClose">×</button>
        <h2 id="amTitle"></h2>
        <p class="sub" id="amSub"></p>

        <div id="amFields">
          <label id="amNameLabel">Họ và tên (anh chị muốn được gọi sao?)</label>
          <input type="text" id="amName" placeholder="Nguyễn Văn A" autocomplete="off">

          <label>Email</label>
          <input type="email" id="amEmail" placeholder="ten@congty.com" autocomplete="off">

          <label>Mật khẩu</label>
          <input type="password" id="amPwd" placeholder="Tối thiểu 6 ký tự" autocomplete="new-password">
        </div>

        <button class="btn-primary" id="amSubmit">Đăng ký</button>

        <div class="auth-divider">hoặc</div>
        <button class="btn-google" id="amGoogle">
          <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/><path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/><path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/><path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/></svg>
          Đăng nhập bằng Google
        </button>

        <div class="err" id="amErr" style="display:none"></div>

        <div class="switch">
          <span id="amSwitchTxt"></span> <a id="amSwitch"></a>
        </div>
        <div class="switch" id="amForgotRow" style="margin-top: 6px;">
          <a id="amForgot">Quên mật khẩu?</a>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(bg);

  const $ = (id) => document.getElementById(id);
  const setMode = (m) => {
    if (m === 'signup') {
      $('amTitle').textContent = 'Đăng ký tài khoản';
      $('amSub').textContent = 'Tài khoản giúp anh chị giữ tiến độ học khi đổi máy.';
      $('amSubmit').textContent = 'Đăng ký';
      $('amName').parentElement.style.display = 'block';
      $('amNameLabel').style.display = 'block';
      $('amName').style.display = 'block';
      $('amPwd').parentElement.style.display = 'block';
      $('amPwd').style.display = 'block';
      $('amPwd').previousElementSibling.style.display = 'block';
      $('amSwitchTxt').textContent = 'Đã có tài khoản?';
      $('amSwitch').textContent = 'Đăng nhập';
      $('amSwitch').onclick = () => setMode('signin');
      $('amForgotRow').style.display = 'none';
    } else if (m === 'forgot') {
      $('amTitle').textContent = 'Quên mật khẩu';
      $('amSub').textContent = 'Nhập email — em gửi link đặt lại mật khẩu cho anh chị.';
      $('amSubmit').textContent = 'Gửi email đặt lại';
      $('amName').style.display = 'none';
      $('amNameLabel').style.display = 'none';
      $('amPwd').style.display = 'none';
      $('amPwd').previousElementSibling.style.display = 'none';
      $('amSwitchTxt').textContent = 'Nhớ ra rồi?';
      $('amSwitch').textContent = 'Đăng nhập';
      $('amSwitch').onclick = () => setMode('signin');
      $('amForgotRow').style.display = 'none';
    } else {
      $('amTitle').textContent = 'Đăng nhập';
      $('amSub').textContent = 'Mở khoá HR Builder VN của anh chị.';
      $('amSubmit').textContent = 'Đăng nhập';
      $('amName').parentElement.style.display = 'block';
      $('amNameLabel').style.display = 'none';
      $('amName').style.display = 'none';
      $('amPwd').style.display = 'block';
      $('amPwd').previousElementSibling.style.display = 'block';
      $('amSwitchTxt').textContent = 'Chưa có tài khoản?';
      $('amSwitch').textContent = 'Đăng ký mới';
      $('amSwitch').onclick = () => setMode('signup');
      $('amForgotRow').style.display = 'block';
    }
    $('amErr').style.display = 'none';
    bg.dataset.mode = m;
  };

  // Click "Quên mật khẩu?" → chuyển sang chế độ forgot
  setTimeout(() => {
    const forgotEl = $('amForgot');
    if (forgotEl) forgotEl.onclick = () => setMode('forgot');
  }, 50);

  const close = () => {
    _modalOpen = false;
    bg.remove();
  };
  $('amClose').onclick = close;
  bg.onclick = (e) => { if (e.target === bg) close(); };

  $('amSubmit').onclick = async () => {
    const m = bg.dataset.mode;
    const email = $('amEmail').value.trim();
    const pwd = $('amPwd').value;
    const name = $('amName').value.trim();
    const errEl = $('amErr');
    errEl.style.display = 'none';
    if (!email) {
      errEl.textContent = 'Anh chị nhập email giùm em.';
      errEl.style.display = 'block';
      return;
    }
    if (m !== 'forgot') {
      if (!pwd) {
        errEl.textContent = 'Anh chị nhập mật khẩu giùm em.';
        errEl.style.display = 'block';
        return;
      }
      if (pwd.length < 6) {
        errEl.textContent = 'Mật khẩu cần tối thiểu 6 ký tự.';
        errEl.style.display = 'block';
        return;
      }
    }
    $('amSubmit').disabled = true;
    const oldText = $('amSubmit').textContent;
    $('amSubmit').textContent = 'Đang xử lý…';
    try {
      if (m === 'signup') {
        await window.fb.signUp(email, pwd, name);
        close();
        setTimeout(() => location.reload(), 300);
      } else if (m === 'forgot') {
        await window.fb.resetPassword(email);
        errEl.style.background = '#ecfdf5';
        errEl.style.borderColor = '#a7f3d0';
        errEl.style.color = '#065f46';
        errEl.textContent = '✅ Em đã gửi email đặt lại mật khẩu rồi. Anh chị check hộp thư (cả Spam) trong 1-2 phút nhé.';
        errEl.style.display = 'block';
        $('amSubmit').textContent = oldText;
        $('amSubmit').disabled = false;
      } else {
        await window.fb.signIn(email, pwd);
        close();
        setTimeout(() => location.reload(), 300);
      }
    } catch (e) {
      const msg = (e?.message || 'Có lỗi xảy ra').replace('Firebase: ', '');
      errEl.textContent = msg;
      errEl.style.display = 'block';
      $('amSubmit').disabled = false;
      $('amSubmit').textContent = oldText;
    }
  };

  $('amGoogle').onclick = async () => {
    $('amErr').style.display = 'none';
    try {
      await window.fb.signInGoogle();
      close();
      setTimeout(() => location.reload(), 300);
    } catch (e) {
      const errEl = $('amErr');
      errEl.textContent = (e?.message || 'Lỗi đăng nhập Google').replace('Firebase: ', '');
      errEl.style.display = 'block';
    }
  };

  setMode(mode);
  setTimeout(() => $('amEmail').focus(), 50);
}

function wireExistingAvatar(user) {
  // Xóa pill float cũ nếu có (từ session trước)
  const oldPill = document.getElementById('authPill');
  if (oldPill) oldPill.remove();

  // Tìm tất cả avatar trong header (topbar / header / user wrapper trong lesson page)
  const avatars = document.querySelectorAll('.topbar .avatar, header .avatar, .header .avatar, .user .avatar, #userAvatar');
  avatars.forEach(av => {
    if (user) {
      av.classList.remove('auth-unauth');
      const initials = getInitials(user);
      const label = user.displayName || user.email?.split('@')[0] || 'Anh chị';
      av.textContent = initials;
      av.title = `${label} · click để đăng xuất`;
      av.onclick = async () => {
        if (confirm(`Đăng xuất khỏi tài khoản ${label}?`)) {
          try {
            await window.fb.signOut();
            setTimeout(() => location.reload(), 200);
          } catch (e) { alert(e?.message || 'Lỗi đăng xuất'); }
        }
      };
    } else {
      av.classList.add('auth-unauth');
      av.textContent = '↳';
      av.title = 'Click để đăng nhập';
      av.onclick = () => openModal('signin');
    }
  });
}

// Init
injectStyle();
document.addEventListener('fb-ready', (e) => {
  wireExistingAvatar(e.detail?.user || null);
});
// Fallback: nếu fb-ready đã fire trước khi auth-ui.js mount listener (race
// condition phổ biến với ESM module load), wire ngay với state hiện tại.
// Chạy sau microtask để đảm bảo window.fb đã được attach từ firebase-client.js.
queueMicrotask(() => {
  if (window.fb && typeof window.fb.currentUser === 'function') {
    wireExistingAvatar(window.fb.currentUser());
  }
});

// Expose để các trang khác gọi mở modal
window.openAuthModal = openModal;
