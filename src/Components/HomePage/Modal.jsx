import React from 'react'

export default function Modal() {
  return (
    
    <div>
       {/* Button trigger modal  */}
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>

 {/* Modal  */}
<div class="modal custom-modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Create Event</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      {/* Modal Body Start */}
      <div class="modal-body">
      <div class="mb-3">
  <label for="eventImages" class="form-label">Upload Event images</label>
  <input class="form-control" type="file" id="eventImages" />
     </div>
      <div class="mb-3">
  <label for="event-title" class="form-label">Event Title</label>
  <input type="text" class="form-control" id="event-title" placeholder="Enter event title" />
      </div>
      {/* Radio buttons */}
      <div class="mb-3">
      <label class="form-label">Event Type</label>
      <div class="form-check">
  <label class="form-check-label" for="publicEvent">
  <input class="form-check-input" type="radio" name="selectEvent" id="publicEvent" checked />
    Public
  </label>
</div>
<div class="form-check">
  <label class="form-check-label" for="privateEvent">
  <input class="form-check-input" type="radio" name="selectEvent" id="privateEvent" />
    Private
  </label>
</div>
</div>
{/* Radio Buttons end */}
<div class="mb-3">
  <label for="event-location" class="form-label">Location</label>
  <input type="text" class="form-control" id="event-location" placeholder="Enter location" />
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
  <input type="text" class="form-control" id="event-description" placeholder="Please enter details of your event" />
</div>
<div className='text-center mb-3 mt-3'>
<button class="btn btn-signin" type="submit">Create</button>
</div>
      </div>
      {/* Modal Body Ends */}
     
    </div>
  </div>
</div>
    </div>
  )
}
