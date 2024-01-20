import React from "react";
import "/src/assets/css/Informacion.css";

import img4 from '../assets/images/carousel/img4.jpg';


function Informacion() {
  return (
    <div className='information container section'>
        <div className="informationContainer">
            <div className="titlesDiv">
                <small>Nuestros servicios</small>
                <h2>Disponemos de diferentes servicios</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, et corrupti cum nostrum quod iusto maiores. Repudiandae, aliquam? Omnis suscipit recusandae ratione vero quibusdam hic laborum magni temporibus aliquam saepe?</p>
            </div>
        
            <div className="infoDiv grid">

                <div className="textDiv grid">

                    <div className="singleInfo">
                        <span className='number colorOne'>01</span>
                        <h4>Tienda física</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa eaque quaerat beatae dolorem saepe dicta pariatur quo eligendi libero doloremque eum sit asperiores, molestiae quisquam ut impedit incidunt iste tempore!</p>
                    </div>

                    <div className="singleInfo">
                        <span className='number colorTwo'>02</span>
                        <h4>Perruquería canina</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa eaque quaerat beatae dolorem saepe dicta pariatur quo eligendi libero doloremque eum sit asperiores, molestiae quisquam ut impedit incidunt iste tempore!</p>
                    </div>

                    <div className="singleInfo">
                        <span className='number colorThree'>03</span>
                        <h4>Servicio a domicilio</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa eaque quaerat beatae dolorem saepe dicta pariatur quo eligendi libero doloremque eum sit asperiores, molestiae quisquam ut impedit incidunt iste tempore!</p>
                    </div>

                </div>

                <div className="imgDiv">
                    <img src={img4}/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Informacion;