/*
This is a reusable React component called VideoSelection. It renders a thumbnail and a YouTube icon for a video, 
and allows the user to select the video by clicking on it. It receives the following props:
*thumbnail: the URL of the video thumbnail image
*youtube_id: the ID of the video on YouTube
*active: a boolean indicating whether the current video is selected
*onItemClick: a callback function to be called when the user clicks on the video
This component uses advanced JavaScript and React methodologies such as:
*Destructuring props in the function parameters
*Conditional rendering of class names using template literals
*Arrow function expressions for inline event handling
*Reusability through exporting the component for use in other parts of the application
*/

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