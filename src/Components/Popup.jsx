// Popup.js
import React from 'react';
import './Popup.css'; // Ensure you have some basic styles

const Popup = ({ show, handleClose, children }) => {
  return (
    <div className={`popup ${show ? 'show' : ''}`}>
      <div className="popup-content">
        <button className="close" onClick={handleClose}>×</button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
