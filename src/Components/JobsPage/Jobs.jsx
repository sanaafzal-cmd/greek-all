import React, {useState} from 'react'
import AvailableJobs from './allTabs/AvailableJobs';
import Applied from './allTabs/Applied';
import './jobstyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, faBriefcase, faLock, faLockOpen, faPaperPlane, faAlignJustify, faParagraph , faCalendarDays, faFilter } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faPaperPlane, faLock, faLockOpen , faBriefcase, faAlignJustify, faParagraph, faCalendarDays, faFilter);

export default function Jobs() {
    const [activeTab, setActiveTab] = useState("tab1");
    //  Functions to handle Tab Switching
 const handleTab1 = () => {
   // update the state to tab1
   setActiveTab("tab1");
 };
 const handleTab2 = () => {
   // update the state to tab2
   setActiveTab("tab2");
 };
 

 let event;
 if(activeTab==='tab1'){
   event = <AvailableJobs />
 }
 else{
   event = <Applied />
 }
  return (
    <div className="hero-container">
            <div className="container">
              
                <div className="row">
                    <div className="col mt-5 mb-5">
                   
                    <div className="Tabs">
        {/* Tab nav */}
        <ul className="navigation">
        <li onClick={handleTab1} className={activeTab === "tab1" ? "active" : ""}>Available Jobs</li>
        <li  onClick={handleTab2} className={activeTab === "tab2" ? "active" : ""}>Applied</li>
        </ul>
       
        <div className="outlet">
            <div style={{float:'right', paddingRight:'50px'}}>
            <button className='btn btn-add-events' data-bs-target="#filterJob" data-bs-toggle="modal">Filter Jobs</button>
            </div>
            {event}
         {/* {activeTab === "tab1" ? <Interested /> : <MyEvents />} 
         {activeTab === "tab2" ? <MyEvents /> : <Others />} 
         {activeTab === "tab3" ? <Others /> : <Interested />}  */}
        </div>
      </div>
                    </div>
                </div>
               
            </div>
             {/* Post Job Modal Start */}
                {/* Modal  */}
<div class="modal custom-modal fade" id="filterJob" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Filter</h1>
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
     
      
     
<div class="mb-3">
  <label for="job-location" class="form-label">Location</label>
  <div className='mb-3 position-relative'>
  <FontAwesomeIcon icon="fa-solid fa-location-dot" className='fa-icons-style' />
  <input type="text" class="form-control" id="job-location" placeholder="Enter Location" />
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
  )
}
