import React from 'react';
import { render } from '@testing-library/react';
import ClubsDirectory from '../Main/ClubsDirectory';

describe('ClubsDirectory', () => {
  it('renders the headings correctly', () => {
    const { getByText } = render(<ClubsDirectory />);
    expect(getByText('Club Directory')).toBeInTheDocument();
    expect(getByText('Find your local ACT sanctioned cycling club')).toBeInTheDocument();
  });

  it('renders the map iframe correctly', () => {
    const { getByTitle } = render(<ClubsDirectory />);
    expect(getByTitle('Club Directory Map')).toBeInTheDocument();
  });
});