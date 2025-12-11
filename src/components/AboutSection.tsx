// components/AboutSection.tsx
"use client";

import { useLanguage } from "@/context/LanguageContext";

const copy = {
  ko: {
    eyebrow: "About",
    headingLine1: "개발과 비즈니스를",
    headingLine2: "함께 보는 파트너",
    introParagraphs: [
      "안녕하세요, James입니다. 9년 이상 풀스택 소프트웨어 개발자로 일하며 비지니스를 효율화 하고 성장시킬 수 있도록 돕고 있습니다.",
      '단순히 “웹사이트를 만들어주는 사람”이 아니라, 비즈니스 문제를 듣고, 솔루션을 제공하는 사람이라는 생각으로 일하고 있습니다.',
    ],
    mainStackLabel: "Main stack",
    mainStack: ["SvelteKit, React, TypeScript", "Node.js, PostgreSQL / Turso", "Stripe, Vercel, REST / Webhooks"],
    interestsLabel: "Interests",
    interests: ["Automation & AI 에이전트", "E-commerce & 실무 워크플로우", "Small business / SaaS"],
    profile: {
      name: "James Hwang",
      role: "Full-stack Engineer",
      bio: "한국어 / 영어로 커뮤니케이션 가능하며, 실무에서 바로 쓸 수 있는 제품을 만드는 데 집중합니다.",
    },
  },
  en: {
    eyebrow: "About",
    headingLine1: "A partner who sees both code",
    headingLine2: "and the business",
    introParagraphs: [
      "Hi, I’m James. 9+ years of full-stack experience helping founders and businesses build, launch, and scale their products.",
      "I'm not just someone who “makes websites.” I listen to the business problem and translate it into the right technical solution.",
    ],
    mainStackLabel: "Main stack",
    mainStack: ["SvelteKit, React, TypeScript", "Node.js, PostgreSQL / Turso", "Stripe, Vercel, REST / Webhooks"],
    interestsLabel: "Interests",
    interests: ["Automation & AI agents", "E-commerce & real-world workflows", "Small business / SaaS"],
    profile: {
      name: "James Hwang",
      role: "Full-stack Engineer",
      bio: "I work in Korean / English and focus on shipping products that are usable on day one.",
    },
  },
} as const;

export default function AboutSection() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            {t.headingLine1}
            <br className="hidden md:block" />
            {t.headingLine2}
          </h2>
          <div className="mt-4 text-sm md:text-base text-ink-soft max-w-xl space-y-2">
            {t.introParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 text-xs md:text-sm text-ink-soft">
            <div>
              <div className="font-semibold text-ink mb-1">{t.mainStackLabel}</div>
              <ul className="space-y-1">
                {t.mainStack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-semibold text-ink mb-1">{t.interestsLabel}</div>
              <ul className="space-y-1">
                {t.interests.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl bg-white/80 border border-ink/5 p-6 shadow-xl shadow-ink/5">
            <div className="h-16 w-16 rounded-2xl bg-ink/90 mb-4 flex items-center justify-center text-white text-2xl font-semibold">
              J
            </div>
            <div className="text-sm">
              <div className="font-semibold text-ink">{t.profile.name}</div>
              <div className="text-ink-soft text-xs mb-3">{t.profile.role}</div>
              <p className="text-xs text-ink-soft">{t.profile.bio}</p>
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
