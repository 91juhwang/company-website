"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import Image from "next/image";
import { useCallback } from "react";

const heroCopy = {
  ko: {
    brand: "JShipIt",
    nav: [
      { href: "#services", label: "서비스" },
      { href: "#process", label: "프로세스" },
      { href: "#about", label: "소개" },
      { href: "#contact", label: "문의" },
    ],
    headerCta: "프로젝트 상담",
    badge: "아이디어를 실현합니다",
    title: {
      pre: "아이디어를",
      emphasis: "임펙트 있는 제품",
      post: "으로 만듭니다.",
    },
    subtitle:
      "웹사이트, 자동화, 커스텀 소프트웨어, AI, 결제 시스템까지. 개발자를 고용하지 않아도, 비즈니스에 딱 맞는 솔루션을 함께 설계하고 만듭니다.",
    primaryCta: "프로젝트 상담하기",
    secondaryCta: "제공 서비스 보기",
    chips: ["웹사이트 · 이커머스", "자동화 · AI", "결제 · 커스텀 소프트웨어"],
    dashboard: {
      title: "업무 흐름 스냅샷",
      live: "실시간",
      rows: [
        { label: "웹사이트 주문", value: "15", pill: "오늘", tone: "neutral" },
        {
          label: "자동 이메일 발송",
          value: "43",
          pill: "자동화",
          tone: "accent",
        },
        { label: "AI 노트 생성", value: "12", pill: "AI", tone: "soft" },
        {
          label: "결제 처리 금액",
          value: "$5,820",
          pill: "Stripe",
          tone: "neutral",
        },
      ] as const,
      miniCards: [
        { title: "웹", subtitle: "랜딩 · 쇼핑몰" },
        { title: "자동화", subtitle: "이메일 · 시트" },
        { title: "AI", subtitle: "요약 · 챗봇" },
      ],
    },
  },
  en: {
    brand: "JShipIt",
    nav: [
      { href: "#services", label: "Services" },
      { href: "#process", label: "Process" },
      { href: "#about", label: "About" },
      { href: "#contact", label: "Contact" },
    ],
    headerCta: "Book a call",
    badge: "We ship ideas",
    title: {
      pre: "Ship ideas into",
      emphasis: "impactful products",
      post: ".",
    },
    subtitle:
      "Websites, automation, custom software, AI, and payments. We co-design the right mix for your business without the overhead of hiring a full-time developer.",
    primaryCta: "Book a project call",
    secondaryCta: "View services",
    chips: [
      "Websites & E-commerce",
      "Automation & AI",
      "Payments & Custom Software",
    ],
    dashboard: {
      title: "Business Flow Snapshot",
      live: "Live",
      rows: [
        { label: "Website orders", value: "15", pill: "Today", tone: "neutral" },
        {
          label: "Auto emails sent",
          value: "43",
          pill: "Automation",
          tone: "accent",
        },
        { label: "AI notes generated", value: "12", pill: "AI", tone: "soft" },
        {
          label: "Payments processed",
          value: "$5,820",
          pill: "Stripe",
          tone: "neutral",
        },
      ] as const,
      miniCards: [
        { title: "Web", subtitle: "Landing / Shop" },
        { title: "Automation", subtitle: "Emails / Sheets" },
        { title: "AI", subtitle: "Notes / Chatbot" },
      ],
    },
  },
};

export default function Hero() {
  const { language, toggleLanguage } = useLanguage();
  const t = heroCopy[language];

  const scrollToContact = useCallback(() => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">

      <div className="items-center justify-self-end">
        <button
          type="button"
          onClick={toggleLanguage}
          className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3 py-1.5 text-xs font-medium shadow-sm hover:border-ink/30 hover:cursor-pointer"
        >
          <span>{language === "ko" ? "🇺🇸" : "🇰🇷"}</span>
          <span className="font-semibold">
            {language === "ko" ? "EN" : "KO"}
          </span>
        </button>
      </div>

      <header className="flex items-center justify-between pb-6 pt-3 text-sm text-ink-soft">
        <span className="font-semibold tracking-tight">
          <Image
            src="/logo.svg"
            alt="JShipIt logo"
            width={120}
            height={10}
            priority
          />
        </span>
        <nav className="hidden md:flex gap-6">
          {t.nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            className="hover:cursor-pointer inline-flex items-center rounded-full border border-ink/10 bg-white px-4 py-1.5 text-xs font-medium shadow-sm hover:border-ink/30"
            onClick={() => scrollToContact()}
          >
            {t.headerCta}
          </button>
        </div>
      </header>

      <div className="grid gap-10 pt-8 pb-16 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
        {/* Left */}
        <div className="space-y-6">
          <p className="inline-flex items-center rounded-full bg-white/60 px-3 py-1 text-xs text-ink-soft shadow-sm">
            {t.badge}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            {t.title.pre}{" "}
            <span className="underline decoration-accent decoration-[6px] underline-offset-4">
              {t.title.emphasis}
            </span>
            {t.title.post}
          </h1>
          <p className="max-w-xl text-base md:text-lg text-ink-soft">
            {t.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              type="button"
              onClick={scrollToContact}
              className="hover:cursor-pointer inline-flex items-center rounded-full bg-ink text-white px-6 py-2.5 text-sm font-medium shadow-md hover:bg-black"
            >
              {t.primaryCta}
            </button>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border border-ink/15 bg-white px-5 py-2.5 text-sm font-medium text-ink-soft hover:border-ink/30"
            >
              {t.secondaryCta}
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-ink-soft pt-4">
            {t.chips.map((chip) => (
              <span key={chip} className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Right pseudo-dashboard */}
        <div className="relative">
          <div className="relative rounded-3xl bg-white/80 shadow-xl shadow-ink/5 p-5 md:p-6">
            <div className="flex items-center justify-between mb-4 text-xs">
              <span className="font-medium text-ink-soft">{t.dashboard.title}</span>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] text-emerald-700">
                {t.dashboard.live}
              </span>
            </div>
            <div className="space-y-3 text-xs">
              {t.dashboard.rows.map((row) => (
                <Row
                  key={row.label}
                  label={row.label}
                  value={row.value}
                  pill={row.pill}
                  tone={row.tone}
                />
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-[11px]">
              {t.dashboard.miniCards.map((card) => (
                <MiniCard key={card.title} title={card.title} subtitle={card.subtitle} />
              ))}
            </div>
          </div>

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
