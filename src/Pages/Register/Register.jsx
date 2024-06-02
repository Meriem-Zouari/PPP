import './Register.css'
import { useState } from 'react'

import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import backgroundImage from '../../assets/Booking.jpg'; 
import httpClient from '../httpClient'



const Register = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [userName,setuserName] = useState("")


  const registerUser = async ()=>{
    console.log(email,password);

    try{
      const resp = await httpClient.post("//localhost:5000/Register",{
        userName,
        email,
        password,
      });

      window.location.href = "/";
    } catch (error){
      if(error.response.status === 401){
        alert("Invalid credentials")
      }
    }



  };
  return (
    <div className="background"
    style={{
      backgroundImage: `url(${backgroundImage})`, // Set the background image
      backgroundSize: 'cover', // Cover the entire area
      backgroundPosition: 'center', // Center the background image
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
      <div className='containerr' >
        <div className="header">
          <div className="text">Register</div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="" x/>
            <input type="text" placeholder='UserName' value={userName} onChange={(e) => setuserName(e.target.value)} />
          </div>

          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email Id' value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <div className="submit-container">
          <button className="submit" type="button" onClick={() => registerUser()} >
            Sign up
          </button>
        </div> 
        
      </div>
    </div>
  )
}

export default Register
