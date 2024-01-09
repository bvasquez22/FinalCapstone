import React from "react";
import { useState } from "react";

import "./SignIn.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className="signin_container">
      <h3 className="signin_text">Sign in to master your collection</h3>
      <form className="signin_form">
        <input className="username_input" type="text" placeholder="Username" />
        <div className="password_container">
          <input
            className="password_input"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
          />
          <label className="toggle-password" onClick={togglePasswordVisibility}>
            <span
              className={`eye_icon${isPasswordVisible ? " active" : ""}`}
            ></span>
          </label>
        </div>
        <button className="signin_button" type="submit">
          Sign in
        </button>
      </form>
      <nav className="signup">
        <Link to="/sign-up" className="nav_link">
          <h4>Need to create an account?</h4>
        </Link>
      </nav>
    </div>
  );
};

export default SignIn;
