// components/TechStackSection.tsx
const tools = [
  "SvelteKit",
  "React",
  "NextJS",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Turso",
  "Stripe",
  "Vercel",
  "Database",
  "Google Workspace",
];

export default function TechStackSection() {
  return (
    <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 py-16 md:py-24">
      <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">
        Tech & Integrations
      </p>
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
        자주 사용하는 기술 스택
      </h2>
      <p className="mt-3 text-sm md:text-base text-ink-soft max-w-xl">
        이미 사용 중인 툴(Notion, Google, Airtable 등)이 있다면
        최대한 그대로 살려서, 그 위에 필요한 기능을 얹는 방식으로 설계합니다.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-ink/10 bg-white/70 px-3 py-1 text-xs md:text-sm text-ink-soft"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}