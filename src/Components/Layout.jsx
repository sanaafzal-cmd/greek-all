import React from 'react'
import { Outlet, Link, useLocation } from "react-router-dom";
import Logo from '../assets/Vector (2).png';
import logoText from '../assets/Vector (1).png'
import profilePhoto from '../assets/profile-photo.png'
import homeIcon from '../assets/home.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBriefcase, faUsers, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faHouse, faBriefcase,faUsers,faCalendarDays);

export default function Layout() {
  const location = useLocation();
  return (
    <>
    <nav class="navbar navbar-expand-lg">
  <div class="container">
    <a class="navbar-brand" href="#">
    <img src={Logo} alt="Logo" width="52" height="52" class="d-inline-block align-text-center m-2" />
      <img src={logoText} /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item d-flex flex-column align-items-center justify-content-center">
        <FontAwesomeIcon icon={faHouse} className='nav-icons' />
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
         
        </li>
        <li class="nav-item d-flex flex-column align-items-center justify-content-center">
        <FontAwesomeIcon icon={faBriefcase} className='nav-icons' />
          <Link class="nav-link" to="/jobs">Jobs</Link>
        </li>
        <li class="nav-item d-flex flex-column align-items-center justify-content-center">
        <FontAwesomeIcon icon={faCalendarDays} className='nav-icons' />
          <Link class="nav-link" to="/events">Events</Link>
        </li>
        <li class="nav-item d-flex flex-column align-items-center justify-content-center">
        <FontAwesomeIcon icon={faUsers} className='nav-icons' />
          <Link class="nav-link" to="/greeks">Greeks</Link>
        </li>
       
        <li>
        <div class="dropdown-center">
  <button class="btn btn-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <img src={profilePhoto} style={{border: '1px solid #ffffff', borderRadius: '50%'}} height={40} width={40} />
  </button>
  <ul class="dropdown-menu">
    <li><Link class="dropdown-item" to="/contact">Contact Us</Link></li>
    <li><Link class="dropdown-item" to="/faqs">FAQs</Link></li>
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
