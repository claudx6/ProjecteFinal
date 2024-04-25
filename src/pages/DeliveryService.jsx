import React from "react";
import Navbar from '../components/Navbar.jsx';
import CarouselDeliveryService from "../components/CarouselDeliveryService.jsx";
import InfoDeliveryService from "../components/InfoDeliveryService.jsx";
import DeliveryInfo from "../components/DeliveryInfo.jsx";
import Footer from "../components/Footer.jsx";


function DeliveryService() {
  return (
    <div>
      <Navbar />
      <CarouselDeliveryService />
      <InfoDeliveryService />
      <DeliveryInfo />
      <Footer />
    </div>
  );
}

export default DeliveryService;