import React from 'react';
import "/src/assets/css/Footer.scss";

// import Logo from '../assets/images/carousel/Logo.jpg';
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { FaPinterestP } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='footer'>

            <div className="sectionContainer container grid">
                <div className="gridOne">
                    <div className="logoDiv">
                    {/* <img src={Logo} className='Logo' /> */}
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit!</p>
                <div className="socialIcon flex">
                <TiSocialFacebook className='icon'/>
                <TiSocialTwitter className='icon'/>
                <TiSocialYoutube className='icon'/>
                <FaPinterestP className='icon'/>
                </div>
            </div>

            <div className="footerLinks">
                <span className="linkTitle">Informacion</span>
                <li>
                    <a href="">Inicio</a>
                </li>
                <li>
                    <a href="">Inicio</a>
                </li>
                <li>
                    <a href="">Inicio</a>
                </li>
                <li>
                    <a href="">Inicio</a>
                </li>
                <li>
                    <a href="">Inicio</a>
                </li>
                <li>
                    <a href="">Inicio</a>
                </li>
            </div>

            <div className="footerLinks">
                <span className="linkTitle">Informacion</span>
                <li>
                    <a href="">asdada</a>
                </li>
                <li>
                    <a href="">Inicio</a>
                </li>
                <li>
                    <a href="">Inicio</a>
                </li>
                <li>
                    <a href="">Inicio</a>
                </li>
                <li>
                    <a href="">Inicio</a>
                </li>
                <li>
                    <a href="">Inicio</a>
                </li>
            </div>

            </div>

        <div className="copyRightDiv flex">
            <p>Courtesy Design | Developed by <a href="https://emailto-isratech8@outlook.com" tsrget='_blank'>Amazones</a></p>
        </div>
        
        </div>
    )
}

export default Footer