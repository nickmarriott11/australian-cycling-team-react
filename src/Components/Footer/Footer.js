/*
This is the Footer component, which is rendered at the bottom of the page and contains 
various links and information related to the website. It includes the auscycling logo, 
links to the Privacy Statement and Terms and Conditions, and an email address for contacting 
the team. The component uses the Popup component from the Main directory to display the 
Privacy Statement and Terms and Conditions in pop-up windows. The component also uses 
FontAwesomeIcon to display icons for social media links.
*/

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
            content={`
              At the Australian Cycling Team, we are committed to protecting the privacy 
              of our website users. This privacy statement explains how we collect, use, 
              and disclose your personal information in connection with your use of our website.
              We may collect personal information from you when you use our website, 
              including your name, email address, phone number, and other contact details. 
              We may also collect information about your use of our website, including your IP
              address, browser type, and the pages you visit. We may use your personal 
              information to respond to your inquiries, manage and administer our website, 
              improve our website and the services we offer, and comply with legal and 
              regulatory requirements. We may disclose your personal information to third 
              parties in certain circumstances, including to our service providers and advisors
              who assist us in providing our services and operating our website, to law enforcement
              authorities, government agencies, and other third parties as required by law, 
              and to our sponsors, partners, and other third parties with whom we have a business 
              relationship, subject to your consent. We will not sell, rent, or trade your personal
              information to any third party for marketing purposes without your consent. 
              We take reasonable steps to protect your personal information from unauthorized 
              access, use, and disclosure. However, we cannot guarantee the security of your 
              personal information transmitted to our website, and you use our website at your
              own risk. You may request access to or correction of your personal information 
              held by us by contacting us using the contact details provided on our website. 
              We may update this privacy statement from time to time by posting a new version on 
              our website. You should check this page regularly to ensure that you are aware of 
              any changes. If you have any questions or concerns about this privacy statement, 
              please contact us using the contact details provided on our website.
              `}
          />
          <Popup
            buttonText="Terms and Conditions"
            title="Terms and Conditions"
            content={`
              These terms and conditions govern your use of the Australian Cycling Team website. 
              By using our website, you accept these terms and conditions in full. 
              All intellectual property rights in the content, design, and functionality 
              of our website are owned by or licensed to the Australian Cycling Team. You may view, 
              download, and print pages from our website for your own personal use, subject to the 
              restrictions set out below and elsewhere in these terms and conditions. 
              You must not use any part of our website for commercial purposes without 
              our prior written consent. You must not republish, sell, rent, sub-license, 
              reproduce, duplicate, copy, edit, modify, or exploit material on our website 
              for a commercial purpose or use our website in any way that causes, or may cause, 
              damage to the website or impairment of the availability or accessibility of the 
              website, or in any way that is unlawful, illegal, fraudulent, or harmful. 
              Your content, such as comments or messages, may be submitted to our website, and 
              you grant us the right to use, reproduce, edit, modify, adapt, publish, translate, 
              create derivative works from, distribute, and display your content throughout the world 
              in any media. You agree to indemnify, defend, and hold the Australian Cycling Team and 
              its officers, employees, and agents harmless from and against any claims, liabilities, 
              damages, losses, and expenses, including without limitation, reasonable attorneys' fees, 
              arising out of or in any way connected with your use of our website or your violation
              of these terms and conditions. The information on our website is provided 'as is' 
              and we make no representations or warranties of any kind, express or implied, 
              about the completeness, accuracy, reliability, suitability, or availability with 
              respect to the website or the information, products, services, or related graphics
              contained on the website for any purpose. In no event will the Australian Cycling 
              Team be liable for any loss or damage, including without limitation, indirect or 
              consequential loss or damage, or any loss or damage whatsoever arising from loss 
              of data or profits arising out of, or in connection with, the use of our website. 
              We reserve the right to modify these terms and conditions at any time without prior notice.
              These terms and conditions will be governed by and construed in accordance with the laws 
              of Australia, and any disputes relating to these terms and conditions will be subject 
              to the exclusive jurisdiction of the courts of Australia.`}
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
