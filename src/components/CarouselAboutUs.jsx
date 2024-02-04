import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "/src/assets/css/Carousel.css";
import img1 from '../assets/images/carousel/img1.jpg';
import img2 from '../assets/images/carousel/img2.jpg';
import img3 from '../assets/images/carousel/img3.jpg';



function CarouselAboutUs() {

  return (
    <div>
      <Carousel>
    <Carousel.Item style={{height:'70vh', width: '100%', position:'relative'}}>
      <img style={{position:'absolute', bottom:'-10rem'}}
        className="d-block w-100"
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translateX(-50%)' }}>
        <h3>¡Petit Amazones, !</h3>
        <p>Disponemos de una tienda equipada con todo lo que necesita tu mascota.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={{height:'70vh', width: '100%', position:'relative'}}>
      <img style={{position:'absolute', bottom:'-5rem'}}
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />

      <Carousel.Caption>
        {/* <h3>Second slide label</h3> */}
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={{height:'70vh', width: '100%', position:'relative'}}>
      <img style={{position:'absolute', bottom:'-10rem'}}
        className="d-block w-100"
        src={img3}
        alt="Third slide"
      />

      <Carousel.Caption style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translateX(-50%)' }}>
        {/* <h3>Third slide label</h3> */}
        <p>
          No te pierdas las novedades.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
  );
}

export default CarouselAboutUs;