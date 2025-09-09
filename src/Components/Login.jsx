import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Login.css";

const Login = () => {
  return (
    <div className="Container">
      <div className="Box">
        <h2>Welcome Back 👋</h2>

        <input type="email" placeholder="Enter your Email" />
        <input type="tel" placeholder="Enter your Phone Number" />

        <Link to="/home" className="Btn">
          Login
        </Link>

        <div className="Links">
          <Link to="/forgot">Forget Password?</Link>
          <Link to="/signup">I don’t have an account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
