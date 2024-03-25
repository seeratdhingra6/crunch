import React from "react";
import "./style/homeShowCase.css";
import showCaseDisplay from "./asset/artista_low.webp";
import showCaseVideo from "./asset/homeShowVideo.png";
import { Link } from "react-router-dom";

const HomeShowCase = () => {
  return (
    <div className="homeShow__container">
      <img
        className="homeShow__mainImg"
        src={showCaseDisplay}
        alt="showcase_img"
      />
      <div className="homeShow__textBox">
        <p className="homeShow__primaryText">Get discovered by your audience</p>
        <p className="homeShow__secondaryText">
          Pitch your music on hundreds of playlists that your audience
          frequently listens to.
        </p>
        <img src={showCaseVideo} alt="showCaseVideo" />
        <p className="homeShow__secondaryText homeShow__smallText">
          Playlist Crunch searches all the playlists that match the sound,
          genre, similar artists and hashtags with your songs.<br />Download the
          results and pitch your music with playlists owners.
        </p>
        <Link exact to="/signUp" className="homeShow__subBtn">Subscribe</Link>
      </div>
    </div>
  );
};

export default HomeShowCase;
