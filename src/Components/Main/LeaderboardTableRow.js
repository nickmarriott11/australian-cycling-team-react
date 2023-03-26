import React from "react";
import PropTypes from "prop-types";

function LeaderboardTableRow(props) {
  const { rank, name, points, team } = props;

  return (
    <tr>
      <td>{rank}</td>
      <td>{name}</td>
      <td>{points}</td>
      <td>{team}</td>
    </tr>
  );
}

LeaderboardTableRow.propTypes = {
  rank: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  team: PropTypes.string.isRequired,
};

export default LeaderboardTableRow;