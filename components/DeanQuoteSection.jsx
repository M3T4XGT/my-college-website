"use client";
import useTrackSectionView from "../hooks/useTrackSectionView";
import useTrackClick from "../hooks/useTrackClick";

export default function DeanQuoteSection() {
  // 🔹 Automatically track when the section is visible
  useTrackSectionView("dean-quote-section", "Dean Quote Section Viewed");

  // 🔹 Setup click tracking
  const trackClick = useTrackClick("DeanQuoteSection");

  return (
    <section
      id="dean-quote-section"
      className="bg-[#041E42] text-white py-12 sm:py-16 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-14">
        
        {/* === Left: Dean Image === */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/Hauptman-paul.jpg"
            alt="Paul J. Hauptman, M.D."
            className="rounded-sm shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md object-cover h-auto md:h-[400px]"
            loading="lazy"
          />
        </div>

        {/* === Right: Quote Section === */}
        <div className="relative w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Opening Quote */}
          <img
            src="/quote-lightblue-open.svg"
            alt="Opening quote"
            className="absolute -top-6 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-8 sm:w-10 md:w-14 opacity-90"
          />

          {/* Quote Text */}
          <blockquote className="relative z-10 text-base sm:text-lg md:text-xl font-[myriad-pro-condensed,sans-serif] font-semibold leading-relaxed px-2 sm:px-0">
            <p>
              We are committed to improving the health of all Nevadans through
              relationships that are built on trust and respect, and by serving
              the diverse populations throughout our community and state.
            </p>
          </blockquote>

          {/* Closing Quote */}
          <img
            src="/quote-lightblue-open.svg"
            alt="Closing quote"
            className="absolute -bottom-6 right-1/2 md:right-0 transform translate-x-1/2 md:translate-x-0 w-8 sm:w-10 md:w-14 opacity-90 rotate-180"
          />

          {/* Author — Click tracked */}
          <p
            onClick={() =>
              trackClick("Paul J. Hauptman, M.D. (Dean Profile Click)")
            }
            className="mt-6 sm:mt-8 text-xs sm:text-sm md:text-base font-bold cursor-pointer hover:text-accent transition-colors duration-200"
          >
            – Paul J. Hauptman, M.D. –{" "}
            <span className="font-normal italic">Dean</span>
          </p>
        </div>
      </div>
    </section>
  );
}
