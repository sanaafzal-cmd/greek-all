import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

library.add(faEye, faEyeSlash);



export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
    <div className="container-fluid d-flex align-items-center justify-content-center signup-form">
      <div className="row">
        <div className="col d-flex flex-column">
          <div className='signup-heading mt-4'>Let's create your account</div>
          <div className='signup-desc mt-4 mb-4'>Enter your details to setup your account.</div>
          <div className="mb-3">
           <input type="text" className="form-control input-style" id="fullname" placeholder="Full Name" />
          </div>
          <select className="form-select mb-3"  aria-label=".form-select-lg example" defaultValue={'UNIVERSITY_NAME'}>
            <option value={'UNIVERSITY_NAME'}>University Name</option>
           <option value="1">One</option>
           <option value="2">Two</option>
           <option value="3">Three</option>
           </select>
           <select className="form-select mb-3"  aria-label=".form-select-lg example" defaultValue={'SORORITIES_FRATERNITIES'}>
            <option value={'SORORITIES_FRATERNITIES'}>Sororities/Fraternities</option>
           <option value="1">One</option>
           <option value="2">Two</option>
           <option value="3">Three</option>
           </select>
          
          <div className="mb-3">
          <input type="email" className="form-control input-style" id="email" placeholder="Email Address" />
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

          <div className="mb-3">
           <button className="btn-signin">Sign Up</button>
          </div>

          <div className='align-self-center mt-4 mb-4 acc-pass'>Already have an account? <a href='#'>Login</a></div>

          <div style={{color:'#ffffff'}} className='align-self-center'>
          By signing up you agree to our <br></br><a href='#'>Terms of Service</a> and <a href='#'>Privacy Policy</a>
          </div>

        </div>
      </div>
    </div>
    
    </>
  )
}
