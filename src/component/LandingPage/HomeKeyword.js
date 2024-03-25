import React from "react";
import Img1 from "./asset/keyInner1.png";
import Img2 from "./asset/keyInner2.png";
import Img3 from "./asset/keyInner3.png";
import "./style/homeKeyword.css";
import { Link } from "react-router-dom";

const HomeKeyword = () => {
  return (
    <div className="key__container">
      <p className="key__mainHeading">
        Type the right keywords and get the right playlists
      </p>
      <div className="key__imgBox">
        <div className="key__innerBox">
          <img src={Img1} alt="" />
          <p>Research billions of Spotify playlists</p>
        </div>
        <div className="key__innerBox">
          <img src={Img2} alt="" />
          <p>Discover playlists with huge amounts of followers</p>
        </div>
        <div className="key__innerBox">
          <img className="key__upper" src={Img3} alt="" />
          <p className="key__upper">Contact directly with playlists curators for your next release</p>
        </div>
      </div>
      <div className="key__btnBox">
        <Link exact to="/signUp" className="key__subBtn">Subscribe</Link>
        </div>
    </div>
  );
};

export default HomeKeyword;
