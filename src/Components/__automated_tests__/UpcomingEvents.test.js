import React from 'react';
import { render } from '@testing-library/react';
import UpcomingEvents from '../Main/UpcomingEvents';

describe('UpcomingEvents', () => {
  test('renders event titles, dates, and locations', () => {
    const { getByText } = render(<UpcomingEvents />);
    
    expect(getByText('National Road Racing Championships')).toBeInTheDocument();
    expect(getByText('February 5, 2023')).toBeInTheDocument();
    expect(getByText('Geelong, VIC')).toBeInTheDocument();

    expect(getByText('National Gravel Racing Champtionships')).toBeInTheDocument();
    expect(getByText('April 7, 2023')).toBeInTheDocument();
    expect(getByText('Mudgee, NSW')).toBeInTheDocument();

    expect(getByText('QLD State Cyclocross Championships')).toBeInTheDocument();
    expect(getByText('June 20, 2023')).toBeInTheDocument();
    expect(getByText('Burleigh Heads, QLD')).toBeInTheDocument();
  });
});