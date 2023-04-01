import React from 'react';
import { render } from '@testing-library/react';
import ClubsDirectory from '../Main/ClubsDirectory';

describe('ClubsDirectory', () => {
  // Test to ensure that the headings are rendered correctly
  it('renders the headings correctly', () => {
    const { getByText } = render(<ClubsDirectory />);
    expect(getByText('Club Directory')).toBeInTheDocument();
    expect(getByText('Find your local ACT sanctioned cycling club')).toBeInTheDocument();
  });

  // Test to ensure that the map iframe is rendered correctly
  it('renders the map iframe correctly', () => {
    const { getByTitle } = render(<ClubsDirectory />);
    expect(getByTitle('Club Directory Map')).toBeInTheDocument();
  });
});