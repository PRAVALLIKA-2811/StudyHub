import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Profile.css";

function Profile() {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // 🔒 Protect page
  if (!isLoggedIn) {
    navigate("/login");
    return null;
  }

  // 📦 Get user data
  const name = localStorage.getItem("userName") || "Student";
  const email = localStorage.getItem("userEmail") || "Not provided";
  const role = localStorage.getItem("userRole") || "student";

  return (
    <div className="profile-page">
      <div className="profile-card">
        {/* Avatar */}
        <div className="avatar">{name.charAt(0).toUpperCase()}</div>

        {/* Info */}
        <h2>{name}</h2>
        <p className="role">{role.toUpperCase()}</p>

        <div className="profile-info">
          <div>
            <span>Email</span>
            <p>{email}</p>
          </div>

          <div>
            <span>Role</span>
            <p>{role}</p>
          </div>

          <div>
            <span>Status</span>
            <p className="active">Active</p>
          </div>
        </div>

        {/* Actions */}
        <div className="profile-actions">
          <button onClick={() => navigate("/")}>🏠 Home</button>
          <button onClick={() => navigate("/courses")}>📚 My Courses</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
