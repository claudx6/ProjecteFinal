import React from 'react';
import "/src/assets/css/Location.css";
import '/src/index.css';

// iconos
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


const Location = () => {
    return (
        <div className='location'>
            <div className='venue-heading'>
                <h1>NOS ENCONTRAMOS EN:</h1>
            </div>
            <br />

            <div className='location-layout'>
            <div className='location-section'>
                <div className='shop-heading'>
                    <h1><span>Petit Amazones</span></h1>
                    <br />
                    <h3><FaCalendarAlt />&nbsp;&nbsp;&nbsp;Horario: de lunes a viernes</h3>
                    <h4>9:30h-14:00h, 16:30-19:00h</h4>

                    <h3 className='ven-h'><FaLocationDot />&nbsp;&nbsp;&nbsp;Dirección</h3>
                    <h4 className='adress'>Plaça Ramon i Cajal, local 4, El Masnou (08320), Barcelona</h4>

                    <h3 className='email-h'><MdEmail />&nbsp;&nbsp;&nbsp;Correo electrónico</h3>
                    <h4 className='email'>info@petitamazones.es</h4>

                    <h3 className='phone-n'><BsFillTelephoneFill />&nbsp;&nbsp;&nbsp;Número de teléfono</h3>
                    <h4 className='phone'>607 45 69 97</h4>
                </div>
            </div>
            
            <div className='map-section'>
                <div className='map-frame'>
                    <iframe id='map_canvas' 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.8223035754922!2d2.307633675748367!3d41.48645197128746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4ba05a84cca8d%3A0xb80d946d809f93c8!2sPetit%20Amazones!5e0!3m2!1ses!2ses!4v1706799965515!5m2!1ses!2ses"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
              
            </div>
        </div>
    )
}

export default Location;