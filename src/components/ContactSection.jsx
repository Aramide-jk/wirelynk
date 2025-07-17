import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Let's Talk Security</h2>
        <p className="contact-subtitle">Reach out today for a free consultation or instant quote!</p>
        
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Phone</h3>
              <a href="tel:+2348130135756">+234 8130135756</a>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">💬</div>
              <h3>WhatsApp</h3>
              <a href="https://wa.me/message/LJBYJAKZGOFQK1" target="_blank" rel="noopener noreferrer">
                Chat with us
              </a>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <a href="mailto:wirelynknetworks@gmail.com">wirelynknetworks@gmail.com</a>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">📱</div>
              <h3>Instagram</h3>
              <a href="https://instagram.com/wire_lynk" target="_blank" rel="noopener noreferrer">
                @wire_lynk
              </a>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Get Your Free Quote</h3>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Your Phone" required />
              </div>
              <div className="form-group">
                <select required>
                  <option value="">Select Service</option>
                  <option value="cctv">CCTV Installation</option>
                  <option value="network">Network Setup</option>
                  <option value="both">Both CCTV & Network</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Tell us about your project..." rows="4"></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;