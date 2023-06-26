import React, { useState } from "react";
import Interested from './allTabs/Interested';
import MyEvents from './allTabs/MyEvents';
import Others from './allTabs/Others';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faLockOpen, faPaperPlane, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faPaperPlane, faLock, faLockOpen, faPlusCircle);



const Tabs = () => {
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
  const handleTab3 = () => {
    // update the state to tab2
    setActiveTab("tab3");
  };

  let event;
  if(activeTab==='tab1'){
    event = <Interested />
  }
  else if(activeTab==='tab2'){
    event = <MyEvents />
  }
  else{
    event = <Others />
  }
    return (
        <div className="hero-container">
            <div className="container">
              
                <div className="row">
                    <div className="col mt-5 mb-5">
                   
                    <div className="Tabs">
        {/* Tab nav */}
        <ul className="nav">
        <li onClick={handleTab1} className={activeTab === "tab1" ? "active" : ""}>Interested</li>
        <li  onClick={handleTab2} className={activeTab === "tab2" ? "active" : ""}>My Events</li>
        <li  onClick={handleTab3} className={activeTab === "tab3" ? "active" : ""}>Others</li>
        </ul>
       
        <div className="outlet">
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
    );
  };
  export default Tabs;