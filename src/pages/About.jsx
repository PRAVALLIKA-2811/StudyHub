import React from "react";
import "../Styles/About.css";
import logo from "../assets/studyhub.png"; // update path if needed

function About() {
  return (
    <div className="about-container">
      {/* HERO SECTION */}
      <section className="about-hero">
        <img src={logo} alt="StudyHub Logo" className="about-logo" />
        <h1>About StudyHub</h1>
        <p>
          Your all-in-one Learning Management System for students and educators
        </p>
      </section>

      {/* CONTENT SECTION */}
      <section className="about-content">
        <div className="about-card">
          <h2>🎯 Our Mission</h2>
          <p>
            StudyHub aims to make learning accessible, engaging, and effective
            by connecting students and teachers on one powerful platform.
          </p>
        </div>

        <div className="about-card">
          <h2>🚀 What We Offer</h2>
          <ul>
            <li>Interactive online courses</li>
            <li>Student & Teacher dashboards</li>
            <li>Progress tracking & certificates</li>
            <li>Secure and user-friendly experience</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>👩‍🎓 Who Can Use StudyHub?</h2>
          <p>
            Whether you are a <strong>student</strong> eager to learn or a{" "}
            <strong>teacher</strong> passionate about sharing knowledge,
            StudyHub is built for you.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="about-footer">
        <p>© 2026 StudyHub. Learn. Grow. Succeed.</p>
      </footer>
    </div>
  );
}

export default About;
