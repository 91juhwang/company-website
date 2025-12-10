import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
      <header className="flex items-center justify-between py-6 text-sm text-ink-soft">
        <span className="font-semibold tracking-tight">
          JH Studio
        </span>
        <nav className="hidden md:flex gap-6">
          <a href="#services" className="hover:text-ink">
            Services
          </a>
          <a href="#process" className="hover:text-ink">
            Process
          </a>
          <a href="#about" className="hover:text-ink">
            About
          </a>
          <a href="#contact" className="hover:text-ink">
            Contact
          </a>
        </nav>
        <Link
          href="#contact"
          className="inline-flex items-center rounded-full border border-ink/10 bg-white px-4 py-1.5 text-xs font-medium shadow-sm hover:border-ink/30"
        >
          프로젝트 상담
        </Link>
      </header>

      <div className="grid gap-10 pt-8 pb-16 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
        {/* Left */}
        <div className="space-y-6">
          <p className="inline-flex items-center rounded-full bg-white/60 px-3 py-1 text-xs text-ink-soft shadow-sm">
            아이디어를, 진짜 돌아가는 서비스로.
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            Ship ideas into{" "}
            <span className="underline decoration-accent decoration-[6px] underline-offset-4">
              working products
            </span>
            .
          </h1>
          <p className="max-w-xl text-base md:text-lg text-ink-soft">
            웹사이트, 자동화, 커스텀 소프트웨어, AI, 결제 시스템까지.{" "}
            <br className="hidden md:block" />
            개발자를 고용하지 않아도, 비즈니스에 딱 맞는 솔루션을 함께 설계하고
            만듭니다.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="#contact"
              className="inline-flex items-center rounded-full bg-ink text-white px-6 py-2.5 text-sm font-medium shadow-md hover:bg-black"
            >
              프로젝트 상담하기
            </Link>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border border-ink/15 bg-white px-5 py-2.5 text-sm font-medium text-ink-soft hover:border-ink/30"
            >
              제공 서비스 보기
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-ink-soft pt-4">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Websites & E-commerce
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Automation & AI
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Payment & Custom Software
            </span>
          </div>
        </div>

        {/* Right pseudo-dashboard */}
        <div className="relative">
          <div className="relative rounded-3xl bg-white/80 shadow-xl shadow-ink/5 p-5 md:p-6">
            <div className="flex items-center justify-between mb-4 text-xs">
              <span className="font-medium text-ink-soft">
                Business Flow Snapshot
              </span>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] text-emerald-700">
                Live
              </span>
            </div>
            <div className="space-y-3 text-xs">
              <Row
                label="Website order"
                value="15"
                pill="Today"
                tone="neutral"
              />
              <Row
                label="Auto emails sent"
                value="43"
                pill="Automation"
                tone="accent"
              />
              <Row
                label="AI notes generated"
                value="12"
                pill="AI"
                tone="soft"
              />
              <Row
                label="Payments processed"
                value="$4,820"
                pill="Stripe"
                tone="neutral"
              />
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-[11px]">
              <MiniCard title="Web" subtitle="Landing / Shop" />
              <MiniCard title="Automation" subtitle="Emails, sheets" />
              <MiniCard title="AI" subtitle="Notes & Chatbot" />
            </div>
          </div>

          {/* background blobs */}
          <div className="pointer-events-none absolute -inset-6 -z-10">
            <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-ink/10 blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  pill,
  tone,
}: {
  label: string;
  value: string;
  pill: string;
  tone: "neutral" | "accent" | "soft";
}) {
  const pillClasses =
    tone === "accent"
      ? "bg-accent/10 text-accent-dark"
      : tone === "soft"
        ? "bg-ink/5 text-ink-soft"
        : "bg-ink/5 text-ink-soft";

  return (
    <div className="flex items-center justify-between rounded-xl bg-ink/3 p-2.5">
      <div className="flex flex-col">
        <span className="text-[11px] text-ink-soft">{label}</span>
        <span className="text-sm font-semibold">{value}</span>
      </div>
      <span
        className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${pillClasses}`}
      >
        {pill}
      </span>
    </div>
  );
}

function MiniCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-2xl border border-ink/5 bg-ink/2 p-2.5">
      <div className="h-1 w-6 rounded-full bg-accent/70 mb-1.5" />
      <div className="text-[11px] font-medium">{title}</div>
      <div className="text-[10px] text-ink-soft">{subtitle}</div>
    </div>
  );
}