import React from 'react';
import Button from '../../Components/Button';
import {Link} from 'react-router-dom'

function OnEvent({ event }) {
  return (
    <div className="OnEvent">
      <div className="Event_Logo">
        <img src={event.logo} alt="_Event_Logo" />
      </div>
      <div className="Event_Detail">
        
        <h2>{event.name}</h2>
        <div className="Event_Description">
          <p>{event.date}</p>
          <div className="Event_btn">
            <Link to="/Events/EventDetails">
            <Button name="Event Detail" />
            </Link>
          


          </div>
          <div className="Event_btn score">
            <Button name="Scores" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnEvent;
