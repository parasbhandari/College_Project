import Nav from "./User/Components/Nav"
import React from 'react'
import Home from "./User/Pages/Home/Home";
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Events from "./User/Pages/_Event/Events";
import EventDetails from "./User/Pages/_Event/EventDetails/EventDetails";
import LeaderBoard from "./User/Pages/LeaderBoard/LeaderBoard";
import Match from "./User/Pages/Match/Match";
import Sponsors from "./User/Pages/Sponsors/Sponsors";
import Team from "./User/Pages/Team/Team";
import OngoingMatches from "./User/Pages/Match/OngoingMatches";
import UpcomingMatches from "./User/Pages/Match/UpcomingMatches";
function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Leaderboard" element={<LeaderBoard/>}/>
        <Route path="/Events" element={<Events/>}/>
        <Route path="/Events/EventDetails" element={<EventDetails/>} />
        <Route path="/Match" element={<Match/>}/>
        <Route path="/Match/UpcomingMatches" element={<UpcomingMatches/>}/>
        <Route path="/Match/OngoingMatches" element={<OngoingMatches/>}/>
        <Route path="/Sponsors" element={<Sponsors/>}/>
        <Route path="/Team" element={<Team/>}/>
      </Routes>
    </div>
  )
}

export default App