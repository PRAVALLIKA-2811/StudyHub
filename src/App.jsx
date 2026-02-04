import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* ===== COMPONENTS ===== */
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

/* ===== PAGES ===== */
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import CourseContent from "./pages/CourseContent";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import About from "./pages/About";
import Profile from "./pages/Profile";

/* ===== PROTECTED ROUTE (OPTIONAL BUT GOOD PRACTICE) ===== */
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <BrowserRouter>
      {/* Navbar visible on all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/courses/:id/learn" element={<CourseContent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />

        {/* ===== STUDENT ROUTES ===== */}
        <Route
          path="/student"
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/courses/:id/learn"
          element={
            <ProtectedRoute>
              <CourseContent />
            </ProtectedRoute>
          }
        />

        {/* ===== TEACHER ROUTE ===== */}
        <Route
          path="/teacher"
          element={
            <ProtectedRoute>
              <TeacherDashboard />
            </ProtectedRoute>
          }
        />

        {/* ===== EXTRA PAGES (TEMP PLACEHOLDERS) ===== */}
        <Route
          path="/assignments"
          element={<h2>📝 Assignments Coming Soon</h2>}
        />
        <Route
          path="/progress"
          element={<h2>📊 Progress Report Coming Soon</h2>}
        />
        <Route
          path="/certificates"
          element={<h2>🎖 Certificates Coming Soon</h2>}
        />

        {/* ===== 404 PAGE ===== */}
        <Route path="*" element={<h2>❌ Page Not Found</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
