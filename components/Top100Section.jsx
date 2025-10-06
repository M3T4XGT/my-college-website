export default function Top100Section() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat flex items-center justify-center text-white overflow-hidden min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] px-4 sm:px-6 md:px-12 py-20 sm:py-24 md:py-32"
      style={{
        backgroundImage: "url('/Research-hero.png')", // ✅ use your image
      }}
    >
      {/* === Overlay (UNR gray-blue tone) === */}
      <div className="absolute inset-0 bg-[#3A3B3E]/70"></div>

      {/* === Content === */}
      <div className="relative z-10 text-center max-w-3xl">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-[myriad-pro-condensed,sans-serif] mb-4 sm:mb-6 leading-tight">
          UNR Med ranks in Top 100
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-[myriad-pro-condensed,sans-serif] mb-8 sm:mb-10 text-gray-100 px-2 sm:px-0">
          UNR Med is ranked among the top 100 schools based on research funding
          received from the National Institutes of Health (NIH) in 2023.
        </p>

        {/* CTA Button */}
        <a
          href="https://med.unr.edu/research"
          className="inline-block border-2 border-white text-white text-xs sm:text-sm md:text-base font-extrabold font-[myriad-pro-condensed,sans-serif] uppercase px-5 sm:px-8 py-2.5 sm:py-3 rounded-sm hover:bg-[#00C278] hover:text-[#041E42] transition-all duration-300 ease-in-out"
        >
          Learn More About Our Research
        </a>
      </div>
    </section>
  );
}
