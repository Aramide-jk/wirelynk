import React from 'react';

const AboutSection = () => {
  const whyChooseUs = [
    { icon: "✨", title: "Clean, Professional Installations", description: "Expert craftsmanship with attention to detail" },
    { icon: "📱", title: "Remote App Monitoring", description: "View your cameras from anywhere, anytime" },
    { icon: "🛡️", title: "Durable Hardware with Warranty", description: "Quality equipment backed by reliable support" },
    { icon: "🔧", title: "Neat Cabling & Secure Mounting", description: "Clean installations that look professional" },
    { icon: "🤝", title: "Ongoing Support & Technical Guidance", description: "We're here for you after installation" }
  ];

  const workLocations = [
    { icon: "🏡", title: "Homes & Apartments", description: "Secure your family and property" },
    { icon: "🛍️", title: "Shops & Small Businesses", description: "Protect your business investment" },
    { icon: "🏢", title: "Corporate Offices", description: "Enterprise-grade security solutions" },
    { icon: "🏫", title: "Schools & Worship Centers", description: "Safe environments for communities" },
    { icon: "🌄", title: "Remote or Off-Grid Areas", description: "Solar-powered solutions for any location" }
  ];

  return (
    <section id="about" className="why-choose-us">
      <div className="container">
        <h2 className="section-title">Why Choose Wirelynk?</h2>
        <div className="features-grid">
          {whyChooseUs.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="work-locations">
          <h3 className="subsection-title">Where We Work</h3>
          <div className="locations-grid">
            {workLocations.map((location, index) => (
              <div key={index} className="location-card">
                <div className="location-icon">{location.icon}</div>
                <h4 className="location-title">{location.title}</h4>
                <p className="location-description">{location.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;