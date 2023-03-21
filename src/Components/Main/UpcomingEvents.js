import React from 'react';
import './UpcomingEvents.css';


function UpcomingEvents() {
	return (
		<><div class="headings" id = "UpcomingEvents">
			<h2>Upcoming Events</h2>
			<h3>The latest events in the Australian Cycling Team calendar </h3>
		</div><div class="event-calendar">
				<div class="icon-box">
					<i class="fas fa-calendar-alt"></i>
				</div>
				<div class="events-body">
					<ul>
						<li>
							<a href="">
								<div class="event-left-content">
									<div class="title-event">
										<h2> National Road Racing Championships</h2>
										<div class="event-date"> February 5, 2023</div>
										<div class="event-location">Geelong, VIC</div>
									</div>
								</div>
								<div class="event-icon">
									<div class="month">feb </div>
									<div class="date">05 </div>
								</div>
							</a>
						</li>
						<li>
							<a href="">
								<div class="event-left-content">
									<div class="title-event">
										<h2>National Gravel Racing Champtionships</h2>
										<div class="event-date"> April 7, 2023</div>
										<div class="event-location"> Mudgee, NSW</div>
									</div>
								</div>
								<div class="event-icon">
									<div class="month">apr </div>
									<div class="date">07 </div>
								</div>
							</a>
						</li>
						<li>
							<a href="">
								<div class="event-left-content">
									<div class="title-event">
										<h2>QLD State Cyclocross Championships</h2>
										<div class="event-date"> June 20, 2023</div>
										<div class="event-location"> Burleigh Heads, QLD</div>
									</div>
								</div>
								<div class="event-icon">
									<div class="month">Jun </div>
									<div class="date">20 </div>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div></>
	);
}

export default UpcomingEvents;
