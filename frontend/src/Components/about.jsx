import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/about.css";

const profiles = [
  { 
    id: 1, 
    name: "Mark Ranier M. Maestre", 
    role: "Full Stack Developer", 
    location: "Leader", 
    image: "/assets/about-icon.png", 
    description: "Mark is responsible for the backend development of HazWaste, ensuring smooth AI integration.",
    facebook: "https://www.facebook.com/mark.macmaestre26"
  },
  {
    id: 2,
    name: "Jaylord Franz P. Baribar",
    role: ["Frontend Developer/Documentation Head"],  
    location: "Member",
    image: "/assets/about-icon.png",
    description: "Franz creates intuitive interfaces for HazWaste, improving user experience and navigation while also handling documentation tasks.",
    facebook: "https://www.facebook.com/franz.baribar.2024/"
  },
  {
    id: 3,
    name: "Kristel Kaye C. Cabalbag",
    role: ["UI Designer/Assistant Documentation"],
    location: "Member",
    image: "/assets/about-icon.png",
    description: "Kaye develops the frontend design for HazWaste, ensuring users can easily classify waste and access recycling information, and also manages the project's documentation.",
    facebook: "https://www.facebook.com/Kayetotieee"
  },
  {
    id: 4,
    name: "Theodore D. Palma",
    role: ["UI Designer/Assistant Documentation"],  
    location: "Member",
    image: "/assets/about-icon.png",
    description: "Theo builds the user interface (UI) for HazWaste, focusing on creating an intuitive and effective experience, while also contributing to the documentation efforts.",
    facebook: "https://www.facebook.com/theooooooooooooooooooooo"
  }
];

const About = () => {
  const navigate = useNavigate();

  const openFacebookProfile = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">HazWaste</div>
        <nav className="navLinks">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
          <button className="navButton btn btn-warning" onClick={() => navigate("/login")}>
            Get Started
          </button>
        </nav>
      </header>

      {/* Mission & Vision Section */}
      <section className="missionVisionSection">
        <div className="mission">
          <h1 className="heroTitle">Mission</h1>
          <p className="heroDescription">
            Our mission is to innovate and provide an effective solution for waste classification, integrating AI and mail-based technology to improve global waste management systems. By leveraging advanced machine learning algorithms, we aim to bridge the gap between traditional waste disposal methods and modern, efficient recycling techniques.
          </p>
          <p className="heroDescription">
            Through user-friendly interfaces and real-time facility mapping, we strive to empower individuals, businesses, and communities to make informed waste management decisions. Our commitment lies in fostering a sustainable ecosystem where proper disposal and recycling are accessible and convenient for everyone.
          </p>
        </div>

        <div className="vision">
          <h1 className="heroTitle">Vision</h1>
          <p className="heroDescription">
            We envision a cleaner and more sustainable world where waste is efficiently categorized, recycled, and reused with the power of cutting-edge AI technology and real-time facility mapping. Our goal is to revolutionize waste management by making smart, eco-friendly solutions an integral part of everyday life.
          </p>
          <p className="heroDescription">
            By continuously evolving our platform and fostering partnerships with environmental organizations, we aspire to create a future where waste is no longer a burden but a resource. Our vision is to inspire global change, reduce pollution, and contribute to a circular economy for future generations.
          </p>
        </div>
      </section>

      {/* Meet the Team Section */}
      <h3 className="section-title">Meet the Team</h3>
      <div className="team-container">
        {profiles.map((profile) => (
          <div key={profile.id} className="card">
            <img src={profile.image} alt={profile.name} className="avatar" />
            <h4>{profile.name}</h4>
            <p className="role">{profile.role}</p>
            <p className="location">{profile.location}</p>
            <p className="description">{profile.description}</p>
            <div className="button-container">
              <button className="button-follow" onClick={() => openFacebookProfile(profile.facebook)}>
                Follow
              </button>
              <button className="button-message" onClick={() => openFacebookProfile(profile.facebook)}>
                Message
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">© 2025 HazWaste. All rights reserved.</p>
        <div className="footer-links">
          <a href="/policy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact-us">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default About;