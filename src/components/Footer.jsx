import React from 'react';
import "/src/assets/css/Footer.css";

// iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className='footer'>

            <div className="sectionContainer container flex">
        

            <div className="footerLinks">
                <span className="linkTitle">CONTÁCTENOS</span>
                <li>
                    <p>Plaça Ramon i Cajal, local 4, El Masnou (08320), Barcelona</p>
                </li>

                <li>
                    <p>Telf: 607 45 69 97 </p>
                </li>

                <li>
                    <p>info@petitamazones.es</p>
                </li>
               
            </div>

            <div className="footerLinks">
                <span className="linkTitle">INFORMACIÓN</span>
                <li>
                    <a href="">Formas de pago y envíos</a>
                </li>
                <li>
                    <a href="">Cambios y devoluciones</a>
                </li>
                <li>
                    <a href="">Preguntas frecuentes</a>
                </li>
                
            </div>

            <div className="footerLinks">
                <span className="linkTitle">CONDICIONES</span>
                <li>
                    <a href="">Aviso legal</a>
                </li>
                <li>
                    <a href="">Politica de privacidad</a>
                </li>
                <li>
                    <a href="">Politica de cookies</a>
                </li>
                
            </div>

            <div className="footerLinks">
                  
                <p className='textTitle'>REDES SOCIALES</p>
                <div className="socialIcon flex">
                <FontAwesomeIcon icon={faFacebook} className='icon'/>
                <FontAwesomeIcon icon={faInstagram} className='icon' />
                </div>
            </div>

            </div>

        <div className="copyRightDiv flex">
            <p>© 2024 Petit Amazones. Todos los derechos reservados</p>
        </div>
        
        </div>
    )
}

export default Footer;