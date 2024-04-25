import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "/src/assets/css/CarouselDogs.css";
import img1 from '../assets/images/carouselTienda/dog-border-collie.jpg';
import img2 from '../assets/images/carouselTienda/dog-happy.jpg';
import img3 from '../assets/images/carouselTienda/shiba-inu.jpg';


function CarouselDogs() {

  return (
    <div>
      <Carousel>
    <Carousel.Item style={{height:'70vh', width: '100%', position:'relative'}}>
      <img style={{position:'absolute', bottom:'-15rem'}}
        className="d-block w-100"
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translateX(-50%)' }}>
        <h3>Disponemos de cualquier accesorio que necesite su mascota</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={{height:'70vh', width: '100%', position:'relative'}}>
      <img style={{position:'absolute', bottom:'-15rem'}}
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />

      <Carousel.Caption style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translateX(-50%)' }}>
        <h3>Disponemos de cualquier accesorio que necesite su mascota</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={{height:'70vh', width: '100%', position:'relative'}}>
      <img style={{position:'absolute', bottom:'-10rem'}}
        className="d-block w-100"
        src={img3}
        alt="Third slide"
      />

      <Carousel.Caption style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translateX(-50%)' }}>
        <h3>Disponemos de cualquier accesorio que necesite su mascota</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
  );
}

export default CarouselDogs;