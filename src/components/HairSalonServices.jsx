import React from 'react'
import "/src/assets/css/HairSalonServices.css";
import '/src/index.css';
import image101 from '../assets/images/tienda/image10-1.jpg'


const HairSalonServices = () => {
  return (
    <div className='aboutServices'>
        <div className="about-left">
            <img src={image101} alt="" className='about-img'/>
        </div>
        <div className="about-right">
            <h3>PELUQUERÍA CANINA</h3>
            <h2>¡Ellos también se merecen un momento beauty!</h2>
            <p>Nuestros expertos en peluquería canina te brindan una experiencia única y confortable, ofreciendo un rango de productos. Ofrecemos el servicio de peluquería canina comercial y de exposición. Realizamos arreglos a tijeras, máquina y stripping. Cortes de raza y creativos. Ofrecemos baños terapéuticos, arreglos higiénicos y corte de uñas.</p>
        </div>
    </div>
  )
}

export default HairSalonServices