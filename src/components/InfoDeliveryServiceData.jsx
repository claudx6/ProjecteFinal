import React from 'react'
import "/src/assets/css/InfoDeliveryService.css";
import '/src/index.css';


class InfoDeliveryServiceData extends React.Component{
    render() {
        return(
        <div className={this.props.className}>
            <div className="delivery-text">
                <h2>{this.props.heading}</h2>
                <p>{this.props.text}</p>
            </div>

            <div className="del-photos">
                <img src={this.props.img1} alt="img"/>
                <img src={this.props.img2} alt="img"/>
            </div>
        </div>
        )
    }
}

export default InfoDeliveryServiceData
