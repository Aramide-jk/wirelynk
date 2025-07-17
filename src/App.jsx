import React, { useState } from "react";
import "./App.css";
import "@fontsource/raleway/900.css";
import "@fontsource/arimo/700.css";
import "@fontsource/arimo/400.css";

import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="App">
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <HomePage scrollToSection={scrollToSection} />
      <Footer />
    </div>
  );
}

export default App;
