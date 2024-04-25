import React from 'react'
import "/src/assets/css/TiposHairSalon.css";
import '/src/index.css';
import TiposHairSalonData from './TiposHairSalonData';
// imágenes
import image1 from '../assets/images/peluqueria/ear-hair-salon.png';
import image2 from '../assets/images/peluqueria/dog-haircut.jpeg';
import image3 from '../assets/images/peluqueria/washing-dog.jpg';
import image4 from '../assets/images/peluqueria/plucking-dog.jpg';
import image5 from '../assets/images/peluqueria/nudos-perro.jpg';
import image6 from '../assets/images/peluqueria/komondor-dog.webp';
import image7 from '../assets/images/peluqueria/dog-brush.jpg';
import image8 from '../assets/images/peluqueria/haircut.webp';
import image9 from '../assets/images/peluqueria/sanbernardo.webp';
import image10 from '../assets/images/peluqueria/chihuahua-happy.jpeg';



const TiposHairSalon = () => {
    const firstSectionText = (
        <div>
            <ul>
                <li>· Baño y masaje</li>
                <li>· Secado</li>
                <li>· Corte de uñas</li>
                <li>· Limpieza de oídos</li>
                <li>· Antiestático y perfume</li>
            </ul>
            <h2>El servicio de corte incluye:</h2>
            <ul>
                <li>· Corte acorde al arreglo de la raza</li>
                <li>· Técnica de trabajo acorde al tipo de pelo</li>
                <li>· Antiestático y perfume</li>
            </ul>
            <p>¡Se realizan trabajos a stripping o plucking y cortes a tijeras!</p>
        </div>
      );
    
      const secondSectionText = (
        <div>
            <ul>
                <li>· Cepillado</li>
                <li>· Baño</li>
                <li>· Stripping</li>
                <li>· Corte (máquina)</li>
                <li>· Corte (tijeras)</li>
                <li>· Corte combinado (máquina/tijeras)</li>
            </ul>
            <h2>Adultos y cachorros</h2>
            <ul>
                <li>· Doble capa y pelo corto</li>
                <li>· Todo tipo de razas y tamaños</li>
            </ul>
            <p>¡Se realizan trabajos a stripping o plucking y cortes a tijeras!</p>
        </div>
      );
    
      const thirdSectionText = (
        <div>
            <ul>
                <li>· Retoques patas y cara</li>
                <li>· Cepillado nudos localizados (orejas, patas)</li>
                <li>· Cepillado nudos generales</li>
                <li>· Corte de nudos</li>
            </ul>
        </div>
      );

      const fifthSectionText = (
        <div>
            <ul>
                <li>· Gigante &gt; 35 Kg</li>
                <li>· Grande 25 a 35 Kg</li>
                <li>· Mediano 10 a 25 Kg</li>
                <li>· Pequeño 4 a 10 kg</li>
                <li>· Toy &lt; 4 Kg</li>
            </ul>
        </div>
      );


  return (
    <section className="hair-section-white">
      <div className="hair-services">
          <h1>Servicios para perros</h1>
          <p>Disponemos de diferentes servicios para seguir mimando a vuestros peludos:</p>

          <TiposHairSalonData 
            className="first-hair-service"
            heading="El servicio de baño incluye:"
            text={firstSectionText}
            img1={image1}
            img2={image2}
          />

          <TiposHairSalonData 
            className="first-hair-service-reverse"
            heading="Tipos de servicio"
            text={secondSectionText}            
            img1={image3}
            img2={image4}
          />

          <TiposHairSalonData 
            className="first-hair-service"
            heading="Extras"
            text={thirdSectionText}
            img1={image5}
            img2={image6}
          />

          <TiposHairSalonData 
            className="first-hair-service-reverse"
            heading="Cortes profesionales"
            text="A máquina, a tijera o combinados, Stripping… ¡déjate aconsejar por nuestros estilistas! Te indicarán cuál es el corte más indicado para tu mascota según su raza y tus preferencias."           
            img1={image7}
            img2={image8}
          />

          <TiposHairSalonData 
            className="first-hair-service"
            heading="Clasificación de tamaños"
            text={fifthSectionText}
            img1={image9}
            img2={image10}
          />
      </div>
    </section>
  )
}

export default TiposHairSalon