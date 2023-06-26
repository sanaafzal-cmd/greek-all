import React, {useState} from 'react'
import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import myImage from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';


library.add(faGoogle);


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  }
 
  return (
   <>
   <div className="container-fluid d-flex align-items-center justify-content-center login-form">
    {/* <img src={myImage} className='login-overlay' /> */}
    <div className="row">
      <div className="col d-flex flex-column">
      <div className='sign-heading'>Let's sign you in?</div>
  <div className='sign-desc mt-4 mb-4'>Enter your email address and password to login</div> 
  <div class="mb-3">
<input type="email" class="form-control input-style" id="exampleFormControlInput1" placeholder="Email Address" />
</div>
<div className="mb-3 position-relative">

<input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} class="form-control input-style" id="password" placeholder="Password" />

 <FontAwesomeIcon
icon={showPassword ? ['fas', 'eye'] : ['fas', 'eye-slash']}
onClick={handleTogglePassword} className='eye-icon'
/>
</div>

<a href='#' className='align-self-end mb-3 acc-pass' style={{color: '#4D2178'}}>Forgot Password?</a>

<div class="mb-3">
<button class="btn-signin">Sign In</button>
</div>
<div className='or align-self-center mb-3'>or</div>


<div class="mb-3">
<button class="btn-sign-google mb-3"><FontAwesomeIcon className='mx-2' icon={faGoogle}/>Sign In With Google</button>
</div>



<div className='align-self-center acc-pass'>Don't have an account? <Link to='/signup' style={{color: '#4D2178'}}>Sign Up</Link></div>

      </div>
    </div>
   </div>
  
   </>
  )
}

{/* <div className="container-fluid login-form">
<div className="row login-overlay">
  <div className="col">
   <div className='sign-heading'>Let's sign you in?</div>
  <div className='sign-desc'>Enter your email address and password to login</div> 
  <div class="mb-3">
<input type="email" class="form-control email-input" id="exampleFormControlInput1" placeholder="Email Address" />
</div>
<div class="mb-3">
<input type="password" class="form-control password-input" id="inputPassword2" placeholder="Password" />
</div>

<div class="mb-3">
<button class="btn-signin mb-3">Sign In</button>
</div>


<div class="mb-3">
<button class="btn-sign-google mb-3">Sign In With Google</button>
</div>

<div className='ml-auto'>Don't have an account? <a href='#'>Sign Up</a></div>
    

  </div>
</div>
</div> */}
