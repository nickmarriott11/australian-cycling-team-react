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
