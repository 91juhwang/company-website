"use client";

export default function ScrollTopButton() {
  const scrollToHero = () => {
    if (typeof document === "undefined") return;
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToHero}
      className="hover:cursor-pointer fixed bottom-4 right-4 z-30 inline-flex items-center rounded-full bg-ink text-white px-4 py-2 text-xs font-semibold shadow-lg hover:bg-black md:bottom-6 md:right-6"
    >
      ↑
    </button>
  );
}
