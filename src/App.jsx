{/*import { useState } from 'react'*/}

import './App.css'

// App.jsx

import React from 'react';
import Home from './Pages/Home/Home'
import Booking from './Pages/Booking/Booking';
import Connect from './Pages/Connect/Connect';
import Navbar from "./Components/Navbar";
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
      
      </Routes>
      </Router>
    </>
  );
}

export default App;
