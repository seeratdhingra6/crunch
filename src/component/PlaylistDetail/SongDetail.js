import React from "react";
import "./style/songDetail.css";
import songDetImg from "../LandingPage/asset/songDetailImg.png";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const SongDetail = () => {
  window.scroll(0,0)
  return (
    <div className="songDetail__container">
      <Link exact to="/search"><ArrowBackIcon className="songDetail__arrowIcon" /> Back to results</Link>
      <div className="songDetail__box">
        <div className="songDetail__imgBox">
          <div className="songDetail__imgCont">
            <img src={songDetImg} alt="" />
            <Link exact to="/email" className="songDetail__msgBtn">Message Owner</Link>
          </div>
          <div className="songDetail__infoBox">
            <p className="infoBox__mainHeading">This is Chromeo</p>
            <p className="infoBox__secondaryHeading">Owner:Spotify</p>
            <div className="songDetail__detailBox">
              <div className="songDetail__combine">
                <p className="highlightText">132,285</p>
                <p className="songDetail__simpleText">0-10 popularity</p>
              </div>
              <div className="songDetail__combine">
                <p className="highlightText">3.5'</p>
                <p className="songDetail__simpleText">Average Length</p>
              </div>
              <div className="songDetail__combine">
                <p className="highlightText">3.4</p>
                <p className="songDetail__simpleText">0-10 popularity</p>
              </div>
              <div className="songDetail__combine">
                <p className="highlightText">243</p>
                <p className="songDetail__simpleText">Average Tempo</p>
              </div>
              <div className="songDetail__combine">
                <p className="highlightText">100</p>
                <p className="songDetail__simpleText">Traks</p>
              </div>
              <div className="songDetail__combine">
                <p className="highlightText">POP</p>
                <p className="songDetail__simpleText">Top Genre</p>
              </div>
              <div className="songDetail__combine">
                <p className="highlightText">200</p>
                <p className="songDetail__simpleText">Likes</p>
              </div>
              <div className="songDetail__combine">
                <p className="highlightText">POP</p>
                <p className="songDetail__simpleText">Top Sub Genere</p>
              </div>
              <div className="songDetail__combine">
                <p className="highlightText">C#</p>
                <p className="songDetail__simpleText">Key</p>
              </div>
              <div className="songDetail__combine">
                <p className="highlightText">X days</p>
                <p className="songDetail__simpleText">Last Updated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongDetail;
