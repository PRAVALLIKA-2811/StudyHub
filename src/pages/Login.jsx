import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
    remember: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.role) {
      newErrors.role = "Please select a role";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // 🔐 Later: API call goes here
      alert("Login Successful ✅");

      // Role-based navigation
      if (formData.role === "student") {
        navigate("/student");
      } else if (formData.role === "teacher") {
        navigate("/teacher");
      } else if (formData.role === "admin") {
        navigate("/admin");
      }
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Welcome Back 👋</h2>
        <p>Login to continue learning</p>

        {/* Email */}
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        {/* Password */}
        <div className="input-group password-group">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        {/* Role */}
        <div className="input-group">
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
          {errors.role && <span className="error">{errors.role}</span>}
        </div>

        {/* Options */}
        <div className="options">
          <label>
            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
            />
            Remember me
          </label>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>

        {/* Submit */}
        <button type="submit" className="login-btn">
          Login
        </button>

        {/* Footer */}
        <div className="footer-text">
          <span>Don’t have an account?</span>
          <Link to="/register"> Register</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
