import React from "react";
import { Link } from "react-router-dom";
import "/src/assets/css/Form.css";

function Form() {

  const handleSubmit = () => {

  }

  const handleInputChange = () => {}

  return (
    <section className="contact-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="wrapper">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div className="contact-wrap w-100 p-lg-5 p-4">
                    <h3 className="mb-4">Envíanos un mensaje</h3>
                    <form id="ContactForm" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input 
                            type="text" 
                            className="form-control"
                            name="name"
                            placeholder="Nombre"
                            onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input 
                            type="email" 
                            className="form-control"
                            name="email"
                            placeholder="Email"
                            onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input 
                            type="text" 
                            className="form-control"
                            name="subject"
                            placeholder="Sujeto"
                            onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea 
                            type="text" 
                            className="form-control"
                            name="message"
                            placeholder="Mensaje"
                            onChange={handleInputChange}
                            ></textarea> 
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input type="submit" value="Send Message" className="btn btn-primary"/>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="info-wrap w-100 p-lg-5 p-4 img">
                    <h3>Ponte en contacto con nosotros</h3>
                    <div className="mb-4">Con mucho gusto te ayudaremos.</div>
                    <div className="logo-container">
                    <img src="/../src/assets/images/logo/logo.jpg" alt="" />
                    </div>
                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker"></span>
                      </div>
                      {/* <div className="text pl-3">
                        <p>
                          <span></span>
                        </p>
                      </div> */}
                      
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;


// https://www.youtube.com/watch?v=SMYsxHwsExQ