/*
 The Navigation component represents the navigation menu of the SPA. It allows users to select 
 different sections of the page to navigate to. It renders a list of navigation items 
 that are defined in the `navItems` array. When a user clicks on a navigation item, 
 it updates the `selectedNavItem` state to highlight the selected item in the menu.
 */

import React, { useState } from "react";
import "./Navigation.css";

const Navigation = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("welcome");
  {}
  const navItems = [
    { id: 1, title: "RACE HIGHLIGHTS", name: "VideoHighlights" },
    { id: 2, title: "LEADERBOARD", name: "LeaderboardTable" },
    { id: 3, title: "UPCOMING EVENTS", name: "UpcomingEvents" },
    { id: 4, title: "CLUB DIRECTORY", name: "ClubsDirectory" },
    { id: 5, title: "NEWS", name: "News" },
    { id: 6, title: "CONTACT US", name: "ContactForm" },
  ];


  return (
    <div className="Navigation">
      <ul className="NavigationMenus">
        {navItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setSelectedNavItem(item.name)}
              className={selectedNavItem === item.name ? `activeNavItem` : ""}
            >
              <a href={`#${item.name}`}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
