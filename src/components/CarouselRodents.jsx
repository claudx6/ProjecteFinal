import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "/src/assets/css/CarouselRodents.css";
import img1 from '../assets/images/carouselTienda/hamster.jpg';
import img2 from '../assets/images/carouselTienda/roedores.webp';
import img3 from '../assets/images/carouselTienda/roedores12.jpg';


function CarouselRodents() {

  return (
    <div>
      <Carousel>
    <Carousel.Item style={{height:'70vh', width: '100%', position:'relative'}}>
      <img style={{position:'absolute', bottom:'-20rem'}}
        className="d-block w-100"
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translateX(-50%)' }}>
        <h3>Variedad de accesorios para roedores</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={{height:'70vh', width: '100%', position:'relative'}}>
      <img style={{position:'absolute', bottom:'-5rem'}}
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />

      <Carousel.Caption style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translateX(-50%)' }}>
        <h3>Variedad de accesorios para roedores</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={{height:'70vh', width: '100%', position:'relative'}}>
      <img style={{position:'absolute', bottom:'-5rem'}}
        className="d-block w-100"
        src={img3}
        alt="Third slide"
      />

      <Carousel.Caption style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translateX(-50%)' }}>
        <h3>Variedad de accesorios para roedores</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
  );
}

export default CarouselRodents;