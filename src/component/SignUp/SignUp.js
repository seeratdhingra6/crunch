import React from "react";
import "./style/signUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signUp__container">
      <form className="signUp__form">
        <div className="signUp__name">
          <div className="signUp__formControl">
            <p className="signUp__label">First Name</p>
            <input type="text" required />
          </div>
          <div className="signUp__formControl">
            <p className="signUp__label">Last Name</p>
            <input type="text" />
          </div>
        </div>
        <div className="signUp__formControl">
          <p className="signUp__label">Email</p>
          <input type="email" required />
        </div>
        <div className="signUp__password">
          <div className="signUp__formControl">
            <p className="signUp__label">Password</p>
            <input type="text" required />
          </div>
          <div className="signUp__formControl">
            <p className="signUp__label">Confirm Password</p>
            <input type="text" required />
          </div>
        </div>
        <div className="signUp__check">
          <input type="checkbox" className="signUp__checkBox" required />
          <span>
            By signing up I agree to the Terms of Use and Privacy Policy
          </span>
        </div>
        <button className="signUp__subBtn">Subscribe</button>
        <div className="signUp__loginBox">
          <span className="signUp__msg">Already Have Account?</span>
          <Link exact to="/login" className="signUp__login" href="">
            Login Now
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
