import React from "react";
import Navbar from '../components/Navbar.jsx';
import Footer from "../components/Footer.jsx";
import CarouselContacto from "../components/CarouselContacto.jsx";
import Location from "../components/Location.jsx";




function Contactus() {
  return (
    <div>
      <Navbar />
      <CarouselContacto />
      <br />
      <Location />
      <Footer />
    </div>
  );
}

export default Contactus;