import React, { useEffect } from 'react';
import '/src/assets/css/DeliveryInfo.css';

import image1 from '../assets/images/servicio-domicilio/dapper-dog-box.jpg';
import image2 from '../assets/images/servicio-domicilio/Best-Dog-Boxes.webp';
import image3 from '../assets/images/servicio-domicilio/bunny-toys.webp';
import image4 from '../assets/images/servicio-domicilio/tortoise-toy.jpg';

import { imageZoomEffect } from '../assets/js/imageZoomEffect';


const DeliveryInfo = () => {
    useEffect(() => {
        imageZoomEffect(); // efecto zoom para las imágenes
      }, []);

  return (
    <section className="delivery-info-section">
      <div className="yellow-rectangle">
        <p>Repartimos a domicilio gratis por un importe mayor de 35€. Solo Barcelona.</p>
      </div>
      <div className="image-container">
        <img src={image1} alt="Imagen 1" />
        <img src={image3} alt="Imagen 2" />
        <img src={image4} alt="Imagen 3" />
        <img src={image2} alt="Imagen 4" />
      </div>
    </section>
  );
};

export default DeliveryInfo;
