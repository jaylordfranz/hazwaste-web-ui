import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const handleExploreClick = () => {
    setShowPopup(true);
  };

  const handleCloseClick = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const handleParallax = () => {
      const image = document.querySelector(".heroImage");
      const scrollPosition = window.scrollY;
      if (image) {
        image.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      }
    };

    window.addEventListener("scroll", handleParallax);
    return () => {
      window.removeEventListener("scroll", handleParallax);
    };
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };  

  return (
    <div>
      {/* Floating Icons */}
      <div className="floatingIcons">
        <img
          src="./assets/leaf-icon.png"
          alt="Leaf Icon"
          className="floatingIcon floatingIcon1"
        />
        <img
          src="./assets/tree-icon.png"
          alt="Tree Icon"
          className="floatingIcon floatingIcon2"
        />
        <img
          src="./assets/recycle-icon.png"
          alt="Recycle Icon"
          className="floatingIcon floatingIcon3"
        />
        <img
          src="./assets/earth-icon.png"
          alt="Earth Icon"
          className="floatingIcon floatingIcon4"
        />
        <img
          src="./assets/flower-icon.png"
          alt="Flower Icon"
          className="floatingIcon floatingIcon5"
        />
      </div>
      
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
    <h1 className="heroTitle text-warning">HazWaste: Smart waste sorting app!</h1>
    <p className="heroDescription">
      Your reliable partner for responsible waste disposal. Experience the
      power of AI-driven waste management.
    </p>
    <button className="explore btn btn-warning" onClick={handleExploreClick}>
      Explore Services
    </button>
  </div>
  <div className="heroImageContainer">
    <img
      src="./assets/hazhero.webp"
      alt="HazWaste Image"
      className="heroImage"
    />
  </div>
</section>

      {/* Testimonials Section */}
<section className="testimonialsSection">
  <h2 className="testimonialsTitle">What Our Users Say</h2>
  <div className="testimonialsContainer">
    <div className="testimonialCard">
      <img src="/assets/user1.webp" alt="Alex J." className="testimonialImage" />
      <div className="testimonialContent">
        <p>"HazWaste has completely transformed how I handle waste disposal. Highly recommend it!"</p>
        <div className="testimonialRating">⭐⭐⭐⭐⭐</div>
        <span>- Alex J.</span>
      </div>
    </div>

    <div className="testimonialCard">
      <img src="/assets/user2.webp" alt="Maria S." className="testimonialImage" />
      <div className="testimonialContent">
        <p>"The AI-powered waste classification is a game-changer for our community."</p>
        <div className="testimonialRating">⭐⭐⭐⭐⭐</div>
        <span>- Maria S.</span>
      </div>
    </div>

    <div className="testimonialCard">
      <img src="/assets/user3.jpg" alt="John D." className="testimonialImage" />
      <div className="testimonialContent">
        <p>"Locating nearby recycling centers has never been easier. HazWaste makes it seamless!"</p>
        <div className="testimonialRating">⭐⭐⭐⭐⭐</div>
        <span>- John D.</span>
      </div>
    </div>
  </div>
</section>


{/* Scroll-Down Icon */}
<div className="scrollDownArrow" onClick={handleScrollDown}>
  <img src="./assets/scroll-down-icon.png" alt="Scroll Down" />
</div>

      {/* Popup Cards */}
      {showPopup && (
        <div className="popupOverlay">
          <div className="popupContainer">
            <div className="popupHeader">
              <h2>Our Services</h2>
              <button className="closeButton" onClick={handleCloseClick}>
                ×
              </button>
            </div>
            <div className="popupCards">
              <div className="popupCard">
                <h3>AI Classification</h3>
                <p>Classify waste with cutting-edge AI technology.</p>
              </div>
              <div className="popupCard">
                <h3>Nearby Centers</h3>
                <p>Locate recycling centers around you.</p>
              </div>
              <div className="popupCard">
                <h3>Real-Time Tips</h3>
                <p>Receive SMS tips for effective waste disposal.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <footer className="footer">
        <p className="footer-text">© 2025 HazWaste. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Service</Link>
          <Link to="/">Contact Us</Link>
        </div>
      </footer>
    </div>
  );
}