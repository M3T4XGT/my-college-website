"use client";
import useTrackSectionView from "../hooks/useTrackSectionView";
import useTrackClick from "../hooks/useTrackClick";

export default function CommunitySection() {
  // 🔹 Track when the section becomes visible in the viewport
  useTrackSectionView("community-section", "Community Section Viewed");

  // 🔹 Setup click tracker
  const trackClick = useTrackClick("CommunitySection");

  return (
    <section
      id="community-section"
      className="relative bg-cover bg-center bg-no-repeat text-center text-white flex items-center justify-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]"
      style={{ backgroundImage: "url('/about-hero-reno-downtown.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#3A3B3E]/60 md:bg-[#3A3B3E]/50"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-3xl sm:max-w-4xl px-4 sm:px-6 md:px-10 py-8 sm:py-10 bg-black/60 sm:bg-black/50 rounded-md shadow-lg mx-4">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-[myriad-pro-condensed,sans-serif] font-extrabold mb-3 sm:mb-4 leading-snug md:leading-tight">
          Reno is a vibrant, active community
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg mb-5 sm:mb-6 leading-relaxed text-gray-100">
          Nestled in the foothills of the Sierra Nevada, Reno is a vibrant city
          filled with rich cultural events, a bustling arts district, and
          year-round outdoor experiences.
        </p>

        {/* CTA Button (Tracked) */}
        <a
          href="https://med.unr.edu/about/our-campus/living-reno"
          onClick={() => trackClick("Learn More About Reno-Tahoe Area")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white font-bold border-2 border-white text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2.5 sm:py-3 uppercase tracking-wide rounded-sm hover:bg-white hover:text-primary transition-all duration-300"
        >
          Learn More About Reno-Tahoe Area
        </a>
      </div>
    </section>
  );
}
