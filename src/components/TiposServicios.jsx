import React from 'react'
import "/src/assets/css/TiposServicios.css";
import '/src/index.css';
import TiposServiciosData from './TiposServiciosData';
// imágenes
import image1 from '../assets/images/peluqueria/ear-hair-salon.png';
import image2 from '../assets/images/peluqueria/dog-haircut.jpeg';
import image3 from '../assets/images/servicio-domicilio/delivery-entrega-a-domicilio.png';
import image4 from '../assets/images/servicio-domicilio/envio-a-domicilio.png';


const TiposServicios = () => {
  return (
    <section className="section-white">
      <div className="services">
          <h1>Tipos de Servicios</h1>
          <p>Disponemos de diferentes servicios para seguir mimando a vuestras mascotas:</p>

          <TiposServiciosData 
            className="first-service"
            heading="Peluquería canina"
            text="Experimenta el cuidado excepcional para tu peludo amigo en nuestra peluquería canina. Nuestro equipo de expertos en belleza animal se encargará de mimar a tu mascota con cortes a la medida, baños relajantes y tratamientos específicos para mantener su pelaje sano y brillante. ¡Déjanos transformar a tu compañero de cuatro patas en la mejor versión de sí mismo!"
            img1={image1}
            img2={image2}
            buttonText="VER"
            buttonUrl="/servicios/peluqueria"
          />

          <TiposServiciosData 
            className="first-service-reverse"
            heading="Servicio a domicilio"
            text="Simplifica la vida de tu mascota y la tuya con nuestro servicio a domicilio. Desde comida y juguetes hasta cuidados especiales, llevamos la tienda directamente a tu puerta. Nuestros profesionales entregan productos de alta calidad en el menor tiempo posible. ¡Haz que la felicidad de tu mascota sea tu prioridad, sin importar dónde te encuentres!"
            img1={image3}
            img2={image4}
            buttonText="VER"
            buttonUrl="/servicios/servicio-a-domicilio"
          />

      </div>
    </section>
  )
}

export default TiposServicios