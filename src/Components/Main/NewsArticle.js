/*
*This code exports a functional component called NewsArticle. 
  This component is used to render a single news article on a page.
*The component takes in props which include an image, title, content, and date.
  It then renders a card with an image, title, content, and date.
*Additionally, the component imports the PopUp component which displays a popup 
  with the full article when the user clicks the "Read More" button.
*/

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