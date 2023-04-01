import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navigation from '../Navigation/Navigation';

describe('Navigation', () => {
  // Test that the navigation links are rendered correctly
  it('renders navigation links correctly', () => {
    const { getByText } = render(<Navigation />);
    expect(getByText('RACE HIGHLIGHTS')).toBeInTheDocument();
    expect(getByText('LEADERBOARD')).toBeInTheDocument();
    expect(getByText('UPCOMING EVENTS')).toBeInTheDocument();
    expect(getByText('CLUB DIRECTORY')).toBeInTheDocument();
    expect(getByText('NEWS')).toBeInTheDocument();
    expect(getByText('CONTACT US')).toBeInTheDocument();
  });

  // Test that clicking a navigation link changes the active menu item
  it('should change the active menu item on click', () => {
    const { getByText } = render(<Navigation />);
    const upcomingEventsLink = getByText('UPCOMING EVENTS');
    fireEvent.click(upcomingEventsLink);
    expect(upcomingEventsLink.closest('li')).toHaveClass('activeNavItem');
  });
});
