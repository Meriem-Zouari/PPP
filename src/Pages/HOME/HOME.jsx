import React, { useEffect } from "react";
import Hero from "../../Components/Hero";
import Services from "../../Components/Services";
import Recommend from "../../Components/recommend";
import Testimonials from "../../Components/Testimonial";

export default function () {

  return (
    <div>
      <Hero />
      <Services />
      <Recommend />
      <Testimonials />
    </div>
  );
}