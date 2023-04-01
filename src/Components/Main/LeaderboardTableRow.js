/*
This component renders a single row in the leaderboard table using advanced JavaScript
and React methodologies. It uses destructuring to extract the props, which are defined
using PropTypes for type checking. The PropTypes library ensures that the props being 
passed to the component are of the expected types, improving the reliability and 
maintainability of the codebase. The component is reusable and can be used to render 
multiple rows of the leaderboard table.
Props:
*rank (number): The ranking of the rider
*name (string): The name of the rider
*points (number): The number of points the rider has earned this season
*team (string): The team the rider belongs to
*/

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