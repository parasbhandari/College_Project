import React from "react";
import { IoEyeOutline } from "react-icons/io5";
function TableStructure({SN,Match,Event,MatchDate,Duration}) {
  return (
      <tr>
        <td>{SN}</td>
        <td className="match-column">
          <img
            src={Match.team1.logo}
            alt="Team 1"
            className="team-logo"
          />
          {Match.team1.name}
          <span className="vs">vs</span>
          <img
            src={Match.team2.logo}
            alt="Team 2"
            className="team-logo"
          />
          {Match.team2.name}
        </td>
        <td>{Event}</td>
        <td>{MatchDate}</td>
        <td>{Duration}</td>
        <td>
          <button className="action-button">
          <IoEyeOutline size={20}/>
          </button>
        </td>
      </tr>
  );
}

export default TableStructure;

