// components/ServicesSection.tsx
"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { useRef } from "react";

const servicesCopy = {
  ko: {
    eyebrow: "서비스",
    heading: "솔루션을 만듭니다",
    subtitle:
      "웹사이트, 자동화, 커스텀 소프트웨어, AI, 결제 시스템까지. 비즈니스에 맞는 조합으로 설계해서, 코드가 아니라 결과에 집중합니다.",
    scrollHint: "스크롤을 내리면서 카드들을 둘러보세요.",
    cardFooterNote: "커스텀 패키지 구성 가능",
    cardFooterCta: "",
    services: [
      {
        id: "01",
        title: "Websites & E-commerce",
        subtitle: "반응형 웹사이트, 쇼핑몰, 예약 시스템",
        bullets: [
          "SaaS, 랜딩 페이지, 쇼핑몰",
          "SvelteKit / React 기반",
          "결제 연동, 다국어 지원",
        ],
      },
      {
        id: "02",
        title: "Business Automation",
        subtitle: "반복 업무를 자동화하여 시간 절약",
        bullets: [
          "주문 → 공장/업체 자동 이메일 / 웹훅, 자동 팔로우업 이메일",
          "Google Sheets / Notion 등 내부 툴 연동",
          "커스텀 API 플로우",
        ],
      },
      {
        id: "03",
        title: "Custom Software",
        subtitle: "기성 솔루션으로 안 되는 애매한 지점 해결",
        bullets: [
          "내부 대시보드, 재고/주문/생산 관리",
          "역할/권한 기반 시스템",
          "확장 가능한 구조 설계",
        ],
      },
      {
        id: "04",
        title: "AI & LLM Integration",
        subtitle: "업무 흐름에 자연스럽게 녹아드는 AI",
        bullets: [
          "고객 Q&A 챗봇, 문서 검색",
          "음성 → 텍스트 → 요약/업무지시",
          "사내 지식베이스 검색 봇",
        ],
      },
      {
        id: "05",
        title: "SEO & Performance",
        subtitle: "빠르고, 잘 찾히는 웹사이트",
        bullets: [
          "온페이지 SEO 기본 세팅",
          "Core Web Vitals 기반 속도 튜닝",
          "콘텐츠/블로그 구조 설계",
        ],
      },
      {
        id: "06",
        title: "Payments & Subscriptions",
        subtitle: "전세계에서 결제 받고, 구독까지",
        bullets: [
          "Stripe, PayPal 연동",
          "구독/멤버십 빌링 구조",
          "결제 이후 인보이스/이메일 자동화",
        ],
      },
      {
        id: "07",
        title: "Consulting & Tech Strategy",
        subtitle: "“이걸 코드로 어떻게 풀지?” 같이 고민",
        bullets: [
          "MVP 방향성 코칭",
          "기존 서비스 마이그레이션/리팩터",
          "비용/유지보수 구조 설계",
        ],
      },
      {
        id: "08",
        title: "Organization / 교육 특화",
        subtitle: "도장·학원·교육업·그룹 비즈니스 전용 솔루션",
        bullets: [
          "수강생 관리, 결제",
          "출석/스케줄 관리",
          "다국어 사이트 + 주문 플로우",
        ],
      },
    ],
  },
  en: {
    eyebrow: "Services",
    heading: "What I build",
    subtitle:
      "Websites, automations, custom software, AI, and payments. We design the mix that fits your business so you can focus on outcomes instead of code.",
    scrollHint: "Scroll to browse the cards.",
    cardFooterNote: "Custom packages available",
    cardFooterCta: "",
    services: [
      {
        id: "01",
        title: "Websites & E-commerce",
        subtitle: "Responsive websites, shops, booking systems",
        bullets: [
          "SaaS, landing pages, online stores",
          "Built with SvelteKit / React",
          "Payments, multi-language",
        ],
      },
      {
        id: "02",
        title: "Business Automation",
        subtitle: "Automate repetitive work to save time",
        bullets: [
          "Auto emails/webhooks from orders to vendors, automatic follow-ups",
          "Google Sheets / Notion / 3rd party integrations",
          "Custom API flows, extract info from PDFs/files",
        ],
      },
      {
        id: "03",
        title: "Custom Software",
        subtitle: "Solve edge cases that templates can't handle",
        bullets: [
          "Internal dashboards, inventory/order/production",
          "Role/permission-based systems",
          "Architected for scale",
        ],
      },
      {
        id: "04",
        title: "AI & LLM Integration",
        subtitle: "AI that blends into your workflow",
        bullets: [
          "Customer Q&A chatbot, doc search",
          "Voice → text → summary/action items",
          "Internal knowledge search bot",
        ],
      },
      {
        id: "05",
        title: "SEO & Performance",
        subtitle: "Fast, discoverable websites",
        bullets: [
          "Baseline on-page SEO",
          "Speed tuning from Core Web Vitals",
          "Content/blog architecture",
        ],
      },
      {
        id: "06",
        title: "Payments & Subscriptions",
        subtitle: "Get paid globally, run subscriptions",
        bullets: [
          "Stripe, PayPal integrations",
          "Subscription/membership billing",
          "Post-payment invoices/email automation",
        ],
      },
      {
        id: "07",
        title: "Consulting & Tech Strategy",
        subtitle: "Translate fuzzy problems into an execution plan",
        bullets: [
          "MVP direction coaching",
          "Migrate/refactor existing services",
          "Plan for cost/maintenance",
        ],
      },
      {
        id: "08",
        title: "Organization / Education",
        subtitle: "Solutions for groups, academies, education",
        bullets: [
          "Student management, payments, orders",
          "Attendance/schedule management",
          "Multilingual site + ordering flow",
        ],
      },
    ],
  },
} as const;

