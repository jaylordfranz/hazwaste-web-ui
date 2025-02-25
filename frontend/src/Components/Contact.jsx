import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Contact.css";

const Contact = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <div className="logo">HazWaste</div>
        <nav className="navLinks">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <button className="navButton btn btn-warning" onClick={() => window.location.href = "/login"}>Get Started</button>
        </nav>
      </header>

      {/* Contact Section */}
      <section className="contactSection">
        <h2 className="sectionTitle">Get in Touch</h2>
        <p className="contactDescription">
          We would love to hear from you! Whether you have a question about our services,
          need assistance, or just want to share feedback, feel free to reach out to us.
        </p>
        <div className="contactContainer">
          <div className="contactInfo">
            <h3>Contact Information</h3>
            <p><strong>Email:</strong> support@hazwaste.com</p>
            <p><strong>Phone:</strong> +1 234 567 890</p>
            <p><strong>Address:</strong> 123 Green Street, Eco City, Earth</p>
            <p>Our support team is available Monday to Friday, 9 AM - 6 PM.</p>
          </div>
          <div className="contactForm">
            <h3>Send Us a Message</h3>
            <form>
              <label>Name:</label>
              <input type="text" placeholder="Your Name" required />
              <label>Email:</label>
              <input type="email" placeholder="Your Email" required />
              <label>Message:</label>
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="btn btn-warning">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p className="footer-text">© 2025 HazWaste. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/policy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </footer>
    </div>
  );
};

export default Contact;