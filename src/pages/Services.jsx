import React from "react";
import Navbar from '../components/Navbar.jsx';
import CarouselServices from "../components/CarouselServices.jsx";
import TiposServicios from "../components/TiposServicios.jsx";
import Footer from "../components/Footer.jsx";


function Services() {
  return (
    <div>
      <Navbar />
      <CarouselServices />
      <TiposServicios />
      <Footer />
    </div>
  );
}

export default Services;