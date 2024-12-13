import React from 'react';
import Button from '../../Components/Button';
import { useNavigate } from 'react-router-dom';

function Match() {
  const navigate = useNavigate(); 

  const handleClick = (match) => {
    if (match === 'upcoming') navigate('/Match/UpcomingMatches');
    if (match === 'ongoing') navigate('/Match/OngoingMatches');
  };

  return (
    <div className='_match'>
      <div onClick={() => handleClick('upcoming')}>
        <Button name="Upcoming Matches" />
      </div>

      <div onClick={() => handleClick('ongoing')}>
        <Button name="Ongoing Matches" />
      </div>
    </div>
  );
}

export default Match;
