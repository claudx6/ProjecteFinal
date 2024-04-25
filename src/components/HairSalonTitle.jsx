import React from 'react'
import "/src/assets/css/HairSalonTitle.css";
import '/src/index.css';


const HairSalonTitle = ({subTitle, title}) => {
  return (
    <div className='title'>
        <p>{subTitle}</p>
        <h2>{title}</h2>
    </div>
  )
}

export default HairSalonTitle