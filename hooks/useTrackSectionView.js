import { useEffect } from "react";
import { event } from "../lib/gtag";

/**
 * Reusable GA4 section-view tracker.
 * @param {string} sectionId  — the HTML id of the section element
 * @param {string} label      — descriptive label for GA
 * @param {number} threshold  — visibility ratio (default 0.4)
 */
export default function useTrackSectionView(sectionId, label, threshold = 0.4) {
  useEffect(() => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            event({
              action: "section_view",
              params: { category: "Engagement", label },
            });
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [sectionId, label, threshold]);
}
