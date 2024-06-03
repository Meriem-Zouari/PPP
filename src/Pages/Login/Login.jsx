import './Login.css'
import { useState } from 'react'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import backgroundImage from '../../assets/Booking.jpg'; 
import httpClient from '../httpClient'

const Login = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const logInUser = async ()=>{
    console.log(email,password);

    try{
      const resp = await httpClient.post("http://localhost:5000/Login",{
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
          <div className="text">Login</div>
        </div>
        <div className="inputs">

          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email Id' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <div className="submit-container">
          <button className="submit" type="button" onClick={() => logInUser()} >
            Sign in
          </button>
        </div> 
        <a href='/Register'>SIGN UP</a>
      </div>
    </div>
  )
}

export default Login
