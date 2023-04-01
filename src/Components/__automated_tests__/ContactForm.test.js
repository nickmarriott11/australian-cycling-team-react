import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from '../Main/ContactForm';

describe('ContactForm', () => {

  // Test to ensure that the headings are rendered correctly
  it('renders the headings correctly', () => {
    const { getByText } = render(<ContactForm />);
    expect(getByText('Contact')).toBeInTheDocument();
    expect(getByText('Got an inquiry? Or want to submit a photo from an event? Do it here!')).toBeInTheDocument();
  });

  // Test to ensure that an error message is displayed when submitting the form with empty fields
  it('displays error message when submitting form with empty fields', () => {
    const { getByPlaceholderText, getByText } = render(<ContactForm />);
    const nameInput = getByPlaceholderText('Name');
    const emailInput = getByPlaceholderText('Email');
    const messageInput = getByPlaceholderText('Message');
    const submitButton = getByText('SUBMIT');

    // Click the submit button without filling in any fields
    fireEvent.click(submitButton);

    // Expect an error message to be displayed
    expect(getByText('Please fill out all fields before submitting.')).toBeInTheDocument();
  });

  // Test to ensure that a success message is displayed when submitting the form with all fields filled
  it('displays success message when submitting form with all fields filled', () => {
    const { getByPlaceholderText, getByText } = render(<ContactForm />);
    const nameInput = getByPlaceholderText('Name');
    const emailInput = getByPlaceholderText('Email');
    const messageInput = getByPlaceholderText('Message');
    const submitButton = getByText('SUBMIT');

    // Fill in all form fields and click the submit button
    fireEvent.change(nameInput, { target: { value: 'Greg James' } });
    fireEvent.change(emailInput, { target: { value: 'gregjames@hotmail.com' } });
    fireEvent.change(messageInput, { target: { value: 'This is a test message.' } });
    fireEvent.click(submitButton);

    // Expect a success message to be displayed
    expect(getByText('Thank you for submitting!')).toBeInTheDocument();
  });
});
