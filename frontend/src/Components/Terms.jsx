import React from 'react';
import './css/Terms.css';
import { Link } from 'react-router-dom';

const Terms = () => {
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
          <h1 className="heroTitle text-warning">Terms of Service</h1>
          <p className="heroDescription">
            Understand the terms and conditions governing the use of HazWaste services.
          </p>
        </div>
        <div className="heroImageContainer">
          <img
            src="./assets/terms.webp"
            alt="HazWaste Terms"
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

      <div className="termsContainer">
        <div className="termsContent">
          <div className="termsText">
            <p className="termsIntro" id="intro">
              Welcome to HazWaste. These terms of service outline the conditions under
              which you can access and use our platform. By using our services, you agree
              to comply with these terms.
            </p>
            <p className="termsIntro">
              Our goal is to ensure that you are aware of the rights and responsibilities you
              assume when using our platform. These terms are meant to provide clarity and
              transparency regarding your relationship with HazWaste.
            </p>
            <p className="termsIntro">
              By continuing to access or use our services, you confirm that you agree with
              the terms outlined below. If you do not agree with any part of these terms, 
              please refrain from using our platform.
            </p>

            <h2 className="sectionTitle" id="usage">Usage of Services</h2>
            <p className="termsText">
              You agree to use the HazWaste platform only for lawful purposes and in a
              manner consistent with the terms outlined here. Unauthorized use of our
              services may result in the termination of your account.
            </p>
            <p className="termsText">
              You must not engage in any activity that may harm the platform or impair the
              experience of other users. Misuse of the platform includes, but is not limited
              to, hacking, spamming, or any other activity that may be considered illegal or unethical.
            </p>
            <p className="termsText">
              We reserve the right to modify or suspend access to the platform without notice
              for reasons related to security, legal compliance, or maintenance. It is your
              responsibility to comply with any modifications made to these terms.
            </p>

            <h2 className="sectionTitle" id="intellectual">Intellectual Property</h2>
            <p className="termsText">
              All content provided on the HazWaste platform is protected by copyright
              and other intellectual property laws. You may not copy, distribute, or
              reproduce any part of the platform without express permission.
            </p>
            <p className="termsText">
              You acknowledge that HazWaste owns all content and intellectual property rights
              in the platform, including but not limited to logos, trademarks, and software.
              Any unauthorized use or reproduction may lead to legal action.
            </p>
            <p className="termsText">
              You are granted a limited, non-exclusive, and non-transferable license to
              access and use the platform in accordance with these terms. Any attempt to modify,
              alter, or create derivative works from the platform will be considered a violation.
            </p>

            <h2 className="sectionTitle" id="liability">Limitation of Liability</h2>
            <p className="termsText">
              HazWaste is not liable for any damages resulting from your use of our platform,
              including, but not limited to, data loss or system failure.
            </p>
            <p className="termsText">
              While we strive to ensure the functionality and security of the platform, we cannot
              guarantee uninterrupted access or complete security. Users assume all risks
              associated with using the platform and accessing the services.
            </p>
            <p className="termsText">
              In no event shall HazWaste be liable for indirect, incidental, special, or
              consequential damages arising from the use of the platform. The total liability
              shall be limited to the amount paid by the user for services rendered in the past
              12 months, if applicable.
            </p>

            <h2 className="sectionTitle" id="termination">Termination</h2>
            <p className="termsText">
              We reserve the right to suspend or terminate your account at any time for any
              reason, including violation of our terms of service.
            </p>
            <p className="termsText">
              If your account is terminated, you will no longer have access to the services
              provided through the platform. You will also lose access to any content or data
              associated with your account.
            </p>
            <p className="termsText">
              You may terminate your account at any time by following the instructions provided
              in the settings. Upon termination, you are still bound by the obligations outlined
              in these terms, including any liability that may arise from your prior usage.
            </p>
          </div>

          <div className="termsSidebar">
            <h2 className="sidebarTitle">Quick Links</h2>
            <ul className="sidebarLinks">
              <li><a href="#usage">Usage of Services</a></li>
              <li><a href="#intellectual">Intellectual Property</a></li>
              <li><a href="#liability">Limitation of Liability</a></li>
              <li><a href="#termination">Termination</a></li>
            </ul>
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

export default Terms;