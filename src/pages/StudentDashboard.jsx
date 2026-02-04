import React from "react";
import { Link } from "react-router-dom";
import "../Styles/StudentDashboard.css";

function StudentDashboard() {
  return (
    <div className="dashboard-container">
      {/* HEADER */}
      <header className="dashboard-header">
        <div>
          <h1>🎓 Student Dashboard</h1>
          <p>Welcome back, keep learning!</p>
        </div>
      </header>

      {/* QUICK ACTIONS */}
      <section className="actions-section">
        <h2>Quick Actions</h2>

        <div className="actions-grid">
          <Link to="/courses">
            <button className="action-btn">📖 Browse Courses</button>
          </Link>

          <Link to="/assignments">
            <button className="action-btn">📝 Assignments</button>
          </Link>

          <Link to="/progress">
            <button className="action-btn">📊 Progress Report</button>
          </Link>

          <Link to="/certificates">
            <button className="action-btn">🎖 Certificates</button>
          </Link>
        </div>
      </section>
      <br />
      <br />

      {/* STATS */}
      <section className="stats-section">
        <div className="stat-card">
          <h3>📚 Enrolled Courses</h3>
          <p>5</p>
        </div>
        <div className="stat-card">
          <h3>✅ Completed</h3>
          <p>2</p>
        </div>
        <div className="stat-card">
          <h3>⏳ In Progress</h3>
          <p>3</p>
        </div>
        <div className="stat-card">
          <h3>🏆 Certificates</h3>
          <p>1</p>
        </div>
      </section>

      {/* COURSES */}
      <section className="courses-section">
        <h2>My Courses</h2>

        <div className="course-grid">
          <div className="course-card">
            <h3>React Basics</h3>
            <p>Progress: 60%</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: "60%" }} />
            </div>
            <button>Continue</button>
          </div>

          <div className="course-card">
            <h3>Node.js Fundamentals</h3>
            <p>Progress: 40%</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: "40%" }} />
            </div>
            <button>Continue</button>
          </div>

          <div className="course-card">
            <h3>MongoDB</h3>
            <p>Progress: 80%</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: "80%" }} />
            </div>
            <button>Continue</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StudentDashboard;
