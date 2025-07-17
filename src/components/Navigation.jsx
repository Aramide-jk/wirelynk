import React from 'react';

const Navigation = ({ activeSection, scrollToSection }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <h1 className="brand-name">WIRELYNK</h1>
          <p className="brand-tagline">See Clearly. Stay Secure.</p>
        </div>
        <div className="nav-links">
          <button onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</button>
          <button onClick={() => scrollToSection('services')} className={activeSection === 'services' ? 'active' : ''}>Services</button>
          <button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</button>
          <button onClick={() => scrollToSection('portfolio')} className={activeSection === 'portfolio' ? 'active' : ''}>Portfolio</button>
          <button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;