import React from "react";

function Department() {
  return (
    <section className="department_section layout_padding">
      <div className="department_container">
        <div className="container" style={{alignItems:"center"}}>
          <div className="heading_container heading_center">
            <h2>
            Elevate Your Practice Revenue with our Medical Billing Services
            </h2>
            <p>
            Unlock effortless medical billing and coding expertise tailored to your practice.
            </p>
          </div>
          <div className="row" style={{margin:"10px"}}>
            <div className="col-md-3">
              <div className="box ">
                <div className="img-box">
                  <img src="images/Trusted-by-500-physicians.png" alt />
                </div>
                <div className="detail-box">
                  <h5>
                    Trusted by 500+ physicians
                  </h5>
                  {/* <p>
                    Optimize Practice Revenues with Cardiology Medical Billing
                    </p> */}
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box ">
                <div className="img-box">
                  <img src="images/Key-Steps-in-Medical-Billing-and-Coding-Services.png" alt />
                </div>
                <div className="detail-box">
                  <h5>
                    Catering to
                    32+ specialties
                  </h5>
                  {/* <p>
                    Optimize Practice Revenues with Neurology Medical Billing
                  </p> */}
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box ">
                <div className="img-box">
                  <img src="images/1100-certified-medical-billers-and-coders.png" alt />
                </div>
                <div className="detail-box">
                  <h5>
                  1100+ certified medical billers and coders
                  </h5>
                  {/* <p>
                    Optimize Practice Revenues with Podiatry Medical Billing
                  </p> */}
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box ">
                <div className="img-box">
                  <img src="images/End-to-End-Automated-Billing-Solution.png" alt />
                </div>
                <div className="detail-box">
                  <h5>
                  End-to-End Automated Billing Solution
                  </h5>
                  {/* <p>
                    Optimize Practice Revenues with Orthopedics Medical Billing
                  </p> */}
                </div>
              </div>
            </div>
            {/* <div className="col-md-3">
              <div className="box ">
                <div className="img-box">
                  <img src="images/Up-to-98-First-Pass-Clean-Claim-Rate-.png" alt />
                </div>
                <div className="detail-box">
                  <h5>
                  Up to 98% First Pass Clean Claim Rate 
                  </h5>
                  {/* <p>
                    Optimize Practice Revenues with Orthopedics Medical Billing
                  </p> 
                </div>
              </div>
            </div> */}
          </div>
          {/* <div className="btn-box">
            <a href="#">
              View All
            </a>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Department