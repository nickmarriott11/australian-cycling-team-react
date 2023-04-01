/*
The Header component displays the logo for the australian cycling team.
*/
import React from "react";
import logo from "../../images/logo-icon-cycling-team-invert.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header" i>
      <img src={logo}/>
    </div>
  );
};

export default Header;
