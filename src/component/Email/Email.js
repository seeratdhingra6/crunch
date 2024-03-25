import React from "react";
import LoginNavbar from "../HelperComponent/LoginNavbar";
import TextEditor from "./TextEditor";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./style/email.css";
import LoginNavbarPlain from "../HelperComponent/LoginNavbarPlain";

const Email = () => {
  window.scroll(0,0)
  return (
    <div className="email__container">
      <LoginNavbarPlain />

      <Link exact to="/search" className="email__back">
        <ArrowBackIcon className="email__arrowIcon" /> Back to results
      </Link>
      <form className="email__form">
        <input type="text" placeholder="To : [playlist owner email]" />
        <input type="text" placeholder="Subject : [playlist owner email]" />
        <TextEditor className="email__textEditor" />
        <Link exact to="/msgSuccess" className="email__sendBtn">Send</Link>
      </form>
    </div>
  );
};

export default Email;
