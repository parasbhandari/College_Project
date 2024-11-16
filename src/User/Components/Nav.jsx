import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Button from "./Button";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState("Home");

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleSelection = (item) => {
    setSelected(item);
  };

  return (
    <div className="Navbar">
      <GiHamburgerMenu
        className="hamburger_menu"
        size={40}
        onClick={toggleMenu}
      />
      <ul className={menuOpen ? "" : "close"}>
        <Link
          to="/"
          className="nav-link"
          onClick={() => handleSelection("Home")}
         
        >
          <li className="logo">
            <img
              src="https://th.bing.com/th/id/OIG4.onB2FLDSZtb9ECxW7JEW?w=1024&h=1024&rs=1&pid=ImgDetMain"
              alt="_logo"
            />
          </li>
        </Link>
        <Link
          to="/LeaderBoard"
          className={`nav-link ${selected === "LeaderBoard" ? "Selected" : ""}`}
          onClick={() => handleSelection("LeaderBoard")}
        >
          <li>LeaderBoard</li>
        </Link>
        <Link
          to="/Sponsors"
          className={`nav-link ${selected === "Sponsors" ? "Selected" : ""}`}
          onClick={() => handleSelection("Sponsors")}
        >
          <li>Sponsors</li>
        </Link>
        <Link
          to="/Events"
          className={`nav-link ${selected === "Events" ? "Selected" : ""}`}
          onClick={() => handleSelection("Events")}
        >
          <li>Events</li>
        </Link>
        <Link
          to="/Match"
          className={`nav-link ${selected === "Matches" ? "Selected" : ""}`}
          onClick={() => handleSelection("Matches")}
        >
          <li>Matches</li>
        </Link>
        <Link
          to="/Team"
          className={`nav-link ${selected === "Team" ? "Selected" : ""}`}
          onClick={() => handleSelection("Team")}
        >
          <li>Team</li>
        </Link>
      </ul>
      <Button name="Join Now"></Button>
    </div>
  );
}

export default Nav;