export default function ServicesSection() {
  const { language } = useLanguage();
  const content = servicesCopy[language];
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (direction: "prev" | "next") => {
    const slider = sliderRef.current;
    if (!slider) return;
    const firstCard = slider.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard?.getBoundingClientRect().width ?? 320;
    const gap = 24; // matches gap-6
    const amount = cardWidth + gap;
    slider.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={sectionRef}
      className="w-full px-6 md:px-12 lg:px-20 xl:px-32 py-16 md:py-24"
    >
      <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">
            {content.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            {content.heading}
          </h2>
          <p className="mt-3 max-w-xl text-sm md:text-base text-ink-soft">
            {content.subtitle}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-xs md:text-sm text-ink-soft">{content.scrollHint}</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollByCard("prev")}
              className="hover:cursor-pointer h-9 w-9 rounded-full border border-ink/10 bg-white text-ink hover:border-ink/30 flex items-center justify-center shadow-sm"
              aria-label="Previous services"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollByCard("next")}
              className="hover:cursor-pointer h-9 w-9 rounded-full border border-ink/10 bg-white text-ink hover:border-ink/30 flex items-center justify-center shadow-sm"
              aria-label="Next services"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div className="relative px-8">
        <motion.div
          ref={sliderRef}
          className="flex gap-6 md:gap-8 overflow-x-auto pb-4 snap-x snap-mandatory"
        >
          {content.services.map((service, index) => (
            <motion.article
              key={service.id}
              className="min-w-[260px] max-w-[280px] md:min-w-[320px] md:max-w-[340px] rounded-3xl bg-white/80 shadow-lg shadow-ink/5 border border-ink/5 p-5 md:p-6 flex flex-col justify-between snap-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono text-ink-soft">
                  {service.id}
                </span>
                <span className="h-1.5 w-10 rounded-full bg-accent/70" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-1 text-xs md:text-sm text-ink-soft">
                  {service.subtitle}
                </p>
                <ul className="mt-3 space-y-1.5 text-xs md:text-[13px] text-ink-soft">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-[6px] h-1 w-1 rounded-full bg-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex justify-between items-center text-[11px] text-ink-soft">
                <span>{content.cardFooterNote}</span>
                <span className="rounded-full border border-ink/10 px-2 py-0.5">
                  {content.cardFooterCta}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg-beige via-bg-beige/40 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg-beige via-bg-beige/40 to-transparent" />
      </div>
    </div>
  );
}
