import React, {useState, useEffect} from "react";
import calendarIcon from "../../assets/calendar-icon.png";
import locationIcon from "../../assets/Location.png";
import jobsData from "../HomePage/jobsData.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faMapMarkerAlt, faBriefcase);

export default function Jobs() {

  const [fetchedData, setFetchedData] = useState([]);
  

  var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer Y2xrcGo2ZWxzMDA3MmJkcW9kazBwNGV3MQ.JGhqxCGbMfPsuSDhOHxXGevdwQ_4QJ53_cQXow_-9ieElWlT5UfC7KbMbt8F");
// myHeaders.append("Cookie", "adonis-session=s%3AeyJtZXNzYWdlIjoiY2xrcGdoOHp5MDA2Z2JkcW8ybWw5NzVjcCIsInB1cnBvc2UiOiJhZG9uaXMtc2Vzc2lvbiJ9.xp5CJGF71eR9fZzCozHBUXo3xsbPFCjD0WTC12e2Z40; clkpgh8zy006gbdqo2ml975cp=e%3Am-1FNET6858kd7zRSXHW9tTXaqcMwKhAFAZYVxe_CA44dZjIdpeILFMMNRzoDNYW3MzQJklmW68WohwPzPxITg.X1pFX2MxU0JuOFJvT2FSZQ.DMTfcXxGqRxN8RAXaAruI7zCfcXmscWVm9b9lthfIIM");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
useEffect(() => {
fetch("https://app.greek-all.com/api/v1/jobs/?job_by=20&limit_per_page=4", requestOptions)
  .then(response => response.json())
  // .then(result => console.log(result))
  .then(result => {
    setFetchedData(result.data.data);
    
    console.log(result)
      })
  .catch(error => console.log('error', error));
}, []);
 
 
  const iconColors = {
    color: "#000000",
    marginRight: "10px",
  };
  return (
    <div>
      {
        jobsData.map((job, index)=> {
          return (
            <div key={index} class='job-component mt-2 p-3'>
               <h3 className='job-title'>{job.jobTitle}</h3>
    <div className='d-flex'>
        <h4 className='job-org'>{job.jobCompany}</h4>
        <h4 className='job-posting-time'></h4>
    </div>
    <div className='job-description'>
  {job.description}
    </div>
    
    <div className='d-flex justify-content-between pt-3'>
        <div className='d-flex'>
        <FontAwesomeIcon icon={faMapMarkerAlt} style={iconColors} />
       
            <p className='job-location'>{job.location}</p>
            </div>
        <div className='d-flex'>
        <FontAwesomeIcon icon={faBriefcase} style={iconColors} />
        <p className='job-type'>{job.jobType}</p>
        </div>
        <button className='job-apply-btn'>Apply</button>
    </div>
           
            </div>
          )
        
        })
}
    </div>
    
  );
}

{/* <div className='job-component mt-2 p-3'>
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
    
    </div>  */}


   

