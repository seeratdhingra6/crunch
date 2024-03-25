import React from 'react'
import './style/homeNavbar.css'
import { Link } from 'react-router-dom'
import Logo from './asset/mainLogo.png'

const HomeNavbar = () => {
    return (
        <div className="homeNavbar__container">
                <img className="main__Logo" src={Logo} alt="Logo" />
            
            <div className="homeNavbar__tools">
                <button className="homeNavbar__toolsBtn">Pricing</button>
                <button className="homeNavbar__toolsBtn">FAQ</button>
                <Link exact to="/login" className="homeNavbar__toolsBtn">Login</Link>
            </div>
        </div>
    )
}

export default HomeNavbar
