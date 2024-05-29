import React, { useState } from 'react'
import './Connect.css'

import user_icon from '../../resources/person.png'
import email_icon from '../../resources/email.png'
import password_icon from '../../resources/password.png'
import backgroundImage from '../../resources/BACKGROUND.jpg'; // Import your image

const LoginSignup = () => {
  const [action,setAction]=useState("Sign Up")
  return (
    <div classname="background"
    style={{
      backgroundImage: `url(${backgroundImage})`, // Set the background image
      backgroundSize: 'cover', // Cover the entire area
      backgroundPosition: 'center', // Center the background image
      minHeight: '100vh', // Make sure it covers the entire viewport height
    }}
  >
      <div className='containerr' >
        <div className="header">
          <div className="text">{action}</div>
          {/* <div className="underline"></div> */}
        </div>
        <div className="inputs">
          {action ==="Login"?<div></div>:<div className="input">
            <img src={user_icon} alt="" x/>
            <input type="text" placeholder='Name' />
          </div>}

          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email Id' />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password' />
          </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span> </div>}
        <div className="submit-container">
          <div className={action==="Login"?"Submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action==="Sign Up"?"Submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
        
      </div>
    </div>
  )
}

export default LoginSignup
