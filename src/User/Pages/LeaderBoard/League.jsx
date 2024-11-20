import React from 'react'
import TableLayout from './TableLayout';
function League() {
  const data = [
    { sn: 1, team: 'RCB Real Madrid', rank: 1, status: 'IN' },
    { sn: 2, team: 'RCB Real Madrid', rank: 2, status: 'IN' },
    { sn: 3, team: 'RCB Real Madrid', rank: 3, status: 'IN' },
    { sn: 4, team: 'Real Madrid', rank: 4, status: 'IN' },
  ];
  return (
    <div className='league_layout'>
     <div className='table-header'>
      <p>SN</p>
      <p>Teams</p>
      <p>Rank</p>
      <p>Status</p>
      <p>Action</p>
     </div>
     <hr />
     {data.map((item, index) => (
          <TableLayout
            key={index}
            sn={item.sn}
            team={item.team}
            rank={item.rank}
            status={item.status}
          />
        ))}
    </div>
  )
}

export default League