"use client";
import useTrackSectionView from "../hooks/useTrackSectionView";
import useTrackClick from "../hooks/useTrackClick";

export default function CommunityPartnersSection() {
  // 🔹 Track section view when visible in viewport
  useTrackSectionView(
    "community-partners",
    "Community Partners Section Viewed"
  );

  // 🔹 Setup reusable click tracker for this section
  const trackClick = useTrackClick("CommunityPartnersSection");

  return (
    <section
      id="community-partners"
      className="bg-[#041E42] text-white py-12 sm:py-16 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        {/* === Left: Image === */}
        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-none">
          <img
            src="/Home-Renown-building-cb.jpg"
            alt="Renown Health Building"
            className="rounded-sm shadow-lg w-full max-w-lg sm:max-w-xl object-cover h-auto md:h-[420px]"
            loading="lazy"
          />
        </div>

        {/* === Right: Text Content === */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-[myriad-pro-condensed,sans-serif] mb-4 leading-snug md:leading-tight">
            Nevada’s first integrated health system
          </h2>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 font-[myriad-pro-condensed,sans-serif] text-white/90">
            Nevada’s first integrated academic health system was established in
            2021 with Renown Health. It serves to enhance the health of our
            community through increased access to care, innovative health care
            delivery, expansion of clinical research, and training for the next
            generation of physicians and health care professionals.
          </p>

          {/* === CTA Button (Tracked) === */}
          <a
            href="https://med.unr.edu/community/our-partners"
            onClick={() => trackClick("Learn more about our community partners")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white text-white font-bold text-xs sm:text-sm uppercase tracking-wide px-5 sm:px-6 py-2.5 sm:py-3 rounded-sm hover:bg-accent hover:border-accent hover:text-white transition-all duration-300"
          >
            Learn more about our community partners
          </a>
        </div>
      </div>
    </section>
  );
}
