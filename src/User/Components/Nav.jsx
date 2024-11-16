import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
function Nav() {
  const [menuOpen, setMenuOpen] = useState("");
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };
  return (
    <div className="Navbar">
      <GiHamburgerMenu
        className="hamburger_menu"
        size={40}
        onClick={toggleMenu}
      />
      <ul className={menuOpen ? "" : "close"}>
        <Link to="/" className="nav-link">
          <li className="logo">
            <img
              src="https://th.bing.com/th/id/OIG4.onB2FLDSZtb9ECxW7JEW?w=1024&h=1024&rs=1&pid=ImgDetMain"
              alt="_logo"
            />
          </li>
        </Link>
        <Link to="/LeaderBoard" className="nav-link">
             <li>LeaderBoard</li>
        </Link>
        <Link to="/Sponsors" className="nav-link">
        <li>Sponsors</li>
        </Link>
        <Link to="/Events" className="nav-link">
        <li>Events</li>
        </Link>
        <Link to="/Match" className="nav-link">
        <li>Matches</li>
        </Link>
        <Link to="/Team" className="nav-link">
        <li>Team</li>
        </Link>
        
      </ul>
      <Button name="Join Now"></Button>
    </div>
  );
}

export default Nav;
