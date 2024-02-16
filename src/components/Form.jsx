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
                            placeholder="Name"
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
                            placeholder="Message"
                            onChange={handleInputChange}
                            ></textarea> 
                          </div>
                        </div>
                      </div>
                    </form>
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

