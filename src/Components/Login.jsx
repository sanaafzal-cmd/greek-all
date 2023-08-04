
import React, {useState, useEffect} from 'react'
import { Outlet, Link } from "react-router-dom";

import myImage from '../assets/logo.png';
import global from './global.json'



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
  const [apiData, setApiData] = useState(null);

  

//   useEffect(() => {
// if (localStorage.getItem('user-info')){
//   navigate('/')
// }
//   })


  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  }

  async function login(){
    let item = {email,  password}
  

//     var myHeaders = new Headers();
   
// // myHeaders.append("Authorization", `Bearer ${global.TOKEN}`);
// var formdata = new FormData();
// formdata.append("email", email);
// formdata.append("password", password);
// formdata.append("device_type", "ios");
// formdata.append("device_token", "test");



// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: formdata,
//   redirect: 'follow',

// };

// // https://greekall.tekstagearea.com/api/v1/login

// fetch("https://app.greek-all.com/api/v1/login", requestOptions)
//   .then(response => setApiData(response.text())) 
//   .then(result => {
//     // localStorage.setItem('user-info', JSON.stringify(result));
//     // navigate('/');
//     console.log(result)
//   })
//   .catch(error => console.log('error', error));

//   }

var myHeaders = new Headers();
// myHeaders.append("Cookie", "adonis-session=s%3AeyJtZXNzYWdlIjoiY2xrcGdoOHp5MDA2Z2JkcW8ybWw5NzVjcCIsInB1cnBvc2UiOiJhZG9uaXMtc2Vzc2lvbiJ9.xp5CJGF71eR9fZzCozHBUXo3xsbPFCjD0WTC12e2Z40; clkpgh8zy006gbdqo2ml975cp=e%3AP57wazRzmCxJz-hLYI6qAuiypO8md8F_kL2mcqiaEbhrSwBUplJ9CMLA_8hFsZXfjVZ1--0jJ5BASocP6mnC3w.TGVlajBNekxuaHhGTlVHbg.BAXWsJVZ0CISNK4vuYWz0HZGil49VOtZSnIFg_x3I_0");

var formdata = new FormData();
formdata.append("email", "shahabhamdani@hotmail.com");
formdata.append("password", "123456");
formdata.append("device_type", "android");
formdata.append("device_token", "test");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://app.greek-all.com/api/v1/login", requestOptions)
  .then(response => response.text())
  // .then(result => console.log(result))
  .then(result => {
       localStorage.setItem('user-info', JSON.stringify(result));
     navigate('/');
     console.log(result)
     })
  .catch(error => console.log('error', error));
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


