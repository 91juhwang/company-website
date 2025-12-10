// components/ServicesSection.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    id: "01",
    title: "Websites & E-commerce",
    subtitle: "반응형 웹사이트, 쇼핑몰, 예약 시스템",
    bullets: [
      "SaaS, 랜딩 페이지, 쇼핑몰",
      "SvelteKit / React 기반",
      "한국/글로벌 결제 연동, 다국어 지원",
    ],
  },
  {
    id: "02",
    title: "Business Automation",
    subtitle: "반복 업무를 자동화하여 시간 절약",
    bullets: [
      "주문 → 공장/업체 자동 이메일 / 웹훅",
      "Google Sheets / Airtable / Notion 연동",
      "Zapier / Make / 커스텀 API 플로우",
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
      "Stripe, Toss, Paypal 연동",
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
    title: "Martial Arts / 교육 특화",
    subtitle: "도장·학원·교육업 비즈니스 전용 솔루션",
    bullets: [
      "수강생 관리, 결제, 유니폼 주문",
      "출석/스케줄 관리",
      "다국어 사이트 + 주문 플로우",
    ],
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // 스크롤 진행도에 따라 가로 슬라이드
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <div
      ref={ref}
      className="w-full px-6 md:px-12 lg:px-20 xl:px-32 py-16 md:py-24"
    >
      <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">
            Services
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            What I build
          </h2>
          <p className="mt-3 max-w-xl text-sm md:text-base text-ink-soft">
            웹사이트, 자동화, 커스텀 소프트웨어, AI, 결제 시스템까지.{" "}
            <br className="hidden md:block" />
            비즈니스에 맞는 조합으로 설계해서, 코드가 아니라 결과에
            집중합니다.
          </p>
        </div>
        <p className="text-xs md:text-sm text-ink-soft">
          스크롤을 내리면서<br className="md:hidden" /> 카드들을 둘러보세요.
        </p>
      </div>

      <div className="relative overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              className="min-w-[260px] max-w-[280px] md:min-w-[320px] md:max-w-[340px] rounded-3xl bg-white/80 shadow-lg shadow-ink/5 border border-ink/5 p-5 md:p-6 flex flex-col justify-between"
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
                <span>커스텀 패키지 구성 가능</span>
                <span className="rounded-full border border-ink/10 px-2 py-0.5">
                  상담 요청
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* 그라데이션 페이드 */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg-beige via-bg-beige/40 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg-beige via-bg-beige/40 to-transparent" />
      </div>
    </div>
  );
}