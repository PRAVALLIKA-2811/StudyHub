import { useParams } from "react-router-dom";
import "../Styles/CourseDetails.css";

function CourseDetails() {
  const { id } = useParams();

  const courses = [
    {
      id: "react-basics",
      title: "React Basics",
      description: "Learn React from scratch with hands-on projects",
      level: "Beginner",
      duration: "6 Weeks",
      instructor: "John Doe",
      syllabus: [
        "Introduction to React",
        "JSX & Components",
        "Props & State",
        "Hooks",
        "Mini Project",
      ],
    },
    {
      id: "advanced-react",
      title: "Advanced React",
      description: "Hooks, Context API, performance optimization",
      level: "Advanced",
      duration: "5 Weeks",
      instructor: "Emily Carter",
      syllabus: [
        "Advanced Hooks",
        "Context API",
        "Performance Optimization",
        "Custom Hooks",
        "Real Project",
      ],
    },
    {
      id: "node-fundamentals",
      title: "Node.js Fundamentals",
      description: "Build backend APIs using Node and Express",
      level: "Intermediate",
      duration: "5 Weeks",
      instructor: "Jane Smith",
      syllabus: [
        "Node Basics",
        "Express.js",
        "REST APIs",
        "MongoDB Integration",
      ],
    },
    {
      id: "mongodb-essentials",
      title: "MongoDB Essentials",
      description: "Master MongoDB database design and queries",
      level: "Beginner",
      duration: "4 Weeks",
      instructor: "Robert Brown",
      syllabus: [
        "MongoDB Basics",
        "CRUD Operations",
        "Indexes",
        "Aggregation Framework",
      ],
    },
    {
      id: "fullstack-development",
      title: "Full Stack Development",
      description: "Build complete applications using MERN stack",
      level: "Advanced",
      duration: "10 Weeks",
      instructor: "Sarah Johnson",
      syllabus: [
        "Frontend with React",
        "Backend with Node & Express",
        "MongoDB Database",
        "Authentication",
        "Final Capstone Project",
      ],
    },
    {
      id: "javascript-mastery",
      title: "JavaScript Mastery",
      description: "Deep dive into modern JavaScript concepts",
      level: "Intermediate",
      duration: "6 Weeks",
      instructor: "David Miller",
      syllabus: [
        "ES6+ Features",
        "Closures & Hoisting",
        "Asynchronous JS",
        "Promises & Async/Await",
      ],
    },
    {
      id: "typescript-essentials",
      title: "TypeScript Essentials",
      description: "Learn TypeScript for scalable applications",
      level: "Intermediate",
      duration: "4 Weeks",
      instructor: "Laura Wilson",
      syllabus: [
        "TypeScript Basics",
        "Types & Interfaces",
        "Generics",
        "TypeScript with React",
      ],
    },
    {
      id: "expressjs-mastery",
      title: "Express.js Mastery",
      description: "Advanced backend development using Express",
      level: "Advanced",
      duration: "5 Weeks",
      instructor: "Michael Anderson",
      syllabus: [
        "Middleware",
        "Authentication & Authorization",
        "REST API Design",
        "Error Handling",
      ],
    },
  ];

  const course = courses.find((c) => c.id === id);

  if (!course) {
    return <h2>❌ Course not found</h2>;
  }

  return (
    <div className="course-details">
      <h1>{course.title}</h1>
      <p>{course.description}</p>

      <div className="course-meta">
        <span>🎯 Level: {course.level}</span>
        <span>⏱ Duration: {course.duration}</span>
        <span>👨‍🏫 Instructor: {course.instructor}</span>
      </div>

      <h3>📘 Course Syllabus</h3>
      <ul>
        {course.syllabus.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>

      <button className="start-btn">Start Learning</button>
    </div>
  );
}

export default CourseDetails;
