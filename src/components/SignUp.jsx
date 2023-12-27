import React from "react";
import { useState } from "react";

import "./SignIn.css";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className="signin_container">
      <h3 className="signin_text">Sign up to start managing your collection</h3>
      <form className="signup_form">
        <input className="email_input" type="text" placeholder="Enter your email address" />
        <input className="username_input" type="text" placeholder="Enter your username" />
        <div className="password_container">
          <input
            className="password_input"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Enter your password"
          />
          <label className="toggle-password" onClick={togglePasswordVisibility}>
            <span
              className={`eye_icon${isPasswordVisible ? " active" : ""}`}
            ></span>
          </label>
        </div>
        <div className="password_container">
          <input
            className="password_input"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Confirm your password"
          />
          <label className="toggle-password" onClick={togglePasswordVisibility}>
            <span
              className={`eye_icon${isPasswordVisible ? " active" : ""}`}
            ></span>
          </label>
        </div>
        <button className="signin_button" type="submit">
          Sign up
        </button>
      </form>
      <nav className="signup">
        <Link to="/sign-in" className="nav_link">
          <h4>Already have an account?</h4>
        </Link>
      </nav>
    </div>
  );
};

export default SignUp
