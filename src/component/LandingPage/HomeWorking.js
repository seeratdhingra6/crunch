import React from "react";
import "./style/homeWorking.css";
import step1 from "./asset/step1.png";
import step2 from "./asset/step2.png";
import step3 from "./asset/step3.png";
import playlistImg from "./asset/playlist.png";
import CommentBox from "./CommentBox";
import { Link } from "react-router-dom";

const HomeWorking = () => {
  return (
    <div className="working__container">
      <p className="working__mainHeading">How does it work</p>
      <div className="working__stepBox">
        <p className="working__stepCount">Step 1</p>
        <p className="workingStep__text">Type your keywords</p>
        <img src={step1} alt="img" />
      </div>
      <div className="working__stepBox">
        <p className="working__stepCount">Step 2</p>
        <p className="workingStep__text">
          Select the best matches for your music
        </p>
        <img src={step2} alt="img" />
      </div>
      <div className="working__stepBox">
        <p className="working__stepCount">Step 3</p>
        <p className="workingStep__text">Pitch your songs</p>
        <img src={step3} alt="img" />
      </div>
      <div className="working__btnBox">
        <Link exact to="/signUp" className="working__subBtn">
          Subscribe
        </Link>
      </div>
      <p className="working__mainHeading working__minWidth working__playlistPerfect">
        Get the perfect playlists for your music now
      </p>
      <div className="working__playImg">
        <div className="working__price">
          <p className="working__priceText">· Unlimited searches</p>
          <p className="working__priceText">· Unlimited messages</p>
          <p className="working__priceText">· Playlist Analysis</p>
          <p className="working__priceText">
            · Curator contact finder (email/ social media)
          </p>
          <p className="working__priceText">
            · Unlimited access to exportable playlist data
          </p>
          <p className="working__priceText">
            · Cancel your subscription at any time
          </p>
          <p className="working__priceAmount">$17.95</p>
          <p className="working__month">monthly</p>
        </div>
        <div className="working__btnBoxPic">
          <Link exact to="/signUp" className="working__subBtnCombine">
            Subscribe
          </Link>
        </div>
      </div>
      <p className="working__mainHeading working__minWidth">
        What artists are saying
      </p>
      <div className="working__commentBox">
        <CommentBox />
        <CommentBox />
        <CommentBox />
      </div>
      <div className="working__btnBox">
        <Link exact to="/signUp" className="working__subBtn">
          Subscribe
        </Link>
      </div>
    </div>
  );
};

export default HomeWorking;
