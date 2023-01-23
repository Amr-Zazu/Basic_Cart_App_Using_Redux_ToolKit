import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.css";

import image from "./../../images/login.png";
import { useAuth } from "../auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const redirectPath = location.state?.path || "/";

  const handleLogin = () => {
    auth.login(email);
    navigate("/");
    navigate(redirectPath, { replace: true });
  };

  return (
    <div className="login-container">
      <div className="login">
        <div className="image">
          <img src={image} alt="Login" />
        </div>
        <div className="form">
          <h1>Login</h1>
          <div className="input">
            <label htmlFor="email">Email&nbsp;</label>
            <input
              id="email"
              type="email"
              placeholder="Type your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="password">Password&nbsp;</label>
            <input
              id="password"
              type="password"
              placeholder="Type your password"
            />
          </div>
          <button className="button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
