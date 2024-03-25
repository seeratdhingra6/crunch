import React from "react";
import "./style/accountSetting.css";
import { Link } from "react-router-dom";

const AccountSetting = () => {
  return (
    <div className="accountSetting__container">
      <Link exact to="/search" className="accountSetting__backBtn">Back</Link>
      <p className="accountSetting__mainHeading">
        Account Settings for [email]
      </p>
      <div className="accountSetting__user">
        <div className="accountSetting__userLeft">
          <p>User Profile</p>
          <div className="accountSetting__userAvatar">JD</div>
        </div>
        <form className="accountSetting__userForm">
            <div className="accountSetting__formField">
              <p>Name</p>
              <input type="text" />
            </div>
            <div className="accountSetting__formField">
              <p>Email</p>
              <input type="email" />
            </div>
            <div className="accountSetting__formField">
              <p>Password</p>
              <input type="text" />
            </div>
            <div className="accountSetting__formField">
              <p>Retype Password</p>
              <input type="text" />
            </div>
            <div className="accountSetting__formField">
              <p>Current Password</p>
              <input type="text" />
            </div>
            <button className="accountSetting__btn">Update</button>
        </form>
      </div>
    </div>
  );
};

export default AccountSetting;
