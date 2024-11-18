import React from "react";
import TeamInEvent from "../TeamInEvent";
import { useState } from "react";
import Button from "../../../Components/Button";
import EventDetailFooter from "./EventDetailFooter";
import Cup from "../../../../assets/Cup.png";
function Details() {
  const Teams = [
    {
      name: "Red Dragons FC",
      logo: "https://via.placeholder.com/150x150?text=Red+Dragons+FC",
      description:
        "A high-energy team known for their aggressive play and fierce competitiveness.",
    },
    {
      name: "Blue Sharks United",
      logo: "https://via.placeholder.com/150x150?text=Blue+Sharks+United",
      description:
        "Specializing in fast counter-attacks, Blue Sharks United dominate the field with precision.",
    },
    {
      name: "Golden Eagles",
      logo: "https://via.placeholder.com/150x150?text=Golden+Eagles",
      description:
        "A top-tier team with a history of winning, known for their strategic plays.",
    },
    {
      name: "Silver Strikers",
      logo: "https://via.placeholder.com/150x150?text=Silver+Strikers",
      description:
        "An up-and-coming team with young talent, famous for their powerful strikes.",
    },
    {
      name: "Black Panthers",
      logo: "https://via.placeholder.com/150x150?text=Black+Panthers",
      description:
        "A defensive powerhouse, Black Panthers are masters of shutting down their opponents.",
    },
    {
      name: "Green Warriors",
      logo: "https://via.placeholder.com/150x150?text=Green+Warriors",
      description:
        "Green Warriors are known for their resilience and ability to turn the game around.",
    },
    {
      name: "Purple Thunder",
      logo: "https://via.placeholder.com/150x150?text=Purple+Thunder",
      description:
        "A fan-favorite, Purple Thunder excels in both offense and defense, making them well-rounded.",
    },
    {
      name: "Orange Phoenix",
      logo: "https://via.placeholder.com/150x150?text=Orange+Phoenix",
      description:
        "The Orange Phoenix team rises in the second half of games, making stunning comebacks.",
    },
    {
      name: "White Wolves",
      logo: "https://via.placeholder.com/150x150?text=White+Wolves",
      description:
        "Known for their teamwork, White Wolves have a strong bond that reflects in their gameplay.",
    },
    {
      name: "Crimson Tigers",
      logo: "https://via.placeholder.com/150x150?text=Crimson+Tigers",
      description:
        "With a history of big wins, the Crimson Tigers are an elite team always in the championship hunt.",
    },
  ];
  const [visibleTeams, setVisibleTeams] = useState(8);

  const showMoreTeams = () => setVisibleTeams(Teams.length);
  const showLessTeams = () => setVisibleTeams(8);

  return (
    <div className="Detail">
      <p>Ongoing || Match Will Soon Start From Aug 15</p>
      <h2>Team Participated (10)</h2>
      <div className="Team_In_Event">
        {Teams.slice(0, visibleTeams).map((team, index) => (
          <TeamInEvent
            key={index}
            name={team.name}
            logo={team.logo}
            description={team.description}
          />
        ))}
      </div>
      <div className="button-container">
        {visibleTeams < Teams.length ? (
          <div onClick={showMoreTeams}>
            <Button name="Show More ..." />
          </div>
        ) : (
          <div onClick={showLessTeams}>
            <Button name="Show Less" />
          </div>
        )}
      </div>
      <div className="Prize_Section">
        <h2>Prizes</h2>
        <div className="Main_Prize">
          <div className="first">
            <img src={Cup} alt="1st prize" />
            <p>Rs 1 Lakh</p>
            <p className="cup">1st</p>
          </div>
          <div className="second">
            <p>2nd</p>
            <p>Rs 50000</p>
          </div>
          <div className="third">
            <p>3rd</p>
            <p>Rs 30000</p>
          </div>
        </div>
      </div>
      <EventDetailFooter />
    </div>
  );
}

export default Details;
