// Dữ liệu 10 buổi HR Builder VN — viết theo lối "giáo sư Đinh Tiến Dũng": tếu táo, có nhịp, đôi khi lạc đề
// Mỗi buổi: 1 nguyên lý + 5 bước + 3 hint + 3 tầng đào sâu

const LESSONS = {
  1: {
    week: 'TUẦN 1', duration: '90-150 phút tuỳ tốc độ',
    title: 'Một câu tiếng Việt. Một trang web cá nhân nổ pháo hoa. Vâng, đúng vậy thật.',
    sub: 'Người làm nhanh xong trong 90 phút. Người mới lần đầu đụng Claude Code có thể mất 2-2.5 tiếng (đặc biệt step 4 — Telegram bot). Cuối buổi: trang web chạy local + plan deploy public ở Buổi 1.5.',
    principle: { num: 1, name: 'Tự học cùng máy' },
    hints: [
      'Cần biết cái gì — xin bạn đừng mở Google ra nữa, tội nghiệp Google…',
      'Hỏi thẳng máy ấy. Nó biết bạn làm HR, nó hiểu bạn đang vướng cái gì…',
      'AI dạy bạn dùng AI. Nghe vòng vo, nhưng cả khóa này mọc lên từ đó',
    ],
    revealMsg: 'Cần biết gì để giải bài → hỏi thẳng máy. Đừng vòng qua Google nữa. Cái rễ của khóa nằm ở đây. Mà rễ thì phải sâu — các cụ đã nói rồi, tôi xin không nhắc lại.',
    layers: [
      { name: 'Là cái gì', text: 'Cần biết X để giải bài → hỏi thẳng máy. Đơn giản vậy thôi. Máy nó nhớ bạn làm mảng nào, nên bạn không phải giải thích từ đầu mỗi lần — đỡ một mỏi miệng. Google thì khác. Google quẳng cho bạn mười cái link rồi đi mất, để bạn ngồi tự đọc, tự lọc, tự đoán xem cái nào dùng được. Nỗi khổ này tôi tin bạn đã quen.' },
      { name: 'Vì sao trúng', text: 'Lý do, kỳ thực, không có gì cao siêu. Máy đã đọc giúp bạn rồi. Đọc xong nó tóm lại thành câu trả lời. Tôi xin được nhấn mạnh một ý mà nhiều người hay nhầm: máy không thông minh hơn bạn đâu. Nó chỉ chăm hơn. Mà chăm, đôi khi, lại hơn thông minh. Các cụ chắc cũng đồng ý — chỉ là quên không ghi vào ca dao.' },
      { name: 'Khi nào đừng hỏi máy', text: 'Có lúc bạn nên cất máy đi mà mở văn bản gốc ra. Chuyện luật chẳng hạn — BHXH, hợp đồng lao động — máy mà lỡ phịa con số, sếp hỏi lại bạn không cãi nổi đâu. Hợp đồng quan trọng cũng vậy: luật sư học bảy năm chứ có ít, không phải để máy thay. À, còn một ý nữa — data nhạy cảm. Cái này tôi không nói dài: đừng quăng vào prompt. Mất thì khổ. Có khi không phải mỗi mình bạn khổ.' },
    ],
    lanVoice: 'Tôi đoán bạn đang lo: "Em chưa biết HTML, làm web kiểu gì?" Câu hỏi rất hay. Câu trả lời ngắn hơn câu hỏi: không cần biết. Năm 2026 rồi, code là việc của máy. Việc của bạn là mở miệng ra. Chín mươi phút nữa cái link nó nằm trên Zalo bio rồi — ai vào cũng tưởng bạn vừa đi bootcamp ba tháng về.',
    outcomes: {
      cam: [
        'Trang web cá nhân chạy ở localhost, có pháo hoa nổ thật bằng canvas (không phải GIF)',
        'Form contact gửi tin về Telegram bạn (cần token bot — hướng dẫn ở Step 4)',
        'URL công khai sẽ deploy ở Buổi 1.5 (Cloudflare Pages dùng chung của khoá — bạn không cần biết DevOps)',
      ],
      tuduy: [
        'Cái máy này KHÁC ChatGPT — nó tự tạo file, tự đẩy lên mạng, không cần bạn copy paste',
        'Tả việc cho máy y như viết JD cho nhân viên mới: rõ thì việc xong, mơ hồ thì khỏi bàn',
        'Bí gì hỏi nó. Đừng quay sang Google nữa, mất thì giờ mà nhiều khi cũng không ra',
      ],
    },
    steps: [
      {
        title: 'Cài Claude Code Desktop về máy', xp: 20,
        desc: 'Đây là Buổi 0 thật ra — chưa paste prompt vội. Theo 6 bước hướng dẫn dưới đây.',
        sampleType: 'instruction',
        samplePrompt: `1. Mở claude.ai trên trình duyệt → Đăng nhập (Google account)
2. Menu → "Claude Code" → tải bản Desktop cho hệ điều hành của bạn (Windows/Mac/Linux)
3. Mở file vừa tải → cài như app thường (Next/Next/Finish)
4. Mở Claude Code Desktop → đăng nhập lại
5. New Workspace → đặt tên "hr-builder-lan-1" → chọn folder bất kỳ trên Desktop
6. Khi thấy ô chat (hỏi "Bạn cần làm gì?") → bạn đã sẵn sàng. Sang Step 2.

⚠ Nếu kẹt ở bước nào: bấm "Bí? Hỏi Bạn đồng hành" góc dưới phải, ghi rõ "kẹt ở bước số X, lỗi: ...". KHÔNG Google.`,
      },
      {
        title: 'Dựng trang web cá nhân có pháo hoa', xp: 50,
        desc: 'Paste prompt mẫu dưới vào ô chat Claude Code, điền chỗ [...] rồi nhấn Enter. Bạn ngồi xem, đừng đụng gì.',
        sampleType: 'prompt',
        samplePrompt: `Tôi tên là [TÊN BẠN — ví dụ: Nguyễn Thị Tuyền].
Tôi làm [VAI TRÒ — ví dụ: HR Executive] tại [CÔNG TY — ví dụ: An Nam Retail].

Hãy tạo cho tôi 1 trang web cá nhân hoàn chỉnh trong duy nhất 1 file index.html:
- Pháo hoa nổ THẬT bằng canvas/JavaScript (KHÔNG GIF, KHÔNG ảnh)
- Header: tên + vai trò + giới thiệu 2-3 câu (về tôi, viết thay tôi)
- 3 nút link giả: Email, LinkedIn, Zalo
- Theme dark mode, animation mượt

Tạo xong: mở localhost cho tôi preview ngay.`,
      },
      {
        title: 'Đổi màu, chỉnh pháo hoa to nhỏ', xp: 30,
        desc: 'Test sức mạnh "ra lệnh". Paste 1-2 câu, máy sửa ngay.',
        sampleType: 'prompt',
        samplePrompt: `Đổi pháo hoa thành màu [MÀU — ví dụ: xanh dương / hồng pastel / vàng cam phối tím].
Mỗi lần pháo hoa nổ, ra nhiều hạt hơn — to gấp đôi hiện tại.
Sau khi sửa, refresh browser cho tôi xem.`,
      },
      {
        title: 'Thêm ô gửi tin về Telegram', xp: 60,
        desc: '⚠ Step này CẦN 2 PRE-REQUISITE. Đọc kỹ phần dưới TRƯỚC khi paste prompt — nếu không sẽ kẹt 15-30 phút.',
        sampleType: 'prompt',
        samplePrompt: `📋 PRE-REQUISITE — làm 2 việc này TRƯỚC khi paste prompt:

1. LẤY BOT TOKEN:
   • Mở Telegram → tìm @BotFather → bấm Start
   • Gõ /newbot → đặt tên bot (vd "Lan Contact Bot") → đặt username (vd "lan_contact_bot")
   • Copy chuỗi dạng "8123456789:ABC-DEF1234..." — đây là TOKEN

2. LẤY CHAT_ID CỦA BẠN:
   • Trên Telegram tìm @userinfobot → bấm Start
   • Nó trả về số (vd "987654321") — đây là CHAT_ID

Có 2 thứ rồi → paste prompt sau:
─────────────────────────
Thêm vào index.html 1 form contact ở cuối trang:
- Input: Tên, SĐT/Email, Lời nhắn
- Khi bấm Gửi: fetch POST tới Telegram Bot API
- Bot token: [PASTE TOKEN VÀO ĐÂY]
- Chat ID: [PASTE CHAT_ID VÀO ĐÂY]
- Hiển thị "Đang gửi…" / "✅ Đã gửi" / "❌ Lỗi: [chi tiết]"
- Style khớp dark mode hiện tại

Test bằng cách điền form thật → check Telegram của tôi xem tin có tới không.`,
      },
      {
        title: 'Ngẫm lại: vừa rồi bạn học được gì?', xp: 40,
        desc: 'Step duy nhất KHÔNG paste prompt cho máy — bạn tự viết. Bài này bot chấm theo rubric 3 phần dưới đây. Thiếu 1 phần là borderline.',
        gradingCriteria: [
          'Phần 1: liệt kê đủ 5 việc đã làm, mỗi việc có ít nhất 2 câu (làm gì + chỗ khó/dễ). KHÔNG chấp nhận "xong", "ok", "đã làm".',
          'Phần 2: có ít nhất 1 câu hỏi cụ thể về điều chưa rõ. Câu chung chung kiểu "khoá hay không thầy?" KHÔNG tính.',
          'Phần 3: chọn 1 bài HR cụ thể + mô tả prompt sẽ paste + kỳ vọng kết quả. Tối thiểu 3 câu. "Tôi sẽ áp dụng" không kèm chi tiết = fail phần này.',
        ],
        sampleType: 'rubric',
        samplePrompt: `📝 Cấu trúc bài tổng kết (paste vào textarea bên dưới):

PHẦN 1 — NĂM THỨ EM LÀM HÔM NAY (mỗi thứ 2 câu, ghi rõ làm gì + chỗ khó):
1. ...
2. ...
3. ...
4. ...
5. ...

PHẦN 2 — MỘT CÂU HỎI EM CÒN VƯỚNG (thầy sẽ trả lời trên Zalo cohort):
> ...

PHẦN 3 — MỘT BÀI HR EM SẼ ÁP TƯ DUY VỪA HỌC (3-5 câu):
- Bài HR đó là gì:
- Em sẽ paste prompt như nào:
- Kỳ vọng kết quả ra sao:`,
      },
    ],
  },

  2: {
    week: 'TUẦN 2', duration: '90 phút',
    title: 'Một prompt, một dashboard tuyển dụng. Ba mươi CV xong trong năm phút. Vâng, ba mươi.',
    sub: 'Lần này CV thật, không phải CV demo. Output không phải Sheet chán đời — là dashboard click ra modal đẹp như báo cáo của tập đoàn.',
    principle: { num: 2, name: 'Chia nhỏ việc' },
    hints: [
      'Cái việc "screen ba mươi CV" — nó không phải MỘT việc đâu…',
      'Nó là năm việc nhỏ máy xử lần lượt: đọc → trích → đối chiếu → chấm → vẽ ra…',
      'Việc to chia nhỏ → mỗi mảnh máy biết phải làm gì → kết quả ra đúng ý',
    ],
    revealMsg: 'Bài to mà khó → CHIA ra từng mảnh nhỏ → máy xử từng mảnh một. Đây là tư duy đắt thứ hai, sau cái rễ ở buổi 1.',
    layers: [
      { name: 'Là cái gì', text: 'Việc khó thì tách thành năm bảy bước nhỏ, mỗi bước có đầu vào đầu ra rõ ràng. Máy xử từng bước, không bị "ngợp". Cái chữ "ngợp" này tôi mượn của các bạn đi học sinh viên — máy cũng có lúc ngợp như sinh viên thi cuối kỳ.' },
      { name: 'Vì sao trúng', text: 'Prompt to mà mơ hồ thì máy đoán mò — đoán mò thì sai. Prompt năm bước rõ ràng thì máy biết phải làm gì lần lượt, sai chỗ nào sửa chỗ ấy, không phải đập đi xây lại từ đầu. Cái này HR ta hay gọi là "có quy trình". Tên nó hơi khô, nhưng work.' },
      { name: 'Khi nào đừng dùng', text: 'Việc đơn giản một bước — kiểu "tóm tắt giúp tôi đoạn này" — đừng overengineer. Chia nhỏ chỉ làm khi việc có ba bước rõ trở lên. Nhỏ quá mà cũng chia thì giống ăn phở mà phải lập biểu đồ Gantt. Không cần.' },
    ],
    lanVoice: 'Tôi nghe bạn lo: "CV thật có ảnh, có scan ngược chiều, máy đọc nổi không?" Câu hỏi rất hay, và câu trả lời cũng vui: máy quý 4/2026 đọc CV scan tốt hơn bạn nghĩ — có khi tốt hơn cả bạn vào lúc bốn giờ chiều mệt mỏi. Test ngay buổi này, không phải nghe tôi nói suông.',
    outcomes: {
      cam: [
        'Dashboard HTML interactive — click vào ứng viên là ra modal popup',
        'Ba mươi CV đã chấm, mỗi CV có lý do cụ thể chứ không phải con số khô',
        'Top 5 hiển thị radar chart — sếp nhìn cái gật ngay',
      ],
      tuduy: [
        'Bài lớn → tách thành bước nhỏ. Quy trình ra trước, prompt theo sau',
        'Mỗi bước có đầu vào đầu ra rõ — máy không tự diễn',
        'Anonymize trước khi đưa data — đừng để CV của ứng viên đi du lịch ngoài ý muốn',
      ],
    },
    steps: [
      {
        title: 'Anonymize 30 CV (che SĐT, CCCD, tên, ảnh)', xp: 30,
        desc: '⚠ Theo Nghị định 13/2023 (bảo vệ dữ liệu cá nhân VN), CV chứa PII — bạn phải che TRƯỚC khi đưa cho AI. KHÔNG chỉ che SĐT/CCCD như khoá cũ — bổ sung danh sách dưới.',
        sampleType: 'instruction',
        samplePrompt: `📋 PII (Personal Identifiable Information) cần ANONYMIZE TRƯỚC khi gửi cho AI:

✅ BẮT BUỘC redact:
- Họ tên đầy đủ → thay bằng "Ứng viên #1, #2, ..."
- Số điện thoại → che 4 số cuối (vd: 0901234*** )
- Email → giữ domain, che username (vd: ***@gmail.com)
- CCCD/CMND → xoá hoàn toàn
- Ảnh chân dung → xoá khỏi PDF
- LinkedIn URL → xoá
- Địa chỉ chi tiết → giữ Quận/Thành phố, xoá số nhà/đường

✅ GIỮ LẠI (không phải PII):
- Năm sinh / khoảng tuổi (vd: "26-30 tuổi")
- Giới tính
- Trường đại học, năm tốt nghiệp
- Kinh nghiệm (công ty cũ thì che tên, giữ "công ty bán lẻ ~500 nhân viên")
- Kỹ năng, ngôn ngữ, certificate

CÁCH LÀM (chọn 1):
(a) NHANH NHẤT — paste prompt cho Claude Code:
"Đọc tất cả file trong folder ./cvs/, anonymize theo checklist trên (giữ năm sinh, kỹ năng, giấu PII). Output sang folder ./cvs-anon/ giữ format gốc."

(b) THỦ CÔNG — mỗi CV mở Word/PDF, Find/Replace 7 mục PII trên. ~3 phút/CV × 30 = 90 phút.

⚠ Nếu công ty bạn chưa có 30 CV thật: dùng bộ CV mẫu của khoá tại /sample-cvs/ (30 CV synthetic VN, đã anonymize sẵn).`,
      },
      {
        title: 'Một prompt, dashboard hiện ra', xp: 80,
        desc: 'Paste prompt 5 bước (CHIA NHỎ VIỆC) — máy chấm 30 CV → render dashboard. Đây là "wow moment" của khoá.',
        sampleType: 'prompt',
        samplePrompt: `Tôi vừa anonymize 30 CV trong folder ./cvs-anon/.
Vai trò tuyển: [VAI TRÒ — vd: Sales Lead chuỗi bán lẻ]
Yêu cầu chính của vị trí (5 yêu cầu):
1. [Vd: 3+ năm kinh nghiệm bán lẻ]
2. [Vd: Tiếng Anh giao tiếp]
3. [Vd: Đã quản lý team ≥ 5 người]
4. [Vd: Sẵn sàng đi miền Bắc 1-2 lần/tháng]
5. [Vd: Lương kỳ vọng ≤ 25M]

Hãy làm theo 5 BƯỚC (chia nhỏ việc):
BƯỚC 1: Đọc 30 CV → trích {id, exp_years, key_skills[], salary_expect_M, languages[], management_yrs, location}
BƯỚC 2: Đối chiếu mỗi CV với 5 yêu cầu trên → cho điểm 0-10 mỗi yêu cầu, ghi 1 câu lý do
BƯỚC 3: Tổng score = trung bình 5 yêu cầu → rank
BƯỚC 4: Top 5 → trích thêm 2 quote từ CV làm evidence
BƯỚC 5: Render file dashboard.html (1 file standalone, dùng Chart.js qua CDN):
  - Bảng 30 ứng viên (sort/filter), highlight Top 5
  - Click 1 hàng → modal popup hiện CV anonymized + radar chart 5 chiều (5 yêu cầu)
  - Top 5 panel riêng, radar chart so sánh 5 người
  - Theme dark mode

Mở dashboard.html cho tôi xem.`,
      },
      {
        title: 'Sửa đi sửa lại: bo tròn avatar, thêm cột', xp: 30,
        desc: 'Test sức mạnh "iterate". Paste 1 lệnh sửa, máy update cả schema + UI.',
        sampleType: 'prompt',
        samplePrompt: `Sửa dashboard.html:
1. Thêm cột "Lương kỳ vọng (M VND)" — sort được
2. Bo tròn avatar mỗi hàng (dù đang là placeholder, vẫn cần round)
3. Thêm filter dropdown "Lọc theo khu vực: TP.HCM / Hà Nội / Khác"
4. Top 5 panel — đổi từ list dọc sang grid 5 cột

Refresh browser sau khi sửa.`,
      },
      {
        title: 'Click ứng viên ra modal popup', xp: 40,
        desc: 'Modal đẹp = sếp gật ngay. Paste prompt thêm chi tiết.',
        sampleType: 'prompt',
        samplePrompt: `Sửa modal popup khi click 1 ứng viên trong dashboard:
1. Hiện 4 phần:
   - Header: ID + Tổng score + radar chart cá nhân
   - "Match" (xanh lá): 2-3 câu evidence chứng minh ứng viên match yêu cầu
   - "Miss" (cam): điểm yếu chính, 1-2 câu
   - Bottom: 3 nút action giả "📞 Gọi", "📧 Email", "📅 Hẹn phỏng vấn"
2. Modal có animation slide-in từ phải, click ngoài = đóng
3. Phím ESC cũng đóng modal được

Refresh + click thử 1 ứng viên Top 5 cho tôi xem.`,
      },
      {
        title: 'Đo Trước/Sau và viết transfer plan', xp: 70,
        desc: 'Step duy nhất KHÔNG paste prompt — bạn tự viết. Bot chấm theo rubric 4 phần.',
        sampleType: 'rubric',
        samplePrompt: `📝 Cấu trúc bài tổng kết Buổi 2:

PHẦN 1 — BẢNG TRƯỚC/SAU (≥ 3 hàng số liệu cụ thể):
| Tiêu chí | Trước (làm tay) | Sau (dùng agent) | Tiết kiệm |
|---|---|---|---|
| Thời gian sàng 30 CV | __ phút | __ phút | __% |
| Số CV miss top thực tế | __ | __ | |
| __ | __ | __ | |

PHẦN 2 — TƯ DUY "CHIA NHỎ VIỆC" ĐÃ DÙNG NHƯ THẾ NÀO (3-5 câu):
> Bài này tôi chia thành ... bước, mỗi bước có đầu vào X và đầu ra Y, mục đích là ...

PHẦN 3 — 1 CÂU HỎI EM CÒN VƯỚNG:
> ...

PHẦN 4 — BÀI HR KHÁC EM SẼ ÁP "CHIA NHỎ VIỆC" (3-5 câu):
- Bài đó là gì:
- Tôi sẽ chia thành mấy bước, mỗi bước làm gì:
- Kỳ vọng kết quả gì:`,
        gradingCriteria: [
          'Phần 1: bảng Trước/Sau có ít nhất 3 hàng, mỗi hàng có CON SỐ cụ thể (phút/giờ/%/cái), KHÔNG chấp nhận "nhanh hơn", "đỡ hơn".',
          'Phần 2: mô tả ít nhất 3 bước chia nhỏ với input/output rõ. Câu chung chung "tôi chia thành nhiều bước" KHÔNG tính.',
          'Phần 3: có 1 câu hỏi cụ thể.',
          'Phần 4: chọn 1 bài HR khác (KHÔNG phải tuyển dụng) + chia ≥ 3 bước. "Tôi sẽ áp dụng vào HR" mà không cụ thể = fail.',
        ],
      },
    ],
  },

  3: {
    week: 'TUẦN 3', duration: '90 phút',
    title: 'Đóng gói thành "Skills Package". Đồng nghiệp clone về máy là chạy. Bạn không còn phải làm bottleneck.',
    sub: 'Có brand công ty bạn, năm cái lệnh, đồng nghiệp tải về năm phút là dùng được. Nói cách khác: bạn nhân bản chính mình.',
    principle: { num: 3, name: 'Tả việc rõ' },
    hints: [
      'Viết yêu cầu cho máy giống y như viết…',
      '…JD cho nhân viên mới — rõ đến mức ai đọc cũng làm giống nhau, không tự diễn…',
      'Tách "kiến thức nghề" (rubric, brand) ra khỏi "quy trình" (cách chạy)',
    ],
    revealMsg: 'Tả việc cho máy = viết JD cho nhân viên ảo. Càng rõ, máy càng đúng ý. Càng mơ hồ, máy càng diễn xuất. Mà diễn xuất thì để Oscar, không để công sở.',
    layers: [
      { name: 'Là cái gì', text: 'Mỗi việc giao cho máy phải có đủ: vai trò, các bước, tiêu chí pass, trường hợp đặc biệt. Y như JD. Có lẽ trong đời HR bạn đã viết hàng trăm cái JD — giờ chỉ là viết JD cho một nhân viên không bao giờ xin nghỉ phép.' },
      { name: 'Vì sao trúng', text: 'Máy nó không đọc được "ý ngầm" của bạn đâu. Bạn ngầm hiểu chứ máy không ngầm hiểu. Tả rõ → kết quả nhất quán → đồng nghiệp dùng cũng ra cùng output. Không phải mỗi bạn ngồi chạy, vừa chạy vừa cằn nhằn.' },
      { name: 'Khi nào đừng dùng', text: 'Việc khám phá — kiểu brainstorm sơ bộ, "bạn cứ vẽ vài ý cho tôi xem" — thì đừng spec chặt. Spec chặt chỉ làm khi cần kết quả nhất quán + đồng nghiệp dùng lại. Brainstorm mà spec chặt thì giống đi ăn buffet mà tự gọi từng món, mất hết cái thú.' },
    ],
    lanVoice: 'Tôi đoán bạn lo: "Đóng gói cho mệt, paste prompt mỗi lần là xong rồi mà." Câu hỏi cũng hay. Nhưng paste hai trăm dòng prompt mỗi lần thì mệt, mệt thật. Đóng gói rồi → đồng nghiệp gõ /screen-cv là chạy. Sếp hỏi "phòng mình có quy trình không?" → bạn show cái folder, sếp gật. Đỡ phải giải trình mười lăm phút.',
    outcomes: {
      cam: [
        'GitHub repo private có brand công ty bạn',
        'Năm lệnh + sáu file skill, gọn ghẽ như tủ thuốc',
        'Đồng nghiệp clone về máy năm phút là chạy được',
      ],
      tuduy: [
        'Skill = kiến thức nghề (ít khi sửa)',
        'Command = quy trình (sửa thường xuyên)',
        'Tách hai cái ra → đổi rubric không phải viết lại quy trình',
      ],
    },
    steps: [
      { title: 'Tạo cấu trúc Skills Package',           xp: 30, desc: 'Folder .claude/skills/ với SKILL.md + rubric + brand-voice + format. Cái này máy tạo giúp, bạn chỉ ngồi duyệt.' },
      { title: 'Điền brand voice công ty bạn',          xp: 50, desc: 'Tone, từ cấm dùng, phúc lợi mặc định, format JD bắt buộc. Đây là phần CHỈ bạn biết, máy đoán không nổi.' },
      { title: 'Build 5 lệnh: /screen-cv, /draft-jd…',  xp: 60, desc: 'Mỗi lệnh ngắn gọn — gọi skill, không tự định nghĩa rubric. Tách bạch ra cho dễ sửa sau.' },
      { title: 'Test với JD ngành khác',                xp: 40, desc: 'Chạy /draft-jd cho một vị trí khác hẳn ngành chính. Brand có giữ được không? Hay máy "lạc giọng"?' },
      { title: 'Push GitHub + share đồng nghiệp',       xp: 70, desc: 'Repo private. Đồng nghiệp clone, chạy, ghi nhận trải nghiệm. Đây là khoảnh khắc bạn nhân bản được mình.' },
    ],
  },

  4: {
    week: 'TUẦN 4', duration: '90 phút · ⭐ MỐC HOÀN 5M',
    prereqWarning: '⚠ Buổi này YÊU CẦU Claude Code Max ($100/tháng) để dùng Routines cloud. Nếu bạn đang dùng Pro $20: chọn 1 trong 2 — (a) upgrade lên Max trước Tuần 3, hoặc (b) dùng path thay thế local cron + GitHub Actions (Lan hướng dẫn 1-1 ở Office Hour). Không upgrade và không follow path thay thế = không pass mốc 5M, hoàn tiền sẽ không áp dụng.',
    title: 'Routines: agent chạy 24/7 trên cloud. Tắt laptop, agent vẫn ngồi xét CV trong đêm.',
    sub: 'Sáu giờ sáng máy nhắn Telegram bạn: "Đêm qua xử năm CV mới. Top 1: Vũ Thị An, 9.2/10." Bạn ngủ. Máy thì không ngủ.',
    principle: { num: 4, name: 'Tự kích hoạt' },
    hints: [
      'Buổi 1-3 bạn phải mở Claude Code thì agent mới chạy được…',
      'Tuần này agent chạy KHI có sự kiện — không cần bạn ra lệnh nữa…',
      'Sáu giờ sáng → agent tự dậy → quét folder → screen CV → nhắn Telegram',
    ],
    revealMsg: 'Agent chạy KHI sự kiện xảy ra (theo giờ / có tin / có file mới). Bạn không cần online. Đây là tư duy biến HR thành "rảnh tay 24/7" — nghe hơi quảng cáo, nhưng quả thực vậy.',
    layers: [
      { name: 'Là cái gì', text: 'Routines = agent chạy trên cloud Anthropic theo lịch / theo API webhook / theo GitHub event. Tắt máy bạn đi, agent vẫn chạy. Cái máy của bạn cuối cùng cũng được nghỉ phép — nó cảm ơn bạn lắm đấy.' },
      { name: 'Vì sao trúng', text: 'Anthropic host agent giúp bạn — tính tiền theo lúc chạy, khoảng hai mươi cent một tháng cho một routine năm phút mỗi ngày. Bạn không phải build server. Bạn không phải biết cloud là gì. Bạn chỉ cần biết cách bật cái nút "Activate".' },
      { name: 'Khi nào đừng dùng', text: 'Việc làm một lần thôi — kiểu "screen batch CV này hôm nay xong là xong" — đừng đẻ ra routine. Routine chỉ dành cho việc LẶP nhiều lần. Việc một lần thì làm một lần, đẻ routine cho nó là phí tài nguyên cả tinh thần lẫn cloud.' },
    ],
    lanVoice: 'Tôi đoán bạn lo: "Data CV gửi cloud Anthropic có an toàn không?" Câu hỏi rất hay, và rất nên hỏi sớm. Anthropic không train trên data routine — bạn bật zero retention là xong. Tuần 9 mình bàn sâu chuyện compliance, lúc đó bạn yên tâm hơn.',
    outcomes: {
      cam: [
        'Routine (cloud Max HOẶC local cron Pro $20) active đủ 7 ngày liên tiếp — log kiểm chứng được',
        'Bảng ROI Trước/Sau với ≥ 3 measurable cụ thể (giờ/tuần, % accuracy, # CV xử lý)',
        'GitHub repo có ≥ 5 guardrails đầy đủ — phòng cháy chữa cháy luôn',
      ],
      tuduy: [
        'Trigger có ba kiểu: theo lịch / theo API / theo GitHub event',
        'Cloud > local khi cần 24/7 — đơn giản vậy thôi',
        'Mọi routine BẮT BUỘC có rào chắn. Không có rào, đừng deploy.',
      ],
    },
    steps: [
      {
        title: 'Setup trigger (cloud Max HOẶC local cron)', xp: 40,
        desc: 'Tuỳ plan: Max → cloud, Pro $20 → local. Cả 2 đều OK pass mốc.',
        sampleType: 'instruction',
        samplePrompt: `📋 Chọn 1 trong 2 path:

PATH A — CLAUDE CODE MAX ($100/tháng):
1. Mở claude.ai/code → tab "Routines" (nút bánh răng)
2. + New Routine → tên "Daily HR Briefing 6h"
3. Trigger: Schedule → 06:00 daily (Asia/Ho_Chi_Minh)
4. Save (chưa active)

PATH B — CLAUDE CODE PRO $20 (alternative):
1. Trên máy bạn (luôn bật / có cloud sync), mở terminal
2. Chạy: \`crontab -e\` (Mac/Linux) hoặc Task Scheduler (Windows)
3. Thêm dòng: \`0 6 * * * cd ~/hr-builder-lan-1 && claude run prompt-routine.md > log-$(date +%Y%m%d).txt\`
4. Save → kiểm với: \`crontab -l\`

Cả 2 path đều cần Step 2 (viết prompt routine + guardrails).

⚠ Pro $20 path: máy bạn phải bật 6h sáng (đặt báo thức wake máy). Nếu máy tắt ngày nào → ngày đó không count vào "7 ngày liên tiếp" cam kết.`,
      },
      {
        title: 'Một prompt → Routine config + 5 guardrails', xp: 80,
        desc: 'Viết prompt routine (8 bước) + 5 guardrails BẮT BUỘC. Guardrail = rào chắn an toàn.',
        sampleType: 'prompt',
        samplePrompt: `📋 Lưu prompt sau vào file prompt-routine.md trong repo:

---
ROUTINE: Daily HR Briefing 06:00

CONTEXT: Tôi là [VAI TRÒ] @ [CÔNG TY]. Mảng [MẢNG]. Mỗi sáng cần 1 brief tóm gọn về CV mới + lịch hôm nay.

8 BƯỚC AGENT THỰC HIỆN:
1. Đọc folder ./cvs-incoming/ → list file mới (timestamp > 24h trước)
2. Anonymize PII (theo Nghị định 13 — checklist Buổi 2)
3. Score mỗi CV theo rubric công ty (đọc từ ./brand/rubric.md)
4. Top 3 → trích quote evidence
5. Đọc Google Calendar → lấy lịch hôm nay (interview, meeting)
6. Compile brief markdown: {top_cv, today_schedule, action_items}
7. Gửi brief tới Telegram chat_id [PASTE CHAT_ID]
8. Log vào ./logs/YYYY-MM-DD.md

5 GUARDRAILS BẮT BUỘC (KHÔNG được skip):
1. KHÔNG gửi PII chưa anonymize ra ngoài → check before each Gemini call
2. Timeout cứng 5 phút/CV → tránh infinite loop
3. Cost cap $0.50/run → routine tự stop nếu vượt
4. Nếu confidence < 70% → KHÔNG quyết, escalate qua Telegram "cần bạn xem"
5. Mỗi run log đầy đủ vào ./logs/ — không silent fail

OUTPUT MẪU (xem ./samples/brief-example.md).
---

Sau khi save file, paste prompt này cho Claude Code:
"Đọc prompt-routine.md, validate 8 bước + 5 guardrails có đủ + actionable không. Liệt kê thiếu gì."`,
      },
      {
        title: 'Test "Run now" → Telegram đổ tin', xp: 50,
        desc: 'Test trước khi activate. Đảm bảo Telegram nhận được brief.',
        sampleType: 'instruction',
        samplePrompt: `1. Đảm bảo có ≥ 3 CV trong ./cvs-incoming/ (dùng CV mẫu từ Buổi 2 nếu cần)
2. Path A (Max): mở Routines → routine của bạn → "Run now" button
3. Path B (Pro): chạy thủ công \`claude run prompt-routine.md\` để test
4. Đợi 2-5 phút (Gemini gọi 8 bước = ~30-60s/CV)
5. Check Telegram → bot phải nhắn brief markdown đầy đủ
6. Check ./logs/ → có file log timestamp đúng không

⚠ Nếu fail:
- Telegram không nhận → check token + chat_id trong file (cùng cách Buổi 1)
- Brief rỗng → check anonymize bước 2 có over-redact không
- Cost vượt → review guardrail 3 + giảm số CV/run`,
      },
      {
        title: 'Activate Routine + chạy 7 ngày', xp: 100,
        desc: 'Bật + theo dõi log mỗi sáng 7 ngày liên tiếp.',
        sampleType: 'instruction',
        samplePrompt: `1. Path A (Max): toggle "Active" trên Routines manager → ON
2. Path B (Pro): cron đã add ở Step 1 — verify với \`crontab -l\`

Mỗi sáng 6 ngày tới:
- Telegram phải có brief lúc 06:00-06:05
- Mở ./logs/ check log entry ngày đó
- Tick vào checklist:
  □ Day 1 (YYYY-MM-DD): brief OK / fail
  □ Day 2: ...
  □ Day 3: ...
  □ Day 4: ...
  □ Day 5: ...
  □ Day 6: ...
  □ Day 7: ...

⚠ Day nào fail (no brief, no log): ghi rõ lý do + fix ngay (đừng để fail 2 ngày liên tiếp).

Pass mốc: 7/7 ngày có brief + log. 6/7 = borderline, Lan review case-by-case. ≤5/7 = fail.`,
      },
      {
        title: 'Báo cáo Trước/Sau (mốc hoàn 5M)', xp: 130,
        desc: 'Đo cụ thể với 3 measurable. KHÔNG cần đạt "5h/tuần" — chỉ cần measurable + log đủ.',
        sampleType: 'rubric',
        samplePrompt: `📝 Bảng báo cáo Trước/Sau Buổi 4 — paste vào textarea bên dưới.

PHẦN 1 — 3 MEASURABLE CỨNG (BẮT BUỘC đủ 3):

| # | Tiêu chí | Trước (tuần làm tay) | Sau (tuần routine) | Evidence |
|---|---|---|---|---|
| 1 | Thời gian sàng CV/tuần | __ giờ | __ giờ | Link logs |
| 2 | # CV xử lý/tuần | __ CV | __ CV | Link logs |
| 3 | Accuracy (ứng viên qua phỏng vấn / total) | __% | __% | Link recruiter feedback |

PHẦN 2 — ROUTINE LOGS (link đính kèm):
- 7 entries log: [link folder logs]
- 7 Telegram screenshot: [link Drive]
- Routine config: [link prompt-routine.md trên GitHub]

PHẦN 3 — 5 GUARDRAILS đã trigger thực tế tuần qua (số lần):
- G1 (PII check): __ lần
- G2 (timeout): __ lần
- G3 (cost cap): __ lần
- G4 (confidence escalate): __ lần
- G5 (logging): __ lần

⚠ MỐC HOÀN 5M:
- PASS = 3/3 measurable nộp đủ + 7/7 ngày log + 5 guardrails functional
- KHÔNG yêu cầu "5h/tuần" — chỉ cần đo được + active 7 ngày
- Lan review evidence trong 48h → quyết định pass/fail/borderline`,
        gradingCriteria: [
          'Phần 1: đủ 3 hàng measurable, mỗi hàng có CON SỐ Trước + Sau (không "nhanh hơn"). Ô Evidence không được rỗng.',
          'Phần 2: ≥ 7 log entries (link folder hoặc paste 7 timestamp).',
          'Phần 3: 5 guardrails liệt kê số lần trigger (0 lần OK, miễn không rỗng).',
        ],
      },
    ],
  },

  5: {
    week: 'TUẦN 5', duration: '90 phút',
    title: 'Connector: agent đụng được Drive, Gmail, Zalo OA, HRIS. Microsite cá nhân hóa cho top 5 ứng viên.',
    sub: 'Mỗi top 5 có một URL riêng, lời nhắn cá nhân hóa, lịch phỏng vấn nhúng sẵn. Recruiter bên đối thủ há hốc mồm.',
    principle: { num: 5, name: 'Đưa công cụ' },
    hints: [
      'Bốn tuần đầu agent chỉ "biết" — nhưng chưa "làm" được gì lớn…',
      'Tuần này agent có "tay chân" — kết nối Drive, Gmail, Zalo, HRIS…',
      'Click connect như bật notification điện thoại — không gõ một dòng API',
    ],
    revealMsg: 'Đưa cho agent quyền truy cập hệ thống thật → nó không còn là chatbot. Nó thành "đồng nghiệp ảo có quyền hành động". Mà đồng nghiệp ảo thì không xin nghỉ ốm.',
    layers: [
      { name: 'Là cái gì', text: 'MCP — viết tắt của một thứ tiếng Anh dài dòng tôi xin được lược qua — là chuẩn để agent kết nối Drive/Gmail/Zalo/Notion bằng vài cú click. Không gõ code API. Hồi 2024 muốn làm cái này phải thuê dev một tuần. Giờ click năm phút.' },
      { name: 'Vì sao trúng', text: 'Agent có "tay chân" rồi thì làm việc thật, không chỉ chat suông. Chat suông thì giống nhân viên buôn chuyện hành lang — vui, nhưng không ra việc. Có tay chân thì nó đi pha cà phê, gửi email, log vào HRIS. Khác hẳn.' },
      { name: 'Khi nào đừng dùng', text: 'Đừng connect hai mươi hệ thống cùng lúc. Bắt đầu ít. Mỗi connector có scope rõ — kiểu "Drive READ-ONLY folder cv-incoming/" — đừng để agent có chìa khóa toàn nhà. Có chìa khóa toàn nhà thì lỡ tay là banh nhà, không phải lỡ tay là quét lại bếp.' },
    ],
    lanVoice: 'Tôi nghe bạn lo: "Sếp không cho dùng Zalo OA cho agent đâu." Câu này tôi nghe nhiều lắm rồi. Cách giải: làm pilot năm ứng viên trước, đo "agent giảm 60% câu hỏi candidate" → show sếp con số → sếp gật. Đừng xin trước. Show kết quả trước. Người Việt mình nghe số dễ gật hơn nghe lý thuyết.',
    outcomes: {
      cam: [
        'Bốn connector active, sáng đèn xanh đẹp',
        'Năm microsite cá nhân hóa cho top 5 ứng viên',
        'Zalo OA bot trả ba câu cơ bản, candidate hỏi không phải đợi',
      ],
      tuduy: [
        'Mỗi connector có scope rõ ràng. Không scope rõ là không connect',
        'Audit hằng tuần — xem agent dùng connector nào, bao nhiêu lần',
        'Bắt đầu ít, scale dần. Đừng tham một lúc',
      ],
    },
    steps: [
      { title: 'Connect 4 hệ thống (Drive/Gmail/Zalo/HRIS)', xp: 50, desc: 'Settings → MCP → Add. Bốn connector sáng đèn là OK. Đẹp như bốn cái đèn đường mới lắp.' },
      { title: 'Một prompt → 5 microsite + 5 email draft',    xp: 80, desc: 'Mỗi ứng viên một URL, lời nhắn personalized, lịch phỏng vấn nhúng sẵn. Cá nhân hóa thật, không phải mail merge thường.' },
      { title: 'Setup Zalo OA bot trả candidate',             xp: 60, desc: 'Bot trả lời các câu cơ bản. Câu khó → escalate cho bạn. Bot biết phận của nó, không tự diễn quá đà.' },
      { title: 'Log activity vào HRIS công ty',               xp: 50, desc: 'Tạo candidate record + activity log có timestamp. Sếp hỏi "ai đang ở vòng nào" → bạn show được.' },
      { title: 'Ngẫm: bài HR nào cần connector gì?',          xp: 60, desc: 'Transfer plan: chọn một bài HR khác + bốn connector phù hợp. Không nhất thiết phải tuyển dụng.' },
    ],
  },

  6: {
    week: 'TUẦN 6', duration: '90 phút',
    title: 'Multi-agent: bốn trợ lý ảo chạy song song như team HR. Tốc độ nhanh gấp bốn.',
    sub: 'Một agent screen, một đối chiếu, một viết feedback, một báo cáo. Bạn ngồi xem bốn cửa sổ làm việc cùng lúc — như xem trận bóng có bốn camera.',
    principle: { num: 6, name: 'Phối hợp nhiều agent' },
    hints: [
      'Buổi 5 agent của bạn một mình làm bảy việc — nó cũng mệt…',
      'Tuần này chia bảy việc cho bốn agent con, chạy song song…',
      'Một orchestrator điều phối — như HR Manager điều team junior, nhưng team junior này không xin nghỉ phép',
    ],
    revealMsg: 'Việc khó chia cho nhiều agent. Mỗi agent một vai. Có một "trưởng team" điều phối. Nguyên tắc giống y team người thật, chỉ khác là không phải mời cà phê.',
    layers: [
      { name: 'Là cái gì', text: 'Orchestrator agent chia task cho ba đến năm sub-agent. Mỗi sub-agent chuyên một vai: screener, matcher, writer, reporter. Đặt tên xong nghe oách phết, mà thực ra chỉ là máy phân vai cho máy.' },
      { name: 'Vì sao trúng', text: 'Volume cao, trên năm mươi task, lại cần chuyên hóa → multi-agent nhanh hơn ba đến năm lần. Mỗi agent giỏi một việc, không phải "đa năng nhưng trung bình". Ý này tôi mượn ý nhân sự: tuyển chuyên gia xịn hơn tuyển người-cái-gì-cũng-biết-một-tí.' },
      { name: 'Khi nào đừng dùng', text: 'Volume thấp, dưới hai mươi task → một agent đủ. Multi-agent tốn gấp bốn tiền API. Chỉ chính đáng khi có khối lượng. Đẻ multi-agent cho năm CV/tuần thì giống mua xe tải để đi chợ — chở được, nhưng phí xăng.' },
    ],
    lanVoice: 'Tôi đoán bạn lo: "Gấp bốn tiền API có đáng không?" Câu hỏi rất hay, và đáp tùy quy mô. Năm chục CV/tuần thì chưa cần. Năm trăm CV/tuần thì multi-agent tiết kiệm bạn mười lăm giờ một tuần — ROI tính ra đẹp lắm.',
    outcomes: {
      cam: [
        'Bốn sub-agent chạy song song, cửa sổ riêng biệt',
        'Orchestrator điều phối, không có chuyện cãi nhau giữa agent',
        'Loom 90 giây show bốn panel cùng lúc — đem khoe được',
      ],
      tuduy: [
        'Khi nào dùng multi, khi nào dùng single — đo volume rồi quyết',
        'Pattern: Orchestrator + sub-agents. Đơn giản mà mạnh',
        'Coordination qua shared file. Đừng để agent đoán ý nhau',
      ],
    },
    steps: [
      { title: 'Mở 4 session trong sidebar',              xp: 30, desc: 'Click "+" bốn lần. Đặt tên: screener / matcher / writer / reporter. Đặt tên xong tự nhiên thấy mình giống quản lý dự án thật.' },
      { title: 'Setup orchestrator điều phối',            xp: 70, desc: 'Orchestrator: chia task, theo dõi progress, giải quyết khi sub-agent vướng. Nó là cái HR Manager ảo của bạn.' },
      { title: 'Bốn sub-agent chuyên hóa',                xp: 60, desc: 'Mỗi sub-agent có system prompt + scope riêng. Không cho ai làm chéo — chéo là loạn.' },
      { title: 'Run All — 100 CV cho 3 vị trí',           xp: 80, desc: 'Năm đến bảy phút (so với hai lăm đến ba mươi phút nếu chạy single). Output: ba dashboard. Bạn ngồi pha cà phê lúc nó chạy.' },
      { title: 'Multi-agent cho bài ngoài tuyển dụng',    xp: 60, desc: 'Transfer: payroll audit / sentiment / learning path. Tư duy chứ không phải template — quan trọng là vậy.' },
    ],
  },

  7: {
    week: 'TUẦN 7', duration: '90 phút',
    title: 'Memory: agent NHỚ gu của bạn. Tám tuần sau đoán đúng ý 95%. Tôi không nói quá đâu.',
    sub: 'Bạn override mười lần "agent chấm 7, mình thấy 9 vì abc". Tuần 8 agent đoán đúng 9/10 trước khi bạn xem. Như đứa em ruột cuối cùng cũng hiểu mình.',
    principle: { num: 7, name: 'Agent biết học' },
    hints: [
      'Buổi 1-6 mỗi lần agent chạy là "agent mới" — không nhớ gì hôm qua…',
      'Tuần này agent NHỚ feedback của bạn. Không phải chat memory — là database thật…',
      'Hằng tuần agent tổng hợp pattern feedback, biến thành rule mới',
    ],
    revealMsg: 'Memory + feedback loop → agent dần "thuộc về bạn", không phải template generic. Đây là khoảnh khắc agent từ "công cụ" trở thành "đồng nghiệp đã đồng hành lâu năm".',
    layers: [
      { name: 'Là cái gì', text: 'Memory persistent gồm: profile + context + feedback + rules. Agent đọc trước mỗi lần chạy. Hằng tuần gom lại thành rule. Cái này HR ta hay gọi là "đào tạo nội bộ" — đúng là vậy thật, chỉ là đào tạo cho máy.' },
      { name: 'Vì sao trúng', text: 'Bạn override mỗi lần → agent ghi feedback. Tuần sau áp rule mới → đoán đúng hơn ba mươi đến năm mươi phần trăm. Predict accuracy chart đo được, không phải cảm tính. Cảm tính thì sếp không gật, số liệu thì sếp gật.' },
      { name: 'Khi nào đừng dùng', text: 'Memory phình quá lớn → tốn cost + accuracy còn giảm. Phải có consolidation hằng tuần, đừng để memory thành "thùng rác kỷ niệm". À, còn một ý nữa: KHÔNG lưu PII vào memory. Cái này nhớ kỹ, không phải nhắc lần thứ hai mới nhớ.' },
    ],
    lanVoice: 'Tôi đoán bạn lo: "Memory tốn tiền không?" Có, khoảng năm đến mười phần trăm cost thêm. Đổi lại accuracy tăng ba mươi đến năm mươi phần trăm. Đáng lắm. Mà điểm hay nhất: khi bạn nhảy job → memory đem theo. Agent đã "biết bạn" — không phải đào tạo lại từ đầu.',
    outcomes: {
      cam: [
        'Memory 5 file active đủ 7 ngày — feedback file có ≥ 10 entries',
        'Bảng Predict vs Thực tế trên 10 CV test — improvement TUẦN 1 vs TUẦN 7 đo được (không bắt 80% tuyệt đối)',
        'Rules file có ≥ 5 rule mới rút ra từ feedback — actionable, không generic',
      ],
      tuduy: [
        'Ba cấp memory: Profile / Context / Feedback / Rules',
        'Consolidation hằng tuần — rút pattern thành rule. Không gom là loạn',
        'Predict mode tăng confidence dần — và đo được',
      ],
    },
    steps: [
      {
        title: 'Setup cấu trúc memory 5 file', xp: 40,
        desc: 'Tạo folder ./memory/ với 5 file. Mỗi file 1 nhiệm vụ riêng — tách ra cho dễ audit.',
        sampleType: 'prompt',
        samplePrompt: `Tạo folder ./memory/ trong workspace với 5 file:

1. profile.md — thông tin tôi (mảng HR, ưu tiên, tone, ngành cấm)
2. context.md — context dự án hiện tại (tuyển vị trí gì, JD, deadline)
3. feedback.md — log mỗi lần tôi override agent: {timestamp, cv_id, agent_score, my_score, lý do override}
4. rules.md — rule rút ra từ feedback (pattern lặp ≥ 3 lần)
5. domain-knowledge.md — kiến thức HR domain riêng (vd: "BHXH 2026 có gì mới")

Mỗi file đầu có heading + 1 dòng mô tả mục đích. Để rỗng phần nội dung — tôi sẽ điền ở Step 2.`,
      },
      {
        title: 'Trả 5 câu profile bạn', xp: 30,
        desc: 'Điền profile.md với 5 câu cụ thể. Càng cụ thể, agent càng "thuộc gu bạn".',
        sampleType: 'rubric',
        samplePrompt: `📝 Điền profile.md theo 5 câu sau:

1. MẢNG HR CHÍNH: [TA / C&B / L&D / HRBP / Ops]
2. 3 ƯU TIÊN ỨNG VIÊN HÀNG ĐẦU (sort theo trọng số):
   - Ưu tiên 1 (50%): [vd: Kinh nghiệm thực chiến > 3 năm]
   - Ưu tiên 2 (30%): [vd: Tiếng Anh giao tiếp]
   - Ưu tiên 3 (20%): [vd: Cultural fit — Bắc/Trung/Nam OK]
3. TONE GIAO TIẾP VỚI ỨNG VIÊN: [vd: Trang trọng "anh/chị", không "bạn", có dấu, KHÔNG emoji trong email]
4. NGÀNH/COMPETITOR CẤM TUYỂN (poaching policy): [vd: Không tuyển từ X, Y, Z trong 6 tháng]
5. RED FLAG TỰ ĐỘNG REJECT: [vd: CV không có ngày sinh + bằng cấp + 2+ lần job hopping <1 năm]

Sau khi điền, paste cho Claude Code: "Đọc ./memory/profile.md, từ giờ MỌI lần screen CV đều phải đọc file này trước, áp 5 ưu tiên này."`,
      },
      {
        title: 'Override 10 CV → ghi feedback', xp: 60,
        desc: 'Mỗi lần bạn override score agent → cả 2 cùng ghi vào feedback.md. Đây là dữ liệu agent học.',
        sampleType: 'prompt',
        samplePrompt: `Trong tuần này, mỗi khi bạn không đồng ý với score của agent, paste prompt:

Tôi không đồng ý score CV [ID]. Agent chấm [X]/10, tôi chấm [Y]/10.
Lý do của tôi: [mô tả 1-2 câu — vd: "ứng viên này có 2 năm freelance không tính = 5 năm fulltime, agent chỉ đếm fulltime"]

Hãy:
1. Append vào ./memory/feedback.md theo format:
   {timestamp: ..., cv_id: ..., agent_score: ..., my_score: ..., delta: ..., reason: "..."}
2. KHÔNG generate rule ngay — đợi đủ 10 entries mới rút rule (Step 4).

Mục tiêu: ghi đủ 10 override trong 7 ngày. Nếu < 10: agent chưa đủ data học, nhưng vẫn pass nếu ≥ 7.`,
      },
      {
        title: 'Consolidation → 5 rule mới', xp: 50,
        desc: 'Sau khi có ≥ 10 entries feedback, paste prompt rút rule. Path Pro $20: chạy thủ công cuối tuần.',
        sampleType: 'prompt',
        samplePrompt: `Đọc ./memory/feedback.md (≥ 10 entries).

Rút ra ≥ 5 RULE actionable theo pattern lặp ≥ 3 lần.

Format mỗi rule:
{
  rule: "Khi [điều kiện cụ thể] → adjust score [+X / -Y]",
  evidence: ["cv_id_A", "cv_id_B", "cv_id_C"],  // ít nhất 3 evidence
  confidence: "high/medium/low"
}

Ví dụ rule tốt:
- "Khi CV có ≥ 2 năm freelance + ≥ 1 năm fulltime → tính tổng exp = freelance × 0.7 + fulltime"
- "Ứng viên ngành sản xuất chuyển sang retail → -1 điểm cultural fit"

Ví dụ rule TỆ (generic, KHÔNG actionable):
- "Ứng viên có kỹ năng tốt thì điểm cao" (vô nghĩa)
- "Cẩn thận với CV scan" (không đo được)

Append rules vào ./memory/rules.md. Từ giờ MỌI lần screen CV: agent đọc profile.md + rules.md trước.`,
      },
      {
        title: 'Predict mode — đo improvement Tuần 1 vs Tuần 7', xp: 80,
        desc: 'Test agent đã học từ feedback chưa. Đo improvement, KHÔNG đặt 80% tuyệt đối.',
        sampleType: 'rubric',
        samplePrompt: `📝 Bài test Predict mode (paste vào textarea):

PHẦN 1 — TEST PROCEDURE:
1. Lấy 10 CV mới (chưa từng score ở tuần trước).
2. Bạn chấm độc lập từng CV (0-10) — viết vào notebook, KHÔNG cho agent thấy.
3. Paste 10 CV cho agent: "Hãy predict tôi sẽ chấm CV này bao nhiêu — đọc profile.md + rules.md trước. Output JSON {cv_id, predicted_score, reasoning}".
4. So sánh agent predict vs bạn chấm.

PHẦN 2 — BẢNG KẾT QUẢ:

| CV ID | Bạn chấm | Agent predict | Sai số |
|---|---|---|---|
| 1 | __ | __ | __ |
| 2 | __ | __ | __ |
| ... | | | |
| 10 | __ | __ | __ |

PHẦN 3 — IMPROVEMENT CHECK:
- Sai số trung bình tuần này: __ điểm
- Sai số trung bình tuần 1 (test cùng kiểu Buổi 2 không có memory): __ điểm
- Improvement: __% (giảm sai số)

PHẦN 4 — RULE ÁP DỤNG:
- Trong 10 lần predict, agent đã trigger rule nào trong rules.md? List ra.
- Có rule nào agent áp sai → cần refine không?

⚠ PASS: improvement ≥ 30% (sai số giảm) HOẶC sai số trung bình ≤ 1.5 điểm.
KHÔNG bắt 80% tuyệt đối — đo improvement quan trọng hơn con số tuyệt đối.`,
        gradingCriteria: [
          'Phần 2: bảng đủ 10 hàng, có CON SỐ ở mỗi ô, không bỏ trống.',
          'Phần 3: có cả 2 sai số (tuần này + tuần 1) + % improvement.',
          'Phần 4: list ≥ 1 rule đã trigger + đánh giá sai/đúng.',
        ],
      },
    ],
  },

  8: {
    week: 'TUẦN 8', duration: '90 phút',
    title: 'API Routine: form công ty submit → agent xử lý. Bạn build "internal product" thay cho dev.',
    sub: 'Đơn nghỉ phép: nhân viên submit form → agent tự đối chiếu policy + lịch team → auto-approve nếu nhỏ, escalate manager nếu lớn. Bạn thay được một dev backend.',
    principle: { num: 8, name: 'Tự kích hoạt nâng cao' },
    hints: [
      'Buổi 4 routine chạy theo SCHEDULE, theo giờ…',
      'Tuần này routine chạy theo API — form công ty trigger luôn, không cần đợi giờ…',
      'HR build internal tool, không thuê dev. CV ghi: "Built internal product" — sang phết',
    ],
    revealMsg: 'API Routine = form bất kỳ submit → agent xử lý → log Sheet. Bạn vừa thay một dev backend mà không cần biết backend là gì.',
    layers: [
      { name: 'Là cái gì', text: 'Routine có một URL public. Form/Webhook gọi URL → agent xử lý → trả response. Như "internal API" cho phòng HR. Tên nghe lạ, nhưng dùng quen rồi sẽ thấy đơn giản như đặt grab — gọi xe, có xe, xong.' },
      { name: 'Vì sao trúng', text: 'HR có rất nhiều quy trình lặp: đơn nghỉ phép, đơn OT, training, incident… Mỗi cái mười đến mười lăm phút × một trăm đơn/tháng = mười ba đến hai lăm giờ. Auto đi → tiết kiệm khoảng tám mươi phần trăm. Tám mươi phần trăm thời gian này, bạn dùng làm gì là quyền của bạn.' },
      { name: 'Khi nào đừng dùng', text: 'Việc cần judgment cá nhân — ví dụ duyệt thưởng senior, dính chính trị nội bộ, dính tế nhị — đừng auto. Auto chỉ làm cho việc có policy rõ ràng đối chiếu được. Việc tế nhị mà auto thì khó coi, thậm chí khó cứu.' },
    ],
    lanVoice: 'Tôi nghe bạn lo: "Sếp không cho HR tự duyệt đơn." Câu này hợp lý. Cách giải: agent ĐỀ XUẤT, manager click một phát approve qua email. Manager tiết kiệm 90% thời gian → sếp gật. Bạn vẫn không "tự duyệt" — bạn chỉ làm trợ lý của manager. Tài tình ở chỗ ấy.',
    outcomes: {
      cam: [
        'API Routine có URL endpoint live, không phải mock',
        'Form trigger ba test case: GREEN / YELLOW / RED',
        'Báo cáo "Tôi build internal tool" — đem đi xin tăng lương được',
      ],
      tuduy: [
        'Pattern: API → agent → log + email. Đơn giản mà mạnh',
        'Guardrails: auto chỉ ≤ 5 ngày, trên đó escalate',
        'Manager 1-click thay manual review — họ cảm ơn bạn',
      ],
    },
    steps: [
      { title: 'Setup Google Form đơn nghỉ phép',        xp: 30, desc: 'Form năm câu → Google Sheet auto. Mười phút, không nhanh hơn được.' },
      { title: 'Một prompt → API Routine xử lý',          xp: 90, desc: 'Tám step + sáu guardrails + email response cho ba đối tượng (nhân viên, manager, HR). Đầy đủ.' },
      { title: 'Paste URL Routine vào Form Apps Script',  xp: 50, desc: 'Ba click. Form submit → trigger Routine. Nếu báo lỗi, đọc lỗi cẩn thận — đa số là copy thiếu.' },
      { title: 'Test 3 case (GREEN/YELLOW/RED)',          xp: 60, desc: 'Auto-approve / Pending manager / Auto-reject. Ba case này xong là yên tâm.' },
      { title: 'Báo cáo + Loom 90s tour',                 xp: 70, desc: 'Tiền tiết kiệm/tháng + portfolio piece. Đem theo cả khi nhảy việc.' },
    ],
  },

  9: {
    week: 'TUẦN 9', duration: '90 phút',
    title: 'Compliance Scanner: một routine quét pipeline → flag vi phạm Nghị định 13 + Luật LĐ + BHXH 2026.',
    sub: 'Tránh phạt một tỷ Nghị định 13, hai trăm triệu Luật LĐ. ROI khoảng một nghìn lần cho năm chục đô API mỗi năm. Nghe quá đà — nhưng số đúng là vậy.',
    principle: { num: 9, name: 'Đặt rào trước' },
    hints: [
      'Buổi 1-8 mỗi agent có guardrails của riêng nó…',
      'Tuần này một scanner riêng quét TOÀN BỘ pipeline — như công an khu phố đi tuần…',
      'Có rào TRƯỚC khi vi phạm. Không phải vá sau khi đã bị phạt',
    ],
    revealMsg: 'Guardrails có TRƯỚC khi deploy. Compliance Scanner = bảo hiểm pháp lý. Mua bảo hiểm thì hơi ngán, nhưng không mua thì lúc cần không kịp đâu.',
    layers: [
      { name: 'Là cái gì', text: 'Ba cấp rào: trong agent (real-time) + trong routine (mỗi lần chạy) + scanner toàn pipeline (hằng tuần). Ba lớp như áo khoác mùa đông — trông cồng kềnh, nhưng đông xuống mới biết tại sao mặc.' },
      { name: 'Vì sao trúng', text: 'Vi phạm phát hiện sớm → fix nhỏ. Phát hiện qua kiểm toán → phạt to + uy tín cũng tan. Scanner khoảng năm chục đô một năm. Phạt một tỷ. Bạn tính ROI giùm tôi đi — tôi tính rồi, ra một nghìn đến hai mươi nghìn lần.' },
      { name: 'Khi nào đừng dùng', text: 'Tuần đầu chấp nhận false positive ba mươi phần trăm — nó còn đang học. Sau bốn tuần memory consolidate giảm dần. À, và đừng để scanner tự fix. Nó chỉ flag. Bạn fix. Bạn là HR — quyết định cuối cùng vẫn là của bạn.' },
    ],
    lanVoice: 'Tôi nghe bạn lo: "Compliance phức tạp lắm, mình HR đâu phải luật sư." Câu hợp lý. Nhưng scanner = checklist ba mươi điểm chuyển hóa thành agent. Bạn không phải học luật. Bạn build một công cụ flag tự động — rồi luật sư confirm từng case. Hai bên đều nhàn.',
    outcomes: {
      cam: [
        'Compliance Routine active ≥ 3 lần — chạy thật, không demo',
        'Audit dashboard heatmap năm phần — sếp nhìn cái hiểu liền',
        'Báo cáo compliance một trang — đem họp được',
      ],
      tuduy: [
        'Ba cấp rào: agent + routine + scanner. Tách lớp ra cho rõ',
        'Mọi vi phạm có trích dẫn pháp luật cụ thể. Không nói chung chung',
        'False positive 30% tuần đầu — chuyện thường, đừng panic',
      ],
    },
    steps: [
      { title: 'Setup checklist 30 điểm 5 phần',           xp: 50, desc: 'Nghị định 13 / Luật LĐ / BHXH / Thuế TNCN / Tone email. Năm phần, đủ phủ.' },
      { title: 'Một prompt → Compliance Scanner Routine',   xp: 80, desc: 'Routine weekly quét repo + Sheet + Gmail + Zalo logs. Quét cả công ty một lần.' },
      { title: 'Run lần đầu → 3-5 vi phạm có sẵn',         xp: 50, desc: 'Bình thường — chứng tỏ scanner work. Đừng giật mình. Phòng nào cũng có vài vi phạm, nói thật.' },
      { title: 'Fix 5 vi phạm → score 30/30',              xp: 70, desc: 'Agent edit JD/email/microsite/memory. Bạn duyệt từng cái.' },
      { title: 'Báo cáo compliance cho sếp',               xp: 60, desc: 'Score + tiền tránh phạt + plan fix tuần sau. Sếp gật.' },
    ],
  },

  10: {
    week: 'TUẦN 10', duration: 'Demo Day · ⭐ CHỨNG CHỈ',
    title: 'CAPSTONE TỰ CHỌN: bạn build agent cho bài HR riêng → Demo Day Zoom mười phút.',
    sub: 'Không phải Recruiter Agent nữa. Bạn lấy MỘT bài HR riêng của công ty bạn → áp chín tư duy đã học → build từ con số 0 trong một tuần.',
    principle: { num: 10, name: 'Chuyển mảng' },
    hints: [
      'Chín tuần qua bạn dùng Recruiter Agent làm "phương tiện"…',
      'Tuần 10 chứng minh tư duy CHUYỂN sang bài khác — không phải lặp Recruiter…',
      'Bạn pick bài HR riêng + áp chín nguyên lý + build production trong một tuần',
    ],
    revealMsg: 'Chín tư duy đã học áp dụng cho BẤT KỲ bài HR. Đây là bài test thật — bạn có master không. Master không phải làm được một thứ. Master là chuyển được sang thứ khác.',
    layers: [
      { name: 'Là cái gì', text: 'Lấy một bài HR riêng — Onboarding/Payroll/L&D/Sentiment/Helpdesk — spec chín nguyên lý → build → demo. Đơn giản về mặt cấu trúc. Phức tạp về mặt thực tế. Đó mới gọi là capstone.' },
      { name: 'Vì sao trúng', text: 'Master = transfer được. Nếu bạn chỉ làm Recruiter được → bạn chưa master, bạn mới chỉ học thuộc. Tuần 10 ép bạn transfer → chứng minh tư duy thật, không phải copy template. Cái này tôi xin nói thẳng vì đây là khoảnh khắc quyết định.' },
      { name: 'Khi nào đừng dùng', text: 'Đừng chọn bài quá tham vọng — kiểu "build payroll cho 1000 nhân viên trong một tuần". Mentor giúp pick scope vừa tay: pain real + một tuần khả thi. Tham quá là sa lầy. Sa lầy ở tuần 10 thì tiếc lắm.' },
    ],
    lanVoice: 'Tôi đoán bạn lo: "Tự build một mình, lỡ thất bại thì sao?" Câu hỏi rất hay, và cũng rất con người. Trả lời: KHÔNG có chuyện một mình. AI Mentor 24/7 + Zalo group + office hour Lan + chín transfer plan đã có sẵn. Pass tiêu chí ≥ 6/9 nguyên lý — không yêu cầu hoàn hảo. Hoàn hảo để tuần 11.',
    outcomes: {
      cam: [
        'Agent capstone đang chạy production — thật, không demo',
        'Pitch deck năm phút Demo Day — đem trình sếp được',
        'Chứng chỉ "AI HR Builder" verified Accredible — gắn LinkedIn được',
      ],
      tuduy: [
        'Chín nguyên lý áp dụng được mọi bài HR. Không chỉ tuyển dụng',
        'Master = transfer được. Một thứ thì gọi là biết, không gọi là master',
        'Capstone = portfolio centerpiece. Đem theo cả đời',
      ],
    },
    steps: [
      {
        title: 'Review 9 transfer plan + chọn capstone', xp: 50,
        desc: 'Chấm 9 transfer plan đã viết ở step 5 các buổi trước. Top 3 → chọn 1.',
        sampleType: 'rubric',
        samplePrompt: `📝 Chấm 9 transfer plan đã viết ở Buổi 1-9 step 5 theo 4 tiêu chí:

| Tiêu chí | 0-2 điểm | Mô tả |
|---|---|---|
| Pain rõ | 0 / 1 / 2 | Có số liệu cụ thể (giờ/tuần, % miss, # vụ) hay chung chung? |
| Khả thi 1 tuần build | 0 / 1 / 2 | 5 ngày code + test có xong không? Hay quá tham (1 tháng)? |
| Có data thật | 0 / 1 / 2 | Bạn có data thực thi (CV, hợp đồng, log) hay phải invent giả? |
| Người dùng thật | 0 / 1 / 2 | Sau capstone, ≥ 3 đồng nghiệp dùng thật không? Hay chỉ bạn xài? |

BẢNG CHẤM:
| Plan # | Tên ngắn (5 từ) | Pain | Khả thi | Data | User | Tổng |
|---|---|---|---|---|---|---|
| Buổi 1 | ... | / | / | / | / | __/8 |
| ... | | | | | | |
| Buổi 9 | ... | / | / | / | / | __/8 |

TOP 3 (≥ 6 điểm): __, __, __

QUYẾT ĐỊNH FINAL: Plan #__ vì lý do: ...

⚠ Lan/mentor sẽ challenge plan này tại Office Hour Tuần 9 → bạn phải defend được.`,
        gradingCriteria: [
          'Bảng đủ 9 hàng, mỗi hàng có 4 điểm rõ ràng.',
          'Top 3 + lý do chọn final ít nhất 2 câu.',
          'Plan final phải khác Recruiter Agent của Buổi 1-3 (test transfer thật).',
        ],
      },
      {
        title: 'Spec capstone — đủ 9 nguyên lý', xp: 80,
        desc: 'Spec chi tiết theo template 9 nguyên lý đã học. Đây là blueprint cho 5 ngày build.',
        sampleType: 'prompt',
        samplePrompt: `📋 Template spec capstone — paste vào file ./capstone/SPEC.md:

# CAPSTONE: [Tên ngắn 5 từ]

## NGUYÊN LÝ 1 — Tự học cùng máy
Tôi sẽ hỏi máy những gì? List 3 câu cụ thể.

## NGUYÊN LÝ 2 — Chia nhỏ việc
5 step agent thực hiện (input/output mỗi step):
1. ... (in: ..., out: ...)
2. ...
3. ...
4. ...
5. ...

## NGUYÊN LÝ 3 — Tả việc rõ
Skills Package gồm những file gì? Brand voice của công ty thế nào?

## NGUYÊN LÝ 4 — Tự kích hoạt
Trigger nào? (Schedule / API / Event)
Guardrails (≥ 5):
1. ...

## NGUYÊN LÝ 5 — Đưa công cụ
Connector nào? (Drive / Gmail / Zalo / HRIS / GitHub) — scope mỗi cái.

## NGUYÊN LÝ 6 — Phân vai
Có cần multi-agent không? Nếu có: 3-4 sub-agent + scope mỗi cái.

## NGUYÊN LÝ 7 — Agent biết học
Memory layer: profile + context + feedback + rules. Predict mode setup thế nào?

## NGUYÊN LÝ 8 — Tự sửa & đo
Eval set: 10-20 case. Metric: precision / recall / cost. A/B test plan.

## NGUYÊN LÝ 9 — Chuyên hoá mảng
Bài này thuộc mảng [TA / C&B / L&D / HRBP / Ops]. Compliance gì? (Nghị định 13, Bộ luật LĐ, ...)

## OUT-OF-SCOPE (KHÔNG làm trong 5 ngày):
- ...
- ...

⚠ Pass capstone = áp ≥ 6/9 nguyên lý. Không cần đủ 9 — nhưng spec phải khai đủ 9 (ô nào không dùng thì write "N/A vì ...").

Sau khi điền, paste cho Claude Code: "Review SPEC.md. Áp đủ 6/9 nguyên lý chưa? Liệt kê nguyên lý nào yếu."`,
      },
      {
        title: 'Build 5 ngày D1→D5', xp: 200,
        desc: 'Lịch chi tiết 5 ngày. Mỗi ngày kết thúc có deliverable đo được.',
        sampleType: 'instruction',
        samplePrompt: `📅 LỊCH 5 NGÀY (1-2h/ngày bằng Claude Code):

D1 — SETUP (90 phút):
- Tạo repo capstone trên GitHub (private, scaffold từ Skills Package Buổi 3)
- Setup folder structure: /skills/, /commands/, /memory/, /tests/, /samples/
- Push commit đầu "init capstone [tên]"
- Deliverable: link GitHub + screenshot tree

D2 — CORE LOGIC (120 phút):
- Implement 5 step chính (nguyên lý 2 — chia nhỏ việc)
- Test với 3-5 sample data
- Deliverable: video screen-record 30s chạy 1 case

D3 — MCP + ROUTINE (90 phút):
- Connect 1-2 system thật (Drive / Gmail / Zalo OA)
- Setup routine trigger (cloud Max hoặc local cron)
- Deliverable: 1 lần routine chạy thành công, log entry

D4 — POLISH + MEMORY (90 phút):
- Add memory layer (rules.md với ≥ 3 rule rút từ test D2-D3)
- Add 5 guardrails
- Run eval set 10 case → đo precision/recall
- Deliverable: bảng eval result + screenshot dashboard

D5 — DEMO PREP (60 phút):
- Pre-record video demo 5 phút (theo template ở Step 4)
- Slide deck 5-7 slide (Pain → Solution → Demo → Numbers → Next)
- Run thử pitch trước gương 2 lần
- Deliverable: link video + link slide

⚠ Mỗi ngày FAIL deliverable = đẩy compress D6, D7 (cuối tuần). KHÔNG trượt sang Tuần 11.`,
      },
      {
        title: 'Demo Day — pre-record + Q&A live', xp: 100,
        desc: 'Demo Day chia 2 phần: video pre-record nộp trước 24h + Q&A live 5 phút.',
        sampleType: 'rubric',
        samplePrompt: `📋 Template DEMO 5 phút (pre-record):

[0:00-0:30] HOOK
- Trong 30s: bạn là ai, làm mảng gì, bài bạn build là gì
- Câu mở: "Tuần trước tôi mất X giờ làm Y. Hôm nay agent làm trong Z phút."

[0:30-1:30] PAIN + SOLUTION
- Pain cụ thể: số liệu Trước
- 5 step agent (theo Spec)
- Stack tech (1 dòng): Claude Code + Gemini + MCP {tên}

[1:30-3:30] DEMO LIVE 2 phút
- Screen record agent chạy 1 case thật từ đầu đến cuối
- Highlight 2 moment "wow" (chỉ rõ bằng arrow)

[3:30-4:30] NUMBERS
- Bảng Trước/Sau (≥ 3 measurable)
- Eval result (precision/recall/cost)
- Improvement vs baseline

[4:30-5:00] NEXT
- 1 câu: kế hoạch deploy team / scale lên cohort
- 1 câu: cảm ơn cohort + Lan

⚠ NỘP 24h TRƯỚC Demo Day:
- Link video trên Drive (public, Lan + cohort xem được)
- Link slide deck
- Link GitHub repo

⚠ DEMO DAY (live Zoom 5 phút Q&A):
- Lan + 2-3 đồng môn ngẫu nhiên hỏi
- Câu hỏi: technical (rủi ro), business (ROI), scale (bottleneck)
- Bạn trả lời ngắn, dứt khoát`,
      },
      {
        title: 'Nhận chứng chỉ + portfolio', xp: 70,
        desc: 'Sau pass Demo Day, nhận Accredible verified URL + vào alumni inner circle.',
        sampleType: 'instruction',
        samplePrompt: `📋 Quy trình nhận chứng chỉ:

1. Sau Demo Day, Lan review 48h → email kết quả PASS / BORDERLINE / FAIL
2. Nếu PASS:
   - Nhận email Accredible với link chứng chỉ verified
   - Click "Add to LinkedIn" → tự động post lên LinkedIn của bạn
   - URL chứng chỉ public — share với sếp/HR network
3. Nhận card visit "AI HR Practitioner" (PDF) — gắn email signature
4. Được mời vào Slack Inner Circle alumni (chỉ học viên pass cohort được vào)

📝 Nộp portfolio cho Lan:
- 3 link: GitHub repo + video demo + slide
- 1 đoạn 100 từ "tôi đã build cái gì + impact" (Lan featured trên blog HR Builder VN)

⚠ Borderline: phải fix 2-3 điểm Lan note → demo lại Tuần 11. PASS được nhận chứng chỉ.

⚠ FAIL: không nhận chứng chỉ. Có thể đăng ký Cohort 2 với giá 50% (fee chỉ 5M, không deposit).`,
      },
    ],
  },
};

