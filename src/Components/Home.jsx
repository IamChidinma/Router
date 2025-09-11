import React from "react";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="glass-card">
          <h1>🍔 Welcome Home</h1>
          <p>
            Discover tasty recipes and explore delicious meals made just for
            you.
          </p>
          <button className="explore-btn">Explore Food</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
