import React from 'react'
import eventImage from '../../assets/event-image.png';
import calendarIcon from '../../assets/calendar-icon.png';
import locationIcon from '../../assets/location-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCalendar, faMapMarkerAlt)


export default function Events() {
  return (
    <>
    <div className="card event-cards">
    <img src={eventImage} class="card-img-top" alt="..." />
    <div class="card-body pt-0 pb-0">
      <h6 className='event-heading'>IBM HBCU Student Tech Talk</h6>
      <div className='d-flex'>
      <FontAwesomeIcon icon={faCalendar} className='event-date-icon' />
        <p className='event-date ms-2'>Event Date</p>
      </div>
  
      <div className='d-flex'>
      <FontAwesomeIcon icon={faMapMarkerAlt} className='event-location-icon' />
        <p className='event-location ms-2'>Event Location</p>
      </div>
  
      <p className="event-card-text">Lorem ipsum dolor sit amet adipiscing elit. Nulla pretium porttitor dui. In sed dignissim mi </p>
    </div>
  </div>
  </>
  )
}
