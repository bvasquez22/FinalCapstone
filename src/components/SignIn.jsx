import React, { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../store/authContext";

import "./SignIn.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const resetSignInForm = () => {
    setUsername("");
    setPassword("");
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    let body = { username, password };

    try {
      const res = await axios.post("http://localhost:4005/sign-in", body);
      dispatch({ type: "LOGIN", payload: res.data });
      console.log("Sign in initiated");
      resetSignInForm();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="signin_container">
      <h3 className="signin_text">Sign in to master your collection</h3>
      <form className="signin_form" onSubmit={handleSignIn}>
        <input
            className="username_input"
            type="text" placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
        />
        <div className="password_container">
          <input
            className="password_input"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
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
