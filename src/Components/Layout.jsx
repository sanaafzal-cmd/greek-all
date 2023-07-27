import React from 'react'
import { Outlet, Link, useLocation, NavLink } from "react-router-dom";
import Logo from '../assets/Asset 1@2x.png';
import logoText from '../assets/Vector (1).png'
import profilePhoto from '../assets/profile-photo.png'
import homeIcon from '../assets/home-icon.png'
import jobsIcon from '../assets/jobs-icon.png'
import eventsIcon from '../assets/events-icon.png'
import greeksIcon from '../assets/greeks-icon.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBriefcase, faUsers, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faHouse, faBriefcase,faUsers,faCalendarDays);

export default function Layout() {

  
  

  const navLinkStyle = {
    marginRight: '100px' // Adjust the spacing value as needed
  };

  const imgSize = {
    width: '25.95px',
    height: '22.81px'
  }

  const navLinkStyles = ({isActive}) => {
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
    <nav class="navbar navbar-expand-lg sticky-top">
  <div class="container">
    <a class="navbar-brand d-flex align-items-center justify-content-center" href="#">
    <img src={Logo} alt="Logo" width="52" height="52" class="d-inline-block align-text-center m-2" />
      <div style={{color:'#ffffff', fontSize:'20px', letterSpacing:'1px'}}>GreekAll</div></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item d-flex flex-column align-items-center justify-content-center" style={navLinkStyle}>
        {/* <FontAwesomeIcon icon={faHouse} className='nav-icons' /> */}
        <img src={homeIcon} width={25.95} height={22.81} />
          <NavLink style={navLinkStyles} class="nav-link" aria-current="page" to="/">Home</NavLink>
         
        </li>
        <li class="nav-item d-flex flex-column align-items-center justify-content-center" style={navLinkStyle}>
        {/* <FontAwesomeIcon icon={faBriefcase} className='nav-icons' /> */}
        <img src={jobsIcon} width={25.95} height={22.81} />
          <NavLink style={navLinkStyles} class="nav-link" to="/jobs">Jobs</NavLink>
        </li>
        <li class="nav-item d-flex flex-column align-items-center justify-content-center" style={navLinkStyle}>
        {/* <FontAwesomeIcon icon={faCalendarDays} className='nav-icons' /> */}
        <img src={eventsIcon} width={25.95} height={22.81} />
          <NavLink style={navLinkStyles} class="nav-link" to="/events">Events</NavLink>
        </li>
        <li class="nav-item d-flex flex-column align-items-center justify-content-center" style={navLinkStyle}>
        {/* <FontAwesomeIcon icon={faUsers} className='nav-icons' /> */}
        <img src={greeksIcon} width={33.95} height={22.81} />
          <NavLink style={navLinkStyles} class="nav-link" to="/greeks">Greeks</NavLink>
        </li>
       
        <li>
        <div class="dropdown-center">
  <button class="btn btn-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <img src={profilePhoto} style={{border: '1px solid #ffffff', borderRadius: '50%'}} height={40} width={40} />
  </button>
  <ul class="dropdown-menu">
    <li><NavLink class="dropdown-item" to="/contact">Contact Us</NavLink></li>
    <li><NavLink class="dropdown-item" to="/faqs">FAQs</NavLink></li>
    <li><hr class="dropdown-divider" /></li>
    <li><a class="dropdown-item" href="#">Logout</a></li>

  </ul>
</div>
        </li>

       
      </ul>
    </div>
  </div>
</nav>
      

      <Outlet />
    </>
  )
}

{/* <nav>
<ul>
  <li>
    <Link to="/login">Login</Link>
  </li>
  <li>
    <Link to="/signup">Sign Up</Link>
  </li>
  <li>
    <Link to="/contact">Contact</Link>
  </li>
  <li>
    <Link to="/faqs">FAQ</Link>
  </li>
</ul>
</nav> */}
