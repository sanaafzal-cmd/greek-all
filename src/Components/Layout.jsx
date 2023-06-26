import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Logo from '../assets/Vector.png';
import homeIcon from '../assets/home.png'

export default function Layout() {
  return (
    <>
    <nav class="navbar navbar-expand-lg">
  <div class="container">
    <a class="navbar-brand" href="#">
    <img src={Logo} alt="Logo" width="52" height="52" class="d-inline-block align-text-center m-2" />
      GreekAll</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
         
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/jobs">Jobs</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/events">Events</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/greeks">Greeks</Link>
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
