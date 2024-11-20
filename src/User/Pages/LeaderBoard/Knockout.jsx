import React from "react";
import KTableLayout from "./KTableLayout";

function Knockout() {
  // Sample data for knockout matches
  const data = [
    { sn: 1, team: "RCB Real Madrid", status: "IN", goal: 3 },
    { sn: 2, team: "Kathmandu FC", status: "OUT", goal: 1 },
    { sn: 3, team: "Butwal Tigers", status: "IN", goal: 2 },
    { sn: 4, team: "Lalitpur FC", status: "OUT", goal: 0 },
  ];

  return (
    <div className="knockout">
      <div className="table">
        <div className="heading">
          <p>SN</p>
          <p>Teams</p>
          <p>Status</p>
          <p>Goals</p>
          <p>Actions</p>
        </div>
        <hr />
        
        {/* Mapping through the data and rendering KTableLayout for each entry */}
        {data.map((item, index) => (
          <KTableLayout
            key={index}
            sn={item.sn}
            team={item.team}
            status={item.status}
            goal={item.goal}
          />
        ))}
      </div>
    </div>
  );
}

export default Knockout;
