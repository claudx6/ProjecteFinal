import React from 'react';
import "/src/assets/css/AboutUsPhotos.css";

import image2 from '../assets/images/tienda/image2.jpg';
import image12 from '../assets/images/tienda/image12.jpg';
import image4 from '../assets/images/tienda/image4.jpg';
import image5 from '../assets/images/tienda/image5.jpg';


const AboutUsPhotos = () => {
    return (
        <div className="nuestra-tienda-container">
          <h1>Nuestra tienda</h1>
          <div className="image-container">
            <img src={image2} alt="Imagen 1" />
            <img src={image12} alt="Imagen 2" />
            <img src={image4} alt="Imagen 3" />
            <img src={image5} alt="Imagen 4" />
          </div>
        </div>
      );
    };
  
  export default AboutUsPhotos;