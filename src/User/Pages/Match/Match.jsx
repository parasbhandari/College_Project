import React from 'react'
import Button from '../../Components/Button'
function Match() {
  return (
    <div className='_match'>
    <Button name="Upcoming Matches"></Button>
    <Button name="Ongoing Matches" className="on"></Button>
    </div>
  )
}

export default Match