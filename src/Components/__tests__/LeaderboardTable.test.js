import React from 'react';
import { render } from '@testing-library/react';
import LeaderboardTable from '../Main/LeaderboardTable';
import LeaderboardTableRow from '../Main/LeaderboardTableRow';

test('renders leaderboard table with rows', () => {
  const { getByText } = render(<LeaderboardTable />);
  
  expect(getByText('Leaderboard')).toBeInTheDocument();
  expect(getByText('See how your favourite riders are performing this season')).toBeInTheDocument();
  
  expect(getByText('Rank')).toBeInTheDocument();
  expect(getByText('Name')).toBeInTheDocument();
  expect(getByText('Points')).toBeInTheDocument();
  expect(getByText('Team')).toBeInTheDocument();
  
  expect(getByText('Garry Dawn')).toBeInTheDocument();
  expect(getByText('Macy Henderson')).toBeInTheDocument();
  expect(getByText('Tammy Boots')).toBeInTheDocument();
  expect(getByText('Lucas James')).toBeInTheDocument();
  expect(getByText('Noob Smoke')).toBeInTheDocument();
  expect(getByText('Yoshi Bowser')).toBeInTheDocument();
  expect(getByText('James Green')).toBeInTheDocument();
  expect(getByText('Porter Harris')).toBeInTheDocument();
  expect(getByText('Terry Torpedo')).toBeInTheDocument();
  expect(getByText('Lance Armstrong')).toBeInTheDocument();
});

test('renders leaderboard table row with correct values', () => {
  const { getByText } = render(
    <table>
      <tbody>
        <LeaderboardTableRow rank={1} name="Garry Dawn" points={468} team="ACT" />
      </tbody>
    </table>
  );

  expect(getByText('1')).toBeInTheDocument();
  expect(getByText('Garry Dawn')).toBeInTheDocument();
  expect(getByText('468')).toBeInTheDocument();
  expect(getByText('ACT')).toBeInTheDocument();
});