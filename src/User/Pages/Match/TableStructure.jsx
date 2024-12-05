import React from "react";
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25V9m-4.5 0h15M6.75 9v9.75c0 .621.504 1.125 1.125 1.125h8.25c.621 0 1.125-.504 1.125-1.125V9m-10.5 0h10.5"
              />
            </svg>
          </button>
        </td>
      </tr>
  );
}

export default TableStructure;

