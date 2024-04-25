import React from "react";
import TopShop from "../components/TopShop";
import MainShop from "../components/MainShop";
import ProductsCard from "../components/productsCard";
import Footer from "../components/Footer";
function Products() {
  return (
    <div>
      <TopShop />
      <MainShop /> 
      <ProductsCard />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Products;