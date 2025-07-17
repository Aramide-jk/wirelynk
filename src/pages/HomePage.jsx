import React from "react";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import PortfolioSection from "../components/PortfolioSection";
import ContactSection from "../components/ContactSection";

const HomePage = ({ scrollToSection }) => {
  return (
    <>
      <HeroSection scrollToSection={scrollToSection} />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
