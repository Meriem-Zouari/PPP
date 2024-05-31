import React , { useState }  from 'react';
import "../Pages/Booking/Booking.css";
import Destination from '../assets/Francedest.png'

function Destinfo  ()  {
    return (
      <div className="destination-image-container">  {/* Container for destination image */}
          <img src={Destination} alt=""></img>
        </div>);
}
export default Destinfo;