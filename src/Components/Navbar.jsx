import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/main.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Read localStorage directly (NO useEffect needed)
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true",
  );

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setMenuOpen(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* LOGO */}
        <h2 className="logo">StudyHub</h2>

        {/* NAV LINKS */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {/* HOME */}
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          {/* BEFORE LOGIN */}
          {!isLoggedIn && (
            <>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
            </>
          )}

          {/* AFTER LOGIN */}
          {isLoggedIn && (
            <>
              <Link to="/profile" onClick={() => setMenuOpen(false)}>
                Profile
              </Link>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </div>

        {/* HAMBURGER */}
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
