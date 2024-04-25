import React from "react";

import CarouselDogs from '../components/CarouselDogs.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from "../components/Footer.jsx";
import ProductsCard from "../components/productsCard.jsx";


function Dogs() {
  return (
    <div>
      <Navbar />
      <CarouselDogs />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ProductsCard  />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Dogs;