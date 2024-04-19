import React from 'react'
import Navbar from "./Components/Navbar"
import HOME from './Pages/HOME/HOME'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Connect from './Pages/Connect/Connect'

export default function App() {
  return (
    <>


    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HOME/>}/>
        <Route path="/Connect" element={<Connect/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

