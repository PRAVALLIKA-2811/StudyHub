import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-section">
          <h2 className="footer-logo">StudyHub</h2>
          <p className="footer-tagline">
            Empowering learners with modern, flexible education.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/faq">FAQs</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@studyhub.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: India</p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>© 2026 StudyHub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
