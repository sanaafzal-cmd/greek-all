import React, {useState} from 'react'
import AddMore from './allTabs/AddMore';
import Joined from './allTabs/Joined';
import './greekstyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, faBriefcase, faLock, faLockOpen, faPaperPlane, faAlignJustify, faParagraph , faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faPaperPlane, faLock, faLockOpen , faBriefcase, faAlignJustify, faParagraph, faCalendarDays);

export default function Greeks() {
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
   event = <AddMore />
 }
 else{
   event = <Joined />
 }
  return (
    <div className="hero-container">
            <div className="container">
              
                <div className="row">
                    <div className="col mt-5 mb-5">
                   
                    <div className="Tabs">
        {/* Tab nav */}
        <ul className="navigation">
        <li onClick={handleTab1} className={activeTab === "tab1" ? "active" : ""}>Add More</li>
        <li  onClick={handleTab2} className={activeTab === "tab2" ? "active" : ""}>Joined</li>
        </ul>
       
        <div className="outlet d-flex flex-column align-items-center justify-content-center">
        <div class="form-group has-search">
    <span class="fa fa-search form-control-feedback"></span>
    <input type="text" class="form-control greek-input" placeholder="Search" />
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
           
      
      </div>
  )
}
