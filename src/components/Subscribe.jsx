import React from 'react';
import "/src/assets/css/Subscribe.scss";

const Subscribe = () => {
    return (
        <div className='subscribe section'>
            <div className='sectionContainer container'>
                <h2>Subscríbete a nuestra Newsletter y entérate de las últimas novedades</h2>
                <div className="inputDiv flex">
                    <input type="text" placeholder='Ingresa un e-mail' />
                    <button className='btn'>Subscribirse</button>
                </div>
            </div>

        </div>
    )
}

export default Subscribe