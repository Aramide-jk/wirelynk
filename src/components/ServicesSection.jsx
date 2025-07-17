import React from "react";

const ServicesSection = () => {
  const services = [
    {
      icon: "📹",
      title: "CCTV Camera Installation",
      description:
        "Dome, Bullet, PTZ, Turret, Wireless IP, and Doorbell Cameras",
      image:
        "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: [
        "Indoor and Outdoor Installations",
        "Night Vision & Motion Detection",
        "Remote Viewing via Mobile App",
      ],
      cameraTypes: [
        {
          name: "Dome Cameras",
          image:
            "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
          description: "Discreet ceiling-mounted cameras",
        },
        {
          name: "Bullet Cameras",
          image:
            "https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
          description: "Long-range outdoor surveillance",
        },
        {
          name: "PTZ Cameras",
          image:
            "https://images.pexels.com/photos/274131/pexels-photo-274131.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
          description: "Pan, tilt, zoom capabilities",
        },
      ],
    },
    {
      icon: "🔧",
      title: "CCTV System Setup",
      description: "Complete system solutions for every need",
      image:
        "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: [
        "Standalone Smart Cameras",
        "DVR Systems (Analog)",
        "NVR Systems (IP)",
        "Hybrid Systems (Mixed)",
        "Solar-Powered CCTV for Remote Areas",
      ],
      systemTypes: [
        {
          name: "DVR System",
          image:
            "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
          description: "Analog camera recording system",
        },
        {
          name: "NVR System",
          image:
            "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
          description: "IP camera network recording",
        },
        {
          name: "Solar CCTV",
          image:
            "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
          description: "Off-grid solar-powered systems",
        },
      ],
    },
    {
      icon: "💾",
      title: "Footage Storage & Access",
      description: "Secure and accessible recording solutions",
      image:
        "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: [
        "Local HDD Recording",
        "Cloud Backups",
        "Multi-user Access",
        "Mobile Viewing (Android/iOS)",
      ],
      storageTypes: [
        {
          name: "Local Storage",
          image:
            "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
          description: "On-site hard drive recording",
        },
        {
          name: "Cloud Backup",
          image:
            "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
          description: "Remote cloud storage solutions",
        },
        {
          name: "Mobile Access",
          image:
            "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
          description: "View footage on any device",
        },
      ],
    },
    {
      icon: "🌐",
      title: "Wired Networking Services",
      description: "Professional network infrastructure",
      image:
        "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: [
        "Ethernet Cable Runs (Cat6, Cat7)",
        "Router & Modem Installations",
        "Patch Panel + Switch Setup",
        "Internet Optimization for CCTV Systems",
      ],
      networkTypes: [
        {
          name: "Cable Installation",
          image:
            "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
          description: "Professional ethernet cabling",
        },
        {
          name: "Network Setup",
          image:
            "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
          description: "Router and switch configuration",
        },
        {
          name: "Patch Panels",
          image:
            "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
          description: "Organized cable management",
        },
      ],
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="services-subtitle">
          Professional CCTV and networking solutions with cutting-edge
          technology
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image-container">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-main-image"
                />
                <div className="service-overlay">
                  <div className="service-icon">{service.icon}</div>
                </div>
              </div>

              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                <div className="service-types">
                  <h4 className="types-title">What We Offer:</h4>
                  <div className="types-grid">
                    {(
                      service.cameraTypes ||
                      service.systemTypes ||
                      service.storageTypes ||
                      service.networkTypes
                    )?.map((type, typeIdx) => (
                      <div key={typeIdx} className="type-card">
                        <img
                          src={type.image}
                          alt={type.name}
                          className="type-image"
                        />
                        <div className="type-info">
                          <h5 className="type-name">{type.name}</h5>
                          <p className="type-description">{type.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
