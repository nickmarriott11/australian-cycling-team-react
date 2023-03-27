import React from "react";
import { useState } from "react";
import "./VideoHighlights.css";
import thumb1 from "../../images/thumb1.jpg";
import thumb2 from "../../images/thumb2.jpg";
import thumb3 from "../../images/thumb3.jpg";
import VideoSelection from "./VideoSelection";

function VideoHighlights() {
  const [activeItemId, setActiveItemId] = useState("12YY1EV4rzY?rel=0");

  const handleItemClick = (youtube_id) => {
    setActiveItemId(youtube_id);
  };

  return (
    <React.Fragment>
      <div className="headings" id="VideoHighlights">
        <h2>Race Highlights</h2>
        <h3>Check out the highlights from our latest events</h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="youtube_video">
            <iframe
              width="100%"
              height="100%"
              id="video_id"
              src={`https://www.youtube.com/embed/${activeItemId}`}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="gallery">
          <VideoSelection
            thumbnail={thumb1}
            youtube_id="12YY1EV4rzY?rel=0"
            active={activeItemId === "12YY1EV4rzY?rel=0"}
            onItemClick={handleItemClick}
          />
          <VideoSelection
            thumbnail={thumb2}
            youtube_id="46QQIp9RNzw?rel=0"
            active={activeItemId === "46QQIp9RNzw?rel=0"}
            onItemClick={handleItemClick}
          />
          <VideoSelection
            thumbnail={thumb3}
            youtube_id="Xs-2ksG55sY?rel=0"
            active={activeItemId === "Xs-2ksG55sY?rel=0"}
            onItemClick={handleItemClick}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default VideoHighlights;
