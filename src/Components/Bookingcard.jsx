
/*import React, { useState } from 'react';
import "../Pages/Booking/Booking.css";
import backgroundimage from '../assets/Booking.jpg';

function Bookingcard() {
  const [tripType, setTripType] = useState('round-trip'); // State to track trip type
  const [searchResults, setSearchResults] = useState([]); // State to track search results

  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Mock search results
    setSearchResults([
      { id: 1, flight: 'Flight 1', from: 'City A', to: 'City B', date: '2024-06-20' },
      { id: 2, flight: 'Flight 2', from: 'City A', to: 'City B', date: '2024-06-21' },
      // Add more mock results as needed
    ]);
  };

  return (
    <section id="Card">  {/* Changed to lowercase 'section' *//*}
      <div className="background">
        <img src={backgroundimage} alt="" />
      </div>
      <div className='container'>
        <div className='background-image'>
          <div className="card text-center" style={{ backdropFilter: 'blur(9px)', WebkitBackdropFilter: 'blur(9px)', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Flights</a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="mb-6 align-middle" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    <label htmlFor="destination1" className="form-label">From</label>
                    <input type="text" className="form-control" id="destination" placeholder="Enter any city or airport" />
                    <label htmlFor="destination2" style={{ display: 'flex', marginRight: '20px' }} className="form-label">To</label>
                    <input type="text" className="form-control" id="destination" placeholder="Enter any city or airport" />
                  </div>
                </div>
                <div className="radio-container">
                  <input type="radio" id="round-trip" name="trip-type" value="round-trip" checked={tripType === 'round-trip'} onChange={handleTripTypeChange} />
                  <label htmlFor="round-trip">Round-trip</label>
                </div>
                <div className="radio-container">
                  <input type="radio" id="one-way" name="trip-type" value="one-way" checked={tripType === 'one-way'} onChange={handleTripTypeChange} />
                  <label htmlFor="one-way">One-way</label>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputDepartOn">Depart On</label>
                    <input type="date" className="form-control" id="inputDepartOn" placeholder="Departure date" />
                  </div>
                  {tripType === 'round-trip' && (
                    <div className="form-group col-md-6">
                      <label htmlFor="inputReturnOn">Return On</label>
                      <input type="date" className="form-control" id="inputReturnOn" placeholder="Return date" />
                    </div>
                  )}
                </div>
                <div className="button-container">
                  <div className="button-wrapper">
                    <label htmlFor="adult">Adults</label>
                    <div className="quantity-controls">
                      <select id="adult">
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
                      <select id="child">
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
                      <select id="infant">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                  </div>
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Search Flights</button>
              </form>
              <div>
                {searchResults.length > 0 && (
                  <div className="search-results">
                    <h3>Search Results</h3>
                    <ul>
                      {searchResults.map(result => (
                        <li key={result.id}>
                          {result.flight} - {result.from} to {result.to} on {result.date}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bookingcard;*/


/*import React, { useState } from 'react';
import "../Pages/Booking/Booking.css";
import backgroundimage from '../assets/Booking.jpg';

function Bookingcard() {
  const [tripType, setTripType] = useState('round-trip'); // State to track trip type
  const [searchResults, setSearchResults] = useState([]); // State to track search results

  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Mock search results
    setSearchResults([
      { id: 1, airline: '320 PK-211', departure: 'ISB-DXB 18-09-20 01:00 pm', arrival: '18-09-20 03:15 pm', duration: '02:15', price: 'PKR 146675.00' },
      { id: 2, airline: '320 PK-233', departure: 'ISB-XXB 18-09-20 03:35 am', arrival: '18-09-20 05:50 am', duration: '02:30', price: 'PKR 146675.00' },
      { id: 3, airline: '320 PK-369', departure: 'ISB-YYB 18-09-20 11:00 pm', arrival: '18-09-20 01:00 am', duration: '02:00', price: 'PKR 146675.00' },
      // Add more mock results as needed
    ]);
  };

  return (
    <section id="Card">  {/* Changed to lowercase 'section' *//*}
      <div className="background">
        <img src={backgroundimage} alt="" />
      </div>
      <div className='container'>
        <div className='background-image'>
          <div className="card text-center" style={{ backdropFilter: 'blur(9px)', WebkitBackdropFilter: 'blur(9px)', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Flights</a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="mb-6 align-middle" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    <label htmlFor="destination1" className="form-label">From</label>
                    <input type="text" className="form-control" id="destination" placeholder="Enter any city or airport" />
                    <label htmlFor="destination2" style={{ display: 'flex', marginRight: '20px' }} className="form-label">To</label>
                    <input type="text" className="form-control" id="destination" placeholder="Enter any city or airport" />
                  </div>
                </div>
                <div className="radio-container">
                  <input type="radio" id="round-trip" name="trip-type" value="round-trip" checked={tripType === 'round-trip'} onChange={handleTripTypeChange} />
                  <label htmlFor="round-trip">Round-trip</label>
                </div>
                <div className="radio-container">
                  <input type="radio" id="one-way" name="trip-type" value="one-way" checked={tripType === 'one-way'} onChange={handleTripTypeChange} />
                  <label htmlFor="one-way">One-way</label>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputDepartOn">Depart On</label>
                    <input type="date" className="form-control" id="inputDepartOn" placeholder="Departure date" />
                  </div>
                  {tripType === 'round-trip' && (
                    <div className="form-group col-md-6">
                      <label htmlFor="inputReturnOn">Return On</label>
                      <input type="date" className="form-control" id="inputReturnOn" placeholder="Return date" />
                    </div>
                  )}
                </div>
                <div className="button-container">
                  <div className="button-wrapper">
                    <label htmlFor="adult">Adults</label>
                    <div className="quantity-controls">
                      <select id="adult">
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
                      <select id="child">
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
                      <select id="infant">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                  </div>
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Search Flights</button>
              </form>
              <div>
                {searchResults.length > 0 && (
                  <div className="search-results">
                    <h3>Flights</h3>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Airline</th>
                          <th>Departure</th>
                          <th>Arrival</th>
                          <th>Duration</th>
                          <th>Price</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {searchResults.map(result => (
                          <tr key={result.id}>
                            <td>{result.airline}</td>
                            <td>{result.departure}</td>
                            <td>{result.arrival}</td>
                            <td>{result.duration}</td>
                            <td>{result.price}</td>
                            <td><button className="btn btn-primary">Details</button></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bookingcard;
*/


