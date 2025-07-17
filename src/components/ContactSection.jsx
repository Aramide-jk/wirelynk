import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const response = await fetch("https://formspree.io/f/mrblgqvd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      // Optional redirect after 2 seconds
      setTimeout(() => {
        window.location.href = "/thank-you"; // Change to your real thank-you page
      }, 2000);
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Let's Talk Security</h2>
        <p className="contact-subtitle">
          Reach out today for a free consultation or instant quote!
        </p>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Phone</h3>
              <a href="tel:+2348130135756">+234 8130135756</a>
            </div>
            <div className="contact-card">
              <div className="contact-icon">💬</div>
              <h3>WhatsApp</h3>
              <a
                href="https://wa.me/message/LJBYJAKZGOFQK1"
                target="_blank"
                rel="noopener noreferrer">
                Chat with us
              </a>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <a href="mailto:wirelynknetworks@gmail.com">
                wirelynknetworks@gmail.com
              </a>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📱</div>
              <h3>Instagram</h3>
              <a
                href="https://instagram.com/wire_lynk"
                target="_blank"
                rel="noopener noreferrer">
                @wire_lynk
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3>Get Your Free Quote</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required>
                  <option value="">Select Service</option>
                  <option value="cctv">CCTV Installation</option>
                  <option value="network">Network Setup</option>
                  <option value="both">Both CCTV & Network</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}></textarea>
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="success-message">
                  ✅ Message sent successfully! Redirecting...
                </p>
              )}
              {status === "error" && (
                <p className="error-message">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
