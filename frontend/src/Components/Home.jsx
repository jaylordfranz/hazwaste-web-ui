import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="container-fluid bg-light min-vh-100 d-flex flex-column align-items-center p-4">
   
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm w-100 p-3 rounded">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src="/assets/logo.png" alt="Logo" className="img-fluid" style={{ height: "60px" }} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/about" className="nav-link text-dark">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/news" className="nav-link text-dark">News</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-dark">Contact</Link>
              </li>
            </ul>
            <Link to="/login" className="btn btn-warning ms-3">Sign Up</Link>
          </div>
        </div>
      </nav>
      
     
      <div className="container mt-5 p-4 bg-white rounded shadow-lg text-center text-md-start">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 text-warning fw-bold">HAZWASTE</h1>
            <p className="lead text-secondary">
              HazWaste is your all-in-one solution for responsible waste disposal. Using AI-driven classification,
              we help you sort hazardous and non-hazardous waste effortlessly. Locate nearby recycling centers,
              receive real-time disposal tips via SMS, and contribute to a cleaner, greener environment.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img src="/assets/image.png" alt="HazWaste" className="img-fluid rounded shadow-sm" style={{ maxWidth: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
