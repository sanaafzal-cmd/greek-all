import React from 'react'

export default function Otp() {
  return (
    <>
    <div className="container-fluid d-flex align-items-center justify-content-center login-form">
        <div className="row">
            <div className="col d-flex flex-column">
                <div className='forgot-pass-heading mt-4'>OTP Verification</div>
                <div className='forgot-pass-desc mt-4 mb-4'>
                Check your email. We've sent you the PIN at your <br></br> email domain@gmail.com
                </div>
            <div class="mb-4 d-flex flex-row justify-content-between">
             <input type="text" class="form-control otp-input"/>
             <input type="text" class="form-control otp-input"/>
             <input type="text" class="form-control otp-input"/>
             <input type="text" class="form-control otp-input"/>

            </div>
          <div class="mb-3">
           <button class="btn-signin">Verify OTP</button>
          </div>

          <div className='align-self-center mt-4 mb-4 acc-pass'>Already have an account? <a href='#' style={{color: '#4D2178'}}>Login</a></div>


            </div>
        </div>
    </div>
      
    </>
  )
}
