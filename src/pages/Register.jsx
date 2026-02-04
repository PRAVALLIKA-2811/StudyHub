import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Styles/Register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    password: "",
    confirmPassword: "",
    role: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  // 🔁 HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // ✅ FORM VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.institution)
      newErrors.institution = "Institution is required";

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (!formData.role) newErrors.role = "Please select a role";

    if (!formData.terms) newErrors.terms = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🚀 SUBMIT HANDLER (⭐ MAIN CHANGE IS HERE ⭐)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // ✅ SAVE LOGIN DATA
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", formData.role);
      localStorage.setItem("userName", formData.name);
      localStorage.setItem("userEmail", formData.email);

      alert("Registration Successful 🎉");

      // 🔁 ROLE BASED REDIRECT
      if (formData.role === "student") {
        navigate("/student");
      } else if (formData.role === "teacher") {
        navigate("/teacher");
      }
    }
  };

  return (
    <div className="register-wrapper">
      <form className="register-card" onSubmit={handleSubmit}>
        <h2>Create Account ✨</h2>
        <p>Join our Learning Management System</p>

        {/* NAME & PHONE */}
        <div className="input-row">
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="input-group">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
        </div>

        {/* EMAIL */}
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        {/* INSTITUTION */}
        <div className="input-group">
          <input
            type="text"
            name="institution"
            placeholder="College / Organization"
            value={formData.institution}
            onChange={handleChange}
          />
          {errors.institution && (
            <span className="error">{errors.institution}</span>
          )}
        </div>

        {/* PASSWORDS */}
        <div className="input-row">
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>

          <div className="input-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <span className="error">{errors.confirmPassword}</span>
            )}
          </div>
        </div>

        {/* ROLE */}
        <div className="input-group">
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
          {errors.role && <span className="error">{errors.role}</span>}
        </div>

        {/* TERMS */}
        <div className="checkbox-group">
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />
          <label>I agree to the Terms & Conditions</label>
        </div>
        {errors.terms && <span className="error">{errors.terms}</span>}

        {/* SUBMIT */}
        <button type="submit" className="register-btn">
          Create Account
        </button>

        {/* FOOTER */}
        <div className="footer-text">
          <span>Already have an account?</span>
          <Link to="/login"> Login</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
