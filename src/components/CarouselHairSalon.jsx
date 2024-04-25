import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "/src/assets/css/CarouselHairSalon.css";
import image1 from '../assets/images/peluqueria/peluqueria-canina-2.jpg';
import image2 from '../assets/images/peluqueria/peluqueria-canina-3.jpg';
import image3 from '../assets/images/peluqueria/peluqueria-canina-4.jpeg';
import image4 from '../assets/images/peluqueria/peluqueria-canina-5.jpg';


function CarouselHairSalon() {
  return (
    <Carousel fade interval={1000}>
      <Carousel.Item style={{ height: '70vh', width: '100%', position: 'relative' }}>
        <img src={image1} alt="First slide" style={{ position: 'absolute', bottom: '-20rem' }} />
        <Carousel.Caption>
          <h3>Cuida y mima<br />a tu mascota</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '70vh', width: '100%', position: 'relative' }}>
        <img src={image2} alt="Second slide" style={{ position: 'absolute', bottom: '-30rem' }} />
        <Carousel.Caption>
        <h3>Cuida y mima<br />a tu mascota</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '70vh', width: '100%', position: 'relative' }}>
        <img src={image3} alt="Third slide" style={{ position: 'absolute', bottom: '-20rem' }} />
        <Carousel.Caption>
        <h3>Cuida y mima<br />a tu mascota</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '70vh', width: '100%', position: 'relative' }}>
        <img src={image4} alt="Fourth slide" style={{ position: 'absolute', bottom: '-20rem' }} />
        <Carousel.Caption>
        <h3>Cuida y mima<br />a tu mascota</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHairSalon;
