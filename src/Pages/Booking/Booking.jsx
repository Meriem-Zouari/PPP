import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Booking from "../../Components/Bookingcard";
import Destinfo from "../../Components/Destinationinfo";
export default function () {

  return (
    <div>
      <Navbar />
      <Booking/>
      <Destinfo />
    </div>
  );
}
