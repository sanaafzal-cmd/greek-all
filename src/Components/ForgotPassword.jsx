import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <>
    <div className="container-fluid d-flex align-items-center justify-content-center login-form">
        <div className="row">
            <div className="col d-flex flex-column">
                <div className='forgot-pass-heading mt-4'>Forgot Password?</div>
                <div className='forgot-pass-desc mt-4 mb-4'>
                Enter email address to receive a 4 digit code <br></br>for verification
                </div>
            <div class="mb-4">
             <input type="email" class="form-control input-style" id="exampleFormControlInput1" placeholder="Email Address" />
            </div>
          <div class="mb-3">
           <button class="btn-signin">Verify Code</button>
          </div>

          <div className='align-self-center mt-4 mb-4 acc-pass'>Already have an account? <Link to='/login' style={{color: '#4D2178'}}>Login</Link></div>


            </div>
        </div>
    </div>
      
    </>
  )
}
