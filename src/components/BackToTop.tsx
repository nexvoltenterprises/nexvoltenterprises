"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      type="button"
      aria-label="Scroll back to top"
      className="fixed bottom-24 right-6 z-40 p-3 rounded-full bg-[#171719]/90 border border-[#D4AF37]/50 text-[#F2D675] hover:text-[#0B0B0D] hover:bg-[#D4AF37] shadow-xl shadow-black/60 hover:shadow-[#D4AF37]/25 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer flex items-center justify-center group"
    >
      <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
}

export { BackToTop };
