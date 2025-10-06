export default function Footer() {
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
    {
      name: "Flickr",
      link: "https://www.flickr.com/photos/nevadamedicine",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#2E6CA2">
          <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M7.5,15.5c-1.657,0-3-1.343-3-3 
          c0-1.656,1.343-3,3-3c1.656,0,3,1.344,3,3C10.5,14.157,9.156,15.5,7.5,15.5z M16.5,15.5c-1.657 0-3-1.343-3-3c0-1.656,1.343-3,3-3 
          c1.656,0,3,1.344,3,3C19.5,14.157,18.156,15.5,16.5,15.5z"></path>
        </svg>
      ),
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/unrmed",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="#2E6CA2" viewBox="0 0 24 24" width="22" height="22">
          <path d="M22 12c0-5.5228-4.4772-10-10-10S2 6.4772 2 12c0 5.0043 3.6571 9.1281 8.4375 9.8789V15.4688H7.8984v-3.4688h2.5391V9.7969c0-2.5078 1.4922-3.8906 3.7773-3.8906 1.0938 0 2.2383.1953 2.2383.1953v2.4609h-1.2617c-1.2422 0-1.6289.7715-1.6289 1.5625v1.875h2.7734l-.4434 3.4688h-2.33v6.4101C18.3429 21.1281 22 17.0043 22 12z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/unrmed/",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="#2E6CA2" viewBox="0 0 24 24" width="22" height="22">
          <path d="M7.5 2h9a5.5 5.5 0 0 1 5.5 5.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.75-.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      link: "https://www.youtube.com/@UNRMed",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="#2E6CA2" viewBox="0 0 24 24" width="22" height="22">
          <path d="M10 15V9l5 3-5 3zm11.5-3a48.39 48.39 0 0 1-.3 5.1c-.2 1.1-.9 2-2 2.3C17.3 20.9 12 21 12 21s-5.3-.1-7.2-.6c-1.1-.3-1.8-1.2-2-2.3A48.39 48.39 0 0 1 2.5 12a48.39 48.39 0 0 1 .3-5.1c.2-1.1.9-2 2-2.3C6.7 3.1 12 3 12 3s5.3.1 7.2.6c1.1.3 1.8 1.2 2 2.3.2 1.7.3 3.4.3 5.1z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/school/university-of-nevada-school-of-medicine-cp/",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="#2E6CA2" viewBox="0 0 24 24" width="22" height="22">
          <path d="M20.45 20.45h-3.56v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.86v5.49H9.47V9h3.42v1.56h.05c.48-.9 1.66-1.84 3.42-1.84 3.65 0 4.32 2.4 4.32 5.52v6.21zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77A1.77 1.77 0 0 0 0 1.77v20.46C0 23.1.9 24 1.77 24h20.46A1.77 1.77 0 0 0 24 22.23V1.77A1.77 1.77 0 0 0 22.23 0z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      link: "https://x.com/unrmed",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="#2E6CA2" viewBox="0 0 24 24" width="22" height="22">
          <path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.932 4.932 0 0 0 2.163-2.724 9.865 9.865 0 0 1-3.127 1.195 4.918 4.918 0 0 0-8.385 4.482A13.944 13.944 0 0 1 1.671 3.149a4.822 4.822 0 0 0-.664 2.475 4.918 4.918 0 0 0 2.188 4.096 4.903 4.903 0 0 1-2.228-.616v.061a4.925 4.925 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417A9.868 9.868 0 0 1 0 19.54 13.933 13.933 0 0 0 7.548 21.5c9.142 0 14.307-7.721 13.995-14.646a9.935 9.935 0 0 0 2.41-2.284z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="text-center font-[myriad-pro-condensed,sans-serif]">
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

          {/* Social Media */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-5 flex-wrap">
            {socialIcons.map((icon) => (
              <a
                key={icon.name}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`UNR Med ${icon.name}`}
                className="bg-white rounded-full p-2.5 sm:p-3 hover:bg-accent hover:scale-105 transition-all duration-300 ease-in-out shadow-sm"
              >
                {icon.svg}
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
      </div>
    </footer>
  );
}
