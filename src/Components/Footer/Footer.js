import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "../Main/PopUp";

import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../images/logo-icon-cycling-team-invert.png";

function Footer() {
  return (
    <footer class="footer">
      <div class="inner_footer">
        <div class="logo_container">
          <img src={logo} alt="auscycling logo" />
        </div>
        <div class="footer_third">
          <h1>About</h1>
          <Popup
            buttonText="Privacy Statement"
            title="Privacy Statement"
            content="Insert privacy statement content here"
          />
          <Popup
            buttonText="Terms and Conditions"
            title="Terms and Conditions"
            content="Insert terms and conditions content here"
          />
          <a href="mailto:104579054@student.swin.edu.au">Email Us</a>
        </div>
        <div class="footer_third">
          <h1>Follow Us</h1>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </a>
          </li>
        </div>
        <div class="footer_third">
          <i>&copy; 2023 Australian Cycling Team. All rights reserved.</i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
