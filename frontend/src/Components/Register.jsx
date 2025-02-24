import { useState } from "react";
import axios from "axios";
import "./css/register.css"; // Import the CSS file

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/api/auth/register", {
        fullName,
        phone,
        email,
        password,
      });

      if (response.status === 201) {
        window.location.href = "/login"; // Redirect to login page after successful registration
      }
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="register-container">
      <div className="cloud-background"></div>

      {/* Biohazard logo */}
      <img src="/assets/biohazard.png" alt="Biohazard Logo" className="biohazard-logo-2" />

      <div className="register-box">
        <h2>REGISTER</h2>
        <form onSubmit={handleRegister}>
          {/* Full Name Input */}
          <div className="input-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              type="text"
              className="input-field"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          {/* Email Input */}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Phone Number Input */}
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              className="input-field"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              className="input-field"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="register-button">Sign Up</button>
        </form>

        <div className="social-login">
          <div className="divider">
            <hr />
            <span>OR</span>
            <hr />
          </div>
          <div className="social-icons">
            <img src="/assets/google.png" alt="Google" />
            <img src="/assets/linkedin.png" alt="LinkedIn" />
            <img src="/assets/facebook.png" alt="Facebook" />
          </div>
        </div>

        <p className="login-link">
          Already have an account? <a href="/login">Log In</a>
        </p>

        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export { Register };