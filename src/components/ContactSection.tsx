// components/ContactSection.tsx
export default function ContactSection() {
  return (
    <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)] md:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">
            Contact
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Ready to build?
          </h2>
          <p className="mt-3 text-sm md:text-base text-ink-soft max-w-md">
            아래에 간단히 남겨주시면, 보통 24시간 이내에 이메일로 회신드립니다.
            아직 아이디어가 정리가 안 되어 있어도 괜찮습니다. 현재 상황을
            편하게 적어주세요.
          </p>

          <div className="mt-6 text-xs md:text-sm text-ink-soft space-y-1">
            <p>이메일 / 캘린더 링크 / 카카오톡 ID 등 넣을 자리</p>
            <p className="text-[11px] md:text-xs">
              (예: email@domain.com, 평일 10:00–18:00)
            </p>
          </div>
        </div>

        <form className="rounded-3xl bg-white/80 border border-ink/5 p-5 md:p-6 shadow-sm space-y-4 text-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-ink-soft mb-1.5">
                이름 / 이름 + 직책
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-ink/10 bg-bg-beige/60 px-3 py-2 text-sm outline-none focus:border-ink/40"
                placeholder="예: 김OO / 원장님"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-ink-soft mb-1.5">
                이메일
              </label>
              <input
                type="email"
                className="w-full rounded-xl border border-ink/10 bg-bg-beige/60 px-3 py-2 text-sm outline-none focus:border-ink/40"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-ink-soft mb-1.5">
              대략적인 예산 범위
            </label>
            <select className="w-full rounded-xl border border-ink/10 bg-bg-beige/60 px-3 py-2 text-sm outline-none focus:border-ink/40">
              <option>아직 잘 모르겠어요</option>
              <option>~ 300만 원</option>
              <option>300만 ~ 700만 원</option>
              <option>700만 원 이상</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-ink-soft mb-1.5">
              현재 상황 + 만들고 싶은 것
            </label>
            <textarea
              rows={5}
              className="w-full rounded-xl border border-ink/10 bg-bg-beige/60 px-3 py-2 text-sm outline-none focus:border-ink/40 resize-none"
              placeholder={`예)\n- 현재: 카톡/엑셀로 주문 받고, 중국 공장에 수동으로 전달하는 중\n- 만들고 싶은 것: 온라인 주문 → 자동 주문서 생성 → 공장 이메일/사이트 연동\n- 희망 일정: 3개월 이내 MVP`}
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-ink text-white px-4 py-2.5 text-sm font-medium hover:bg-black"
          >
            메시지 보내기
          </button>

          <p className="text-[11px] text-ink-soft">
            아직 백엔드 연결은 되어 있지 않습니다. Next.js API Route 또는 외부
            폼 서비스(Formspree 등)에 연결해 실제로 전송되도록 바꿀 수 있습니다.
          </p>
        </form>
      </div>
    </div>
  );
}