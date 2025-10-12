"use client";
import useTrackSectionView from "../hooks/useTrackSectionView";
import useTrackClick from "../hooks/useTrackClick";

export default function Footer() {
  // 🔹 Track when the footer scrolls into view
  useTrackSectionView("footer-section", "Footer Section Viewed");

  // 🔹 Click tracking hook for consistency
  const trackClick = useTrackClick("Footer");

  const footerLinks = [
    { label: "Diversity", href: "https://www.unr.edu/diversity" },
    { label: "Contact", href: "https://med.unr.edu/faculty-staff" },
    { label: "Equal Opportunity and Title IX", href: "https://www.unr.edu/civil-rights" },
    { label: "Employment & Careers", href: "https://www.unr.edu/jobs" },
    { label: "Non-Discrimination", href: "https://www.unr.edu/non-discrimination" },
    { label: "Privacy", href: "https://www.unr.edu/privacy" },
    { label: "Website Help", href: "https://med.unr.edu/web/update" },
  ];

  const socialIcons = [
    { name: "Flickr", link: "https://www.flickr.com/photos/nevadamedicine", svg: null },
    { name: "Facebook", link: "https://www.facebook.com/unrmed", svg: null },
    { name: "Instagram", link: "https://www.instagram.com/unrmed/", svg: null },
    { name: "YouTube", link: "https://www.youtube.com/@UNRMed", svg: null },
    { name: "LinkedIn", link: "https://www.linkedin.com/school/university-of-nevada-school-of-medicine-cp/", svg: null },
    { name: "Twitter", link: "https://x.com/unrmed", svg: null },
  ];

  return (
    <footer
      id="footer-section"
      className="text-center font-[myriad-pro-condensed,sans-serif]"
    >
      {/* ===== BLUE SECTION ===== */}
      <div
        className="bg-primary bg-cover bg-center text-white py-10 px-4 sm:px-6"
        style={{ backgroundImage: "url('/site-footer-bg.jpg')" }}
      >
        <div className="flex flex-col items-center justify-center text-center space-y-4 sm:space-y-5">
          <img
            src="/university-logo.svg"
            alt="University Logo"
            className="h-12 sm:h-14 md:h-16 mb-2 sm:mb-4"
          />

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            School of Medicine
          </h2>
          <p className="text-sm sm:text-base leading-tight text-blue-100">
            1664 N. Virginia Street, Reno, NV 89557 <br />
            (775) 784-1017
          </p>

          {/* ===== Social Media Icons ===== */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-5 flex-wrap">
            {socialIcons.map((icon) => (
              <a
                key={icon.name}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`UNR Med ${icon.name}`}
                className="bg-white rounded-full p-2.5 sm:p-3 hover:bg-accent hover:scale-105 transition-all duration-300 ease-in-out shadow-sm"
                onClick={() => trackClick(`Social Icon: ${icon.name}`)}
              >
                {icon.svg || (
                  <span className="text-[#2E6CA2] font-semibold text-sm">
                    {icon.name.charAt(0)}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ===== WHITE SECTION ===== */}
      <div className="bg-white py-3 sm:py-4 border-t border-gray-200">
        <ul className="flex justify-center items-center flex-wrap text-xs sm:text-sm md:text-base font-[900] uppercase">
          {footerLinks.map((linkObj, index) => (
            <li key={linkObj.label} className="flex items-center">
              <a
                href={linkObj.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick(`Footer Link: ${linkObj.label}`)}
                className="px-2 sm:px-3 py-1 text-[#002855] hover:text-[#007ab8] transition-colors duration-200"
              >
                {linkObj.label}
              </a>
              {index !== footerLinks.length - 1 && (
                <span className="inline-block w-[1px] h-4 bg-gray-300"></span>
              )}
            </li>
          ))}
        </ul>

        {/* ===== COPYRIGHT LINE ===== */}
        <p className="text-[#041E42] text-xs sm:text-sm mt-3 font-semibold tracking-wide">
          © 2025 All Rights Reserved | University of Nevada, Reno School of Medicine
        </p>
      </div>
    </footer>
  );
}
