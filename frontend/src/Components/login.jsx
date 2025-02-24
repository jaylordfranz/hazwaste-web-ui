import { useState } from "react";
import axios from "axios";
import "./css/login.css"; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/auth/login", {
        email,
        password,
      });

      const { token, role } = response.data;
      localStorage.setItem("token", token);

      if (role === "admin") {
        window.location.href = "/AdminDashboard";
      } else if (role === "user") {
        window.location.href = "/UserDashboard";
      } else {
        setError("Invalid role");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      {/* Background wave */}
      <div className="cloud-background"></div>

      {/* Biohazard logo */}
      <img src="/assets/biohazard.png" alt="Biohazard Logo" className="biohazard-logo" />

      <div className="login-box">
        <h2>LOG IN</h2>
        <form onSubmit={handleLogin}>
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

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me?
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>

          <button type="submit" className="login-button">Log In</button>
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

        <p className="signup-link">
          Don’t have an account? <a href="/register">Sign Up</a>
        </p>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export { Login };
