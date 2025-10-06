export default function TestimonialSection() {
  return (
    <section className="bg-[#041E42] text-white py-12 sm:py-16 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-14">
        
        {/* === Left: Image === */}
        <div className="w-full md:w-1/2 flex justify-center items-center py-4 sm:py-8">
          <img
            src="/adam-serfoss.jpg"
            alt="Adam Serfoss"
            className="rounded-sm shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg object-cover h-auto md:h-[420px]"
            loading="lazy"
          />
        </div>

        {/* === Right: Quote Section === */}
        <div className="w-full md:w-1/2 relative text-center md:text-left">
          {/* Opening Quote */}
          <img
            src="/quote-lightblue-open.svg"
            alt="Opening quote"
            className="absolute -top-6 sm:-top-8 md:-top-10 left-4 sm:left-0 w-8 sm:w-10 md:w-14 opacity-90"
          />

          {/* Quote Text */}
          <blockquote className="relative z-10 text-base sm:text-lg md:text-xl font-[myriad-pro-condensed,sans-serif] font-semibold leading-relaxed px-2 sm:px-0">
            <p>
              Nevada is not only my home but also the home of my family, friends
              and the community that has always supported me. I feel a deep
              connection to this state and its people, and I want to give back
              by ensuring that those who need care the most have access to
              someone who understands the challenges they face.
            </p>
          </blockquote>

          {/* Closing Quote (rotated same image) */}
          <img
            src="/quote-lightblue-open.svg"
            alt="Closing quote"
            className="absolute -bottom-6 sm:-bottom-8 md:-bottom-10 right-4 sm:right-0 w-8 sm:w-10 md:w-14 opacity-90 rotate-180"
          />

          {/* Author */}
          <p className="mt-6 sm:mt-8 text-xs sm:text-sm md:text-base font-bold">
            – Adam Serfoss –{" "}
            <span className="font-normal italic block sm:inline">
              Physician Assistant Studies Program, Class of 2025
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
