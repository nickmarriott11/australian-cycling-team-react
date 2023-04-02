/*
*This component displays news articles from the Australian Cycling Team.
*The component renders NewsArticle subcomponent three times, each displaying an image, title, content, and date. 
*The NewsArticle component is passed in data as props, including the images which are imported from local image files. 
*/

import React from "react";
import "./News.css"
import NewsArticle from "./NewsArticle";
import newspic1 from "../../images/news1.jpg";
import newspic2 from "../../images/news2.jpg";
import newspic3 from "../../images/news3.jpg";


function News() {
  return (
    <React.Fragment>
      <div className="headings" id="News">
        <h2>News</h2>
        <h3>The latest news from the Australian Cycling Team</h3>
      </div>
      <div className="news-section">
        <div className="section-content news">
          <div className="cards">
            <NewsArticle
              image={newspic1}
              title="Garry Dawn takes the Lead!"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              date="Posted on 1-3-23"
            />
            <NewsArticle
              image={newspic2}
              title="James Green making his way up the ladder"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              date="Posted on 20-2-23"
            />
            <NewsArticle
              image={newspic3}
              title="Lucas knocks Yoshi out of position"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              date="Posted on 1-2-23"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default News;
