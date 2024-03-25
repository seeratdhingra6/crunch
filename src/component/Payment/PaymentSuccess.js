import React from 'react'
import { Link } from 'react-router-dom'
import '../Email/style/msgSuccess.css'

const PaymentSuccess = () => {
    return (
        <div className="emailSuccess__container">
            <p className="emailSuccess__mainHeading">Payment received. You can now discover playlists to pitch your music!</p>
            <Link exact to="/search" className="emailSuccess__subBtn">Let's Go</Link>
        </div>
    )
}

export default PaymentSuccess