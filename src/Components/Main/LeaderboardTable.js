import React from "react";
import "./LeaderboardTable.css";
import LeaderboardTableRow from "./LeaderboardTableRow";

function LeaderboardTable() {
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
          <LeaderboardTableRow rank={1} name="Garry Dawn" points={468} team="ACT" />
          <LeaderboardTableRow rank={2} name="Macy Henderson" points={440} team="ACT" />
          <LeaderboardTableRow rank={3} name="Tammy Boots" points={420} team="ACT" />
          <LeaderboardTableRow rank={4} name="Lucas James" points={380} team="ACT" />
          <LeaderboardTableRow rank={5} name="Noob Smoke" points={350} team="ACT" />
          <LeaderboardTableRow rank={6} name="Yoshi Bowser" points={330} team="ACT" />
          <LeaderboardTableRow rank={7} name="James Green" points={300} team="ACT" />
          <LeaderboardTableRow rank={8} name="Porter Harris" points={280} team="ACT" />
          <LeaderboardTableRow rank={9} name="Terry Torpedo" points={240} team="ACT" />
          <LeaderboardTableRow rank={10} name="Lance Armstrong" points={220} team="ACT" />
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default LeaderboardTable;