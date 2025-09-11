import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Signup.css";

const Signup = () => {
  const [input, setinput] = useState({ name: "", email: "", password: "" });

  const inputChange = (e) => {
    const { name, value } = e.target;
    setinput((prev) => ({ ...prev, [name]: value }));
  };

  const click = () => {
    console.log("Signup data:", input);
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <div className="overlay">
          <h2>Create Account</h2>
          <p>
            To become a part of our community, please sign up using your
            personal information.
          </p>
        </div>
      </div>

      <div className="signup-right">
        <h2>SIGNUP</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={input.name}
          onChange={inputChange}
          className="signup-input"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={input.email}
          onChange={inputChange}
          className="signup-input"
        />

        <input
          type="password"
          name="password"
          placeholder="Create password"
          value={input.password}
          onChange={inputChange}
          className="signup-input"
        />

        <label className="terms">
          <input type="checkbox" /> I agree to the{" "}
          <a href="/terms">Terms & Conditions</a>
        </label>

        <button onClick={click} className="signup-btn">
          <Link to="/Home">Sign Up</Link>
        </button>

        <p className="switch">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