// === PRO TRACK — buổi 11-15 (advanced, sau khi pass capstone) ===
const PRO_TRACK = {
  11: {
    week: 'PRO · TUẦN 11', duration: '120 phút',
    title: 'Vector RAG: agent đọc CẢ knowledge base công ty bạn — trả lời chính xác 95%+ với trích nguồn.',
    sub: 'Index toàn bộ Sổ tay nhân viên + Policy + JD library + Hợp đồng mẫu thành knowledge base. Agent trả lời câu hỏi nhân viên, KHÔNG bịa.',
    principle: { num: 11, name: 'Knowledge Base Agent (RAG)' },
    hints: [
      'Agent giờ trả lời dựa trên TÀI LIỆU CÔNG TY THẬT…',
      'Mỗi câu trả lời có CITATION chỉ rõ trang/đoạn nào trong tài liệu…',
      'Hết thời "AI bịa" — luật BHXH chính xác, policy chuẩn',
    ],
    revealMsg: 'RAG = Retrieval Augmented Generation. Tên dài, ý đơn giản: agent tra tài liệu trước khi trả lời, có trích nguồn. Đây là cách enterprise dùng AI an toàn.',
    layers: [
      { name: 'Là cái gì', text: 'Vector database lưu tài liệu thành embedding. Agent query semantic → lấy ba đến năm đoạn liên quan → trả lời + cite nguồn. Tên gọi nghe khoa học, nhưng làm là click với paste, không phải PhD.' },
      { name: 'Vì sao trúng', text: 'AI thuần generative dễ bịa — bịa ra rất tự tin, đó mới khổ. RAG ép agent dùng source thật. Trả lời sai = lỗi rõ ràng tra được, không phải "AI nói vu vơ chiều thứ Sáu".' },
      { name: 'Khi nào đừng dùng', text: 'Câu hỏi sáng tạo — brainstorm idea, viết JD mới — đừng RAG. RAG chỉ dành cho TRẢ LỜI dựa trên tài liệu CÓ SẴN. Generate sáng tạo thì để generative tự do bay.' },
    ],
    lanVoice: 'Tôi đoán bạn lo: "Build vector database phức tạp lắm." Trả lời: Pinecone/Chroma có free tier một triệu vector. Setup một file khoảng ba mươi phút. KHÔNG cần ML engineer. Cái này tôi đảm bảo bằng kinh nghiệm của tôi, không phải cảm hứng.',
    outcomes: {
      cam: [
        'Knowledge base index 100+ tài liệu công ty',
        'Agent trả lời có trích nguồn — dán trang số đàng hoàng',
        'Accuracy ≥ 95% trên 30 câu test',
      ],
      tuduy: [
        'Embedding + vector search — hai khái niệm nền tảng',
        'Hybrid retrieval (semantic + keyword) — kết hợp hai loại',
        'Source citation BẮT BUỘC. Không có cite, không deploy',
      ],
    },
    steps: [
      { title: 'Setup vector DB (Pinecone/Chroma free)',  xp: 80,  desc: 'Tài khoản Pinecone free → tạo index. Hoặc Chroma local. Free tier đủ dùng.' },
      { title: 'Upload + chunk tài liệu công ty',          xp: 100, desc: 'PDF/DOCX/Markdown → chunk 500-token → embedding → index. Máy làm hết, bạn chỉ paste.' },
      { title: 'Build RAG agent + test 30 câu',            xp: 120, desc: 'Agent: query → retrieve → trả lời có citation. Ba mươi câu test là đủ thấy đâu yếu.' },
      { title: 'Đo accuracy + hallucination rate',          xp: 80,  desc: 'Bảng so sánh: RAG vs no-RAG. Target accuracy ≥ 95%. Số đẹp thì khoe được.' },
      { title: 'Production: Helpdesk bot 24/7 dùng RAG',    xp: 150, desc: 'Connect Zalo OA. Nhân viên hỏi BHXH/policy → bot trả có trích nguồn. Bạn ngủ, bot làm.' },
    ],
  },

  12: {
    week: 'PRO · TUẦN 12', duration: '120 phút',
    title: 'Eval suite: build test cho agent của bạn. A/B hai phiên bản → chọn version tốt hơn — bằng số, không bằng cảm.',
    sub: 'Trước giờ bạn nghĩ "agent OK" theo cảm tính. Tuần này build BỘ TEST có thật — đo accuracy/cost/hallucination/tone. Cảm tính là chuyện của trà chiều.',
    principle: { num: 12, name: 'Đo chất lượng agent' },
    hints: [
      'Agent v1 và v2 — bạn không biết cái nào tốt hơn nếu không đo…',
      'Build 30-50 test case có ground truth — chấm tự động…',
      'Pass rate, accuracy, latency, cost — tất cả đo được. Đo là gốc của improve',
    ],
    revealMsg: 'Có eval thì improve được. Không eval thì đoán mò. Đây là tư duy engineer thật của AI — và thật ra là tư duy chung của mọi nghề muốn làm tốt lên.',
    layers: [
      { name: 'Là cái gì', text: 'Eval suite = bộ test case có input + expected output. Agent chạy → chấm tự động → ra score. Đơn giản về cấu trúc, kỳ công ở việc viết test case ban đầu.' },
      { name: 'Vì sao trúng', text: 'Đổi prompt → chạy eval → biết tốt/xấu hơn ngay. KHÔNG đoán mò "có vẻ ổn hơn". "Có vẻ" là từ tôi sợ nhất khi làm sản phẩm — vì nó vô bằng chứng.' },
      { name: 'Khi nào đừng dùng', text: 'Eval tốn thời gian build — khoảng một ngày cho năm mươi case. Chỉ làm khi agent đã production + cần improve liên tục. Prototype đang tìm hướng thì khoan, đừng eval sớm. Eval sớm là tốn công vô ích.' },
    ],
    lanVoice: 'Đây là tư duy mà chín mươi lăm phần trăm người build AI bỏ qua — không đo, chỉ cảm. Master = đo được, improve được, justify được. Sếp hỏi "sao tốt hơn?" → bạn trả lời bằng số, không bằng "tôi cảm thấy".',
    outcomes: {
      cam: [
        'Eval suite 50 test case — đủ phủ',
        'A/B 2 prompt → chọn winner. Có số liệu',
        'Dashboard hiệu năng theo thời gian',
      ],
      tuduy: [
        'Test-driven AI development — như TDD nhưng cho AI',
        'Hallucination rate < 5% là target. Trên là phải sửa',
        'Cost per query đo được. Không đo là không scale được',
      ],
    },
    steps: [
      { title: 'Build 50 test case có ground truth',     xp: 100, desc: 'CSV: input + expected output + tiêu chí pass. Đầu tư một ngày, hưởng cả năm.' },
      { title: 'Setup auto-eval (chấm bằng AI khác)',    xp: 100, desc: 'AI Reviewer chạy eval → trả score JSON. Một AI chấm AI kia — nghe hơi siêu thực, nhưng work.' },
      { title: 'A/B test 2 prompt → chọn winner',        xp: 120, desc: 'Prompt v1 vs v2 → eval → winner pass cao hơn. Quyết bằng số.' },
      { title: 'Dashboard eval theo thời gian',          xp: 80,  desc: 'Mỗi lần đổi agent → run eval → log → chart. Theo dõi như theo dõi cân nặng.' },
      { title: 'Hallucination detector',                  xp: 100, desc: 'Agent nói gì không có trong source → flag tự động. Bịa là bị bắt ngay.' },
    ],
  },

  13: {
    week: 'PRO · TUẦN 13', duration: '120 phút',
    title: 'Cost optimization: giảm chi phí AI 60-80% qua caching + model routing + batching.',
    sub: 'Cohort #1 cost khoảng một trăm đô. Cohort #5 scale một trăm học viên có thể lên ba đến năm trăm đô nếu không tối ưu. Tuần này hạ về dưới một trăm.',
    principle: { num: 13, name: 'Tối ưu chi phí AI' },
    hints: [
      'Prompt caching: cache phần tĩnh, chỉ tính tiền phần động…',
      'Model routing: việc dễ dùng Haiku, việc khó dùng Sonnet, việc phức tạp dùng Opus…',
      'Batching: gộp 10 query thành 1 call → giảm overhead',
    ],
    revealMsg: 'Tối ưu cost thì scale được. Master = chạy 1000 query/ngày với cost của 100 query. Nghe hơi phép thuật, nhưng chỉ là kỹ thuật.',
    layers: [
      { name: 'Là cái gì', text: 'Ba thủ thuật chính. Một là prompt caching — phần cache trả mười phần trăm giá. Hai là model routing — đúng model đúng việc. Ba là batch API — giảm năm mươi phần trăm cost với điều kiện chấp nhận latency. Ba thứ kết hợp lại, cost rớt hẳn.' },
      { name: 'Vì sao trúng', text: 'Cache hit ≈ rẻ gấp mười. Haiku rẻ hơn Sonnet khoảng mười hai lần cho task đơn giản. Batch giảm năm mươi phần trăm cộng với chấp nhận chờ hai mươi tư giờ. Số nó đẹp đến mức bạn sẽ tiếc đã không tối ưu sớm hơn — nhưng đừng tiếc, chưa scale thì chưa cần tối ưu.' },
      { name: 'Khi nào đừng dùng', text: 'Tối ưu sớm là premature. Đợi product hit traction (≥ 30 active user) rồi mới optimize. Trước đó focus chất lượng. Tối ưu cost cho mười user là tối ưu nhầm chỗ — như giảm cân khi đang cao một mét sáu nặng năm mươi cân.' },
    ],
    lanVoice: 'Cohort #5 trở đi mới thật sự care cost. Nhưng học sớm để khi scale không panic. Panic muộn thì lúng túng. Học trước thì bình tĩnh.',
    outcomes: {
      cam: [
        'Cost dashboard theo agent + time',
        'Prompt caching active — đo được hit rate',
        'Model routing logic — ba tier rõ ràng',
      ],
      tuduy: [
        'Cache hit rate > 70% là target',
        'Cost per active student < 5 đô/tháng',
        'Batch async cho task không gấp. Không gấp thì batch đỡ tiền',
      ],
    },
    steps: [
      { title: 'Setup prompt caching (Anthropic feature)', xp: 80,  desc: 'Cache system prompt + lesson content. Đo cache hit rate sau ba ngày.' },
      { title: 'Implement model routing (3 tier)',          xp: 100, desc: 'Easy → Haiku/Flash. Medium → Sonnet. Hard → Opus/Pro. Phân loại rõ rồi route.' },
      { title: 'Batch API cho task không real-time',        xp: 90,  desc: 'Compliance scanner / weekly report → batch 24h. Tiết kiệm thật.' },
      { title: 'Cost dashboard real-time',                   xp: 100, desc: 'BigQuery + Looker. Track cost per student, per agent. Số liệu rõ.' },
      { title: 'Báo cáo "Tôi giảm cost 70%"',                xp: 80,  desc: 'Show sếp số trước/sau. Justify scale. Sếp gật, sếp duyệt thêm budget.' },
    ],
  },

  14: {
    week: 'PRO · TUẦN 14', duration: '120 phút',
    title: 'Vision + Voice agents: agent đọc CV scan, ID card, video phỏng vấn. Voice agent gọi điện xác thực.',
    sub: 'Mở rộng từ text → multi-modal. CV ảnh chụp điện thoại OK. Video PV → transcribe + analyze sentiment. Agent giờ có mắt, có tai, có miệng.',
    principle: { num: 14, name: 'Multi-modal agent' },
    hints: [
      'Agent giờ "thấy" được — đọc ảnh, video, audio…',
      'Vision: xử CV scan, hợp đồng ảnh, ID card…',
      'Voice: gọi xác thực ứng viên hoặc reference check',
    ],
    revealMsg: 'Multi-modal = agent giống con người 80%. Đọc, nghe, nói, nhìn — đều hiểu. Còn 20% thì để chừa cho con người, kẻo thất nghiệp hết.',
    layers: [
      { name: 'Là cái gì', text: 'Vision API: gửi image → text. Speech-to-Text: audio → text. Text-to-Speech: text → audio. Kết hợp với LLM = agent đa giác quan. Tên dài, nhưng dùng thì click với paste.' },
      { name: 'Vì sao trúng', text: 'HR có rất nhiều dữ liệu KHÔNG phải text: CV scan, ID, video PV recording. Vision + Voice mở khóa toàn bộ data đó. Trước giờ data này nằm im trong Drive, giờ đem ra dùng được.' },
      { name: 'Khi nào đừng dùng', text: 'Vision/voice tốn nhiều tiền hơn text năm đến mười lần. Chỉ dùng khi text không đủ. Đa số task HR vẫn text. Đừng vision hóa cái gì cũng được — tốn tiền vô ích.' },
    ],
    lanVoice: 'Voice agent gọi xác thực ứng viên = wow factor lớn. Nhưng care một chuyện: tuân thủ pháp luật ghi âm — Việt Nam yêu cầu báo trước. Báo trước rồi gọi mới được, đừng gọi rồi mới báo.',
    outcomes: {
      cam: [
        'Vision agent đọc 100 CV scan',
        'Voice agent gọi xác thực 5 ứng viên',
        'Video PV analyzer (transcribe + sentiment)',
      ],
      tuduy: [
        'Multi-modal pipeline — kết hợp ba giác quan',
        'Khi nào dùng vision vs OCR truyền thống — đo cost rồi quyết',
        'Compliance ghi âm voice — báo trước, lưu hợp lý',
      ],
    },
    steps: [
      { title: 'Vision agent đọc CV scan ảnh',          xp: 120, desc: 'Gemini Vision: ảnh → CV trích xuất schema. Test 30 CV scan thật. Chụp xiêu vẹo cũng đọc được.' },
      { title: 'Voice agent gọi xác thực',              xp: 150, desc: 'Twilio + Gemini Voice. Gọi → hỏi 3 câu → ghi âm → transcribe. Ứng viên ngạc nhiên dễ chịu.' },
      { title: 'Video PV analyzer',                      xp: 130, desc: 'Upload Zoom recording → transcribe + sentiment + key moments. Khỏi phải xem lại ba mươi phút.' },
      { title: 'ID card validator',                      xp: 90,  desc: 'Vision đọc CCCD → match với HR record + check fake. Có gì lệch là flag.' },
      { title: 'Compliance ghi âm voice (Việt Nam)',    xp: 60,  desc: 'Báo trước, get consent, xóa sau 30 ngày. Theo Nghị định 13. Không có gì lươn lẹo.' },
    ],
  },

  15: {
    week: 'PRO · TUẦN 15', duration: '120 phút',
    title: 'Observability: trace, log, alert. Agent fail → bạn biết ngay. Dashboard health real-time.',
    sub: 'Production agent ≠ demo agent. Phải biết khi nào fail, vì sao fail, fix nhanh trước khi user complain. Build dễ. Vận hành khó. Đó mới là master.',
    principle: { num: 15, name: 'Vận hành sản phẩm' },
    hints: [
      'Mỗi agent call → log đầy đủ: input, output, latency, cost…',
      'Khi error rate > 5% → alert Telegram bạn ngay…',
      'SLA 99.5% uptime — show sếp con số là thuyết phục',
    ],
    revealMsg: 'Master = vận hành được. Không phải build được. Build dễ. Vận hành khó. Câu này tôi xin được nhắc lại lần nữa, vì nó là cốt lõi của tuần 15.',
    layers: [
      { name: 'Là cái gì', text: 'Observability = bạn biết MỌI THỨ về agent đang chạy. Trace mỗi call, log structured, alert khi anomaly. Trước giờ bạn build agent xong là quên. Giờ bạn build xong là nuôi — như nuôi cây cảnh.' },
      { name: 'Vì sao trúng', text: 'Production có sự cố. Không observe = sửa mù, sửa lâu, sửa sai. Có observe = sửa root cause trong năm phút. Khoảnh khắc đầu tiên log cho bạn biết "agent fail vì lý do X" là khoảnh khắc bạn lên level.' },
      { name: 'Khi nào đừng dùng', text: 'Demo project KHÔNG cần observability đầy đủ. Production thật BẮT BUỘC. Stage 0 dry-run skip OK. Path B paid bắt buộc đủ. Đừng nhầm hai cái — nhầm là vỡ trận.' },
    ],
    lanVoice: 'Khóa kết thúc tuần 15 = bạn vận hành được agent production-grade. Tôi nói thật: không công ty nào ở VN có HR làm được level này. Bạn đi đến đây là bạn đã ở chỗ ít người đi tới. Đáng tự hào.',
    outcomes: {
      cam: [
        'Trace + log đầy đủ mỗi agent call',
        'Alert Telegram khi error rate > 5%',
        'Health dashboard real-time — đẹp, gọn',
      ],
      tuduy: [
        'Structured logging (JSON, không text). Text khó query',
        'Alert có severity (critical/warning/info). Đừng alert tất cả mọi thứ',
        'SLA + SLO định nghĩa được — không định nghĩa thì không đo được',
      ],
    },
    steps: [
      { title: 'Setup logging structured cho agent',     xp: 80,  desc: 'JSON log: timestamp, agent_id, input, output, latency, cost, status. Đủ field, không thừa không thiếu.' },
      { title: 'Trace tracking (LangSmith / Helicone)',  xp: 100, desc: 'Mỗi conversation có trace ID. Debug được cả flow. Lúc cần là có ngay.' },
      { title: 'Alert Telegram khi error spike',          xp: 90,  desc: 'Error rate > 5% trong 5 phút → alert. Latency > 10s → alert. Đêm có sự cố là bạn biết liền.' },
      { title: 'Health dashboard Looker Studio',          xp: 110, desc: 'Real-time: uptime, error rate, cost burn, latency P95. Show sếp là sếp gật.' },
      { title: 'Postmortem template + SLA report',        xp: 80,  desc: 'Mỗi sự cố → postmortem một trang. Cuối tháng → SLA report cho sếp. Chuyên nghiệp ở chỗ này.' },
    ],
  },
};

