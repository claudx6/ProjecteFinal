import React, {useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
// import firebase from "/src/firebase.js";

import "/src/assets/css/Form.css";

function Form() {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const {name, email, subject, message} = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !subject || !message) {
      toast.error("Por favor introduce un valor para cada casilla.")
    } else {
      firebase.child("contacts").push(state);
      setState({name: "", email: "", subject: "", message: ""});
      toast.success("Tu mensaje ha sido enviado correctamente.");
    }
  }

  const handleInputChange = (e) => {
    let {name, value} = e.target;
    setState({...state, [name]: value})
  }

  return (
    <section className="contact-section">
      <div className="container">
        <ToastContainer position="top-center"/>
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
                            value={name}
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
                            value={email}
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
                            value={subject}
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
                            value={message}
                            ></textarea> 
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input type="submit" value="Enviar" className="btn btn-primary"/>
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
                      <div className="text pl-3">
                        <p>
                          <span></span>
                        </p>
                      </div>
                      
                      
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