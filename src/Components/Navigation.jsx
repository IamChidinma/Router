import React from "react";

const Navigation = () => {
  return (
    <div>
      <nav className="header_body">
        <Link to="/">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/home">Home</Link>
      </nav>
    </div>
  );
};

export default Navigation;
