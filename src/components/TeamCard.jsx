import React, { useState } from "react";
import "/src/assets/css/TeamCard.css";
import img1 from '../assets/images/tienda/image18.jpg';

function TeamCard() {
  let message = `Sobre mi`;
  return (
    <section className="section-white">
      <div className="container">
        <div className="row justify-content-center align-items-center"> {/* Modificado */}
          <div className="col-md-12 text-center">
            <h2 className="section-title">
              Conóceme un poco más
            </h2>
            <p className="section-subtitle">{message}</p>
          </div>

          <div className="col-sm-6 col-md-4"> {/* Quita la clase team-container */}
            <div className="team-item">
              <img src={img1} className="team-img" alt="pic" />
              <h3>LAURA</h3>
              <div class="team-info">
                <p>CEO</p>
                <p>Laura es la fundadora de Petit Amazones. Su amor y pasión por los animales se reflejan en cada aspecto de su negocio. Desde la selección de productos hasta el cuidado y atención que brindamos a nuestras mascotas, Laura se esfuerza por crear un ambiente acogedor y seguro para todos nuestros amigos de cuatro patas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamCard;