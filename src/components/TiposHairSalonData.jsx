import React from 'react'
import "/src/assets/css/TiposHairSalon.css";
import '/src/index.css';


class TiposHairSalonData extends React.Component{
    render() {
        return(
        <div className={this.props.className}>
            <div className="serv-text">
                <h2>{this.props.heading}</h2>
                <p>{this.props.text}</p>
            </div>

            <div className="photos">
                <img src={this.props.img1} alt="img"/>
                <img src={this.props.img2} alt="img"/>
            </div>
        </div>
        )
    }
}

export default TiposHairSalonData
