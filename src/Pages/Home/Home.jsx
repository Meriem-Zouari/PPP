import React, { useEffect } from "react";
import Hero from "../../Components/Hero";
import "./Home.css"

import Recommend from "../../Components/Recommend";
import Testimonials from "../../Components/Testimonial";
import Navbar from "../../Components/Navbar";

export default function () {

  return (
    <div >
      
      <Hero />
      <Recommend />
      <Testimonials />
    </div>
  );
}