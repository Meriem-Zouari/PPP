import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Bookingcard from "../../Components/Bookingcard";
import Destinfo from "../../Components/Destinationinfo";
 function Booking () {

  return (
    <div>
      <Navbar />
      <Bookingcard/>
      <Destinfo />
    </div>
  );
}
export default Booking;