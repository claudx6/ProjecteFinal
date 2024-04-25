import React from 'react'
import "/src/assets/css/InfoDeliveryService.css";
import '/src/index.css';
import InfoDeliveryServiceData from './InfoDeliveryServiceData';
// imágenes
import image1 from '../assets/images/servicio-domicilio/bird-playing.avif';
import image2 from '../assets/images/servicio-domicilio/cat-delivery.jpg';


const InfoDeliveryService = () => {
  return (
    <section className="delivery-section-white">
      <div className="delivery-services">
          <h1>SERVICIO A DOMICILIO</h1>
          <p>Petit Amazones sabe que el tiempo es oro. Por eso disponemos de un servicio de compras a domicilio, para facilitarte tus compras y ahorrarte desplazarte.</p>

          <InfoDeliveryServiceData 
            className="delivery-service"
            heading="Envíos en 24-48h"
            text="El tiempo de entrega de los pedidos en Petit Amazones son en 24-48 horas (laborables) desde que hagas el pedido. Este servicio es tan simple como realizar el pedido online o enviarnos un e-mail o un WhatsApp (607 45 69 97) con los productos que necesitas y nosotros los llevaremos a la puerta de tu casa en un plazo máximo de 48 horas y sin coste alguno si tu pedido es superior a 35 €. (Barcelona y alrededores). Realizamos envíos a cualquier parte de España (Península, Baleares)."
            img1={image1}
            img2={image2}
          />

      </div>
    </section>
  )
}

export default InfoDeliveryService