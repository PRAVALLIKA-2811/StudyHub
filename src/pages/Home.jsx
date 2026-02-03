import { Link } from "react-router-dom";
import "../Styles/main.css";

function Home() {
  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Learn Smarter with <span>StudyHub</span>
          </h1>
          <p>
            A modern learning platform for students and teachers to grow
            together.
          </p>

          <div className="hero-buttons">
            {/* ✅ Navigate to Courses page */}
            <Link to="/courses">
              <button className="primary-btn">Explore Courses</button>
            </Link>

            {/* Optional: navigate to Register */}
            <Link to="/register">
              <button className="secondary-btn">Get Started</button>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Why Choose Our StudyHub?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>🎓 Expert Teachers</h3>
            <p>Learn from experienced instructors</p>
          </div>
          <div className="feature-card">
            <h3>⏰ Flexible Learning</h3>
            <p>Study at your own pace</p>
          </div>
          <div className="feature-card">
            <h3>📜 Certifications</h3>
            <p>Earn certificates after completion</p>
          </div>
          <div className="feature-card">
            <h3>📱 Any Device</h3>
            <p>Learn on mobile, tablet, or desktop</p>
          </div>
        </div>
      </section>

      {/* TRENDING COURSES */}
      <section className="trending">
        <h2>Trending Courses</h2>
        <div className="course-grid">
          <div className="course-card">
            <h3>React Basics</h3>
            <p>Build dynamic UI with React</p>
            <Link to="/courses">
              <button>Enroll Now</button>
            </Link>
          </div>

          <div className="course-card">
            <h3>Node.js</h3>
            <p>Backend development with Node</p>
            <Link to="/courses">
              <button>Enroll Now</button>
            </Link>
          </div>

          <div className="course-card">
            <h3>MongoDB</h3>
            <p>Master NoSQL databases</p>
            <Link to="/courses">
              <button>Enroll Now</button>
            </Link>
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className="roles">
        <h2>Who Is This For?</h2>
        <div className="role-grid">
          <div className="role-card">
            <h3>👨‍🎓 Students</h3>
            <p>Access courses & track progress</p>
          </div>
          <div className="role-card">
            <h3>👩‍🏫 Teachers</h3>
            <p>Create & manage courses</p>
          </div>
          <div className="role-card"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
