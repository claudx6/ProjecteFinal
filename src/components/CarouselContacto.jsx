import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "/src/assets/css/CarouselContacto.css";
import image12 from '../assets/images/tienda/image12.jpg';
import image2 from '../assets/images/tienda/image2.jpg';
import img5 from '../assets/images/carousel/img5.jpg';
import img6 from '../assets/images/carousel/img6.jpg';



function CarouselContacto() {
  return (
    <Carousel fade interval={1000}>
      <Carousel.Item style={{ height: '70vh', width: '100%', position: 'relative' }}>
        <img src={image12} alt="First slide" style={{ position: 'absolute', bottom: '-10rem' }} />
        <Carousel.Caption>
          <h3>Contacta con Petit Amazones, <br />te asesoraremos</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '70vh', width: '100%', position: 'relative' }}>
        <img src={image2} alt="Second slide" style={{ position: 'absolute', bottom: '-10rem' }} />
        <Carousel.Caption>
          <h3>Contacta con Petit Amazones, <br />te asesoraremos</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '70vh', width: '100%', position: 'relative' }}>
        <img src={img5} alt="Third slide" style={{ position: 'absolute', bottom: '-10rem' }} />
        <Carousel.Caption>
          <h3>Contacta con Petit Amazones, <br />te asesoraremos</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '70vh', width: '100%', position: 'relative' }}>
        <img src={img6} alt="Fourth slide" style={{ position: 'absolute', bottom: '-10rem' }} />
        <Carousel.Caption>
          <h3>Contacta con Petit Amazones, <br />te asesoraremos</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselContacto;
