import React from 'react'
import '../styles.css'
import eventImage from '../../../assets/event-thumbnail.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCalendarDays, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCalendarDays, faMapMarkerAlt);

export default function EventComponent() {
    const headingStyles = {
        fontSize: '16px',
        color:'#000000'
    }
    const paraStyles = {
        fontSize: '14px',
        fontWeight: '100',
        color:'#8b8a8f'
    }

    const imageStyling = {
        width: '100px',
        height: '100px'
    }
    const iconStyling = {
      color:'#8b8a8f'
    }

  return (
    <div className='d-flex thumbnail-event mb-3'>
      <img src={eventImage} style={imageStyling} />
      <div className='px-4'>
        <h5 style={headingStyles}>Event Title</h5>
        <div className='d-flex'>
        <FontAwesomeIcon icon={faCalendarDays} style={iconStyling} />
        <p style={paraStyles} className='px-2'>Event Date</p>
        </div>
       <div className='d-flex'>
       <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyling} />
        <p style={paraStyles} className='px-2'>Event Location</p>
       </div>
       
      </div>
    </div>
  )
}
