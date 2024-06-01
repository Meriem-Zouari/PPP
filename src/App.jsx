import './App.css';
import Home from './Pages/Home/Home';
import Booking from './Pages/Booking/Booking';
import Navbar from "./Components/Navbar";
import Userprofile from './Pages/Userprofile/Userprofile';
import Shop from "./Pages/Shop/Shop";
import Dashboard from "./dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard/*" element={<Dashboard />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Destinations" element={<Shop />} />
          <Route path='/user/:activepage' element={<Userprofile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
