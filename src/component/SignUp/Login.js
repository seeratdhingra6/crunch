import React from 'react'
import { Link } from 'react-router-dom'
import './style/login.css'

const Login = () => {
    return (
    <div className="login__container">
      <form className="login__form">
          <div className="signUp__formControl">
            <p className="signUp__label">UserName</p>
            <input type="text" required />
          </div>
          <div className="signUp__formControl">
            <p className="signUp__label">Password</p>
            <input type="text"  required/>
          </div>
        <button className="signUp__subBtn">Login</button>
        <div className="signUp__loginBox">
          <span className="signUp__msg">Don't Have an Account?</span>
          <Link exact to="/signUp" className="signUp__login">
            Sign Up
          </Link>
        </div>
        <a className="signUp__forgot" href="/signUp">
            Forgot Password
          </a>
      </form>
    </div>
    )
}

export default Login
