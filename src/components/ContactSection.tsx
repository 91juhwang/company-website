// components/ContactSection.tsx
"use client";

import { useLanguage } from "@/context/LanguageContext";

const copy = {
  ko: {
    eyebrow: "Contact",
    heading: "Ready to build?",
    intro:
      "아래에 간단히 남겨주시면, 보통 24시간 이내에 이메일로 회신드립니다. 아직 아이디어가 정리가 안 되어 있어도 괜찮습니다. 현재 상황을 편하게 적어주세요.",
    contactLine: "이메일 / 캘린더 링크 / 카카오톡 ID 등 넣을 자리",
    contactLineNote: "(예: email@domain.com, 평일 10:00–18:00)",
    fields: {
      nameLabel: "이름 / 이름 + 직책",
      namePlaceholder: "예: 김OO / 원장님",
      emailLabel: "이메일",
      emailPlaceholder: "you@example.com",
      budgetLabel: "대략적인 예산 범위",
      budgetOptions: ["아직 잘 모르겠어요", "~ $1,500", "$1,500 ~ $5,000", "$5,000 이상"],
      projectLabel: "현재 상황 + 만들고 싶은 것",
      projectPlaceholder: `예)\n- 현재: 카톡/엑셀로 주문 받고, 중국 공장에 수동으로 전달하는 중\n- 만들고 싶은 것: 온라인 주문 → 자동 주문서 생성 → 공장 이메일/사이트 연동\n- 희망 일정: 3개월 이내 MVP`,
    },
    submit: "메시지 보내기",
    footer:
      "FOOTER 썸씽",
  },
  en: {
    eyebrow: "Contact",
    heading: "Ready to build?",
    intro:
      "Leave a quick note below and I usually reply by email within 24 hours. It's okay if the idea isn't fully defined yet—just share where you are now.",
    contactLine: "Drop an email / calendar link / phone # here",
    contactLineNote: "(e.g., email@domain.com, weekdays 10:00–18:00)",
    fields: {
      nameLabel: "Name / Name + Title",
      namePlaceholder: "e.g., Jane Doe / Director",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      budgetLabel: "Rough budget range",
      budgetOptions: ["Not sure yet", "~ $1,500", "$1,500 ~ $5,000", "$5,000 and up"],
      projectLabel: "Current situation + what you want to build",
      projectPlaceholder: `e.g.\n- Now: taking orders via chat/Excel, manually sending to factory\n- Want: online orders → auto order sheet → factory email/portal\n- Target timeline: MVP within 3 months`,
    },
    submit: "Send message",
    footer:
      "Footerrr.",
  },
} as const;

export default function ContactSection() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)] md:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            {t.heading}
          </h2>
          <p className="mt-3 text-sm md:text-base text-ink-soft max-w-md">
            {t.intro}
          </p>

          <div className="mt-6 text-xs md:text-sm text-ink-soft space-y-1">
            <p>{t.contactLine}</p>
            <p className="text-[11px] md:text-xs">{t.contactLineNote}</p>
          </div>
        </div>

        <form className="rounded-3xl bg-white/80 border border-ink/5 p-5 md:p-6 shadow-sm space-y-4 text-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-ink-soft mb-1.5">
                {t.fields.nameLabel}
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-ink/10 bg-bg-beige/60 px-3 py-2 text-sm outline-none focus:border-ink/40"
                placeholder={t.fields.namePlaceholder}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-ink-soft mb-1.5">
                {t.fields.emailLabel}
              </label>
              <input
                type="email"
                className="w-full rounded-xl border border-ink/10 bg-bg-beige/60 px-3 py-2 text-sm outline-none focus:border-ink/40"
                placeholder={t.fields.emailPlaceholder}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-ink-soft mb-1.5">
              {t.fields.budgetLabel}
            </label>
            <select className="w-full rounded-xl border border-ink/10 bg-bg-beige/60 px-3 py-2 text-sm outline-none focus:border-ink/40">
              {t.fields.budgetOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-ink-soft mb-1.5">
              {t.fields.projectLabel}
            </label>
            <textarea
              rows={5}
              className="w-full rounded-xl border border-ink/10 bg-bg-beige/60 px-3 py-2 text-sm outline-none focus:border-ink/40 resize-none"
              placeholder={t.fields.projectPlaceholder}
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-ink text-white px-4 py-2.5 text-sm font-medium hover:bg-black"
          >
            {t.submit}
          </button>

          <p className="text-[11px] text-ink-soft">{t.footer}</p>
        </form>
      </div>
    </div>
  );
}
