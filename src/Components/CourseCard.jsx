import { useNavigate } from "react-router-dom";
import "../Styles/CourseCard.css";

function CourseCard({ course }) {
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate(`/courses/${course.id}`);
  };

  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p className="course-desc">{course.description}</p>

      <span className={`level ${course.level.toLowerCase()}`}>
        {course.level}
      </span>

      <button className="enroll-btn" onClick={handleEnroll}>
        Enroll Now
      </button>
    </div>
  );
}

export default CourseCard;
