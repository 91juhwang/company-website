// components/OutcomesSection.tsx
export default function OutcomesSection() {
  const items = [
    {
      title: "시간 절약",
      body: "주문–제작–배송 사이의 수동 작업을 자동화해 하루 1–2시간씩 아끼는 구조를 만듭니다.",
    },
    {
      title: "오류 감소",
      body: "엑셀/카톡으로 흩어져 있던 정보를 한 곳에서 관리해 실수와 누락을 줄입니다.",
    },
    {
      title: "확장 가능한 구조",
      body: "나중에 앱, 추가 서비스로 확장이 편하도록 처음부터 구조를 설계합니다.",
    },
    {
      title: "기술 번역",
      body: "비전공자도 이해할 수 있는 언어로, 기술적 결정을 설명해 드립니다.",
    },
  ];

  return (
    <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-[1.2fr_1.6fr] md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">
            Outcomes
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            결과에 집중합니다.
          </h2>
          <p className="mt-4 text-sm md:text-base text-ink-soft max-w-xl">
            “어떤 프레임워크를 쓰냐”보다,{" "}
            <span className="font-medium text-ink">“당신 비즈니스에 어떤 레버리지를 주느냐”</span>를 더 중요하게
            봅니다.
            하나의 페이지/기능이라도 실제 운영에서 차이를 만들 수 있도록 설계합니다.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white/80 border border-ink/5 p-4 md:p-5 shadow-sm"
            >
              <h3 className="text-base md:text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}