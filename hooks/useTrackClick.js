import { event } from "../lib/gtag";

export default function useTrackClick(category) {
  return (label) => {
    event({
      action: "cta_click",
      params: { category, label },
    });
  };
}
