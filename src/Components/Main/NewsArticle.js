import React from "react";
import PopUp from "./PopUp";

function NewsArticle(props) {
  return (
    <div className="card">
      <div className="image-section">
        <img src={props.image}></img>
      </div>
      <div className="article">
        <h4>{props.title}</h4>
        <p>{props.content}</p>
      </div>
      <div className="news-view">
        <PopUp buttonText="Read More" title={props.title} content={props.content} />
      </div>
      <div className="posted-date">
        <p>{props.date}</p>
      </div>
    </div>
  );
}

export default NewsArticle;