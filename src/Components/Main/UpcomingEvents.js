import React from 'react';
import './UpcomingEvents.css';


function UpcomingEvents() {
	return (
		<><div className="headings" id = "UpcomingEvents">
			<h2>Upcoming Events</h2>
			<h3>The latest events in the Australian Cycling Team calendar </h3>
		</div><div className="event-calendar">
				<div className="icon-box">
					<i className="fas fa-calendar-alt"></i>
				</div>
				<div className="events-body">
					<ul>
						<li>
							<a href="">
								<div className="event-left-content">
									<div className="title-event">
										<h2> National Road Racing Championships</h2>
										<div className="event-date"> February 5, 2023</div>
										<div className="event-location">Geelong, VIC</div>
									</div>
								</div>
								<div className="event-icon">
									<div className="month">feb </div>
									<div className="date">05 </div>
								</div>
							</a>
						</li>
						<li>
							<a href="">
								<div className="event-left-content">
									<div className="title-event">
										<h2>National Gravel Racing Champtionships</h2>
										<div className="event-date"> April 7, 2023</div>
										<div className="event-location"> Mudgee, NSW</div>
									</div>
								</div>
								<div className="event-icon">
									<div className="month">apr </div>
									<div className="date">07 </div>
								</div>
							</a>
						</li>
						<li>
							<a href="">
								<div className="event-left-content">
									<div className="title-event">
										<h2>QLD State Cyclocross Championships</h2>
										<div className="event-date"> June 20, 2023</div>
										<div className="event-location"> Burleigh Heads, QLD</div>
									</div>
								</div>
								<div className="event-icon">
									<div className="month">Jun </div>
									<div className="date">20 </div>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div></>
	);
}

export default UpcomingEvents;