// === SPECIALTY LANES — sau Pro Track, chọn 1 trong 5 lane chuyên sâu ===
const SPECIALTY = {
  TA: {
    name: 'TA Pro — Tuyển dụng chuyên sâu',
    duration: '4 tuần', icon: '🎯',
    desc: 'Sourcing automation scale 1000 ứng viên/ngày. ATS integration sâu. Employer branding agent. Bốn tuần để thành sourcing pro.',
    weeks: [
      'Sourcing automation: crawl LinkedIn/TopCV/GitHub → outreach personalized 1000/ngày',
      'ATS integration: kết nối Greenhouse/Lever/Workday/Base ATS → sync hai chiều',
      'Employer Branding agent: blog post tự động, social media, candidate journey',
      'Capstone TA: build full sourcing → screening → onboarding pipeline cho một vị trí công ty bạn',
    ],
  },
  CB: {
    name: 'C&B Pro — Lương thưởng chuyên sâu',
    duration: '4 tuần', icon: '💰',
    desc: 'Co-teach với luật sư. Payroll auditor 3-source. Total Rewards Statement. BHXH 2026 advisor. Số liệu sạch, ngủ ngon.',
    weeks: [
      'Payroll auditor 3-source: BHXH + Thuế TNCN + Lương → đối chiếu tự động',
      'Total Rewards Statement: PDF cá nhân hóa cho từng nhân viên',
      'Bonus calculator + Salary benchmarker (TopCV/VietnamWorks scrape)',
      'Capstone C&B: build compliance scanner BHXH 2026 + co-teach một buổi với luật sư partner',
    ],
  },
  LD: {
    name: 'L&D Pro — Đào tạo phát triển chuyên sâu',
    duration: '4 tuần', icon: '📚',
    desc: 'Personalized Learning Path 6 tháng. Microlearning daily Zalo. AI Tutor cho hard skill. Manager coaching bot. Đào tạo cá nhân hóa thật.',
    weeks: [
      'Skill gap analyzer: assess + gap chart cho từng nhân viên',
      'Personalized Learning Path 6 tháng: roadmap có content + assessment',
      'Microlearning bot daily: push 5 phút lesson qua Zalo theo gu',
      'Capstone L&D: build full L&D operating system cho một phòng ban công ty bạn',
    ],
  },
  HRBP: {
    name: 'HRBP Pro — Đối tác kinh doanh chuyên sâu',
    duration: '4 tuần', icon: '📊',
    desc: 'Attrition predictor (ML). Workforce dashboard. Manager effectiveness scorer. Exit interview analyzer. Số liệu kể chuyện thay bạn.',
    weeks: [
      'Attrition predictor: XGBoost + SHAP, dự đoán 3-6 tháng trước',
      'Workforce dashboard: real-time HRIS data, headcount, salary, demographics',
      'Manager effectiveness scorer: pulse survey + tần suất 1:1 + team sentiment',
      'Capstone HRBP: build People Analytics dashboard production cho công ty bạn',
    ],
  },
  Ops: {
    name: 'HR Ops Pro — Vận hành chuyên sâu',
    duration: '4 tuần', icon: '⚙️',
    desc: 'Helpdesk 24/7 đa kênh. Ticket triage. Leave automation. Alumni network. Document RAG. HR Ops nhẹ tay, gọn việc.',
    weeks: [
      'Helpdesk 24/7 đa kênh: Zalo OA + Email + Slack + Telegram',
      'Ticket triage agent: phân loại → route đúng team',
      'Leave automation 2.0: tích hợp HRIS + Calendar + manager 1-click',
      'Capstone Ops: build full HR Service Center cho 500+ nhân viên công ty bạn',
    ],
  },
};

