// components/ProcessSection.tsx
const steps = [
  {
    title: "1. Discovery Call",
    body: "현재 비즈니스 상황, 문제, 아이디어를 자유롭게 들려주세요. (30–45분 온라인 미팅)",
  },
  {
    title: "2. Proposal & Scope",
    body: "기능, 일정, 견적을 정리해 드리고, 합의된 범위를 기준으로 진행합니다.",
  },
  {
    title: "3. Build & Iterate",
    body: "짧은 사이클로 프로토타입을 보여드리며 피드백을 받아 개선합니다.",
  },
  {
    title: "4. Launch & Support",
    body: "실제 운영 환경에 배포하고, 초기 운영/유지보수도 함께 돕습니다.",
  },
];

export default function ProcessSection() {
  return (
    <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 py-16 md:py-24">
      <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">
        Process
      </p>
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
        함께 일하는 방식
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {steps.map((step, idx) => (
          <div
            key={step.title}
            className="relative rounded-3xl bg-white/80 border border-ink/5 p-4 md:p-5"
          >
            <div className="absolute -top-4 left-4 flex h-7 w-7 items-center justify-center rounded-full bg-ink text-[11px] text-white shadow-md">
              {idx + 1}
            </div>
            <h3 className="mt-4 text-sm md:text-base font-semibold">
              {step.title}
            </h3>
            <p className="mt-2 text-xs md:text-sm text-ink-soft">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}