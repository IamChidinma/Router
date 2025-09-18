import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/Login.css";

const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const baseUrl = "https://typescript-auth-d8zb.onrender.com/api/users";

  const inputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
    setError("");
    setSuccess("");
  };

  const handleLogin = async () => {
    if (!input.email || !input.password) {
      setError("Both fields are required.");
      return;
    }

    try {
      const res = await axios.post(`${baseUrl}/login`, input, {
        headers: { "Content-Type": "application/json" },
      });

      console.log(res);

      setSuccess(" Login successful!");
      setError("");

      setTimeout(() => navigate("/home"), 1500);
    } catch (err) {
      console.error("Login error:", err);
      if (err.response) {
        setError(err.response.data.message || " Invalid email or password.");
      } else {
        setError("Server not reachable. Try again later.");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="overlay">
          <h2>Welcome Back</h2>
          <p>Please log in with your personal information.</p>
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
          className={`login-input ${error ? "error-input" : ""}`}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={input.password}
          onChange={inputChange}
          className={`login-input ${error ? "error-input" : ""}`}
        />

        {error && <p className="error-text">{error}</p>}
        {success && <p className="success-text">{success}</p>}

        <button onClick={handleLogin} className="login-btn">
          Log In
        </button>

        <p className="switch">
          Don’t have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
