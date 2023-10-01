import React from "react";
import "../Styles/LoginPage.css";

const LoginPage = () => {
  return (
    <div className="loginpage">
      <div className="login-container">
        <div className="login-header">
          <h2>Log in to your account</h2>
          <p>Welcome back! Please enter your details.</p>
        </div>
        <form className="login-form">
          <label for="uname">
            <b>Username</b>
          </label>
          <div className="row">
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />
          </div>
          <label for="psw">
            <b>Password</b>
          </label>

          <div className="row">
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
          </div>
          <div className="row">
            <button type="submit"><span>Login</span></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
