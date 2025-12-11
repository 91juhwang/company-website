// components/TechStackSection.tsx
"use client";

import { useLanguage } from "@/context/LanguageContext";

const tools = [
  "SvelteKit",
  "React",
  "NextJS",
  "TypeScript",
  "Ruby",
  "AWS",
  "Drizzle ORM",
  "Supabase",
  "Node.js",
  "PostgreSQL",
  "Turso",
  "Stripe",
  "Vercel",
  "Database",
  "Google Workspace",
  "And more"
] as const;

const copy = {
  ko: {
    eyebrow: "Tech & Integrations",
    heading: "자주 사용하는 기술 스택",
    body:
      "이미 사용 중인 툴(Excel, Google 등)이 있다면 최대한 그대로 살려서, 그 위에 필요한 기능을 효율적으로 얹는 방식으로 설계합니다.",
  },
  en: {
    eyebrow: "Tech & Integrations",
    heading: "Go-to tools and stack",
    body:
      "If you're already on tools like Excel, Google, I keep them in place and design the new features on top of what your team knows.",
  },
} as const;

export default function TechStackSection() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 py-16 md:py-24">
      <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">
        {t.eyebrow}
      </p>
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
        {t.heading}
      </h2>
      <p className="mt-3 text-sm md:text-base text-ink-soft max-w-xl">
        {t.body}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tools.map((tool) => (
          <span
            key={tool}
            className="hover:bg-indigo-100 rounded-full border border-ink/10 bg-white/70 px-3 py-1 text-xs md:text-sm text-ink-soft"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
