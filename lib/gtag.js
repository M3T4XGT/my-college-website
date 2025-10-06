// lib/gtag.js
export const GA_TRACKING_ID = "G-WD7CJXHTY1"; // ✅ Your GA4 Measurement ID

// Track page views
export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// Track custom events (optional)
export const event = ({ action, params }) => {
  window.gtag("event", action, params);
};
