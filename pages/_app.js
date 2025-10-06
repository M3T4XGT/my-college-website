import "../styles/globals.css";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import Clarity from "@microsoft/clarity"; // ✅ Add this import

import Header from "../components/Header";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";
import CommunitySection from "../components/CommunitySection";
import TestimonialSection from "../components/TestimonialSection";
import CommunityPartnersSection from "../components/CommunityPartnerSection";
import FacultyJoinSection from "../components/FacultyJoinSection";
import NewsSection from "../components/NewsSection";
import Top100Section from "../components/Top100Section";
import AcademicProgramsSection from "../components/AcademicProgramsSection";
import DeanQuoteSection from "../components/DeanQuoteSection";
import HeroSection from "../components/HeroSection";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // ✅ Track GA4 route changes
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    // ✅ Initialize Microsoft Clarity once (replace YOUR_PROJECT_ID)
    if (typeof window !== "undefined") {
      Clarity.init("tm1yb67p3b");
    }

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* ✅ Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* ✅ Page Layout */}
      <Header />
      <MainNav />
      <HeroSection />
      <DeanQuoteSection />
      <AcademicProgramsSection />
      <Top100Section />
      <CommunityPartnersSection />
      <FacultyJoinSection />
      <NewsSection />
      <TestimonialSection />
      <CommunitySection />
      <Footer />

      {/* ✅ Render Page Content */}
      <Component {...pageProps} />
    </>
  );
}
