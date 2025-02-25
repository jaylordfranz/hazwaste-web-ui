import React, { useState } from 'react';
import './css/ContactUs.css';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

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
          <button className="navButton btn btn-warning">Get Started</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="heroSection">
        <div className="heroContent">
          <h1 className="heroTitle text-warning">Contact Us</h1>
          <p className="heroDescription">
            We're here to assist you! Reach out to us with any questions or concerns.
          </p>
        </div>
        <div className="heroImageContainer">
          <img
            src="./assets/contact.webp"
            alt="Contact Us"
            className="heroImage"
          />
        </div>
      </section>

      {/* Floating Icons */}
      <div className="floatingIcons">
        <img
          src="./assets/bin.png"
          alt="Bin Icon"
          className="floatingIcon floatingIcon1"
        />
        <img
          src="./assets/biohazard-sign.png"
          alt="Biohazard Icon"
          className="floatingIcon floatingIcon2"
        />
        <img
          src="./assets/danger.png"
          alt="Danger Icon"
          className="floatingIcon floatingIcon3"
        />
        <img
          src="./assets/garbage-truck.png"
          alt="Garbage Truck Icon"
          className="floatingIcon floatingIcon4"
        />
        <img
          src="./assets/recycle-bin.png"
          alt="Recycle Bin Icon"
          className="floatingIcon floatingIcon5"
        />
      </div>

      {/* Contact Us Container */}
      <div className="contactContainer">
        <h1 className="contactTitle">Contact Us</h1>
        <div className="contactContent">
          <div className="contactText">
            <p className="contactDescription">
              Have any questions or concerns? We would love to hear from you! Fill out the form
              below, and we’ll get back to you as soon as possible.
            </p>

            <form className="contactForm" onSubmit={handleSubmit}>
              <div className="formGroup">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="formGroup">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="formGroup">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                />
              </div>
              <button type="submit" className="submitButton">Send Message</button>
            </form>
          </div>

          <div className="contactSidebar">
            <h2 className="sidebarTitle">Contact Information</h2>
            <p><strong>Email:</strong> support@hazwaste.com</p>
            <p><strong>Phone:</strong> +1 234 567 890</p>
            <p><strong>Address:</strong> 123 Waste St, Green City, GC 12345</p>
          </div>
        </div>
      </div>

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

export default ContactUs;