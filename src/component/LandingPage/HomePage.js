import React from 'react'
import HomeNavbar from './HomeNavbar'
import HomeShowCase from './HomeShowCase'
import HomeKeyword from './HomeKeyword'
import HomeWorking from './HomeWorking'

const HomePage = () => {
    return (
        <div className="homePage__container">
            <HomeNavbar />
            <HomeShowCase />
            <HomeKeyword />
            <HomeWorking />
        </div>
    )
}

export default HomePage
