import React from "react";
import Navbar from "./navbar";
import Hero from "./Hero";
import Media from "./Media";
import Feature from "./Feature";
import Accelerate from "../Homepage/Accelerate";
import Pricing from "../Homepage/Pricing";
import Testimonials from "../Homepage/Testimonials";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Media />
      <Feature />
      <Accelerate />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Homepage;
