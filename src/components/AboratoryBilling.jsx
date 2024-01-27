import React from 'react'

const AboratoryBilling = () => {
    return (
        <>
            <div className="hero_area">
                <div className="hero_bg_box">
                    <img src="/images/laboratory-billing.jpg" alt />
                </div>
                <section className="slider_section ">
                    <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="detail-box text-dark">
                                                <h1 className='text-dark'>
                                                    Effortlessly Manage Your Laboratory Billing
                                                </h1>
                                                <p className='text-dark'>
                                                    You know; you need us because we provide:
                                                    <ul>
                                                        <li>Streamlined claims submission process for faster turnaround time </li>
                                                        <li>Automatic payment posting to reduce manual data entry</li>
                                                        <li>Customizable reports for greater insight into your laboratory’s financial performance</li>
                                                        <li>HIPAA-compliant security measures to protect sensitive data</li>
                                                        <li>Fair and transparent pricing with no lock-in periods</li>
                                                    </ul>
                                                </p>
                                                <div className="btn-box">
                                                    <a href="#" className="btn btn-success">
                                                        Schedule Demo
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="carousel-item ">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="detail-box">
                                                <h1>
                                                    Medical Billing Services for Providers
                                                </h1>
                                                <p>
                                                    We offer top quality medical billing services to help increase your financial growth.
                                                </p>
                                                <div className="btn-box">
                                                    <a href="productlisting" className="btn1">
                                                        Optimize Collections
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="detail-box">
                                                <h1>
                                                    Improve Efficiency with Robotic Process Automation
                                                </h1>
                                                <p>
                                                    Integrate technology to automate repetitive tasks in billing and coding process.
                                                </p>
                                                <div className="btn-box">
                                                    <a href="productlisting" className="btn1">
                                                        Learn More
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <ol className="carousel-indicators">
                            <li data-target="#customCarousel1" data-slide-to={0} className="active" />
                            {/* <li data-target="#customCarousel1" data-slide-to={1} />
                            <li data-target="#customCarousel1" data-slide-to={2} /> */}
                        </ol>
                    </div>
                </section>
            </div>

            {/* gfghj */}

            <section className='section-big main-color'>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-12 pb-20 text-center">
                            <h2 className="section-title mb-10">
                                <span> Assisting <strong className="primary-color"> Labs </strong> of All types </span>
                            </h2>
                            <div className="exp-separator center-separator">
                                <div className="exp-separator-inner">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" >
                        <div class="col-md-12 d-flex justify-content-between">
                            <div class="box">
                                <div className='img-box'>
                                    <img loading="lazy" decoding="async" width="101" height="107"
                                        src="https://transcure.net/wp-content/uploads/2023/05/Hospital-Outreach-Outpatient-Labs.png"
                                        class="attachment-large size-large wp-image-23876" alt="Hospital Outreach &amp; Outpatient Labs icon" />
                                </div>
                                <div class="detail-box">
                                    <h4>Hospital Outreach<br />
                                        &amp; Outpatient Labs</h4>
                                </div>
                            </div>

                            {/* session 2 */}
                            <div class="box">
                                <div className='img-box'>
                                    <img loading="lazy" decoding="async" width="101"
                                        height="107" src="https://transcure.net/wp-content/uploads/2023/05/Toxicology-Laboratories.png"
                                        class="attachment-large size-large wp-image-23877" alt="Toxicology Laboratories icon" />
                                </div>
                                <div class="detail-box">
                                    <h4>
                                        Toxicology <br />Laboratories</h4>
                                </div>
                            </div>
                            <div class="box">
                                <div className='img-box'>
                                    <img loading="lazy" decoding="async"
                                        width="101" height="107"
                                        src="https://transcure.net/wp-content/uploads/2023/05/Molecular-Diagnostics.png"
                                        class="attachment-large size-large wp-image-23878" alt="Molecular Diagnostics" />
                                </div>
                                <div class="detail-box">
                                    <h4>Molecular<br /> Diagnostics</h4>
                                </div>
                            </div>
                            <div class="box">
                                <div className='img-box'>
                                    <img loading="lazy" decoding="async" width="101" height="107"
                                        src="https://transcure.net/wp-content/uploads/2023/05/Clinical-Laboratories.png"
                                        class="attachment-large size-large wp-image-23879" alt="Clinical Laboratories icon" />
                                </div>
                                <div class="detail-box">
                                    <h4>Clinical <br />Laboratories</h4>
                                </div>
                            </div>
                            <div class="box">
                                <div className='img-box'>
                                    <img loading="lazy" decoding="async"
                                        width="101" height="107"
                                        src="https://transcure.net/wp-content/uploads/2023/05/Clinical-Laboratories-1.png"
                                        class="attachment-large size-large wp-image-23880" alt="Clinical Laboratories icon" />
                                </div>
                                <div class="detail-box">
                                    <h4>Pathology <br /> Laboratory</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}

export default AboratoryBilling