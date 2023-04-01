/*
This React component is a popup window that can be toggled on and off by clicking a button
or a link. It uses the useState hook to control the visibility of the popup, which is an advanced
React methodology. The purpose of the component is to provide a way to display additional information
or actions without cluttering the main page. It receives props such as buttonText, title, and content
to customize the popup's appearance and content. This component also uses event handling to toggle the
visibility of the popup when the button or link is clicked.
*/
import React, { useState } from "react";
import "./PopUp.css";

function PopUp(props) {
  const [showPopup, setShowPopup] = useState(false);

  function togglePopup(event) {
    event.preventDefault();
    setShowPopup(!showPopup);
  }

  return (
    <div>
      <a href="#" onClick={togglePopup} className="footer-link">
        {props.buttonText}
      </a>
      {showPopup && (
        <div className="overlay">
          <div className="popup" style={{ zIndex: "9999" }}>
            <div className="popup_inner">
              <button className="close_btn" onClick={togglePopup}>
                X
              </button>
              <h1>{props.title}</h1>
              <p>{props.content}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopUp;