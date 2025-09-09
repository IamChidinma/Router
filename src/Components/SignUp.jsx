import React from "react";
import { Link } from "react-router-dom";
import "../Styles/SignUp.css";

const Signup = () => {
  return (
    <div className="Container">
      <div className="Box">
        <h2>Create Account ✨</h2>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        {/* ✅ Navigate to Home after Sign Up */}
        <Link to="/home" className="Btn">
          Sign Up
        </Link>

        <div className="Links">
          <Link to="/">I already have an account</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
