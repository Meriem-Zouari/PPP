import './Login.css'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import backgroundImage from '../../assets/Booking.jpg'; 

const Login = () => {
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
            <input type="email" placeholder='Email Id' />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password' />
          </div>
        </div>
        <div className="submit-container">
          <button className="submit" type="button"  >
            Sign in
          </button>
        </div> 
        
      </div>
    </div>
  )
}

export default Login
