import React, { useState } from "react";
import "/src/assets/css/TeamCard.css";



function TeamCard() {
  let message = `Sobre mi`;
  return (
    <section className="section-white">
    <div className="container">
        <div className="row">

            <div className="col-md-12 text-center">
                <h2 className="section-title">
                    Conóceme un poco más
                </h2>
                <p className="section-subtitle">{message}</p>
            </div>

            <div className="col-sm-6 col-md-4">
                <div className="team-item">
                    <img src="/src/images/team/jose_card.jpg" className="team-img" alt="pic" />
                    <h3>LAURA</h3>
                    <p>Laura es la fundadora y...</p>

                    <ul className="team-icon">

                        <li><a href="#" className="twitter">
                            <i className="fa fa-twitter"></i>
                        </a></li>

                        <li><a href="#" className="twitter">
                            <i className="fa fa-twitter"></i>
                        </a></li>

                        <li><a href="#" className="twitter">
                            <i className="fa fa-twitter"></i>
                        </a></li>

                    </ul>
                    
                </div>

            </div>

        </div>

    </div>
    </section>
   
  );
}

export default TeamCard;