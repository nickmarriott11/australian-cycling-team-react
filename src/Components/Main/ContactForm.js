import React from 'react';
import './ContactForm.css';

function ContactForm() {
	return ( 
		<><div className="headings" id = "ContactForm">
			<h2>Contact</h2>
			<h3>Got an inquiry? Or want to submit a photo from an event? Do it here!</h3>
		</div><form className="formcontainer">
				<input name="name" type="text" className="feedback-input" placeholder="Name" />
				<input name="email" type="text" className="feedback-input" placeholder="Email" />
				<textarea name="text" className="feedback-input" placeholder="Message"></textarea>
				<input name="file-upload" type="file" className="feedback-input" />
				<input type="submit" value="SUBMIT" />
			</form></>
	 );
}

export default ContactForm;