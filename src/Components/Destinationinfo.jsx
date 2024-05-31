import React , { useState }  from 'react';
import '../../Booking/Booking.css';
import Destination from '../../assets/Destination.jpg'

function Destinfo  ()  {
    return (
      <div className="destination-image-container">  {/* Container for destination image */}
          <img src={Destination} alt=""></img>
        </div>);
}
export default Destinfo;