import React from "react";
import "./style/accountBilling.css";
import CancelSub from "./CancelSub"

const AccountBilling = () => {
  return (
    <div className="accountBilling__container">
      <p className="accountBilling__subText">Subscription and Billing</p>
      <div className="accountBilling__plan">
        <p className="accountBilling__currentPlan">Current Plan</p>
        <div className="accountBilling__playlist">
          <p>Full Playlist Access</p>
          <div className="accountBilling__oneLine">
            <span>Your next billing date is July 28, 2021</span>
            {/* <Link className="accountBilling__cancel" href="">Cancel Subscription</Link> */}
            <CancelSub />
          </div>
        </div>
      </div>
      <div className="accountBilling__paymentHistory">
        <p className="accountBilling__paymentText">Payment History</p>
        <table className="accountBilling__table">
          <thead>
            <tr className="accountBilling__tableHead">
              <th className="thBilling__date billing__helper">Date</th>
              <th className="thBilling__plan billing__helper">Plan</th>
              <th className="thBilling__invoice billing__helper">Invoice</th>
              <th className="thBilling__amount billing__helper">Amount</th>
            </tr>
          </thead>
          <tbody>
              <tr className="billing__tableRow">
                <td className="billing__secondaryText">MM/DD/YY</td>
                <td className="billing__secondaryText">Full Playlist Access</td>
                <td className="billing__secondaryText">1WHC2B</td>
                <td className="billing__secondaryText">$17.99</td>
              </tr>
              <tr className="billing__tableRow">
                <td className="billing__secondaryText">MM/DD/YY</td>
                <td className="billing__secondaryText">Full Playlist Access</td>
                <td className="billing__secondaryText">1WHC2B</td>
                <td className="billing__secondaryText">$17.99</td>
              </tr>
              <tr className="billing__tableRow">
                <td className="billing__secondaryText">MM/DD/YY</td>
                <td className="billing__secondaryText">Full Playlist Access</td>
                <td className="billing__secondaryText">1WHC2B</td>
                <td className="billing__secondaryText">$17.99</td>
              </tr>
              <tr className="billing__tableRow">
                <td className="billing__secondaryText">MM/DD/YY</td>
                <td className="billing__secondaryText">Full Playlist Access</td>
                <td className="billing__secondaryText">1WHC2B</td>
                <td className="billing__secondaryText">$17.99</td>
              </tr>
              <tr className="billing__tableRow">
                <td className="billing__secondaryText">MM/DD/YY</td>
                <td className="billing__secondaryText">Full Playlist Access</td>
                <td className="billing__secondaryText">1WHC2B</td>
                <td className="billing__secondaryText">$17.99</td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountBilling;
