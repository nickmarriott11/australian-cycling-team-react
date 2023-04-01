/*
This component displays a contact form where users can submit their name, email, 
a message, and a file/photo. It uses advanced JavaScript techniques such as destructuring,
destructured assignment, and the nullish coalescing operator to simplify code. 
It also leverages React hooks, including useState, useEffect, and useRef, to manage 
component state, update the component in response to changes in state or props, and
reference elements within the DOM. In addition, this component uses conditional rendering 
to display success and error messages to the user upon form submission.
*/
import React, { useState, useEffect, useRef } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    let timer;

    if (showSuccessMessage || showErrorMessage) {
      timer = setTimeout(() => {
        setShowSuccessMessage(false);
        setShowErrorMessage(false);
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [showSuccessMessage, showErrorMessage]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // Check if any fields are empty
    let formIsEmpty = false;
    formData.forEach((value) => {
      if (!value) {
        formIsEmpty = true;
      }
    });

    if (formIsEmpty) {
      setShowErrorMessage(true);
      setShowSuccessMessage(false);
    } else {
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
      formRef.current.reset();
      // TODO: handle form submission logic here
    }
  };

  return (
    <>
      <div className="headings" id="ContactForm">
        <h2>Contact</h2>
        <h3>
          Got an inquiry? Or want to submit a photo from an event? Do it here!
        </h3>
      </div>
      <form className="formcontainer" onSubmit={handleSubmit} ref={formRef}>
        <input
          name="name"
          type="text"
          className="feedback-input"
          placeholder="Name"
        />
        <input
          name="email"
          type="text"
          className="feedback-input"
          placeholder="Email"
        />
        <textarea
          name="text"
          className="feedback-input"
          placeholder="Message"
        />
        <input name="file-upload" type="file" className="feedback-input" />

        <button type="submit">SUBMIT</button>
      </form>
      {showSuccessMessage && !showErrorMessage && (
        <div className="success-message">
          <p>Thank you for submitting!</p>
        </div>
      )}
      {showErrorMessage && !showSuccessMessage && (
        <div className="error-message">
          <p>Please fill out all fields before submitting.</p>
        </div>
      )}
    </>
  );
};

export default ContactForm;