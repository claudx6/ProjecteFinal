import React from 'react';
import "/src/assets/css/Info.css";

// Imported icons
import { FaCalendarDay } from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";




const Info = () => {
    return (
        <div className='info'>
            <div className='infoContainer container'>

                <div className="titleDiv flex">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
                    <button className='btn'>
                        Mirar
                    </button>
                </div>

                <div className="cardsDiv grid">

                    <div className="singleCard grid">
                        <div className="iconDiv flex colorOne">
                        <FaCalendarDay className='icon'/>
                        </div>
                        <span className='cardTitle'>Lorem</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat omnis suscipit totam unde tempore</p>
                    </div>

                    <div className="singleCard grid">
                        <div className="iconDiv flex colorTwo">
                        <BsShieldCheck className='icon'/>
                        </div>
                        <span className='cardTitle'>Lorem</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat omnis suscipit totam unde tempore</p>
                    </div>

                    <div className="singleCard grid">
                        <div className="iconDiv flex colorThree">
                        <BsBookmarkCheck className='icon'/>
                        </div>
                        <span className='cardTitle'>Lorem</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat omnis suscipit totam unde tempore</p>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Info