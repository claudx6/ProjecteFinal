import React from "react";
import TopShop from "../components/TopShop";
import ProductView from "../components/ProductView";
import MainShop from "../components/MainShop";
import Footer from "../components/Footer";

function ProductDetail() {
  return (
    <div>
       <TopShop />
       {/* <MainShop /> */}
       <ProductView /> 
       <Footer />
    </div>
  );
}

export default ProductDetail;