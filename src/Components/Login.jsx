import React, {useState, useEffect} from 'react'
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
import {useNavigate} from 'react-router-dom'

library.add(faGoogle);


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
if (localStorage.getItem('user-info')){
  navigate.push('/')
}
  })


  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  }

  async function login(){
    let item = {email,  password}
    console.warn(item);

    var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer s%3AeyJtZXNzYWdlIjoiY2xpbG1qOHBjMDAzaW93b2oydnoyNW9icCIsInB1cnBvc2UiOiJhZG9uaXMtc2Vzc2lvbiJ9.nKzx3iDVlid8SyL7992-eaOBBRFkzXjFPlmAzqvjETA; clilmj8pc003iowoj2vz25obp=e%3AOVfmQLFgHXEsLo1i4Gum7BMVjRrsRQ7rhwvp1VB_3l83YpeSyuWiC8U5cu82RRKVaBPgnL_NefgWiBF_ZMMWpw.aGFqMHJnOUZSV1lyWXNCXw.1oOEHsiKcZfI5kwuPIbty_xpmkgEnXCoUk9LN8smqsM");
myHeaders.append("Cookie", "adonis-session=s%3AeyJtZXNzYWdlIjoiY2xrMTB0OGQwMDB3bm93b2pnMjd2NmJmcSIsInB1cnBvc2UiOiJhZG9uaXMtc2Vzc2lvbiJ9.L8UHsaNqGCyW3IwR4Y02DxDg2VEgsl5VdyjVB4UQwSU; clk10t8d000wnowojg27v6bfq=e%3AnrM-k5Mmg47Fy1NdUnA_FF4F8OUuyQbL0xAIeY8qKKseNknCSVgKUmdc47gZwm90ix5j9r_9UPJ3gtCb2FnIKg.OHlEQS1Ecng0ODNqczh6VA.emw-zOk8QcQBaEAZ67eCjssfmjB0NiOSrHQtRQ5INe8");

var formdata = new FormData();
formdata.append("email", email);
formdata.append("password", password);
formdata.append("device_type", "android");
formdata.append("device_token", "test");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://greekall.tekstagearea.com/api/v1/login", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));




    // localStorage.setItem('user-info', JSON.stringify(result))
    // navigate.push('/')
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
<input type="email" class="form-control input-style" id="exampleFormControlInput1" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)} />
</div>
<div className="mb-3 position-relative">

<input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} class="form-control input-style" id="password" placeholder="Password" />

 <FontAwesomeIcon
icon={showPassword ? ['fas', 'eye'] : ['fas', 'eye-slash']}
onClick={handleTogglePassword} className='eye-icon'
/>
</div>

<Link to='/forgotpassword' className='align-self-end mb-3 acc-pass' style={{color: '#4D2178'}}>Forgot Password?</Link>

<div class="mb-3 text-center">
<button onClick={login} class="btn-signin">Sign In</button>
</div>
<div className='or align-self-center mb-3'>or</div>


<div class="mb-3 text-center">
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
