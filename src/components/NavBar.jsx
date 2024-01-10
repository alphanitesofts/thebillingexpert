import React from "react";
import { Link } from "react-router-dom";
import '../../src/App.css'

function NavBar() {

  return (
    <header className="header_section " style={{ marginTop: -20 }}>
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="/">
            <span>
              The Billing Expert
            </span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item dropdown  dropdown-menu-left">
                <a className="nav-link dropdown-toggle" id="dropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                <ul className="dropdown-menu mt-3" style={{ width: "1000px" }} aria-labelledby="dropdown2">
                  <li className="dropdown-item mt-5" >
                    <div className="row">
                      <div className="col-md-5">
                        <ul style={{ listStyle: "none" }}>
                          <li className="mt-2">
                            <Link to='/' className="d-flex" >
                              <img src="/images/laboratory-billing-service.png" style={{ width: "40px", height: "40px" }} alt="img" className="img-fluid " />
                              <div className="ml-2 text-dark" >
                                <h5>Laboratory Billing Services</h5>
                                <p>Discover automated labs billing solution with us</p>
                              </div>
                            </Link>
                          </li>
                          <li className="mt-2">
                            <Link to='/' className="d-flex" >
                              <img src="/images/Mask-Group.png" style={{ width: "40px", height: "40px" }} alt="img" className="img-fluid " />
                              <div className="ml-2 text-dark">
                                <h5>Revenue Cycle Management</h5>
                                <p>Improve patient care and optimize revenue</p>
                              </div>
                            </Link>
                          </li>
                          <li className="mt-2">
                            <Link to='/' className="d-flex" >
                              <img src="/images/Mask1.png" style={{ width: "40px", height: "40px" }} alt="img" className="img-fluid " />
                              <div className="ml-2 text-dark">
                                <h5>Medical Billing Services</h5>
                                <p>Reduce denials and increase overall collections</p>
                              </div>
                            </Link>
                          </li>
                          <li className="mt-2">
                            <Link to='/' className="d-flex" >
                              <img src="/images/Mask2.png" style={{ width: "40px", height: "40px" }} alt="img" className="img-fluid " />
                              <div className="ml-2 text-dark">
                                <h5>Credentialing Services</h5>
                                <p>Get affiliated with maximum insurance payers</p>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <h5> View All Solutions <i className="fa fa-chevron-right"></i></h5>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* 2 coloumn */}
                      <div className="col-md-5 ml-5">
                        <ul style={{ listStyle: "none" }}>
                          <li className="mt-2">
                            <Link to='/' className="d-flex" >
                              <img src="/images/Mask3.png" style={{ width: "40px", height: "40px" }} alt="img" className="img-fluid " />
                              <div className="ml-2 text-dark" >
                                <h5>Laboratory Billing Services</h5>
                                <p>Discover automated labs billing solution with us</p>
                              </div>
                            </Link>
                          </li>
                          <li className="mt-2">
                            <Link to='/' className="d-flex" >
                              <img src="/images/Mask4.png" style={{ width: "40px", height: "40px" }} alt="img" className="img-fluid " />
                              <div className="ml-2 text-dark">
                                <h5>Revenue Cycle Management</h5>
                                <p>Improve patient care and optimize revenue</p>
                              </div>
                            </Link>
                          </li>
                          <li className="mt-2">
                            <Link to='/' className="d-flex" >
                              <img src="/images/Mask5.png" style={{ width: "40px", height: "40px" }} alt="img" className="img-fluid " />
                              <div className="ml-2 text-dark">
                                <h5>Medical Billing Services</h5>
                                <p>Reduce denials and increase overall collections</p>
                              </div>
                            </Link>
                          </li>
                          <li className="mt-2">
                            <Link to='/' className="d-flex" >
                              <img src="/images/Mask6.png" style={{ width: "40px", height: "40px" }} alt="img" className="img-fluid " />
                              <div className="ml-2 text-dark">
                                <h5>Credentialing Services</h5>
                                <p>Get affiliated with maximum insurance payers</p>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <h5 >View All EMR/EHR <i className="fa fa-chevron-right"></i></h5>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* <li className="dropdown-item" ><Link to="servicedetails">Service 2</Link></li>
                  <li className="dropdown-item" ><Link to="servicedetails">Service 3</Link></li> */}
                </ul>
              </li>
              {/* <li className="nav-item active">
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link" to="about"> About</Link>
              </li> */}

              <li className="nav-item">
                <Link className="nav-link" to="productlisting"> Products</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="dropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Our Experties</a>
                <ul className="dropdown-menu mt-3" aria-labelledby="dropdown2">
                  <li className="dropdown-item m-2 text-dark"  ><Link to="productlisting" className="text-dark">Hospitals & Health Systems</Link></li>
                  <li className="dropdown-item m-2 text-dark" ><Link to="servicedetails" className="text-dark">Medical Group Practices</Link></li>
                  <li className="dropdown-item m-2 text-dark" ><Link to="servicedetails" className="text-dark">Independent Practices</Link></li>
                  <li className="dropdown-item m-2 text-dark" ><Link to="servicedetails" className="text-dark">Outsource Billing Services</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="dropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Company</a>
                <ul className="dropdown-menu mt-3" aria-labelledby="dropdown2">
                  <li className="dropdown-item m-2 "><Link to="about" className="text-dark">About Us</Link></li>
                  <li className="dropdown-item m-2 " ><Link to="contact" className="text-dark">Contact Us</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="dropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Specialities</a>
                <ul className="dropdown-menu mt-3" aria-labelledby="dropdown2">
                  <li className="dropdown-item m-2 "><Link to="about" className="text-dark">Cardiology</Link></li>
                  <li className="dropdown-item m-2 " ><Link to="contact" className="text-dark">Podiatry</Link></li>
                  <li className="dropdown-item m-2 " ><Link to="contact" className="text-dark">Orthopedic</Link></li>
                  <li className="dropdown-item m-2 " ><Link to="contact" className="text-dark">OB/GYN Billing</Link></li>
                  <li className="dropdown-item m-2 " ><Link to="contact" className="text-dark">Nephrology</Link></li>
                  <li className="dropdown-item m-2 " ><Link to="contact" className="text-dark">Psychiatry</Link></li>
                  <li className="dropdown-item m-2 " ><Link to="contact" className="text-dark">Endocrinology</Link></li>
                  <li className="dropdown-item m-2 " ><Link to="contact" className="text-dark">Dermatology</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="specialities"> Specialities</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="departments">Hot</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="doctors">Heads</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="blogs">Blogs</Link>
              </li>

              {/* <li className="nav-item">
                <Link className="nav-link" to="contact">Contact Us</Link>
              </li> */}
              <form className="form-inline">
                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
export default NavBar