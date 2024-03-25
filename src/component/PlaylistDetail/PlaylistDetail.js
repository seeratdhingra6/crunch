import React from "react";
import LoginNavbar from "../HelperComponent/LoginNavbar";
import SongDetail from "./SongDetail";
import SongFeature from "./SongFeature";

const PlaylistDetail = () => {
  return (
    <div className="playlistDetail__container">
      <LoginNavbar />
      <SongDetail />
      <SongFeature />
    </div>
  );
};

export default PlaylistDetail;
