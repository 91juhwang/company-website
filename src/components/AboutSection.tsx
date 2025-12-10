// components/AboutSection.tsx
export default function AboutSection() {
  return (
    <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">
            About
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            개발과 비즈니스를<br className="hidden md:block" /> 함께 보는
            파트너
          </h2>
          <p className="mt-4 text-sm md:text-base text-ink-soft max-w-xl space-y-2">
            안녕하세요, James입니다. 9년 이상 프론트엔드·풀스택 개발자로
            일하며 스타트업부터 자체 이커머스까지 다양한 프로젝트를
            만들어왔습니다.
            <br />
            단순히 “웹사이트를 만들어주는 사람”이 아니라,{" "}
            <span className="font-medium text-ink">
              비즈니스 문제를 듣고, 그걸 기술로 푸는 사람
            </span>{" "}
            이라는 생각으로 일하고 있습니다.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 text-xs md:text-sm text-ink-soft">
            <div>
              <div className="font-semibold text-ink mb-1">Main stack</div>
              <ul className="space-y-1">
                <li>SvelteKit, React, TypeScript</li>
                <li>Node.js, PostgreSQL / Turso</li>
                <li>Stripe, Vercel, REST / Webhooks</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-ink mb-1">Interests</div>
              <ul className="space-y-1">
                <li>Automation & AI 에이전트</li>
                <li>E-commerce & 실무 워크플로우</li>
                <li>Small business / 교육업 SaaS</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 단순 프로필 카드 */}
        <div className="relative">
          <div className="rounded-3xl bg-white/80 border border-ink/5 p-6 shadow-xl shadow-ink/5">
            <div className="h-16 w-16 rounded-2xl bg-ink/90 mb-4 flex items-center justify-center text-white text-2xl font-semibold">
              J
            </div>
            <div className="text-sm">
              <div className="font-semibold text-ink">James Hwang</div>
              <div className="text-ink-soft text-xs mb-3">
                Frontend / Full-stack Developer
              </div>
              <p className="text-xs text-ink-soft">
                한국어 / 영어 / 중국어(기본)로 커뮤니케이션 가능하며,
                실무에서 바로 쓸 수 있는 제품을 만드는 데 집중합니다.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-6 -z-10">
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-accent/20 blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}