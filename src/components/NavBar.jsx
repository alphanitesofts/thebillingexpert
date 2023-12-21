import React from "react";
import { Link } from "react-router-dom";
import '../../src/App.css'

function NavBar(){
    
    return(
        <header className="header_section " style={{marginTop:-20}}>
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="/">
              <span>
                SUPER COOL
              </span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className> </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="about"> About</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="productlisting"> All Products</Link>
                </li>

                
                {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" id="dropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
          <ul className="dropdown-menu" aria-labelledby="dropdown2">
            <li className="dropdown-item" ><Link to="productlisting">Service 1</Link></li>
            <li className="dropdown-item" ><Link to="servicedetails">Service 2</Link></li>
            <li className="dropdown-item" ><Link to="servicedetails">Service 3</Link></li>
          
          </ul>
        </li> */}

                <li className="nav-item">
                  <Link className="nav-link" to="specialities"> Features</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="departments">Hot</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="doctors">Heads</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link" to="blogs">Blogs</Link>
                </li>





                <li className="nav-item">
                  <Link className="nav-link" to="contact">Contact Us</Link>
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
      </header>
    )
}
export default NavBar