import React from "react";
import '../Styles/RegisterPage.css'

const RegistrationPage = () => {
  return (
    <div>
      <div className="regispage">
        <div className="regis-container">
          <div className="regis-header">
            <h2>Sign Up</h2>
            <p>Welcome! Please enter your details.</p>
          </div>
          <form className="regis-form">
            <label for="fullname">
              <b>Username</b>
            </label>
            <div className="row">
              <input
                type="text"
                placeholder="Enter your FullName"
                name="fname"
                required
              />
            </div>
            <label for="pswd">
              <b>Password</b>
            </label>

            <div className="row">
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                required
              />
            </div>
            <label for="email">
              <b>Confirm Password</b>
            </label>

            <div className="row">
              <input
                type="password"
                placeholder="Enter your confirm password"
                name="confirmpassowrd"
                required
              />
            </div>
            <div className="row">
              <button type="submit">
                <span>Sign Up</span>
              </button>
            </div>
          </form>
        </div>
      </div>{" "}
    </div>
  );
};

export default RegistrationPage;
