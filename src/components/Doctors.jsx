import React from "react";

function Doctors(){
    return(
        <section className="doctor_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Our Heads
            </h2>
            <p className="col-md-10 mx-auto px-0">
              Incilint sapiente illo quo praesentium officiis laudantium nostrum, ad adipisci cupiditate sit, quisquam aliquid. Officiis laudantium fuga ad voluptas aspernatur error fugiat quos facilis saepe quas fugit, beatae id quisquam.
            </p>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src="images/d1.jpg" alt />
                </div>
                <div className="detail-box">
                  <div className="social_box">
                    <a href>
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                    <a href>
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                    <a href>
                      <i className="fa fa-youtube" aria-hidden="true" />
                    </a>
                    <a href>
                      <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </div>
                  <h5>
                  Dr. Anthony
                  </h5>
                  <h6 className>
                  National Medical Labs
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src="images/d2.jpg" alt />
                </div>
                <div className="detail-box">
                  <div className="social_box">
                    <a href>
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                    <a href>
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                    <a href>
                      <i className="fa fa-youtube" aria-hidden="true" />
                    </a>
                    <a href>
                      <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </div>
                  <h5>
                  Dr. Richard
                  </h5>
                  <h6 className>
                  Laboratory Manager.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src="images/d3.jpg" alt />
                </div>
                <div className="detail-box">
                  <div className="social_box">
                    <a href>
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                    <a href>
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                    <a href>
                      <i className="fa fa-youtube" aria-hidden="true" />
                    </a>
                    <a href>
                      <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </div>
                  <h5>
                  Dr. Susan
                  </h5>
                  <h6 className>
                  Laboratory Manager.
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href>
              View All
            </a>
          </div>
        </div>
      </section>
    )
}
export default Doctors