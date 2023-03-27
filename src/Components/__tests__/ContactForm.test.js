import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from '../Main/ContactForm';

describe('ContactForm', () => {
  it('renders the headings correctly', () => {
    const { getByText } = render(<ContactForm />);
    expect(getByText('Contact')).toBeInTheDocument();
    expect(getByText('Got an inquiry? Or want to submit a photo from an event? Do it here!')).toBeInTheDocument();
  });

  it('displays error message when submitting form with empty fields', () => {
    const { getByPlaceholderText, getByText } = render(<ContactForm />);
    const nameInput = getByPlaceholderText('Name');
    const emailInput = getByPlaceholderText('Email');
    const messageInput = getByPlaceholderText('Message');
    const submitButton = getByText('SUBMIT');

    fireEvent.click(submitButton);

    expect(getByText('Please fill out all fields before submitting.')).toBeInTheDocument();
  });

  it('displays success message when submitting form with all fields filled', () => {
    const { getByPlaceholderText, getByText } = render(<ContactForm />);
    const nameInput = getByPlaceholderText('Name');
    const emailInput = getByPlaceholderText('Email');
    const messageInput = getByPlaceholderText('Message');
    const submitButton = getByText('SUBMIT');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'This is a test message.' } });
    fireEvent.click(submitButton);

    expect(getByText('Thank you for submitting!')).toBeInTheDocument();
  });
});