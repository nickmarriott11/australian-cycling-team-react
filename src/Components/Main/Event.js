import React from "react";

function Event(props) {
  // extract month and day from the date prop
  const [month, day] = props.date.split(" ").slice(0, 2);

  return (
    <li>
      <a href="">
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
