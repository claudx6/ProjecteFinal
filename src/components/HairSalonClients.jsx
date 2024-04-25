import React from 'react'
import "/src/assets/css/HairSalonClients.css";
import '/src/index.css';
import image15 from '../assets/images/tienda/image15-1.jpg'
import image17 from '../assets/images/tienda/image17-1.jpg'
import image6 from '../assets/images/tienda/image6-1.jpg'
import image7 from '../assets/images/tienda/image7-1.jpg'


const HairSalonClients = () => {
  return (
    <div className='clients'>
        <div className="gallery">
        <img src={image15} alt="" className='about-img'/>
        <img src={image17} alt="" className='about-img'/>
        <img src={image6} alt="" className='about-img'/>
        <img src={image7} alt="" className='about-img'/>
        </div>
    </div>
  )
}

export default HairSalonClients