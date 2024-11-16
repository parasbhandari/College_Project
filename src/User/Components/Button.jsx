import React from 'react'

function Button(props) {
  return (
    <div>
      <button className='global_button'>{props.name}</button>
    </div>
  )
}

export default Button