import React from "react";
import { IoEyeOutline } from "react-icons/io5";

function KTableLayout({ sn, team, status, goal }) {
  // Determine the background color based on the status value
  const statusClass = status === "IN" ? "status-in" : status === "OUT" ? "status-out" : "rank-default";

  return (
    <div>
      <div className={`table_body ${statusClass}`}>
        <p>{sn}</p>
        <p>{team}</p>
        <p>{status}</p>
        <p>{goal}</p>

        <p>
          <IoEyeOutline size={40} />
        </p>
      </div>
      <hr />
    </div>
  );
}

export default KTableLayout;
