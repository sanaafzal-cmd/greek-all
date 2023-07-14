import React from 'react'
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, faBriefcase, faLock, faLockOpen, faPaperPlane, faAlignJustify, faParagraph , faCalendarDays, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faPaperPlane, faLock, faLockOpen , faBriefcase, faAlignJustify, faParagraph, faCalendarDays, faUser, faEnvelope);

export default function Contact() {
  return (
    <div className='hero-container'>
      
<div class="contact-form" id="contactForm">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
    
      {/* Modal Body Start */}
      <div class="modal-body">
      
      <div class="mb-3">
  <label for="event-title" class="form-label contact-label">Full Name</label>
  <div className='mb-3 position-relative'>
  <FontAwesomeIcon icon={faUser} className='fa-icons-style' />
  <input type="text" class="form-control" id="event-title" placeholder="Enter your full name" />
  </div>
      </div>
      <div class="mb-3">
  <label for="event-title" class="form-label contact-label">Email</label>
  <div className='mb-3 position-relative'>
  <FontAwesomeIcon icon={faEnvelope} className='fa-icons-style' />
  <input type="text" class="form-control" id="event-title" placeholder="Enter your email address" />
  </div>
      </div>
<div class="mb-3">
  <label for="event-description" class="form-label contact-label">Description</label>
  <div className='mb-3 position-relative'>
  <FontAwesomeIcon icon={faParagraph} className='fa-icons-style' />
<textarea class="form-control" placeholder="Enter your message" id="event-description" style={{height:'100px'}}></textarea>
</div>
</div>
<div className='text-center mb-3 mt-3'>
<button class="btn btn-signin" type="submit">Submit</button>
</div>
      </div>
      {/* Modal Body Ends */}
     
    </div>
  </div>
</div>
            {/* Create Event Modal Ends */}
    </div>
  )
}
