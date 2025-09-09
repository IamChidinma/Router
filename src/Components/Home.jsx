import React from "react";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="mini_container">
        <img
          src="https://i.pravatar.cc/100"
          alt="User Avatar"
          className="picture"
        />
        <h1>Welcome Back 🎉</h1>
        <p>You are logged in successfully!</p>

        <button className="logoutBtn">Logout</button>
      </div>
    </div>
  );
};

export default Home;
