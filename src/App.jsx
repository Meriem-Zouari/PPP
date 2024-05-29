{/*import { useState } from 'react'*/}

import './App.css'

// App.jsx

import React from 'react';
import Booking from './Pages/Booking/Booking';
import Connect from './Pages/Connect/Connect';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/Connect" element={<Connect/>}/>
      <Route path="/Booking" element={<Booking/>}/>
      
      </Routes>
      </Router>
    </>
  );
}

export default App;
