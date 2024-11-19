import React from 'react'
import NoData from "../../assets/NoData.png"
function EmptyData(props) {
  return (
    <div className='Empty_Data'>
      <img src={NoData} alt="" />
      <h2>{props.message}</h2>
    </div>
  )
}

export default EmptyData