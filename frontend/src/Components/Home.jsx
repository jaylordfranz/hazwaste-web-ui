import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const videoRef = useRef(null);

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
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const stopVideoAt = 55; // Stop at 0:55

    // Play video automatically
    video.play();

    const checkTime = () => {
      if (video.currentTime >= stopVideoAt) {
        video.currentTime = 0; // Reset to the beginning
        video.play(); // Continue playing from the beginning
      }
    };

    video.addEventListener("timeupdate", checkTime);

    return () => {
      video.removeEventListener("timeupdate", checkTime);
    };
  }, []);

  return (
    <div>
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
        <h2 className="testimonialsTitle">Ratings and Reviews</h2>

        {/* Rating and Reviews Bar */}
        <div className="ratingsContainer">
          <div className="ratingBar">
            <div className="ratingStars" style={{ width: "85%" }}></div>
          </div>
          <div className="ratingsCount">
            <span className="ratingNumber">4.5</span> (95M reviews)
          </div>
        </div>

        {/* Reviews */}
        <div className="reviewsContainer">
          {/* Review 1 */}
          <div className="review">
            <div className="reviewText">
              <p>
                "HazWaste has been a game-changer for our community! The AI-powered
                waste sorting system makes it so much easier to manage our waste disposal."
              </p>
            </div>
            <div className="reviewFooter">
              <div className="reviewerInfo">
                <span className="reviewerName">Alex J.</span>
                <span className="reviewDate">January 15, 2025</span>
              </div>
              <div className="helpfulness">
                <span>6,807 people found this review helpful</span>
                <div className="helpfulnessButtons">
                  <button>Yes</button>
                  <button>No</button>
                </div>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="review">
            <div className="reviewText">
              <p>
                "This app helps locate nearby recycling centers and sorts waste
                quickly. It's an essential tool for our eco-friendly efforts!"
              </p>
            </div>
            <div className="reviewFooter">
              <div className="reviewerInfo">
                <span className="reviewerName">Maria S.</span>
                <span className="reviewDate">February 1, 2025</span>
              </div>
              <div className="helpfulness">
                <span>5,104 people found this review helpful</span>
                <div className="helpfulnessButtons">
                  <button>Yes</button>
                  <button>No</button>
                </div>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="review">
            <div className="reviewText">
              <p>
                "The AI feature for waste classification is incredible. It's like having
                an expert guide for sorting waste, making everything so much simpler."
              </p>
            </div>
            <div className="reviewFooter">
              <div className="reviewerInfo">
                <span className="reviewerName">John D.</span>
                <span className="reviewDate">February 5, 2025</span>
              </div>
              <div className="helpfulness">
                <span>4,567 people found this review helpful</span>
                <div className="helpfulnessButtons">
                  <button>Yes</button>
                  <button>No</button>
                </div>
              </div>
            </div>
          </div>

          {/* Review 4 */}
          <div className="review">
            <div className="reviewText">
              <p>
                "Using HazWaste has improved how we manage our local waste facilities.
                The mail-based system makes tracking waste easy and reliable."
              </p>
            </div>
            <div className="reviewFooter">
              <div className="reviewerInfo">
                <span className="reviewerName">Lisa K.</span>
                <span className="reviewDate">January 28, 2025</span>
              </div>
              <div className="helpfulness">
                <span>3,410 people found this review helpful</span>
                <div className="helpfulnessButtons">
                  <button>Yes</button>
                  <button>No</button>
                </div>
              </div>
            </div>
          </div>

          {/* Review 5 */}
          <div className="review">
            <div className="reviewText">
              <p>
                "Fantastic app! The integration with real-time tips and recycling
                location mapping has made our waste disposal efforts more effective."
              </p>
            </div>
            <div className="reviewFooter">
              <div className="reviewerInfo">
                <span className="reviewerName">David P.</span>
                <span className="reviewDate">February 3, 2025</span>
              </div>
              <div className="helpfulness">
                <span>8,000 people found this review helpful</span>
                <div className="helpfulnessButtons">
                  <button>Yes</button>
                  <button>No</button>
                </div>
              </div>
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
                <p>Receive mail tips for effective waste disposal.</p>
              </div>
            </div>
          </div>
        </div>
      )}

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
}