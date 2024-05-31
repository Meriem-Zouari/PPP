import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar  from './components/navbar';
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import Userprofile from './pages/Userprofile/Userprofile';



function App() {
  return (
    <div className='App' >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path='/user/:activepage' element={<Userprofile/>} />
        </Routes>
      </Router>     
    </div>
  );
}

export default App;
