import React, { useState } from 'react'
import eventImage from '../../assets/event-image.png';
import calendarIcon from '../../assets/calendar-icon.png';
import locationIcon from '../../assets/location-icon.png';
import Events from './Events';
import Tweet from './Tweet';
import Jobs from './Jobs';
import ProfilePhoto from '../../assets/profile-photo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, faBriefcase, faLock, faLockOpen, faPaperPlane, faAlignJustify, faParagraph , faCalendarDays, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faPaperPlane, faLock, faLockOpen , faBriefcase, faAlignJustify, faParagraph, faCalendarDays, faCirclePlus);

export default function Hero() {
  const styles={
    borderTop: ''
  }
  const [comment, setComment] = useState('');
  
    const [selectedImages, setSelectedImages] = useState([]);
  
    const handleImageChange = (event) => {
      const files = event.target.files;
      const selectedImagesArray = Array.from(files);
      setSelectedImages(selectedImagesArray);
    }
  
      const [activeDiv, setActiveDiv] = useState(1);
    
      const handleButtonClick = (divNumber) => {
        setActiveDiv(divNumber);
      };

      const navDayStyles = ({isActive}) => {
        return {
          color : isActive ? '#AC57FF' : '#ffffff',
          textDecoration : isActive ? 'none' : 'none',
          fontWeight: isActive ? '600' : 'normal',
          fontSize: '14px',
          borderBottom: isActive ? '2px solid #AC57FF' : 'none'
          
        }
      }
    
 
  return (
    <>
   
    <div className="container-fluid hero-container">
     <div className="container-fluid">
     <div className="row justify-content-center">
        <div className="col-md-7 col-sm-12 events-sec p-3 mt-5 ms-md-2 ms-sm-0">
          <div className='d-flex justify-content-between br-bottom pb-3'>
            <h3 className='events-sec-heading'>Events</h3>
            <button className='btn btn-add-events' data-bs-target="#addNewEvent" data-bs-toggle="modal">Add Event</button>
            {/* Create Event Modal Start */}
             {/* Modal  */}
<div class="modal custom-modal fade" id="addNewEvent" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Create Event</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      {/* Modal Body Start */}
      <div class="modal-body">
      <div class="mb-3 d-flex flex-column">
  <label for="eventImages" class="form-label">Upload Event images</label>
  <input
        type="file"
        id="eventImages"
        name="selectedImages"
        multiple
        onChange={handleImageChange}
      />
     </div>
      <div class="mb-3">
  <label for="event-title" class="form-label">Event Title</label>
  <div className='mb-3 position-relative'>
  <FontAwesomeIcon icon={faCalendarDays} className='fa-icons-style' />
  <input type="text" class="form-control" id="event-title" placeholder="Enter event title" />
  </div>
      </div>
      {/* Radio buttons */}
      <div class="mb-3">
      <label class="form-label">Event Type</label>
      <div class="form-check position-relative">
  <input class="form-check-input" type="radio" name="selectEvent" id="publicEvent" checked />
  <label class="form-check-label" for="publicEvent">
    Public
  </label>
  <FontAwesomeIcon icon={faLockOpen} className='fa-lock-icon' />
</div>
<div class="form-check position-relative">
  <input class="form-check-input" type="radio" name="selectEvent" id="privateEvent" />
  <label class="form-check-label" for="privateEvent">
    Private
  </label>
  <FontAwesomeIcon icon={faLock} className='fa-lock-icon' />
</div>
</div>
{/* Radio Buttons end */}
<div class="mb-3">
  <label for="event-location" class="form-label">Location</label>
  <div className='mb-3 position-relative'>
  <FontAwesomeIcon icon="fa-solid fa-location-dot" className='fa-icons-style' />
  <input type="text" class="form-control" id="event-location" placeholder="Enter Location" />
  </div>
</div>

<div class="input-group mb-3">
    <div className='col d-flex flex-column'>
    <label for="start-date" class="form-label">Start Date</label>
  <input type="date" class="form-control" id='start-date' placeholder='Select Date' />
    </div>
    <div className='col d-flex flex-column'>
    <label for="end-date" class="form-label">End Date</label>
  <input type="date" class="form-control" id='end-date' placeholder='Select Date' />
    </div>
</div>

<div class="input-group mb-3">
    <div className='col d-flex flex-column'>
    <label for="start-time" class="form-label">Start Time</label>
  <input type="time" class="form-control" id='start-time' placeholder='Select Time' />
    </div>
    <div className='col d-flex flex-column'>
    <label for="end-time" class="form-label">End Time</label>
  <input type="time" class="form-control" id='end-time' placeholder='Select Time' />
    </div>
</div>

<div class="mb-3">
  <label for="event-description" class="form-label">Description</label>
  <div className='mb-3 position-relative'>
<FontAwesomeIcon icon={faParagraph} className='fa-icons-style' />
<textarea class="form-control" placeholder="Enter details of the job" id="event-description" style={{height:'100px'}}></textarea>
</div>
</div>
<div className='text-center mb-3 mt-3'>
<button class="btn btn-signin" type="submit">Create</button>
</div>
      </div>
      {/* Modal Body Ends */}
     
    </div>
  </div>
</div>
            {/* Create Event Modal Ends */}
          </div>

          {/* Carousel Start */}
          <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
         
         <div class="carousel-inner">
        
           <div class="carousel-item active pt-3">
             <div className='d-flex justify-content-evenly'>
             <Events />
            <Events />
            <Events />
             </div>
           </div>
          
           <div class="carousel-item pt-3">
           <div className='d-flex justify-content-evenly'>
             <Events />
            <Events />
            <Events />
           
             </div>
           </div>
          
           <div class="carousel-item pt-3">
           <div className='d-flex justify-content-evenly'>
             <Events />
            <Events />
            <Events />
           
             </div>
           </div>
        
           <div class="carousel-item pt-3">
           <div className='d-flex justify-content-evenly'>
             <Events />
            <Events />
            <Events />
           
             </div>
           </div>
         
           <div class="carousel-item pt-3">
           <div className='d-flex justify-content-evenly'>
             <Events />
            <Events />
            <Events />
           
             </div>
           </div>
          
           <div class="carousel-item pt-3">
           <div className='d-flex justify-content-evenly'>
             <Events />
            <Events />
            <Events />
           
             </div>
           </div>
         </div>
         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Previous</span>
         </button>
         <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
           <span class="carousel-control-next-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Next</span>
         </button>
       </div>
          {/* Carousel Ends */}


          <div className='d-flex justify-content-evenly event-days pt-4 pb-3'>
          <button onClick={() => handleButtonClick(1)} className={activeDiv === 1 ? 'active-day' : 'non-active-day'}>Monday</button>
        <button onClick={() => handleButtonClick(2)} className={activeDiv === 2 ? 'active-day' : 'non-active-day'}>Tuesday</button>
        <button onClick={() => handleButtonClick(3)} className={activeDiv === 3 ? 'active-day' : 'non-active-day'}>Wednesday</button>
        <button onClick={() => handleButtonClick(4)} className={activeDiv === 4 ? 'active-day' : 'non-active-day'}>Thursday</button>
        <button onClick={() => handleButtonClick(5)} className={activeDiv === 5 ? 'active-day' : 'non-active-day'}>Friday</button>
        <button onClick={() => handleButtonClick(6)} className={activeDiv === 6 ? 'active-day' : 'non-active-day'}>Saturday</button>
          {/* <h4 className='active-day active'>Monday</h4>
          <h4 className='active-day'>Tuesday</h4>
          <h4 className='active-day'>Wednesday</h4>
          <h4 className='active-day'>Thursday</h4>
          <h4 className='active-day'>Friday</h4>
          <h4 className='active-day'>Saturday</h4> */}
          </div>

          <div className='br-bottom'>

          </div>

          <div className='text-center mt-4'>
            <a className='view-events' href='#'>View all Events</a>
          </div>
        </div>
        {/* Jobs Section Start */}
     
        <div className="col-md-4 col-sm-12 events-sec p-3 mt-5 ms-md-3 ms-sm-0">
        <div className='d-flex justify-content-between br-bottom pb-3'>
            <h3 className='events-sec-heading'>Jobs for you</h3>
            <button className='btn btn-add-jobs' data-bs-target="#postNewJob" data-bs-toggle="modal">Post Job</button>
            {/* Post Job Modal Start */}
                {/* Modal  */}
<div class="modal custom-modal fade" id="postNewJob" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Post Job</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      {/* Modal Body Start */}
      <div class="modal-body">
     
      <div class="mb-3">
  <label for="job-title" class="form-label">Job Title</label>
  <div className='mb-3 position-relative'>
  <FontAwesomeIcon icon="fa-solid fa-briefcase" className='fa-icons-style' />
  <input type="text" class="form-control" id="job-title" placeholder="Enter job title" />
  </div>
 
      </div>
      <div className="mb-3">
      <label for="job-type-dropdown" class="form-label">Job Type</label>
      <select class="form-select form-select-sm job-type-dropdown" id='job-type-dropdown' aria-label=".form-select-sm example">
     
  <option selected>Select job type</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
      </div>
      <div className="mb-3">
      <label for="job-expiry-dropdown" class="form-label">Job Expiry</label>
     <input type='date' className='form-control' />
      </div>
     
<div class="mb-3">
  <label for="job-location" class="form-label">Location</label>
  <div className='mb-3 position-relative'>
  <FontAwesomeIcon icon="fa-solid fa-location-dot" className='fa-icons-style' />
  <input type="text" class="form-control" id="job-location" placeholder="Enter Location" />
  </div>
 
</div>
<div className="mb-3">
<label for="jobDescription" class="form-label">Description</label>
<div className='mb-3 position-relative'>
<FontAwesomeIcon icon={faParagraph} className='fa-icons-style' />
<textarea class="form-control" placeholder="Enter details of the job" id="jobDescription" style={{height:'100px'}}></textarea>
</div>
</div>



<div className='text-center mb-3 mt-3'>
<button class="btn btn-signin" type="submit">Create</button>
</div>
      </div>
      {/* Modal Body Ends */}
     
    </div>
  </div>
</div>
            {/* Post Job Modal End */}
          </div>
          <div className='d-flex flex-column align-items-center justify-content-center'>
            <Jobs />
            <Jobs />
            <Jobs />
            <Jobs />
          </div>
          <div className='br-bottom pt-5'>
          </div>
          <div className='text-center mt-4 mb-4'>
            <a className='view-events' href='#'>View all Jobs</a>
          </div>

        </div>
        </div>
     <div className='row chatbox'>
        {/* Jobs Section Ends */}
        <div className="col-sm-12 col-md-7 events-sec p-3 ms-md-5 ms-sm-0 mt-5">
        <div className='d-flex mt-2 mb-2'>
        <img
      src={ProfilePhoto}
      alt='avatar'
      className='comment-avatar'
    />
        <div className="position-relative">

<input type='text' value={comment} class="form-control comment-input-1" id="comment" placeholder='Start your discussion' />

<FontAwesomeIcon icon={faPaperPlane} className='send-comment-icon' />
</div>


       </div>
          </div>

        <div className="col-sm-12 col-md-7 events-sec p-3 mt-2 ms-md-5 ms-sm-0">
       <Tweet />
       <div className='d-flex flex-column justify-content-center align-items-center'>
       <div className='d-flex mt-3 mb-3'>
        <img src={ProfilePhoto} className='comment-sec-dp' />
        <div className="position-relative">

<input type='text' value={comment} class="form-control comment-input" id="comment" />

<FontAwesomeIcon icon={faPaperPlane} className='send-icon' />
</div>


       </div>
       <div className='d-flex mb-3'>
<img src={ProfilePhoto} className='comment-sec-dp' />
<div className="comment-text">Lorem ipsum dolor sit amet adipiscing elit.</div>
</div>
<div className='d-flex'>
<img src={ProfilePhoto} className='comment-sec-dp' />
<div className="comment-text">Lorem ipsum dolor sit amet adipiscing elit.</div>
</div>
</div>
        </div>
        <div className="col-sm-12 col-md-7 events-sec p-3 mt-2 mb-5 ms-md-5 ms-sm-0">
       <Tweet />
        </div>
        </div>
      </div>
     </div>

    
    
    
  


      
    </>
  )
}

