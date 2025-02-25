import React from 'react';
import './css/PrivacyPolicy.css';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
          <h1 className="heroTitle text-warning">Privacy Policy</h1>
          <p className="heroDescription">
            At HazWaste, we respect your privacy. Learn how we handle your personal data and ensure your protection.
          </p>
        </div>
        <div className="heroImageContainer">
          <img
            src="./assets/privacy.webp"
            alt="HazWaste Hero"
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

      <div className="policyContainer">
        <div className="policyContent">
          <div className="policyText">
            <p className="policyDescription" id="intro">
              At HazWaste, we take your privacy seriously. This privacy policy outlines
              how we collect, use, and protect your personal information when you
              interact with our services. By using our platform, you consent to the
              practices described in this policy. We are committed to safeguarding your
              data and ensuring your experience is secure and protected.
            </p>
            <p className="policyDescription">
              Our goal is to provide transparency about how your information is used, stored, 
              and shared within the framework of our platform. We want you to have a clear 
              understanding of your rights regarding your personal data. The following sections 
              explain how we manage and secure the information you entrust to us.
            </p>
            <p className="policyDescription">
              We continuously review and update our privacy policy to ensure compliance with 
              data protection regulations and improve the security measures we use. By using 
              our services, you agree to the terms outlined here and consent to the practices 
              set forth in this policy. If you have any questions or concerns, please feel free 
              to contact us for further clarification.
            </p>

            <h2 className="sectionTitle" id="info">Information We Collect</h2>
            <p className="policyText">
              We collect personal information when you register for our services, such as your name, 
              email address, and phone number. This data is essential for account creation and service 
              personalization. We may also collect billing information if you make purchases on our platform.
            </p>
            <p className="policyText">
              Additionally, we collect technical data to improve our services. This includes your IP address, 
              browser type, device information, and usage data. We use this information to understand how you interact 
              with our platform and to troubleshoot issues to enhance your experience.
            </p>
            <p className="policyText">
              Some features may also collect location data to provide you with relevant information based on your 
              geographic location. You can control location tracking through your device settings, and we only collect 
              such data with your consent. We prioritize transparency and control, ensuring you can manage the data 
              you share with us.
            </p>

            <h2 className="sectionTitle" id="use">How We Use Your Information</h2>
            <p className="policyText">
              Your information is used to provide and improve the services we offer. This includes personalizing your 
              experience on our platform, processing transactions, and communicating with you about updates, 
              promotions, and service enhancements.
            </p>
            <p className="policyText">
              We may also use your data for marketing purposes, such as sending promotional emails or newsletters. 
              However, we will always seek your consent before using your information for marketing communications. 
              You can opt-out of marketing messages at any time.
            </p>
            <p className="policyText">
              Additionally, we may use your information to monitor the performance of our platform, identify and 
              fix technical issues, and improve our features. This ensures that we continuously improve the service 
              we provide to our users while maintaining a high level of security and usability.
            </p>

            <h2 className="sectionTitle" id="security">Data Security</h2>
            <p className="policyText">
              We take data security seriously and have implemented measures to protect your personal information. 
              These measures include the use of encryption protocols, secure servers, and data storage practices to prevent 
              unauthorized access to your data.
            </p>
            <p className="policyText">
              Our security team conducts regular audits and assessments to ensure the highest level of protection for 
              your information. In the event of a data breach, we are committed to informing you promptly and taking 
              necessary actions to mitigate any impact.
            </p>
            <p className="policyText">
              While we strive to protect your data from external threats, no system can be 100% secure. We encourage 
              you to take steps to protect your account, such as using strong passwords and logging out after each 
              session, especially on shared devices.
            </p>

            <h2 className="sectionTitle" id="third-party">Third-Party Sharing</h2>
            <p className="policyText">
              We do not sell or share your personal information with third parties for their marketing purposes. 
              However, we may share data with trusted third-party service providers who help us operate our platform, 
              such as payment processors and email service providers.
            </p>
            <p className="policyText">
              We ensure that third parties are compliant with our privacy standards and require them to use your 
              information only for the purposes they were intended. These third parties are prohibited from using 
              your personal data for their own marketing or other unrelated purposes.
            </p>
            <p className="policyText">
              We may also disclose your information if required by law, such as in response to a subpoena or legal 
              request. This helps us protect our rights, prevent fraud, or comply with any legal obligations or 
              investigations.
            </p>

            <h2 className="sectionTitle" id="rights">Your Rights</h2>
            <p className="policyText">
              You have the right to access, update, and delete your personal information at any time. We provide 
              you with tools to manage your account settings, including the ability to modify your contact preferences 
              and delete your account if necessary.
            </p>
            <p className="policyText">
              If you believe that your information is inaccurate or incomplete, you can contact us to request 
              corrections. We will make reasonable efforts to resolve any discrepancies and ensure your information 
              is accurate.
            </p>
            <p className="policyText">
              If you wish to withdraw consent for us to process your data or if you want to exercise any of your other 
              rights, please reach out to us via email. We will respond to your requests promptly and ensure that we 
              comply with applicable data protection regulations.
            </p>
          </div>

          <div className="policySidebar">
            <h2 className="sidebarTitle">Quick Links</h2>
            <ul className="sidebarLinks">
              <li><a href="#info">Information We Collect</a></li>
              <li><a href="#use">How We Use Your Information</a></li>
              <li><a href="#security">Data Security</a></li>
              <li><a href="#third-party">Third-Party Sharing</a></li>
              <li><a href="#rights">Your Rights</a></li>
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

export default PrivacyPolicy;