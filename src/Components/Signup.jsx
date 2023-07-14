import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Outlet, Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'

library.add(faEye, faEyeSlash);



export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [universityName, setUniversityName] = useState('');
  const [societyType, setSocietyType] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();


  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  async function getUniversityName(){
    var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer s%3AeyJtZXNzYWdlIjoiY2xpbG1qOHBjMDAzaW93b2oydnoyNW9icCIsInB1cnBvc2UiOiJhZG9uaXMtc2Vzc2lvbiJ9.nKzx3iDVlid8SyL7992-eaOBBRFkzXjFPlmAzqvjETA; clilmj8pc003iowoj2vz25obp=e%3AOVfmQLFgHXEsLo1i4Gum7BMVjRrsRQ7rhwvp1VB_3l83YpeSyuWiC8U5cu82RRKVaBPgnL_NefgWiBF_ZMMWpw.aGFqMHJnOUZSV1lyWXNCXw.1oOEHsiKcZfI5kwuPIbty_xpmkgEnXCoUk9LN8smqsM");
myHeaders.append("Cookie", "adonis-session=s%3AeyJtZXNzYWdlIjoiY2xrMTB0OGQwMDB3bm93b2pnMjd2NmJmcSIsInB1cnBvc2UiOiJhZG9uaXMtc2Vzc2lvbiJ9.L8UHsaNqGCyW3IwR4Y02DxDg2VEgsl5VdyjVB4UQwSU; clk10t8d000wnowojg27v6bfq=e%3ADkaOYiPFFcTCthi6RgWutcGzlJJuktTEJLwjHB8Tk9sriW8IGxuBUu0kPn4L39G-LaBlAAv3K6R19ux6nEnVxQ.T3pxWFQ1YjBrNUpEcmFhcg.7LQkSlbQ9tK8zLJSESd5NUm0sbmRCQgB7fSgAPjpvCs");

var formdata = new FormData();
formdata.append("data.name", universityName);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://greekall.tekstagearea.com/api/v1/universities", requestOptions)
  .then(response => response.text())
  .then(result => setUniversityName(result))
  // .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }

   async function signUp(){
    let item = {fullName, universityName, societyType, email, password}
    console.warn(item);

    let result = await fetch('http://localhost:3000/api/signup', {
      method:'POST',
      body:JSON.stringify(item),
      headers:{
        'Content-Type' : 'application/json',
        'Accept': 'application/json'
      }
    })
    result = await result.json()
    localStorage.setItem('user-info', JSON.stringify(result))
    navigate.push('/login')
  }

  return (
    <>
    <div className="container-fluid d-flex align-items-center justify-content-center signup-form">
      <div className="row">
        <div className="col d-flex flex-column">
          <div className='signup-heading mt-4'>Let's create your account</div>
          <div className='signup-desc mt-4 mb-4'>Enter your details to setup your account.</div>
          <div className="mb-3">
           <input type="text" className="form-control input-style" id="fullname" placeholder="Full Name" value={fullName} onChange={(e)=> setFullName(e.target.value)} />
          </div>
          <select className="form-select mb-3" value={universityName} onChange={(e)=> setUniversityName(e.target.value)} aria-label=".form-select-lg example" defaultValue={'UNIVERSITY_NAME'}>
            <option value={'UNIVERSITY_NAME'}>University Name</option>
           <option value="1">One</option>
           <option value="2">Two</option>
           <option value="3">Three</option>
           </select>
           <select className="form-select mb-3" value={societyType} onChange={(e)=> setSocietyType(e.target.value)} aria-label=".form-select-lg example" defaultValue={'SORORITIES_FRATERNITIES'}>
            <option value={'SORORITIES_FRATERNITIES'}>Sororities/Fraternities</option>
           <option value="1">One</option>
           <option value="2">Two</option>
           <option value="3">Three</option>
           </select>
          
          <div className="mb-3">
          <input type="email" className="form-control input-style" id="email" placeholder="Email Address" value={email} onChange={(e)=> setEmail(e.target.value)}  />
          </div>

          <div className="mb-3 position-relative">

          <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} class="form-control input-style" id="password" placeholder="Password" />

           <FontAwesomeIcon
        icon={showPassword ? ['fas', 'eye-slash'] : ['fas', 'eye']}
        onClick={handleTogglePassword} className='eye-icon'
      />
          </div>
          <div className="mb-3 d-flex justify-content-between">
           <button className="btn-greek">Greek</button>
           <button className="btn-non-greek">Non-Greek</button>
          </div>

          <div className="mb-3 text-center">
           <button onClick={signUp} className="btn-signin">Sign Up</button>
           
          </div>

          <div className='align-self-center mt-4 mb-4 acc-pass'>Already have an account? <Link to='/login' style={{color: '#4D2178'}}>Login</Link></div>

          <div style={{color:'#ffffff'}} className='align-self-center'>
          By signing up you agree to our <br></br><Link to='/termsofservice' style={{color: '#4D2178'}}>Terms of Service</Link> and <Link to='/privacypolicy' style={{color: '#4D2178'}}>Privacy Policy</Link>
          </div>

        </div>
      </div>
    </div>
    
    </>
  )
}
