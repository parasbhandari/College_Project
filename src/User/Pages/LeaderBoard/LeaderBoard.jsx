import React, { useState } from "react";
import Button from "../../Components/Button";
import League from "./League";
import Knockout from "./Knockout";

function LeaderBoard() {
  const [mode, setMode] = useState("league"); // Default mode is 'league'
  const [selectedLeague, setSelectedLeague] = useState(""); // State for selected league

  const handleLeagueChange = (event) => {
    setSelectedLeague(event.target.value);
  };

  return (
    <div className="leaderboard">
      <h2>LeaderBoard</h2>

      {/* Mode Selection */}
      <div className="mode">
        <div
          className={`league ${mode === "league" ? "active" : ""}`}
          onClick={() => setMode("league")}
        >
          <Button name="Leagues" />
        </div>
        <div
          className={`knockout ${mode === "knockout" ? "active" : ""}`}
          onClick={() => setMode("knockout")}
        >
          <Button name="Knockouts" />
        </div>
      </div>

      {/* League Selection */}
      <div className="select_league">
        <select
          name="league"
          id="options"
          value={selectedLeague}
          onChange={handleLeagueChange}
          style={{ padding: "5px", fontSize: "16px" }}
        >
          <option value="" disabled>
            Select League
          </option>
          <option value="chitwan">Chitwan Premier League</option>
          <option value="kathmandu">Kathmandu Premier League</option>
          <option value="butwal">Butwal Premier League</option>
        </select>
      </div>

      {/* Render Components Dynamically */}
      {mode === "league" && selectedLeague && <League />}
      {mode === "knockout" && selectedLeague && <Knockout />}
    </div>
  );
}

export default LeaderBoard;
