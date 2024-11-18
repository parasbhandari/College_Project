import React from 'react'
import EventDetailHeader from './EventDetailHeader'
import EventDetailBody from './EventDetailBody'
import EventDetailFooter from './EventDetailFooter'
function EventDetails() {
  return (
    <div className='EventDetails'>
     <EventDetailHeader/>
     <EventDetailBody/>
     <EventDetailFooter/>
     
    </div>
  )
}

export default EventDetails