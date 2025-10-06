export default function AcademicProgramsSection() {
  const topPrograms = [
    {
      title: "Medical Doctor (M.D.) Program",
      desc: "Our M.D. program offers a comprehensive and innovative medical education that integrates classroom learning with hands-on clinical experience.",
      link: "https://med.unr.edu/education/medical-education",
      button: "Learn more about the M.D. Program",
    },
    {
      title: "Physician Assistant Studies Program",
      desc: "Physician Assistant students receive education delivered by experienced faculty dedicated to advancing student career opportunities and preparing them to be vital members of health care teams.",
      link: "https://med.unr.edu/education/physician-assistant-studies",
      button: "Learn more about the PA Program",
    },
    {
      title: "Speech Pathology and Audiology Program",
      desc: "Our programs equip students with the skills needed for impactful careers in diverse environments, from schools and hospitals to rehab centers and community clinics.",
      link: "https://med.unr.edu/education/speech-pathology-audiology",
      button: "Learn more about the SPA Program",
    },
  ];

  const bottomPrograms = [
    {
      title: "Residency and Fellowship Programs",
      desc: "Our Graduate Medical Education program offers exceptional hands-on training and prioritizes collaboration, active experiences and cutting-edge technology to prepare our residents, fellows and interns for a successful career in medicine.",
      link: "https://med.unr.edu/education/residency-fellowship-programs",
      button: "Learn more about Residency and Fellowships",
    },
    {
      title: "Continuing Medical Education Program",
      desc: "Our program provides high-quality professional development opportunities, allowing health care providers to deliver improved patient care.",
      link: "https://med.unr.edu/education/continuing-medical-education",
      button: "Learn more about our CME Program",
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-white text-[#041E42]">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-[myriad-pro-condensed,sans-serif] text-center mb-8 sm:mb-12">
        Find your academic program:
      </h2>

      {/* === Top Row: 3 Columns (responsive) === */}
      <div className="max-w-7xl mx-auto grid gap-6 sm:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {topPrograms.map((program, index) => (
          <div
            key={index}
            className="bg-[#041E42] text-white p-6 md:p-8 flex flex-col justify-between shadow-md rounded-sm"
          >
            <h3 className="text-xl sm:text-2xl font-[myriad-pro-condensed,sans-serif] font-extrabold leading-snug mb-3 sm:mb-4">
              {program.title}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed font-[myriad-pro-condensed,sans-serif] mb-5 sm:mb-6">
              {program.desc}
            </p>
            <a
              href={program.link}
              className="inline-block border border-[#66A8E0] bg-[#002855] text-white text-xs sm:text-sm font-[myriad-pro-condensed,sans-serif] font-extrabold uppercase px-5 sm:px-6 py-2.5 sm:py-3 hover:bg-[#00C278] hover:text-[#041E42] transition-all duration-300 text-center w-full sm:w-auto"
            >
              {program.button}
            </a>
          </div>
        ))}
      </div>

      {/* === Bottom Row: 2 Wide Columns === */}
      <div className="max-w-7xl mx-auto grid gap-6 sm:gap-8 sm:grid-cols-1 lg:grid-cols-2 mt-8 sm:mt-10">
        {bottomPrograms.map((program, index) => (
          <div
            key={index}
            className="bg-[#041E42] text-white p-6 md:p-8 flex flex-col justify-between shadow-md rounded-sm"
          >
            <h3 className="text-xl sm:text-2xl font-[myriad-pro-condensed,sans-serif] font-extrabold leading-snug mb-3 sm:mb-4">
              {program.title}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed font-[myriad-pro-condensed,sans-serif] mb-5 sm:mb-6">
              {program.desc}
            </p>
            <a
              href={program.link}
              className="inline-block border border-[#66A8E0] bg-[#002855] text-white text-xs sm:text-sm font-[myriad-pro-condensed,sans-serif] font-extrabold uppercase px-5 sm:px-6 py-2.5 sm:py-3 hover:bg-[#00C278] hover:text-[#041E42] transition-all duration-300 text-center w-full sm:w-auto"
            >
              {program.button}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
