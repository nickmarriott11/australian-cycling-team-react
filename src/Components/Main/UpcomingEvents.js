/*
This component is responsible for displaying a list of upcoming cycling events on the 
website for the Australian Cycling Team. 
It uses the Event component to display individual events, and contains a heading and
icon-box for design purposes.
*/

import React from "react";
import "./UpcomingEvents.css";
import Event from "./Event";

function UpcomingEvents() {
  return (
    <React.Fragment>
      <div className="headings" id="UpcomingEvents">
        <h2>Upcoming Events</h2>
        <h3>The latest events in the Australian Cycling Team calendar </h3>
      </div>
      <div className="event-calendar">
        <div className="icon-box">
          <i className="fas fa-calendar-alt"></i>
        </div>
        <div className="events-body">
          <ul>
            <Event title="National Road Racing Championships" date="February 5, 2023" location="Geelong, VIC" />
            <Event title="National Gravel Racing Champtionships" date="April 7, 2023" location="Mudgee, NSW" />
            <Event title="QLD State Cyclocross Championships" date="June 20, 2023" location="Burleigh Heads, QLD" />
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UpcomingEvents;