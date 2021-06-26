import React from "react";
import asset from "../../assets/login.svg";
import { Link } from "react-router-dom";
import "./SignInSignUp_styles.css";

const SignInSignUp = () => {
  return (
    <>
      <section className="sign-in-up-section">
        <div className="login-img-section">
          <h3 className="login-img-text">Ready To Track Your Bugs?</h3>
          <img className="login-img" src={asset} alt="login" />
        </div>
        <div className="login-form">
          <h2 style={{ marginBottom: "100px" }}>START FOR FREE</h2>
          <h2 style={{ marginBottom: "100px" }}>SIGN IN TO US</h2>
          <h3 style={{ marginBottom: "100px" }}>
            Already a member?<Link className="link">log in</Link>
          </h3>
          <div className="email-input">
            <label for="login-email">Email</label>
            <input
              id="login-email"
              className="login-input"
              type="email"
            ></input>
          </div>
          <div className="password-input">
            <label for="login-password">Password</label>
            <input
              id="login-password"
              className="login-input"
              type="password"
            ></input>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignInSignUp;
