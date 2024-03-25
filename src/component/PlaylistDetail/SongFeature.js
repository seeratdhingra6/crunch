import React from "react";
import "./style/songFeature.css";
import songFeatureImg from "../LandingPage/asset/songFeature.png";
import ProgressBar from "bootstrap-progress-bar";
import "bootstrap/dist/css/bootstrap.min.css";

const SongFeature = () => {
  return (
    <div className="songFeature__container">
      <div className="songFeature__leftSide">
        <p className="songFeature__mainHeading">Songs</p>
        <img src={songFeatureImg} alt="" />
      </div>
      <div className="songFeature__rightSide">
        <p className="songFeature__mainHeading">Features</p>
        <div className="songFeature__featureList">
          <div className="songFeature__featureBox">
            <ProgressBar width="90%" />
            <p>Danceable</p>
          </div>
          <div className="songFeature__featureBox">
            <ProgressBar width="100%" />
            <p>Danceable</p>
          </div>
          <div className="songFeature__featureBox">
            <ProgressBar width="100%" />
            <p>Danceable</p>
          </div>
          <div className="songFeature__featureBox">
            <ProgressBar width="100%" />
            <p>Danceable</p>
          </div>
          <div className="songFeature__featureBox">
            <ProgressBar width="100%" />
            <p>Danceable</p>
          </div>
          <div className="songFeature__featureBox">
            <ProgressBar width="100%" />
            <p>Danceable</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongFeature;
