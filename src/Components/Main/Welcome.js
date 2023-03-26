import React from "react";
import bannerimg from "../../images/header.jpg";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="bannerimg">
      <img src={bannerimg} alt="Cycling into sunset" />
    </div>
  );
}

export default Welcome;
