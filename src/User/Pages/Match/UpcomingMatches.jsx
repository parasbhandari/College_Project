import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TableStructure from "./TableStructure";
const UpcomingMatches = () => {

  // State to track the selected event
  const [selectedEvent, setSelectedEvent] = useState("All");

  // Handle event selection
  const handleEventChange = (event) => {
    setSelectedEvent(event.target.value);
  };

  const Upcoming_Matches = [
    {
      match: { 
        team1: {
          name: "RCB",
          logo: "https://via.placeholder.com/32",
        },
        team2: {
          name: "FCB",
          logo: "https://via.placeholder.com/32",
        },
      },
      event: "Chitwan Football League",
      matchdate: "20 July, 2025",
      duration: "45 min",
    },
    {
      match: { 
        team1: {
          name: "MI",
          logo: "https://via.placeholder.com/32",
        },
        team2: {
          name: "CSK",
          logo: "https://via.placeholder.com/32",
        },
      },
      event: "Mumbai Cricket Classic",
      matchdate: "15 August, 2025",
      duration: "60 min",
    },
    {
      match: { 
        team1: {
          name: "PSG",
          logo: "https://via.placeholder.com/32",
        },
        team2: {
          name: "Real Madrid",
          logo: "https://via.placeholder.com/32",
        },
      },
      event: "Europe Soccer Cup",
      matchdate: "10 September, 2025",
      duration: "90 min",
    },
    {
      match: { 
        team1: {
          name: "Chelsea",
          logo: "https://via.placeholder.com/32",
        },
        team2: {
          name: "Arsenal",
          logo: "https://via.placeholder.com/32",
        },
      },
      event: "London Football Derby",
      matchdate: "25 July, 2025",
      duration: "75 min",
    },
    {
      match: { 
        team1: {
          name: "Lakers",
          logo: "https://via.placeholder.com/32",
        },
        team2: {
          name: "Warriors",
          logo: "https://via.placeholder.com/32",
        },
      },
      event: "NBA Championship",
      matchdate: "30 June, 2025",
      duration: "48 min",
    },
    {
      match: { 
        team1: {
          name: "Man Utd",
          logo: "https://via.placeholder.com/32",
        },
        team2: {
          name: "Liverpool",
          logo: "https://via.placeholder.com/32",
        },
      },
      event: "English Premier League",
      matchdate: "5 December, 2025",
      duration: "90 min",
    },
    {
      match: { 
        team1: {
          name: "India",
          logo: "https://via.placeholder.com/32",
        },
        team2: {
          name: "Pakistan",
          logo: "https://via.placeholder.com/32",
        },
      },
      event: "Asia Cricket Cup",
      matchdate: "14 October, 2025",
      duration: "50 overs",
    },
    {
      match: { 
        team1: {
          name: "Germany",
          logo: "https://via.placeholder.com/32",
        },
        team2: {
          name: "Argentina",
          logo: "https://via.placeholder.com/32",
        },
      },
      event: "World Soccer Championship",
      matchdate: "20 November, 2025",
      duration: "120 min",
    },
    {
      match: { 
        team1: {
          name: "Nets",
          logo: "https://via.placeholder.com/32",
        },
        team2: {
          name: "Bulls",
          logo: "https://via.placeholder.com/32",
        },
      },
      event: "Basketball World Series",
      matchdate: "18 January, 2025",
      duration: "48 min",
    },
    {
      match: { 
        team1: {
          name: "Bangladesh",
          logo: "https://via.placeholder.com/32",
        },
        team2: {
          name: "Sri Lanka",
          logo: "https://via.placeholder.com/32",
        },
      },
      event: "South Asia Cricket Cup",
      matchdate: "12 March, 2025",
      duration: "50 overs",
    },
  ];

  const uniqueEvents = ["All", ...new Set(Upcoming_Matches.map(match => match.event))];

  // Filter matches based on selected event
  const filteredMatches = selectedEvent === "All" 
    ? Upcoming_Matches 
    : Upcoming_Matches.filter(match => match.event === selectedEvent);

  return (
    <div className="container">
      {/* Header */}
      <h1 className="heading">Upcoming Matches</h1>
    

      {/* Dropdown Filter */}
      <div className="filter">
        <select 
          className="dropdown" 
          value={selectedEvent} 
          onChange={handleEventChange} // Update selected event
        >
          {uniqueEvents.map((event) => (
            <option key={event} value={event}>{event}</option>
          ))}
        </select>
      </div>

      {/* Match Table */}
      <div className="table-container">
        <table className="match-table">
          <thead>
            <tr>
              <th>SN</th>
              <th>Match</th>
              <th>Event</th>
              <th>Match Date</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredMatches.map((m, index) => (
              <TableStructure 
                key={index}
                SN={index + 1} 
                Match={m.match} 
                Event={m.event} 
                MatchDate={m.matchdate} 
                Duration={m.duration} 
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpcomingMatches;