import React, { useState } from 'react';
import "../Pages/Booking/Booking.css";
import backgroundimage from '../assets/Booking.jpg';

function Bookingcard() {
  const [tripType, setTripType] = useState('round-trip'); // State to track trip type
  const [searchResults, setSearchResults] = useState([]); // State to track search results

  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Mock search results
    setSearchResults([
      { id: 1, airline: '320 PK-211', departure: 'ISB-DXB 18-09-20 01:00 pm', arrival: '18-09-20 03:15 pm', duration: '02:15', price: 'PKR 146675.00' },
      { id: 2, airline: '320 PK-233', departure: 'ISB-XXB 18-09-20 03:35 am', arrival: '18-09-20 05:50 am', duration: '02:30', price: 'PKR 146675.00' },
      { id: 3, airline: '320 PK-369', departure: 'ISB-YYB 18-09-20 11:00 pm', arrival: '18-09-20 01:00 am', duration: '02:00', price: 'PKR 146675.00' },
      // Add more mock results as needed
    ]);
  };

  return (
    <section id="Card">
      <div className="background">
        <img src={backgroundimage} alt="" />
      </div>
      <div className='container'>
        <div className='background-image'>
          <div className="card text-center">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Flights</a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="mb-6 align-middle" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    <label htmlFor="destination1" className="form-label">From</label>
                    <input type="text" className="form-control" id="destination" placeholder="Enter any city or airport" />
                    <label htmlFor="destination2" className="form-label label1">To</label>
                    <input type="text" className="form-control" id="destination" placeholder="Enter any city or airport" />
                  </div>
                </div>
                <div className="radio-container">
                  <input type="radio" id="round-trip" name="trip-type" value="round-trip" checked={tripType === 'round-trip'} onChange={handleTripTypeChange} />
                  <label htmlFor="round-trip">Round-trip</label>
                </div>
                <div className="radio-container">
                  <input type="radio" id="one-way" name="trip-type" value="one-way" checked={tripType === 'one-way'} onChange={handleTripTypeChange} />
                  <label htmlFor="one-way">One-way</label>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputDepartOn">Depart On</label>
                    <input type="date" className="form-control" id="inputDepartOn" placeholder="Departure date" />
                  </div>
                  {tripType === 'round-trip' && (
                    <div className="form-group col-md-6">
                      <label htmlFor="inputReturnOn">Return On</label>
                      <input type="date" className="form-control" id="inputReturnOn" placeholder="Return date" />
                    </div>
                  )}
                </div>
                <div className="button-container">
                  <div className="button-wrapper">
                    <label htmlFor="adult">Adults</label>
                    <div className="quantity-controls">
                      <select id="adult">
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
                      <select id="child">
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
                      <select id="infant">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                  </div>
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Search Flights</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {searchResults.length > 0 && (
        <div className="search-results-container">
          <div className="search-results">
            <h3>Flights</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Airline</th>
                  <th>Departure</th>
                  <th>Arrival</th>
                  <th>Duration</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map(result => (
                  <tr key={result.id}>
                    <td>{result.airline}</td>
                    <td>{result.departure}</td>
                    <td>{result.arrival}</td>
                    <td>{result.duration}</td>
                    <td>{result.price}</td>
                    <td><button className="btn btn-primary">Details</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}

export default Bookingcard;
