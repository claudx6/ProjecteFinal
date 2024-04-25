import React from 'react'
import "/src/assets/css/TiposServicios.css";
import '/src/index.css';


class TiposServiciosData extends React.Component{
    render() {
        return(
        <div className={this.props.className}>
            <div className="serv-text">
                <h2>{this.props.heading}</h2>
                <p>{this.props.text}</p>
                <a href={this.props.buttonUrl}>
                    <button className='btn'>{this.props.buttonText}</button>
                </a>                
            </div>

            <div className="photos">
                <img src={this.props.img1} alt="img"/>
                <img src={this.props.img2} alt="img"/>
            </div>
        </div>
        )
    }
}

export default TiposServiciosData
