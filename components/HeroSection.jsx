"use client";
import { useEffect } from "react";
import { event } from "../lib/gtag";

export default function HeroSection() {
  useEffect(() => {
    // 🔹 Fire when HeroSection first mounts
    event({
      action: "hero_view",
      params: {
        category: "HeroSection",
        label: "Hero Section Mounted",
        timestamp: new Date().toISOString(),
      },
    });

    // 🔹 Fire once when section enters viewport
    let hasFired = false;

    const handleScroll = () => {
      if (hasFired) return;
      const hero = document.querySelector("#hero-section");
      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      if (inView) {
        hasFired = true;
        event({
          action: "hero_visible",
          params: {
            category: "HeroSection",
            label: "Hero Section Entered Viewport",
            timestamp: new Date().toISOString(),
          },
        });
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Track click engagement
  const handleHeroClick = () => {
    event({
      action: "hero_click",
      params: {
        category: "HeroSection",
        label: "User Clicked Hero Banner",
        timestamp: new Date().toISOString(),
      },
    });
  };

  return (
    <section
      id="hero-section"
      onClick={handleHeroClick}
      className="relative bg-cover bg-center bg-no-repeat min-h-[70vh] sm:min-h-[75vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center text-white overflow-hidden cursor-pointer"
      style={{ backgroundImage: "url('/HSB-fall-hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 sm:bg-black/35 md:bg-black/30"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-4xl px-4 sm:px-6 md:px-10 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold font-[myriad-pro-condensed,sans-serif] leading-tight mb-4">
          Our Health Starts Here
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-[myriad-pro-condensed,sans-serif] leading-snug text-gray-100">
          Established in 1969, the University of Nevada, Reno School of Medicine
          enhances Nevada’s health through education, training, clinical care,
          and research.
        </p>
      </div>
    </section>
  );
}
