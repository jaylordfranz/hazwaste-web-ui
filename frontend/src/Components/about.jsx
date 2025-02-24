import React from "react";
import { View, Text, Image, TouchableOpacity } from "react";
import "./css/about.css";

const profiles = [
  { id: 1, name: "Mark Ranier M. Maestre", role: "Full Stack Developer", location: "Leader", image: "/assets/about-icon.png", description: "Mark is responsible for the backend development of HazWaste, ensuring smooth AI integration." },
  {
    id: 2,
    name: "Jaylord Franz P. Baribar",
    role: ["Frontend Developer/Documentation Head"],  
    location: "Member",
    image: "/assets/about-icon.png",
    description: "Franz creates intuitive interfaces for HazWaste, improving user experience and navigation while also handling documentation tasks."
  },
  {
    id: 3,
    name: "Kristel Kaye C. Cabalbag",
    role: ["UI Designer/Assistant Documentation"],
    location: "Member",
    image: "/assets/about-icon.png",
    description: "Kaye develops the frontend design for HazWaste, ensuring users can easily classify waste and access recycling information, and also manages the project's documentation."
  },
  {
    id: 4,
    name: "Theodore D. Palma",
    role: ["UI Designer/Assistant Documentation"],  
    location: "Member",
    image: "/assets/about-icon.png",
    description: "Theo builds the user interface (UI) for HazWaste, focusing on creating an intuitive and effective experience, while also contributing to the documentation efforts."
  }
];

const About = () => {
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
        </nav>
      </header>

      {/* About Section */}
      <div className="container">
        <div className="project-info">
          <h2>HazWaste: AI and SMS-Based Hazardous and Nonhazardous Waste Classification with Facility Mapping System</h2>
          <p>HazWaste is an AI-powered waste categorization tool designed to address the global waste management crisis. It classifies waste, tracks performance, and helps users locate recycling centers.</p>
        </div>
        
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
                <button className="button-follow">Follow</button>
                <button className="button-message">Message</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">© 2025 HazWaste. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default About;