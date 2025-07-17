import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      icon: "📹",
      title: "CCTV Camera Installation",
      description: "Dome, Bullet, PTZ, Turret, Wireless IP, and Doorbell Cameras",
      features: ["Indoor and Outdoor Installations", "Night Vision & Motion Detection", "Remote Viewing via Mobile App"]
    },
    {
      icon: "🔧",
      title: "CCTV System Setup",
      description: "Complete system solutions for every need",
      features: ["Standalone Smart Cameras", "DVR Systems (Analog)", "NVR Systems (IP)", "Hybrid Systems (Mixed)", "Solar-Powered CCTV for Remote Areas"]
    },
    {
      icon: "💾",
      title: "Footage Storage & Access",
      description: "Secure and accessible recording solutions",
      features: ["Local HDD Recording", "Cloud Backups", "Multi-user Access", "Mobile Viewing (Android/iOS)"]
    },
    {
      icon: "🌐",
      title: "Wired Networking Services",
      description: "Professional network infrastructure",
      features: ["Ethernet Cable Runs (Cat6, Cat7)", "Router & Modem Installations", "Patch Panel + Switch Setup", "Internet Optimization for CCTV Systems"]
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;