import React from 'react'
import './style/homeFooter.css'
import logo from "./asset/footerLogo.png"

const HomeFooter = () => {
    return (
        <div className="footer__container">
            <img className="main__Logo" src={logo} alt="logo" /> 
            <div className="footer__tools">
                <a href="/">FAQ</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Terms and Conditions</a>
                <a href="/">Contact</a>
            </div>
        </div>
    )
}

export default HomeFooter