// === MASTER CAPSTONE — sau khi xong Pro Track + 1 Specialty ===
const MASTER = {
  title: 'AI HR Master Capstone',
  duration: '4-6 tuần',
  icon: '⭐',
  desc: 'Build một sản phẩm AI HR production-grade cho công ty bạn THẬT. Có user thật, có ROI thật, có team adopt thật. Viết case study public + speak ở một sự kiện HR. Đến đây là đến level cuối — không có level cao hơn.',
  requirements: [
    'Đã xong Phần A + B (10 buổi)',
    'Đã xong Pro Track (5 buổi)',
    'Đã xong 1 Specialty Lane (4 buổi)',
    'Có 1 dự án production trong công ty thật',
  ],
  outcomes: [
    'Chứng chỉ "AI HR Master" — chứng nhận cao nhất khóa',
    'Case study publish trên blog HR Builder VN',
    'Speak một sự kiện HR (Vietnam HR Summit / The Makeover / VNHR)',
    'Mentor cohort tiếp theo — trả công 5-10M/cohort',
    'Vào Master Inner Circle — ba mươi người AI HR Master VN đầu tiên',
  ],
};

// Tổng XP
const TOTAL_XP = Object.values(LESSONS).reduce((sum, l) =>
  sum + l.steps.reduce((s, step) => s + step.xp, 0), 0);

const TOTAL_PRO_XP = Object.values(PRO_TRACK).reduce((sum, l) =>
  sum + l.steps.reduce((s, step) => s + step.xp, 0), 0);

// Merge LESSONS + PRO_TRACK để lesson.html?id=11 hoạt động
Object.assign(LESSONS, PRO_TRACK);

// Tổng số bước (Phần A + B + Pro Track)
const TOTAL_STEPS = Object.values(LESSONS).length * 5;
