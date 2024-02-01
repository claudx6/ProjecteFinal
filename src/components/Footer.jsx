import React from 'react';
import "/src/assets/css/Footer.css";

// import Logo from '../assets/images/carousel/Logo.jpg';
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { FaPinterestP } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='footer'>

            <div className="sectionContainer container flex">
        

            <div className="footerLinks">
                <span className="linkTitle">Contáctenos</span>
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
                
            </div>

            <div className="footerLinks">
                  
                <p className='textTitle'>Redes sociales</p>
                <div className="socialIcon flex">
                <TiSocialFacebook className='icon'/>
                <TiSocialTwitter className='icon'/>
                <TiSocialYoutube className='icon'/>
                <FaPinterestP className='icon'/>
                </div>
            </div>

            </div>

        <div className="copyRightDiv flex">
            <p>© 2024 Amazones. Todos los derechos reservados</p>
        </div>
        
        </div>
    )
}

export default Footer


// import React from 'react';
// import '/src/assets/css/Footer.css';

// import { TiSocialFacebook } from 'react-icons/ti';
// import { TiSocialTwitter } from 'react-icons/ti';
// import { TiSocialYoutube } from 'react-icons/ti';
// import { FaPinterestP } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <div className='footer'>
//       <div className='sectionContainer container flex'>
//         {/* Column 1 */}
//         <div className='footerLinks'>
//           <span className='linkTitle'>Informacion</span>
//           <li>
//             <a href=''>Inicio</a>
//           </li>
//           {/* Add more links as needed */}
//         </div>

//         {/* Column 2 */}
//         <div className='gridOne'>
//           <div className='logoDiv'>{/* <img src={Logo} className='Logo' /> */}</div>
//           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit!</p>
//           <div className='socialIcon flex'>
//             <TiSocialFacebook className='icon' />
//             <TiSocialTwitter className='icon' />
//             <TiSocialYoutube className='icon' />
//             <FaPinterestP className='icon' />
//           </div>
//         </div>

//         {/* Additional Content */}
//         <div className='additionalContent'>
//           {/* Add your additional content here */}
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className='copyRightDiv flex'>
//         <p>
//           Courtesy Design | Developed by{' '}
//           <a href='https://emailto-isratech8@outlook.com' target='_blank'>
//             Amazones
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Footer;

