import React from 'react';
import "/src/assets/css/HairSalonServicesPhotos.css";
import '/src/index.css';
import imageDog from '../assets/images/peluqueria/dog-hair-salon1.jpg'
import imageWetDog from '../assets/images/peluqueria/wet-hair-salon1.jpg'
import imageEar from '../assets/images/peluqueria/ear-hair-salon1.png'

// icons
import petGrooming from '../assets/images/icons/pet-grooming.png'
import petDryer from '../assets/images/icons/pet-dryer.png'
import petCleaning from '../assets/images/icons/ear-cleaning.png'

const HairSalonServicesPhotos = () => {
  return (
    <div className='services'>
        <div className="service">
            <img src={imageDog} alt=""/>
            <div className="caption">
                <img src={petGrooming} alt="" />
                <p>Corte de pelo y uñas</p>
            </div>
        </div>
        <div className="service">
            <img src={imageWetDog} alt=""/>
            <div className="caption">
                <img src={petDryer} alt="" />
                <p>Baño</p>
            </div>
        </div>
        <div className="service">
            <img src={imageEar} alt=""/>
            <div className="caption">
                <img src={petCleaning} alt="" />
                <p>Limpieza de orejas y dientes</p>
            </div>
        </div>
    </div>
  )
}

export default HairSalonServicesPhotos