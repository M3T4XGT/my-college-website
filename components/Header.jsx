import Image from "next/image";

export default function Header() {
  return (
    <header className="relative w-full bg-primary text-white overflow-hidden">
      {/* ===== Top Utility Bar ===== */}
      <div className="absolute right-0 top-0 flex flex-wrap items-center justify-end gap-3 sm:gap-6 bg-white text-primary font-semibold text-xs sm:text-sm py-2 pl-4 sm:pl-8 pr-4 sm:pr-6 rounded-bl-xl shadow-sm z-20">
        <a href="https://med.unr.edu/news-events" className="hover:underline whitespace-nowrap">
          News &amp; Events
        </a>
        <a href="https://med.unr.edu/get-involved" className="hover:underline whitespace-nowrap">
          Quicklinks
        </a>
        <a href="https://med.unr.edu/community" className="hover:underline whitespace-nowrap">
          Search
        </a>
        <a
  href="https://med.unr.edu/get-involved/give-unr-med"
  target="_blank"
  rel="noopener noreferrer"
  className="unr-give-btn font-condensed font-extrabold text-xs sm:text-sm leading-none uppercase px-3 py-1 rounded-md inline-block"
>
  GIVE
</a>
      </div>

      {/* ===== Main Header ===== */}
      <div className="flex flex-col items-center justify-center pt-16 sm:pt-20 md:pt-24 pb-8 text-center relative z-10">
        {/* Logo + Text Block */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4">
          {/* Logo (outlined) */}
          <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 border border-white mx-auto lg:mx-0">
            <Image
              src="/university-logo.svg"
              alt="College Logo"
              width={56}
              height={56}
              className="object-contain"
              priority
            />
          </div>

          {/* Text group */}
          <div className="flex flex-col items-center lg:items-start mt-3 lg:mt-0">
            <h1 className="logo-text-new text-xl sm:text-2xl md:text-3xl font-normal text-white leading-tight">
              School of Medicine
            </h1>
            <span className="logo-subtext block text-sm sm:text-base font-light text-[#cfe0f0] mt-[0.3rem]">
              A Healthy Nevada
            </span>
          </div>
        </div>

        {/* ===== Bottom Links ===== */}
        <div className="mt-6 flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-4 text-xs sm:text-sm uppercase font-semibold text-[#7fa6c6] tracking-wide">
          <a href="https://med.unr.edu/faculty-staff" className="hover:underline">
            Directory
          </a>
          <span className="hidden sm:inline">|</span>
          <a href="https://med.unr.edu/faculty" className="hover:underline">
            Faculty
          </a>
          <span className="hidden sm:inline">|</span>
          <a href="https://med.unr.edu/alumni" className="hover:underline">
            Alumni
          </a>
        </div>
      </div>
    </header>
  );
}
