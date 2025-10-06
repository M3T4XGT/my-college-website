import { useEffect } from "react";
import { event } from "../lib/gtag";

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
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [sectionId, label, threshold]);
}
