import React from "react";

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
          <a href="#" class="button">
            Read More
          </a>
        </div>
        <div className="posted-date">
          <p>{props.date}</p>
        </div>
      </div>
    );
  }

  export default NewsArticle;
  