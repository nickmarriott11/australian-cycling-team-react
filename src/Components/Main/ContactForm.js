import React from 'react';
import './ContactForm.css';

function ContactForm() {
	return ( 
		<><div class="headings" id = "ContactForm">
			<h2>Contact</h2>
			<h3>Got an inquiry? Or want to submit a photo from an event? Do it here!</h3>
		</div><form class="formcontainer">
				<input name="name" type="text" class="feedback-input" placeholder="Name" />
				<input name="email" type="text" class="feedback-input" placeholder="Email" />
				<textarea name="text" class="feedback-input" placeholder="Message"></textarea>
				<input name="file-upload" type="file" class="feedback-input" />
				<input type="submit" value="SUBMIT" />
			</form></>
	 );
}

export default ContactForm;