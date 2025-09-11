import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Login.css";

const Login = () => {
  const [input, setinput] = useState({ email: "", password: "" });

  const inputChange = (e) => {
    const { name, value } = e.target;
    setinput((prev) => ({ ...prev, [name]: value }));
  };

  const click = () => {
    console.log("Login data:", input);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="overlay">
          <h2>Welcome Back</h2>
          <p>
            Please log in using your personal information to stay connected with
            us
          </p>
        </div>
      </div>

      <div className="login-right">
        <h2>LOGIN</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={input.email}
          onChange={inputChange}
          className="login-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={input.password}
          onChange={inputChange}
          className="login-input"
        />
        <Link to="/forgot" className="forgot">
          Forgot password?
        </Link>
        <button onClick={click} className="login-btn">
          <Link to="/home"> Log in</Link>
        </button>
        <p className="switch">
          Don’t have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
