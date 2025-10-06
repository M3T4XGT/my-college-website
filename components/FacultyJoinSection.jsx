export default function FacultyJoinSection() {
  return (
    <section className="bg-white text-[#041E42] py-12 sm:py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 sm:gap-10 md:gap-14">
        
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-[myriad-pro-condensed,sans-serif] mb-4 leading-snug md:leading-tight">
            Why teach at UNR Med?
          </h2>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 font-[myriad-pro-condensed,sans-serif] text-[#3a3b3e]">
            Support our students, build meaningful relationships, and help shape the
            future of health care. As a research-intensive, community-based medical
            school, we offer students immersive educational experiences and ample
            research opportunities. Join us in training the next generation of
            health care professionals.
          </p>

          {/* CTA Button */}
          <a
            href="https://med.unr.edu/get-involved/why-teach"
            className="inline-block bg-[#041E42] text-white font-bold text-xs sm:text-sm md:text-base uppercase tracking-wide px-5 sm:px-6 py-2.5 sm:py-3 rounded-sm hover:bg-accent transition-all duration-300"
          >
            Join Our Faculty
          </a>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/Home-teaching-med-students-cb.jpg" // ✅ your actual image
            alt="UNR Faculty Teaching"
            className="rounded-sm shadow-lg w-full max-w-sm sm:max-w-md md:max-w-xl object-cover h-auto md:h-[420px]"
          />
        </div>
      </div>
    </section>
  );
}
