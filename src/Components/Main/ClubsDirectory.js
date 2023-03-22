import React from 'react';
import './ClubsDirectory.css';

function ClubsDirectory() {
	return (
		<><div className="headings" id="ClubsDirectory">
			<h2>Club Directory</h2>
			<h3>Find your local ACT sanctioned cycling club</h3>
		</div>
			<div className="mapcontainer">
				<iframe src="https://www.google.com/maps/d/embed?mid=1xxsZjnaKfRNxoKlI608LmOQPQATTpDE&ehbc=2E312F"
					title={"Club Directory Map"} width={'100%'} height={'100%'} style={{ border: '0' }} loading={"lazy"}>
				</iframe>
			</div></>
	);
}


export default ClubsDirectory;