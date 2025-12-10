// components/FaqSection.tsx
"use client";

import { useLanguage } from "@/context/LanguageContext";

const faqs = {
  ko: [
    {
      q: "프로젝트 예산은 어느 정도부터 시작되나요?",
      a: "간단한 랜딩 페이지 기준으로는 $1,500 이하에서 시작할 수 있고, 자동화/커스텀 기능이 늘어날수록 범위와 예산이 함께 커집니다. 현재 상황과 목표를 듣고, 현실적인 옵션을 함께 잡아드립니다.",
    },
    {
      q: "기존에 있는 웹사이트를 리뉴얼하는 것도 가능한가요?",
      a: "네, 기존 WordPress / Wix / 기타 커스텀 사이트에서 마이그레이션/리뉴얼 경험이 있습니다. 유지보수 비용이나 속도, 구조를 고려해서 방향을 제안드립니다.",
    },
    {
      q: "런칭 후 유지보수는 어떻게 되나요?",
      a: "초기 1–2개월은 버그 수정 및 작은 조정을 포함한 기본 지원을 제공하고, 이후에는 월 단위 리테이너 또는 건별 의뢰 등 상황에 맞는 형태를 제안드립니다.",
    },
    {
      q: "완전 비전공자여도 괜찮나요?",
      a: "전혀 문제 없습니다. 비즈니스 언어로 이야기 나누고, 기술적인 내용은 제가 번역해서 정리해 드립니다.",
    },
  ],
  en: [
    {
      q: "What's the typical project budget range?",
      a: "A simple landing page can start under $1,500, and the scope/budget grows with automation or custom features. I'll share realistic options after hearing your goals.",
    },
    {
      q: "Can you redesign or migrate my existing site?",
      a: "Yes. I've migrated/redesigned from WordPress, Wix and custom stacks. I'll suggest a direction considering maintenance cost, speed, and structure.",
    },
    {
      q: "What does maintenance look like after launch?",
      a: "The first 1–2 months include basic support for bug fixes and small tweaks. After that, we can do a monthly retainer or per-request model that fits your situation.",
    },
    {
      q: "Is it okay if I'm not technical?",
      a: "Absolutely. We'll talk in business terms and I'll translate the technical decisions for you.",
    },
  ],
} as const;

export default function FaqSection() {
  const { language } = useLanguage();
  const list = faqs[language];

  return (
    <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 py-16 md:py-24">
      <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">FAQ</p>
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
        {language === "ko" ? "자주 받는 질문들" : "Frequently asked questions"}
      </h2>

      <div className="mt-6 space-y-3">
        {list.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl bg-white/80 border border-ink/5 p-4 md:p-5"
          >
            <summary className="flex cursor-pointer items-center justify-between text-sm md:text-base font-medium text-ink">
              <span>{item.q}</span>
              <span className="ml-4 text-xs text-ink-soft group-open:hidden">
                +
              </span>
              <span className="ml-4 text-xs text-ink-soft hidden group-open:inline">
                −
              </span>
            </summary>
            <p className="mt-2 text-xs md:text-sm text-ink-soft">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
