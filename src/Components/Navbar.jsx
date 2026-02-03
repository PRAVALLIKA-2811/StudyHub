import { Link } from "react-router-dom";
import { useState } from "react";
import "../Styles/main.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">StudyHub</h2>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" className="home-btn" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link
            to="/login"
            className="login-btn"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
