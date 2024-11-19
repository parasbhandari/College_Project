import React from "react";
import { IoEyeOutline } from "react-icons/io5";

function EventMatches({ sn, match, event, matchdate, duration }) {
  return (
    <div>
      <div className="match-list">
        <p>{sn}</p>
        <p className="match">
          <div>
            <img src={match.team1Logo} alt="Team 1 Logo" />
            <p>{match.team1}</p>
          </div>
          <p>VS</p>
          <div>
            <img src={match.team2Logo} alt="Team 2 Logo" />
            <p>{match.team2}</p>
          </div>
        </p>
        <p>{event}</p>
        <p>{matchdate}</p>
        <p>{duration}</p>
        <p>
          <IoEyeOutline size={40} />
        </p>
      </div>
      <hr />
    </div>
  );
}

export default EventMatches;
