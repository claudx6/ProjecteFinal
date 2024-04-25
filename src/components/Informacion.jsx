import React from "react";
import "/src/assets/css/Informacion.css";
import '/src/index.css';
import img4 from '../assets/images/carousel/img4.jpg';

function Informacion() {
  return (
    <div className='information container section'>
        <div className="informationContainer">
            <div className="titlesDiv">
                <small>Nuestros servicios</small>
            </div>
        
            <div className="infoDiv grid">
                <div className="textDiv">
                    <div className="singleInfo">
                        <span className='number colorOne'>01</span>
                        <div>
                            <h4>Tienda física</h4>
                            <p>Descubre un paraíso para tus mascotas en nuestra tienda física. Ofrecemos una amplia gama de productos cuidadosamente seleccionados, desde alimentos nutritivos hasta juguetes y accesorios de calidad. Nuestro personal amable y conocedor está listo para ayudarte a encontrar todo lo que necesitas para mantener a tus amigos peludos felices y saludables.</p>
                        </div>
                    </div>

                    <div className="singleInfo">
                        <span className='number colorTwo'>02</span>
                        <div>
                            <h4>Perruquería canina</h4>
                            <p>Transforma la apariencia de tus queridas mascotas con nuestra perruquería canina de primera clase. Nuestro equipo de estilistas expertos se especializa en tratamientos de spa para perros, cortes de pelo personalizados y cuidado integral. En un ambiente relajado y seguro, garantizamos que tus mascotas se sientan mimadas y salgan luciendo radiantes.</p>
                        </div>
                    </div>

                    <div className="singleInfo">
                        <span className='number colorThree'>03</span>
                        <div>
                            <h4>Servicio a domicilio</h4>
                            <p>Simplifica tu vida y brinda comodidad a tus mascotas con nuestro servicio a domicilio. Ya sea que necesites entregas rápidas de productos esenciales o prefieras que nuestros profesionales cuiden de tus mascotas en la comodidad de tu hogar, estamos aquí para adaptarnos a tus necesidades. Ofrecemos la misma calidad de servicio y atención personalizada, ahora directamente en tu puerta.</p>
                        </div>
                    </div>
                </div>

                <div className="imgDiv">
                    <img src={img4} alt="Servicios" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Informacion;
