{/*import { useState } from 'react'*/}

import './App.css'

// App.jsx

import React from 'react';
import Home from './Pages/Home/Home'
import Booking from './Pages/Booking/Booking';
import Connect from './Pages/Connect/Connect';
import Navbar from "./Components/Navbar";
import Userprofile from './Pages/Userprofile/Userprofile';
import Shop from "./Pages/Shop/Shop";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Connect" element={<Connect/>}/>
      <Route path="/Booking" element={<Booking/>}/>
      <Route path="/Destinations" element={<Shop/>} />
      <Route path='/user/:activepage' element={<Userprofile/>} />

      
      </Routes>
      </Router>
    </>
  );
}

export default App;
