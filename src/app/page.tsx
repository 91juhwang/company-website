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
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory main-scroll">
      {/* 각 섹션은 full-height + snap-start */}
      <section id="hero" className="snap-start min-h-screen flex items-center">
        <Hero />
      </section>

      <section
        id="services"
        className="snap-start min-h-screen flex items-center border-t border-black/5"
      >
        <ServicesSection />
      </section>

      <section
        id="outcomes"
        className="snap-start min-h-screen flex items-center border-t border-black/5"
      >
        <OutcomesSection />
      </section>

      <section
        id="process"
        className="snap-start min-h-screen flex items-center border-t border-black/5"
      >
        <ProcessSection />
      </section>

      <section
        id="about"
        className="snap-start min-h-screen flex items-center border-t border-black/5"
      >
        <AboutSection />
      </section>

      <section
        id="stack"
        className="snap-start min-h-screen flex items-center border-t border-black/5"
      >
        <TechStackSection />
      </section>

      <section
        id="faq"
        className="snap-start min-h-screen flex items-center border-t border-black/5"
      >
        <FaqSection />
      </section>

      <section
        id="contact"
        className="snap-start min-h-screen flex items-center border-t border-black/5"
      >
        <ContactSection />
      </section>
    </main>
  );
}