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