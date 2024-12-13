import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
const OngoingMatches = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const ongoingMatches = [
    {
      id: 1,
      team1: { name: "RCB", logo: "https://via.placeholder.com/32" },
      team2: { name: "FCB", logo: "https://via.placeholder.com/32" },
      status: "INTERRUPTED",
      timeLeft: "30 min",
      endTime: "6:30 PM",
    },
    {
      id: 2,
      team1: { name: "MI", logo: "https://via.placeholder.com/32" },
      team2: { name: "CSK", logo: "https://via.placeholder.com/32" },
      status: "ONGOING",
      timeLeft: "10 min",
      endTime: "7:00 PM",
    },
    {
      id: 3,
      team1: { name: "PSG", logo: "https://via.placeholder.com/32" },
      team2: { name: "RM", logo: "https://via.placeholder.com/32" },
      status: "INTERRUPTED",
      timeLeft: "45 min",
      endTime: "8:00 PM",
    },
    {
      id: 1,
      team1: { name: "RCB", logo: "https://via.placeholder.com/32" },
      team2: { name: "FCB", logo: "https://via.placeholder.com/32" },
      status: "INTERRUPTED",
      timeLeft: "30 min",
      endTime: "6:30 PM",
    },  {
      id: 1,
      team1: { name: "RCB", logo: "https://via.placeholder.com/32" },
      team2: { name: "FCB", logo: "https://via.placeholder.com/32" },
      status: "INTERRUPTED",
      timeLeft: "30 min",
      endTime: "6:30 PM",
    },  {
      id: 1,
      team1: { name: "RCB", logo: "https://via.placeholder.com/32" },
      team2: { name: "FCB", logo: "https://via.placeholder.com/32" },
      status: "INTERRUPTED",
      timeLeft: "30 min",
      endTime: "6:30 PM",
    },  {
      id: 1,
      team1: { name: "RCB", logo: "https://via.placeholder.com/32" },
      team2: { name: "FCB", logo: "https://via.placeholder.com/32" },
      status: "INTERRUPTED",
      timeLeft: "30 min",
      endTime: "6:30 PM",
    },
  ];

  const uniqueFilters = ["All", "INTERRUPTED", "ONGOING"];

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const filteredMatches =
    selectedFilter === "All"
      ? ongoingMatches
      : ongoingMatches.filter((match) => match.status === selectedFilter);

  return (
    <div className="ongoing-matches">
      <div className="container">
        <h1 className="title">ONGOING MATCHES</h1>

        {/* Dropdown Filter */}
        <div className="filter">
          <select
            className="filter-select"
            value={selectedFilter}
            onChange={handleFilterChange}
          >
            {uniqueFilters.map((filter) => (
              <option key={filter} value={filter}>
                {filter}
              </option>
            ))}
          </select>
        </div>

        {/* Match Table */}
        <div className="table-wrapper">
          <table className="match-table">
            <thead>
              <tr>
                <th>SN</th>
                <th>Match</th>
                <th>Status</th>
                <th>End Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMatches.map((match, index) => (
                <tr key={match.id}>
                  <td>{index + 1}</td>
                  <td className="match-details">
                    <img
                      src={match.team1.logo}
                      alt={`${match.team1.name} Logo`}
                      className="team-logo"
                    />
                    <span>{match.team1.name}</span>
                    <span className="score">2</span>
                    <span className="time-left">Time Left: {match.timeLeft}</span>
                    <span className="score">0</span>
                    <img
                      src={match.team2.logo}
                      alt={`${match.team2.name} Logo`}
                      className="team-logo"
                    />
                    <span>{match.team2.name}</span>
                  </td>
                  <td>
                    <div className={`status ${match.status.toLowerCase()}`}>
                      <span className={`status-circle ${match.status.toLowerCase()}`}></span>
                      <span>{match.status}</span>
                    </div>
                  </td>
                  <td>{match.endTime}</td>
                  <td>
                    <button className="action-btn">
                    <IoEyeOutline size={20}/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OngoingMatches;
