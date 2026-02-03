import React from "react";
import "../Styles/TeacherDashboard.css";

function TeacherDashboard() {
  return (
    <div className="teacher-dashboard">
      {/* HEADER */}
      <header className="teacher-header">
        <h1>👩‍🏫 Teacher Dashboard</h1>
        <p>Manage your courses, students, and content</p>
      </header>

      {/* STATS */}
      <section className="teacher-stats">
        <div className="teacher-stat-card">
          <h3>📚 Courses Created</h3>
          <p>4</p>
        </div>
        <div className="teacher-stat-card">
          <h3>👨‍🎓 Total Students</h3>
          <p>120</p>
        </div>
        <div className="teacher-stat-card">
          <h3>📝 Assignments</h3>
          <p>18</p>
        </div>
        <div className="teacher-stat-card">
          <h3>📄 Submissions</h3>
          <p>240</p>
        </div>
      </section>

      {/* COURSES */}
      <section className="teacher-courses">
        <h2>My Courses</h2>
        <div className="teacher-course-grid">
          <div className="teacher-course-card">
            <h3>React Basics</h3>
            <p>Students Enrolled: 45</p>
            <div className="course-actions">
              <button>View</button>
              <button>Edit</button>
              <button className="danger">Delete</button>
            </div>
          </div>

          <div className="teacher-course-card">
            <h3>Node.js Fundamentals</h3>
            <p>Students Enrolled: 30</p>
            <div className="course-actions">
              <button>View</button>
              <button>Edit</button>
              <button className="danger">Delete</button>
            </div>
          </div>

          <div className="teacher-course-card">
            <h3>MongoDB</h3>
            <p>Students Enrolled: 45</p>
            <div className="course-actions">
              <button>View</button>
              <button>Edit</button>
              <button className="danger">Delete</button>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="teacher-actions">
        <h2>Quick Actions</h2>
        <div className="teacher-actions-grid">
          <button className="action-btn">➕ Create Course</button>
          <button className="action-btn">📤 Upload Content</button>
          <button className="action-btn">📝 Create Assignment</button>
          <button className="action-btn">📊 View Reports</button>
        </div>
      </section>
    </div>
  );
}

export default TeacherDashboard;
