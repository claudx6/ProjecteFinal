import React from 'react';
import "/src/assets/css/Info1.css";

import img4 from '../assets/images/carousel/img4.jpg';


const Info1 = () => {
    return (
        <div className='info1 container section'>
            <div className="sectionContainer grid">
             <div className='imgDiv'>
                <img src={img4} alt="" />
             </div>

            <div className="textDiv">
                <h2>Lorem ipsum dolor sit amet</h2>
            </div>

            <div className="grids grid">

                <div className="singleGrid">
                    <span className='gridTitle'>
                        Lorem ipsum dolor
                    </span>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolorem nostrum molestiae totam voluptas eum officiis amet distinctio vitae! Laborum numquam sint excepturi architecto neque autem quaerat, provident optio delectus?
                    </p>
                </div>
            
                <div className="singleGrid">
                    <span className='gridTitle'>
                        Lorem ipsum dolor
                    </span>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolorem nostrum molestiae totam voluptas eum officiis amet distinctio vitae! Laborum numquam sint excepturi architecto neque autem quaerat, provident optio delectus?
                    </p>
                </div>

                <div className="singleGrid">
                    <span className='gridTitle'>
                        Lorem ipsum dolor
                    </span>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolorem nostrum molestiae totam voluptas eum officiis amet distinctio vitae! Laborum numquam sint excepturi architecto neque autem quaerat, provident optio delectus?
                    </p>
                </div>

            </div>

            </div>
        </div>
    )
}

export default Info1