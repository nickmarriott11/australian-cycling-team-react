import React from "react";
import youtubeIcon from "../../images/youtube.svg";

function VideoSelection({ thumbnail, youtube_id, active, onItemClick }) {
  return (
    <div
      className={`item ${active ? "active" : ""}`}
      onClick={() => onItemClick(youtube_id)}
    >
      <img src={thumbnail} data-id={youtube_id} />
      <div className={`youtube_icon ${active ? "active" : ""}`}>
        <img src={youtubeIcon} />
      </div>
    </div>
  );
}

export default VideoSelection;