import React from 'react';
import { IoEyeOutline } from "react-icons/io5";

function TableLayout({ sn, team, rank, status }) {
  // Determine the background color class based on rank
  const getRankClass = () => {
    if (rank === 1) return 'rank-one';
    if (rank === 2) return 'rank-two';
    if (rank === 3) return 'rank-three';
    return 'rank-default';
  };

  return (
    <>
      <div className={`table-body ${getRankClass()}`}>
        <p>{sn}</p>
        <p>{team}</p>
        <p>{rank}</p>
        <p>{status}</p>
        <p>
          <IoEyeOutline size={40} />
        </p>
      </div>
      <hr />
    </>
  );
}

export default TableLayout;
