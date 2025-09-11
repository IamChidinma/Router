import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Forgot.css";

const ForgotPassword = () => {
  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <h2>Forgot Your Password?</h2>
        <p>
          Don’t worry! Enter your email and we’ll send you a link to reset it.
        </p>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="forgot-input"
        />

        <button className="forgot-btn">Send Reset Link</button>

        <div className="forgot-footer">
          <Link to="/">Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
