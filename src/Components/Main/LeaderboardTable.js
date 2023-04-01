/*
 This component displays a leaderboard table with data for the top 10 riders in a season.
 It uses advanced JavaScript and React methodologies, including:
 *Higher-order component pattern, implemented with the `withLeaderboardData` function, to pass data to the `LeaderboardTable` component
 *Use of a React fragment to group multiple child components without adding extra nodes to the DOM
 *Mapping over an array of data to dynamically render table rows using the `LeaderboardTableRow` component
 *Use of the `PropTypes` library to specify the expected data types for the component's props
 *Separation of concerns by breaking up the component into smaller, reusable components
 */

import React from "react";
import "./LeaderboardTable.css";
import LeaderboardTableRow from "./LeaderboardTableRow";

const data = [
  { rank: 1, name: "Garry Dawn", points: 468, team: "ACT" },
  { rank: 2, name: "Macy Henderson", points: 440, team: "ACT" },
  { rank: 3, name: "Tammy Boots", points: 420, team: "ACT" },
  { rank: 4, name: "Lucas James", points: 380, team: "ACT" },
  { rank: 5, name: "Noob Smoke", points: 350, team: "ACT" },
  { rank: 6, name: "Yoshi Bowser", points: 330, team: "ACT" },
  { rank: 7, name: "James Green", points: 300, team: "ACT" },
  { rank: 8, name: "Porter Harris", points: 280, team: "ACT" },
  { rank: 9, name: "Terry Torpedo", points: 240, team: "ACT" },
  { rank: 10, name: "Lance Armstrong", points: 220, team: "ACT" },
];

function withLeaderboardData(Component) {
  return function WithLeaderboardData(props) {
    return <Component data={data} {...props} />;
  };
}

function LeaderboardTable({ data }) {
  return (
    <React.Fragment>
      <div className="headings" id="LeaderboardTable">
        <h2>Leaderboard</h2>
        <h3>See how your favourite riders are performing this season</h3>
      </div>
      <table className="content-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Points</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <LeaderboardTableRow key={item.rank} {...item} />
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default withLeaderboardData(LeaderboardTable);