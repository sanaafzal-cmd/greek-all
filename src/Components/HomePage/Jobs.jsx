import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faMapMarkerAlt, faBriefcase);

export default function Jobs() {
    const iconColors = {
        color:'#000000',
        marginRight: '10px'
    }
  return (
    <div className='job-component mt-3 p-4'>
        <h3 className='job-title'>Sr. Social Media Marketing Intern (unpaid internship)</h3>
        <div className='d-flex'>
            <h4 className='job-org'>Google</h4>
            <h4 className='job-posting-time'>6h ago</h4>
        </div>
        <div className='job-description'>
        Lorem ipsum dolor sit amet adipiscing elit. Nulla pretium porttitor dui. In sed dignissim mi, vitae eleifend nibh. Curabitur id tincidunt elit, vitae 
        </div>

        <div className='d-flex justify-content-between pt-3'>
            <div className='d-flex'>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={iconColors} />
                <p className='job-location'>Dallas, Texas</p>
                </div>
            <div className='d-flex'>
            <FontAwesomeIcon icon={faBriefcase} style={iconColors} />
            <p className='job-type'>Full Time</p>
            </div>
            <button className='job-apply-btn'>Apply</button>
        </div>
      
    </div>
  )
}
