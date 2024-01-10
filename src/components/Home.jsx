import React from "react";
import Department from "./Department";
import About from "./About";
import Doctors from "./Doctors";
import Contact from "./Contact";
import Client from "./Client";
import Services from "./Services";
import Blogs from "./Blogs";
import OurRecord from "./OurRecord/OurRecord";
import ChooseUs from "./ChooseUs/ChooseUs";
import ExtraOne from "./ExtraOne/ExtraOne";
import ExtraTwo from "./ExtraTwo/ExtraTwo";

function Home() {
  return (
    <>
      <div className="hero_area">
        <div className="hero_bg_box">
          <img src="images/hero-bg.png" alt />
        </div>
        {/* header section strats */}
        {/* <header className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand" href="index.html">
                <span>
                  Orthoc
                </span>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className> </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html"> About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="departments.html">Departments</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="doctors.html">Doctors</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">Contact Us</a>
                  </li>
                  <form className="form-inline">
                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                      <i className="fa fa-search" aria-hidden="true" />
                    </button>
                  </form>
                </ul>
              </div>
            </nav>
          </div>
        </header> */}
        {/* end header section */}
        {/* slider section */}
        <section className="slider_section ">
          <div id="customCarousel1" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="detail-box">
                        <h1>
                          SeemLess One Stop Billing Solution
                        </h1>
                        <p>
                          Get The Billing Rounding App, Billing Dashboard, and Billing Services at 5% of your Monthly Collections.
                        </p>
                        <div className="btn-box">
                          <a href="productlisting" className="btn1">
                            Book Appointment
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
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
              </div>
            </div>
            <ol className="carousel-indicators">
              <li data-target="#customCarousel1" data-slide-to={0} className="active" />
              <li data-target="#customCarousel1" data-slide-to={1} />
              <li data-target="#customCarousel1" data-slide-to={2} />
            </ol>
          </div>
        </section>


        {/* end slider section */}
      </div>

      <Department />
      <About />
      <Services />
      <OurRecord />
      <ChooseUs />
      <ExtraOne />
      <ExtraTwo />
      <Doctors />

      {/* <Blogs/> */}
      <Contact />
      <Client />
    </>

  )
}
export default Home