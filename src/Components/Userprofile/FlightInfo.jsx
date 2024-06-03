// FlightInfo.js
import React from 'react';
import './FlightInfo.css';

const FlightInfo = () => {
  return (
    <div className="flight-info">
      <h2>Flight Information</h2>
      <div className="info-container">
        <div className="info-item">
          <span className="label">Flight Number:</span>
          <span className="value">AA1234</span>
        </div>
        <div className="info-item">
          <span className="label">Departure:</span>
          <span className="value">New York (JFK)</span>
        </div>
        <div className="info-item">
          <span className="label">Arrival:</span>
          <span className="value">Los Angeles (LAX)</span>
        </div>
        <div className="info-item">
          <span className="label">Date:</span>
          <span className="value">June 15, 2024</span>
        </div>
        <div className="info-item">
          <span className="label">Time:</span>
          <span className="value">08:30 AM</span>
        </div>
        <div className="info-item">
          <span className="label">Gate:</span>
          <span className="value">B12</span>
        </div>
        <div className="info-item">
          <span className="label">Seat:</span>
          <span className="value">14A</span>
        </div>
      </div>
    </div>
  );
};

export default FlightInfo;

