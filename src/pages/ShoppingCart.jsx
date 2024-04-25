import React from "react";
import Navbar from '../components/Navbar.jsx';
import Footer from "../components/Footer.jsx";
import CarouselContacto from "../components/CarouselContacto.jsx";
import Location from "../components/Location.jsx";
import Form from "../components/Form.jsx";
import TopShop from "../components/TopShop.jsx";
import ShoppingCartPage from "../components/ShoppingCartPage.jsx";


function ShoppingCart() {
  return (
    <div>
      <TopShop />
      <ShoppingCartPage />
      <Footer />
    </div>
  );
}

export default ShoppingCart;