import React , { useState }  from 'react';
import '../../Booking/Booking.css';
import backgroundimage from '../../assets/plane.jpg'
function Booking  ()  {
  return (
<Section id="Card">     

<div className="background">
        <img src={backgroundimage} alt="" />
      </div>



     <div className='container'>
    <div className='background-image'>
      
      <div className="card text-center" style={{backdropFilter: 'blur(9px)',
  WebkitBackdropFilter: 'blur(9px)',
  backgroundColor: 'rgba(255, 255, 255, 0.1)'
   }}>
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">Flights</a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <form>
            <div className="form-row">
              <div className="mb-6 align-middle" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <label htmlFor="destination1" className="form-label">From</label>
                
                <input type="text" className="form-control" id="destination" placeholder="Enter any city or airport" />

                <label htmlFor="destination2" style={{ display: 'flex', marginRight: '20px' }} className="form-label">To</label>
                <input type="text" className="form-control" id="destination" placeholder="Enter any city or airport" />
              </div>
            </div>
            <div className="radio-container">
    <input type="radio" id="round-trip" name="trip-type" value="round-trip"/>
    <label htmlFor="round-trip">Round-trip</label>
  </div>
  <div className="radio-container">
    <input type="radio" id="one-way" name="trip-type" value="one-way"/>
    <label htmlFor="one-way">One-way</label>
  </div>
            <div className="form-row">
              {/* Depart On */}
              <div className="form-group col-md-6">
                <label htmlFor="inputDepartOn">Depart On</label>
                <input type="date" className="form-control" id="inputDepartOn" placeholder="Departure date" />
              </div>
              {/* Return On */}
              <div className="form-group col-md-6">
                <label htmlFor="inputReturnOn">Return On</label>
                <input type="date" className="form-control" id="inputReturnOn" placeholder="Return date" />
              </div>
            </div>
            <div className="button-container">
      <div className="button-wrapper">
        <label htmlFor="adult">Adults</label>
        <div className="quantity-controls">
          
          <select id="adult" >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <div className="button-wrapper">
        <label htmlFor="child">Children</label>
        <div className="quantity-controls">
          <select id="child"  >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
           
          </select>
          
        </div>
      </div>
      <div className="button-wrapper">
        <label htmlFor="infant">Infants</label>
        <div className="quantity-controls">
         
          <select id="infant" >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
           
          </select>
         
        </div>
      </div>
    </div>
           <br></br>
            <button type="submit" className="btn btn-primary">Search Flights</button>
          </form>
        </div>
      </div>
      </div>
      
  
    </div>
       
    
    </Section>
  );
}

export default Booking;
