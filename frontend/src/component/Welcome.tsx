import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <React.Fragment>
      <div className="welcome-container">
        <h1>Welcome to Our Website</h1>
        <p>Get started by signing up or logging in.</p>
        <div className="action-buttons">
          <Link to="/signup" className="signup-link">
            Sign Up
          </Link>
        </div>
        <br /> <br />
        <div className="action-buttons">
          <Link to="/login" className="signup-link">
            Log In
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Welcome;
