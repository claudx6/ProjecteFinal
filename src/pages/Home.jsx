import React from "react";
import Carousel from '../components/Carousel.jsx';
import Navbar from '../components/Navbar.jsx';

import Informacion from "../components/Informacion.jsx";
import Info from "../components/Info.jsx";
// import Info1 from "../components/Info1.jsx";
import Subscribe from "../components/Subscribe.jsx";
import Footer from "../components/Footer.jsx";



function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Informacion />
      {/* <Info /> */}
      {/* <Info1 /> */}
      {/* <Subscribe /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;