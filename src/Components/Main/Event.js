/*
*The Event component displays a single event with its details.
*It takes in props containing the event's title, date, and location.
*It also extracts the month and day from the date prop to display them in a stylised way.
*/
import React from "react";

function Event(props) {
  const [month, day] = props.date.split(" ").slice(0, 2);

  return (
    <li>
      <a>
        <div className="event-left-content">
          <div className="title-event">
            <h2>{props.title}</h2>
            <div className="event-date">{props.date}</div>
            <div className="event-location">{props.location}</div>
          </div>
        </div>
        <div className="event-icon">
          <div className="month">{month.substring(0, 3).toLowerCase()}</div>
          <div className="date">{day.replace(",", "")}</div>
        </div>
      </a>
    </li>
  );
}

export default Event;

