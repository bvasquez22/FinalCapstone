import React, { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../store/authContext";

import "./SignIn.css";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const resetSignUpForm = () => {
    setEmail("");
    setUsername("");
    setPassword("");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    let body = { email, username, password };

    try {
      const res = await axios.post("http://localhost:4005/sign-up", body);
      dispatch({ type: "LOGIN", payload: res.data });
      console.log("Sign up initiated");
      resetSignUpForm();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="signin_container">
      <h3 className="signin_text">
        Sign up to start mastering your collection
      </h3>
      <form className="signup_form" onSubmit={handleSignUp}>
        <input
          className="email_input"
          type="text"
          placeholder="Enter your email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="username_input"
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="password_container">
          <input
            className="password_input"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="toggle-password" onClick={togglePasswordVisibility}>
            <span
              className={`eye_icon${isPasswordVisible ? " active" : ""}`}
            ></span>
          </label>
        </div>
        {/* <div className="password_container">
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
        </div> */}
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

export default SignUp;
