import React from 'react'
import AccountSetting from './AccountSetting'
import AccountBilling from './AccountBilling'

const EditProfile = () => {
    return (
        <div className="EditProfile__container">
            <AccountSetting />
            <AccountBilling />
        </div>
    )
}

export default EditProfile
