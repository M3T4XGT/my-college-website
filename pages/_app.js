import "../styles/globals.css";
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
  return (
    <>
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
      <Component {...pageProps} />
    </>
  );
}
