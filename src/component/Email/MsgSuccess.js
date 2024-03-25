import React from 'react'
import { Link } from 'react-router-dom'
import LoginNavbarPlain from '../HelperComponent/LoginNavbarPlain'
import './style/msgSuccess.css'

const MsgSuccess = () => {
    return (
        <div className="emailSuccess__container">
            {/* <LoginNavbarPlain /> */}
            <p className="emailSuccess__mainHeading">Your message was successfully sent</p>
            <Link exact to="/search" className="emailSuccess__subBtn">Okay</Link>
        </div>
    )
}

export default MsgSuccess
