import React, { useState } from 'react';




const SignUp = () => {
    return (
      <div>
        <div className="card-container" style={{
          display: 'grid',
          
          justifyContent: 'center',
          height: '650px',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
          margin: 'auto',
          gridTemplateColumns: 'repeat(2, 1fr)',
          width: '100%',          
          alignContent: 'center'
        }}>
          {/* Sign Up Card for client */}
          <div className="card" >
            <img src="images/login1.jpg" className="card-img-top" alt="login" />
            <div className="card-body">
              <h5 className="card-title">Client Sign Up</h5>
              <p className="card-text">Not a Member Yet?</p>
              <a href="ClientSignup" className="btn btn-primary">Sign Up for Client</a>
            </div>
          </div>
  
          {/* Sign Up Card for vendor*/}
          <div className="card">
            <img src="images/signup.jpg" className="card-img-top" alt="signup" />
            <div className="card-body">
              <h5 className="card-title">Vendor Sign Up</h5>
              <p className="card-text">Not A Member Yet?</p>
              <a href="VendorSignup" className="btn btn-primary">Sign Up for Vendor</a>
            </div>
          </div>
        </div>
  
        
      </div>
    );
  };
  
  export default SignUp;
  