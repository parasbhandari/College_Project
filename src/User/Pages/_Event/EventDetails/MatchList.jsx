import React, { useState, useEffect } from "react";
import EventMatches from "./EventMatches";
import EmptyData from "../../../Components/EmptyData";

function MatchList() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch("https://api.example.com/matches"); // Replace with your API
        if (!response.ok) {
          throw new Error("Failed to fetch matches");
        }
        const data = await response.json();
        setMatches(data); // Assuming the API returns an array of match objects
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="structure">
        <p>SN</p>
        <p>Match</p>
        <p>Event</p>
        <p>Match Date</p>
        <p>Duration</p>
        <p>Actions</p>
      </div>
      <hr />
      {matches.length === 0 ? (
        <EmptyData message="No Game Tie Sheet Yet" />
      ) : (
        matches.map((match, index) => (
          <EventMatches
            key={match.id} // Ensure each match has a unique ID
            sn={index + 1}
            match={match.match}
            event={match.event}
            matchdate={match.matchDate}
            duration={match.duration}
          />
        ))
      )}
    </>
  );
}

export default MatchList;
