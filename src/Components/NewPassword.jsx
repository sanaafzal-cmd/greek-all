import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';


library.add(faGoogle);


export default function NewPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const passwordsMatch = password === confirmPassword;
const errorMessage = passwordsMatch ? '' : 'Passwords do not match';
const isFormValid = passwordsMatch && password !== '';

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  }

  const setPasswordToggle = () => {
 setShowConfirmPassword(!showConfirmPassword);
         }
  return (
    <>
    <div className="container-fluid d-flex align-items-center justify-content-center login-form">
        <div className="row">
            <div className="col d-flex flex-column">
                <div className='forgot-pass-heading mt-4'>Create New Password</div>
                <div className='forgot-pass-desc mt-4 mb-4'>
                Please create a new password
                </div>
                <div className="mb-3 position-relative">

<input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} class="form-control input-style" id="password" placeholder="Password" />

 <FontAwesomeIcon
icon={showPassword ? ['fas', 'eye'] : ['fas', 'eye-slash']}
onClick={handleTogglePassword} className='eye-icon'
/>
</div>

<div className="mb-3 position-relative">

<input type={showConfirmPassword ? 'text' : 'password'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} class="form-control input-style" id="confirm-password" placeholder="Confirm Password" />

 <FontAwesomeIcon
icon={showConfirmPassword ? ['fas', 'eye'] : ['fas', 'eye-slash']}
onClick={setPasswordToggle} className='eye-icon'
/>
</div>
{!passwordsMatch && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
          <div class="mb-3">
           <button class="btn-signin" type='submit' disabled={!isFormValid}>Confirm Password</button>
          </div>

          <div className='align-self-center mt-4 mb-4 acc-pass'>Already have an account? <a href='#' style={{color: '#4D2178'}}>Login</a></div>


            </div>
        </div>
    </div>
      
    </>
  )
}
