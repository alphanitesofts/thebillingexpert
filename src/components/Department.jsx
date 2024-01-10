import React from "react";

function Department(){
    return(
        <section className="department_section layout_padding">
        <div className="department_container">
          <div className="container ">
            <div className="heading_container heading_center">
              <h2>
              Specialty-Focused Billing Services
              </h2>
              <p>
              We offer billing services across 33 specialties to maximize practice revenues.
              </p>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/Mask-Group1.svg" alt />
                  </div>
                  <div className="detail-box">
                    <h5>
                      OB/GYN
                    </h5>
                    <p>
                    Optimize Practice Revenues with Cardiology Medical Billing
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/Mask-Group2.svg" alt />
                  </div>
                  <div className="detail-box">
                    <h5>
                    Neurology
                    </h5>
                    <p>
                    Optimize Practice Revenues with Neurology Medical Billing
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/Mask-Group3.svg" alt />
                  </div>
                  <div className="detail-box">
                    <h5>
                    Podiatry
                    </h5>
                    <p>
                    Optimize Practice Revenues with Podiatry Medical Billing
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/Mask-Group4.svg" alt />
                  </div>
                  <div className="detail-box">
                    <h5>
                    Orthopedics
                    </h5>
                    <p>
                    Optimize Practice Revenues with Orthopedics Medical Billing
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-box">
              <a href="#">
                View All
              </a>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Department