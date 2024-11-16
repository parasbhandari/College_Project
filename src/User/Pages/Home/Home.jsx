import React from 'react'
import Button from '../../Components/Button'
import HmImg from '../../../assets/ftbg.svg'
import Aboutus from './Aboutus'
function Home() {
  return (
    <>
    <div className='homepage'>
      <section>
        <h1>
        <div className="wrapper">
                <div className="circle"></div>
                <div className="shadow"></div>
        </div>
          2024 <br /> <span>
          Nepal Games
            </span>
        </h1>
        <p>
        Champions' empowerment, excellence nurtured <br/>- Welcome to Sundarbazzer Sports, where dedication leads to success.
        </p>
        <div>
        <a href='#'>
          <Button name="Recent LeaderBoard"></Button>
        </a>
        </div>
       
      </section>
      <div className='goal_img'>
      <img src={HmImg} alt="football_image" />
      </div>
      </div>
      <Aboutus/>
      </>

  )
}

export default Home