"use client";
import { useEffect } from "react";
import { event } from "../lib/gtag";

export default function NewsSection() {
  const newsItems = [
    {
      image: "/sanford-medication-pharmacist.png",
      title: "How to take control of your medications",
      subtitle: "Questions to ask your pharmacist",
      link: "https://med.unr.edu/news-events/news/medication-safety",
    },
    {
      image: "/joan-zenan-nvt-hero.jpg",
      title: "Remembering Joan Zenan",
      subtitle:
        "Longtime librarian, founding director of Savitt Medical Library, University Libraries friend and advocate",
      link: "https://med.unr.edu/news-events/news/joan-zenan-tribute",
    },
    {
      image: "/unr-med-cleft-patients.png",
      title: "From patient to student",
      subtitle:
        "How the Speech Pathology and Audiology program inspires students at an early age",
      link: "https://med.unr.edu/news-events/news/patient-to-student",
    },
  ];

  // 🔹 Track section view (impression tracking)
  useEffect(() => {
    event({
      action: "news_section_view",
      params: {
        category: "NewsSection",
        label: "User viewed UNR Med News section",
        timestamp: new Date().toISOString(),
      },
    });
  }, []);

  // 🔹 Handle news click
  const handleNewsClick = (title, link) => {
    event({
      action: "news_item_click",
      params: {
        category: "NewsSection",
        label: title,
        destination: link,
        timestamp: new Date().toISOString(),
      },
    });
  };

  // 🔹 Handle “Read More” click
  const handleReadMoreClick = () => {
    event({
      action: "news_read_more_click",
      params: {
        category: "NewsSection",
        label: "Read More UNR Med News",
        destination: "https://med.unr.edu/news-events/news",
        timestamp: new Date().toISOString(),
      },
    });
  };

  return (
    <section
      id="news-section"
      className="bg-white py-12 sm:py-16 px-4 sm:px-6 md:px-12 text-center"
    >
      {/* === Section Title === */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-[myriad-pro-condensed,sans-serif] font-extrabold text-[#041E42] mb-8 sm:mb-10">
        UNR Med News
      </h2>

      {/* === News Grid === */}
      <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {newsItems.map((item) => (
          <div
            key={item.title}
            className="text-left flex flex-col bg-white rounded-sm overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-52 sm:h-60 md:h-64 object-cover"
              loading="lazy"
            />
            <div className="p-4 sm:p-5 flex flex-col flex-grow">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleNewsClick(item.title, item.link)}
                className="text-base sm:text-lg font-extrabold text-[#041E42] hover:text-[#007ab8] underline-offset-4 hover:underline transition-all"
              >
                {item.title}
              </a>
              <p className="mt-2 text-gray-700 text-sm sm:text-base leading-snug flex-grow">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* === Read More Button === */}
      <div className="mt-10">
        <a
          href="https://med.unr.edu/news-events/news"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleReadMoreClick}
          className="inline-block bg-[#041E42] text-white text-xs sm:text-sm md:text-base font-bold uppercase tracking-wide py-2.5 sm:py-3 px-6 sm:px-8 rounded-sm hover:bg-[#007ab8] transition-all duration-300"
        >
          Read More UNR Med News
        </a>
      </div>
    </section>
  );
}
