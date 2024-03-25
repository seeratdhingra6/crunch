import React from 'react'
import LoginNavbar from '../HelperComponent/LoginNavbar'
import SearchComponent from './SearchComponent'

const searchPage = () => {
    return (
        <div>
            <LoginNavbar darkmode={true}/>
            <SearchComponent />
        </div>
    )
}

export default searchPage
