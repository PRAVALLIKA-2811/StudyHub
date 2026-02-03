import { useState } from "react";
import CourseCard from "../components/CourseCard";
import "../Styles/Courses.css";

function Courses() {
  const [searchTerm, setSearchTerm] = useState("");

  const courses = [
    {
      id: "react-basics",
      title: "React Basics",
      description: "Learn React from scratch with hands-on projects",
      level: "Beginner",
    },
    {
      id: "advanced-react",
      title: "Advanced React",
      description: "Hooks, Context API, performance optimization",
      level: "Advanced",
    },
    {
      id: "node-fundamentals",
      title: "Node.js Fundamentals",
      description: "Build backend APIs using Node and Express",
      level: "Intermediate",
    },
    {
      id: "mongodb-essentials",
      title: "MongoDB Essentials",
      description: "Database design, CRUD, and aggregation",
      level: "Beginner",
    },
    {
      id: "fullstack-development",
      title: "Full Stack Development",
      description: "React + Node + MongoDB full stack project",
      level: "Advanced",
    },
    {
      id: "javascript-mastery",
      title: "JavaScript Mastery",
      description: "Deep dive into modern JavaScript concepts",
      level: "Intermediate",
    },
    {
      id: "typescript-essentials",
      title: "TypeScript Essentials",
      description: "Learn TypeScript for safer code",
      level: "Intermediate",
    },
    {
      id: "expressjs-mastery",
      title: "Express.js Mastery",
      description: "Advanced Node.js backend development",
      level: "Advanced",
    },
  ];

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="courses-container">
      <h2>📚 Available Courses</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="course-grid">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
