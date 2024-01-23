import React from 'react';
import "/src/assets/css/Info.css";
import '/src/index.css';


// Imported icons
import { FaCalendarDay } from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";
import { MdOutlineShoppingBasket } from "react-icons/md";


const Info = () => {
    return (
        <div className='info'>
            <div className='infoContainer container'>

                <div className="titleDiv flex">
                    <h2>Ofertas exclusivas para clientes</h2>
                    <button className='btn'>
                        Mirar
                    </button>
                </div>

                <div className="cardsDiv grid">

                    <div className="singleCard grid">
                        <div className="iconDiv flex colorOne">
                        <MdOutlineShoppingBasket className='icon'/>
                        </div>
                        <span className='cardTitle'>En Productos Seleccionados</span>
                        <p>Descuentos exclusivos en ciertos productos o categorías para vosotros.</p>
                    </div>

                    <div className="singleCard grid">
                        <div className="iconDiv flex colorTwo">
                        <BsShieldCheck className='icon'/>
                        </div>
                        <span className='cardTitle'>Programa de Lealtad</span>
                        <p>Programa de lealtad donde podréis acumular puntos con cada compra que podéis canjear por descuentos o productos gratuitos en el futuro.</p>
                    </div>

                    <div className="singleCard grid">
                        <div className="iconDiv flex colorThree">
                        <FaCalendarDay className='icon'/>
                        </div>
                        <span className='cardTitle'>Ofertas por cumpleaños de mascotas</span>
                        <p>Celebra el cumpleaños de vuestras mascotas con cupones de descuento o regalos especiales para vosotros.</p>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Info