import React from 'react';

const PortfolioSection = () => {
  const portfolioItems = [
    { 
      title: "Home Security Systems", 
      image: "https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Complete residential CCTV installations with doorbell cameras and perimeter monitoring"
    },
    { 
      title: "Office Reception Security", 
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Professional lobby and entrance monitoring systems for corporate environments"
    },
    { 
      title: "Retail Store Coverage", 
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Comprehensive surveillance solutions for shops and commercial spaces"
    },
    { 
      title: "Industrial Security", 
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Heavy-duty surveillance systems for warehouses, factories, and industrial facilities"
    },
    { 
      title: "Network Infrastructure", 
      image: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Professional ethernet cabling and network setup for seamless connectivity"
    },
    { 
      title: "Server Room Setup", 
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Complete server room installations with proper cable management and cooling"
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">See Our Work</h2>
        <p className="portfolio-subtitle">Professional installations showcasing our expertise across various environments</p>
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-card">
              <img 
                src={item.image} 
                alt={item.title}
                className="portfolio-image"
              />
              <h3 className="portfolio-title">{item.title}</h3>
              <p className="portfolio-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;