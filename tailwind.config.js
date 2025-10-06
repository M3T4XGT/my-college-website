/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // future-proofing for App Router
  ],
  theme: {
    extend: {
      /* ===========================
         🎨 UNR Official Color Palette
         =========================== */
      colors: {
        primary: "#002855", // Deep navy blue background (main site)
        secondary: "#041E42", // Slightly darker navy (for text/icons)
        accent: "#00C278", // GIVE button green
        accentHover: "#00D18A", // Hover lighter green
        lightBlue: "#CFE0F0", // Tagline / subtle text color
        linkBlue: "#1F5383", // Hyperlink blue (from UNR CSS)
        divider: "#7FA6C6", // For Directory | Faculty | Alumni separators
        neutralGray: "#3A3B3E", // UNR paragraph text tone
        softGray: "#E6E8EA", // Card backgrounds
      },

      /* ===========================
         🖋 Fonts & Typography
         =========================== */
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
        condensed: ['"Myriad Pro Condensed"', "sans-serif"], // Logo / titles
      },

      /* ===========================
         🪄 Shadows & Transitions
         =========================== */
      boxShadow: {
        subtle: "0 2px 6px rgba(0, 0, 0, 0.1)",
        deep: "0 4px 10px rgba(0, 0, 0, 0.15)",
      },
      transitionTimingFunction: {
        "in-out-soft": "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      /* ===========================
         📱 Responsive Breakpoints
         ===========================
         These are tuned for actual device widths:
         - sm → phones (Android/iPhone)
         - md → tablets (iPad / mid Android)
         - lg → laptops
         - xl → desktops
         - 2xl → large displays / iMacs
      */
      screens: {
        xs: "360px", // small Android / older iPhones
        sm: "480px", // standard mobile portrait (iPhone 12, Pixel)
        md: "768px", // tablets (iPad, Galaxy Tab)
        lg: "1024px", // small laptops, horizontal tablets
        xl: "1280px", // desktop
        "2xl": "1536px", // large monitors
      },
    },
  },
  plugins: [],
};
