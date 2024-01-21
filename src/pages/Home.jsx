import React from "react";
import Carousel from '../components/Carousel.jsx';
import Informacion from "../components/Informacion.jsx";
import Info from "../components/Info.jsx";
import Info1 from "../components/Info1.jsx";

function Home() {
  return (
    <div>
      <Carousel />
      <br />
      <Informacion />
      <Info />
      <Info1 />
    </div>
  );
}

export default Home;