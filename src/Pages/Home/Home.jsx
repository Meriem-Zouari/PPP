import React, { useEffect } from "react";
import Hero from "../../Components/Hero";
import Services from "../../Components/Services";
import Recommend from "../../Components/Recommend";
import Testimonials from "../../Components/Testimonial";
import Navbar from "../../Components/Navbar";

export default function () {

  return (
    <div>
      <Navbar />
      <Hero />
      <Recommend />
      <Testimonials />
    </div>
  );
}

