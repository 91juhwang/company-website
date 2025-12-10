// app/page.tsx
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServiceSection";
import OutcomesSection from "@/components/OutcomesSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import FaqSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="main-scroll md:h-screen md:overflow-y-scroll md:snap-y md:snap-mandatory">
      {/* 각 섹션은 full-height + snap-start (desktop), natural flow on mobile */}
      <section
        id="hero"
        className="pt-4 md:snap-start md:min-h-screen md:flex"
      >
        <Hero />
      </section>

      <section
        id="services"
        className="border-t border-black/5 md:snap-start md:min-h-screen md:flex md:items-center"
      >
        <ServicesSection />
      </section>

      <section
        id="outcomes"
        className="border-t border-black/5 md:snap-start md:min-h-screen md:flex md:items-center"
      >
        <OutcomesSection />
      </section>

      <section
        id="process"
        className="border-t border-black/5 md:snap-start md:min-h-screen md:flex md:items-center"
      >
        <ProcessSection />
      </section>

      <section
        id="about"
        className="border-t border-black/5 md:snap-start md:min-h-screen md:flex md:items-center"
      >
        <AboutSection />
      </section>

      <section
        id="stack"
        className="border-t border-black/5 md:snap-start md:min-h-screen md:flex md:items-center"
      >
        <TechStackSection />
      </section>

      <section
        id="faq"
        className="border-t border-black/5 md:snap-start md:min-h-screen md:flex md:items-center"
      >
        <FaqSection />
      </section>

      <section
        id="contact"
        className="border-t border-black/5 md:snap-start md:min-h-screen md:flex md:items-center"
      >
        <ContactSection />
      </section>
    </main>
  );
}
