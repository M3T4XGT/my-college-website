"use client";
import { useEffect } from "react";
import { event } from "../lib/gtag";

export default function MainNav() {
  const navItems = [
    { name: "Education", link: "https://med.unr.edu/education" },
    { name: "Research", link: "https://med.unr.edu/research" },
    { name: "Community", link: "https://med.unr.edu/community" },
    { name: "Get Involved", link: "https://med.unr.edu/get-involved" },
    { name: "About", link: "https://med.unr.edu/about" },
  ];

  // 🔹 Track when navigation section renders (for impressions)
  useEffect(() => {
    event({
      action: "main_nav_view",
      params: {
        category: "Main Navigation",
        label: "MainNav Rendered",
        timestamp: new Date().toISOString(),
      },
    });
  }, []);

  // 🔹 Track when a nav link is clicked
  const handleNavClick = (name, link) => {
    event({
      action: "main_nav_click",
      params: {
        category: "Main Navigation",
        label: name,
        destination: link,
        timestamp: new Date().toISOString(),
      },
    });
  };

  return (
    <nav className="bg-white border-t border-gray-300 shadow-sm">
      <ul className="flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 py-2 sm:py-3 px-2 text-center">
        {navItems.map((item, index) => (
          <li key={item.name} className="flex items-center">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleNavClick(item.name, item.link)}
              className="text-[#041E42] font-[900] font-[myriad-pro-condensed,sans-serif] text-sm sm:text-base md:text-lg no-underline cursor-pointer px-2 sm:px-3 py-1 sm:py-2 hover:text-[#00C278] transition-colors duration-200"
            >
              {item.name}
            </a>

            {/* Divider */}
            {index !== navItems.length - 1 && (
              <span className="hidden sm:inline-block w-[1px] h-5 bg-gray-300 mx-1 sm:mx-2 align-middle"></span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
