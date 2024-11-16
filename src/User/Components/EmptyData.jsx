import React from 'react'
import NoData from "../../assets/NoData.png"
function EmptyData() {
  return (
    <div className='Empty_Data'>
      <img src={NoData} alt="" />
      <h2>No Ongoing Event found</h2>
    </div>
  )
}

export default EmptyData