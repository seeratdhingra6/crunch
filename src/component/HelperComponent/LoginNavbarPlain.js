import React from 'react'
// import './style/loginNav.css'
import './style/loginNavPlain.css'
import LoginNavUser from './LoginNavUser'
import DarkMode from './DarkMode'
import Logo from '../LandingPage/asset/main__logo.svg'

const LoginNavbar = ({darkmode}) => {
    return (
        <div className="loginNavPlain__container">
            <img className="main__Logo" src={Logo} alt="Logo" />
            <div className="loginNav__usernameBox">
               {darkmode?<div className="loginNav__dark"><DarkMode /></div>:<span></span>} 
               <LoginNavUser />
            </div>         
        </div>
    )
}

export default LoginNavbar
