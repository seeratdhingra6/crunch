import React from "react";
import "./style/resultTable.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const TableRow = () => {

  const store = useSelector(store => store)

  return (
    
      <tr className={`listAccordio__tableRow ${store.currClass.rowClass}`}>
        <td>
          <div className="result__playlistDetail">
            <p className="playlistDetail__heading">SoundCity Playlists</p>
            <p className="playlistDetail__desc">
              Awake At Last - Top New Rock/Metal Songs - The Awakened Playlist
            </p>
            <div className="playlistDetail__btnBox">
              <Link exact to="/detail" className="playDetail__detailBtn">Details</Link>
              <Link exact to="/email" className="playDetail__detailBtn">Message</Link>
            </div>
          </div>
        </td>
        <td className="playDetail__secondaryText">99,9999</td>
        <td className="playDetail__secondaryText">999</td>
        <td className="playDetail__secondaryText">65</td>
        <td className="playDetail__secondaryText">MM/DD/YY</td>
        <td className="playDetail__secondaryText">YES</td>
        <td className="playDetail__secondaryText">dave@socialmusicsociety</td>
        <td className="playDetail__secondaryText">
          <a href="#">www.socialmusicsociety.com </a>
        </td>
        <td className="playDetail__secondaryText">@socialmusic</td>
      </tr>
    
  );
};

export default TableRow;
