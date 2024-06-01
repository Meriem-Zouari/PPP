/*
import './App.css'
import Home from './Pages/Home/Home'
import Booking from './Pages/Booking/Booking';
import Connect from './Pages/Connect/Connect';
import Navbar from "./Components/Navbar";
import Userprofile from './Pages/Userprofile/Userprofile';
import Shop from "./Pages/Shop/Shop";
import Dashboard from "./dashboard/Dashboard"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
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
*/
import './App.css';
import Home from './Pages/Home/Home';
import Booking from './Pages/Booking/Booking';
import Connect from './Pages/Connect/Connect';
import Navbar from "./Components/Navbar";
import Userprofile from './Pages/Userprofile/Userprofile';
import Shop from "./Pages/Shop/Shop";
import Dashboard from "./dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard/*" element={<Dashboard />} />
          <Route path="/Connect" element={<Connect />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Destinations" element={<Shop />} />
          <Route path='/user/:activepage' element={<Userprofile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
