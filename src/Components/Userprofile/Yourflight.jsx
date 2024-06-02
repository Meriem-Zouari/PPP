/*import React from 'react'
import './Yourflight.css'

const Yourflight = () => {
  return (
    <div>
      Flight informations 
      
    </div>
  )
}

export default Yourflight*/
// Yourflight.js
import React from 'react';
import './Yourflight.css';
import FlightInfo from "./FlightInfo.jsx";

const Yourflight = () => {
  return (
    <div className="your-flight">
      <FlightInfo />
    </div>
  );
};

export default Yourflight;

// Yourflight.css
