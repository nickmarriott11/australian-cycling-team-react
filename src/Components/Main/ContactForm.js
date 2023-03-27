import React, { useState, useEffect } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

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
      <form className="formcontainer" onSubmit={handleSubmit}>
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
