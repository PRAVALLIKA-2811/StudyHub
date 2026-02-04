import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function CourseContent() {
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ Redirect if not logged in
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  // ✅ All courses data
  const courses = [
    {
      id: "react-basics",
      title: "React Basics",
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
    <div style={{ padding: "30px" }}>
      <h1>🎓 {course.title} - Course Content</h1>

      <ul>
        {course.syllabus.map((lesson, index) => (
          <li key={index}>{lesson}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseContent;
