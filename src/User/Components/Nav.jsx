import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react'
function Nav() {
  const[menuOpen, setMenuOpen]= useState('');
  const toggleMenu=()=>{
    setMenuOpen(prevState=> !prevState)
  }
  return (
    <div className='Navbar'>
     <GiHamburgerMenu className='hamburger_menu' size={40} onClick={toggleMenu}/>
      <ul className={menuOpen? '': 'close'}>
        <li className='logo'><img src="https://th.bing.com/th/id/OIG4.onB2FLDSZtb9ECxW7JEW?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="_logo" /></li>
        <li>LeaderBoard</li>
        <li>Sponsors</li>
        <li>Events</li>
        <li>Matches</li>
        <li>Team</li>
      </ul>
      <div className='btn'><button>Join Now</button> </div>
      
    </div>
  )
}

export default Nav