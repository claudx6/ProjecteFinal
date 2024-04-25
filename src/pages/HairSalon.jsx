import React from "react";
import Navbar from '../components/Navbar.jsx';
import Footer from "../components/Footer.jsx";
import CarouselHairSalon from "../components/CarouselHairSalon.jsx";
import HairSalonTitle from "../components/HairSalonTitle.jsx";
import HairSalonServicesPhotos from "../components/HairSalonServicesPhotos.jsx";
import HairSalonServices from "../components/HairSalonServices.jsx";
import HairSalonClients from "../components/HairSalonClients.jsx";
import TiposHairSalon from "../components/TiposHairSalon.jsx";


function HairSalon() {
  return (
    <div>
      <Navbar />
      <CarouselHairSalon />
      <div className="container">
        <HairSalonTitle subTitle='Nuestros SERVICIOS' title='Lo Que Ofrecemos'/>
        <HairSalonServicesPhotos />
        <HairSalonServices />
        <HairSalonTitle subTitle='Galería' title='Fotos de nuestros peludos'/>
        <HairSalonClients />
      </div>
      <br />
      <br />
      <TiposHairSalon />
      <Footer />
    </div>
  );
}

export default HairSalon;