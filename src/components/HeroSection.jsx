import React, { useState, useEffect } from "react";

const HeroSection = ({ scrollToSection }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slider images
  const heroSlides = [
    {
      image:
        "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      alt: "Security camera installation",
    },
    {
      image:
        "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      alt: "Server room with ethernet connections",
    },
    {
      image:
        "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      alt: "Network cables and connections",
    },
    {
      image:
        "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      alt: "Professional CCTV monitoring setup",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(slideInterval);
  }, [heroSlides.length]);

  return (
    <section id="home" className="hero">
      <div className="hero-slider">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>

      <div className="hero-content">
        {/* <h1 className="hero-title">
          <span className="brand-name-large">WIRELYNK</span>
          <span className="networks-text">NETWORKS</span>
        </h1> */}
        {/* <p className="hero-tagline">See Clearly. Stay Secure.</p> */}
        <p className="hero-description">
          Professional CCTV & Network Installations for homes, shops, offices,
          and institutions. Expert solutions for both analog (DVR) and modern IP
          camera (NVR) systems with remote monitoring capabilities.
        </p>
        <div className="hero-buttons">
          <button
            className="cta-button primary"
            onClick={() => scrollToSection("contact")}>
            Get Free Quote
          </button>
          <button
            className="cta-button secondary"
            onClick={() => scrollToSection("services")}>
            Our Services
          </button>
        </div>
      </div>

      <div className="slider-indicators">
        {heroSlides.map((_, index) => (
          <div
            key={index}
            className={`slider-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
