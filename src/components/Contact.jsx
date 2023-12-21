import React from "react";

function Contact(){
  const location = '37.7749,-122.4194'
    return(
        <section className="contact_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>
              Get In Touch
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form_container contact-form">
                <form action>
                  <div className="form-row">
                    <div className="col-lg-6">
                      <div>
                        <input type="text" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div>
                        <input type="text" placeholder="Phone Number" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <input type="text" className="message-box" placeholder="Message" />
                  </div>
                  <div className="btn_box">
                    <button>
                      SEND
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="map_container">
                <div className="map">
                  {/* <div id="googleMap" /> */}
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Contact