/*
This component displays a banner image of the ACT logo.  
The purpose of this component is to provide a visually appealing introduction to the
SPA.
*/

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
