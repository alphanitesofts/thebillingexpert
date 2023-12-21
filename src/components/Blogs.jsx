import React from "react";
import '../../src/App.css'
import { Link } from "react-router-dom";

function Blogs(){
    return(
      <section className="blog-listing gray-bg">
  <div className="container">
    <div className="row align-items-start">
      <div className="col-lg-8 m-15px-tb">
        <div className="row">
          <div className="col-sm-6">
            <div className="blog-grid">
              <div className="blog-img">
                <div className="date">
                  <span>04</span>
                  <label>FEB</label>
                </div>
                <a href="blogsdetails">
                  <img src="https://www.bootdey.com/image/400x200/FFB6C1/000000" title alt />
                </a>
              </div>
              <div className="blog-info">
                <h5><a href="blogsdetails">Prevent 75% of visitors from google analytics</a></h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="btn-bar">
                  <a href="blogsdetails" className="px-btn-arrow">
                    <span>Read More</span>
                    <i className="arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="blog-grid">
              <div className="blog-img">
                <div className="date">
                  <span>04</span>
                  <label>FEB</label>
                </div>
                <a href="blogsdetails">
                  <img src="https://www.bootdey.com/image/400x200/D3D3D3/000000" title alt />
                </a>
              </div>
              <div className="blog-info">
                <h5><a href="blogsdetails">Prevent 75% of visitors from google analytics</a></h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="btn-bar">
                  <Link to="blogsdetails" className="px-btn-arrow">
                    <span>Read More</span>
                    <i className="arrow" />
                  </Link>
                

                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="blog-grid">
              <div className="blog-img">
                <div className="date">
                  <span>04</span>
                  <label>FEB</label>
                </div>
                <a href="blogsdetails">
                  <img src="https://www.bootdey.com/image/400x200/87CEFA/000000" title alt />
                </a>
              </div>
              <div className="blog-info">
                <h5><a href="blogsdetails">Prevent 75% of visitors from google analytics</a></h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="btn-bar">
                  <a href="blogsdetails" className="px-btn-arrow">
                    <span>Read More</span>
                    <i className="arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="blog-grid">
              <div className="blog-img">
                <div className="date">
                  <span>04</span>
                  <label>FEB</label>
                </div>
                <a href="blogsdetails">
                  <img src="https://www.bootdey.com/image/400x200/D3D3D3/000000" title alt />
                </a>
              </div>
              <div className="blog-info">
                <h5><a href="blogsdetails">Prevent 75% of visitors from google analytics</a></h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="btn-bar">
                  <a href="blogsdetails" className="px-btn-arrow">
                    <span>Read More</span>
                    <i className="arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="blog-grid">
              <div className="blog-img">
                <div className="date">
                  <span>04</span>
                  <label>FEB</label>
                </div>
                <a href="blogsdetails">
                  <img src="https://www.bootdey.com/image/400x200/E0FFFF/000000" title alt />
                </a>
              </div>
              <div className="blog-info">
                <h5><a href="blogsdetails">Prevent 75% of visitors from google analytics</a></h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="btn-bar">
                  <a href="blogsdetails" className="px-btn-arrow">
                    <span>Read More</span>
                    <i className="arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="blog-grid">
              <div className="blog-img">
                <div className="date">
                  <span>04</span>
                  <label>FEB</label>
                </div>
                <a href="blogsdetails">
                  <img src="https://www.bootdey.com/image/400x200/FFF0F5/000000" title alt />
                </a>
              </div>
              <div className="blog-info">
                <h5><a href="blogsdetails">Prevent 75% of visitors from google analytics</a></h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="btn-bar">
                  <a href="blogsdetails" className="px-btn-arrow">
                    <span>Read More</span>
                    <i className="arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-12">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="blogsdetails" tabIndex={-1}><i className="fas fa-chevron-left" /></a>
              </li>
              <li className="page-item"><a className="page-link" href="blogsdetails">1</a></li>
              <li className="page-item active">
                <a className="page-link" href="blogsdetails">2 <span className="sr-only">(current)</span></a>
              </li>
              <li className="page-item"><a className="page-link" href="blogsdetails">3</a></li>
              <li className="page-item">
                <a className="page-link" href="blogsdetails"><i className="fas fa-chevron-right" /></a>
              </li>
            </ul>
          </div> */}
        </div>

        {/* <div className="contact-form article-comment ">
          <h4>Leave a Reply</h4>
          <form id="contact-form" method="POST">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input name="Name" id="name" placeholder="Name *" className="form-control" type="text" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input name="Email" id="email" placeholder="Email *" className="form-control" type="email" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea name="message" id="message" placeholder="Your message *" rows={4} className="form-control" defaultValue={""} />
                </div>
              </div>
              <div className="col-md-12">
                <div className="send">
                  <button className="px-btn theme"><span>Submit</span> <i className="arrow" /></button>
                </div>
              </div>
            </div>
          </form>
        </div> */}
      </div>
      <div className="col-lg-4 m-15px-tb blog-aside">
        {/* Author */}
        <div className="widget widget-author">
          <div className="widget-title">
            <h3>Author</h3>
          </div>
          <div className="widget-body">
            <div className="media align-items-center">
              <div className="avatar">
                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" title alt />
              </div>
              <div className="media-body">
                <h6>Hello, I'm<br /> Rachel Roth</h6>
              </div>
            </div>
            <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
          </div>
        </div>
        {/* End Author */}
        {/* Trending Post */}
        <div className="widget widget-post">
          <div className="widget-title">
            <h3>Trending Now</h3>
          </div>
          <div className="widget-body">
          <div className="latest-post-aside media">
              <div className="lpa-left media-body">
                <div className="lpa-title">
                  <h5><a href="blogsdetails">Prevent 75% of visitors from google analytics</a></h5>
                </div>
                <div className="lpa-meta">
                  <a className="name" href="blogsdetails">
                    Rachel Roth
                  </a>
                  <a className="date" href="blogsdetails">
                    26 FEB 2020
                  </a>
                </div>
              </div>
              <div className="lpa-right">
                <a href="blogsdetails">
                  <img src="https://www.bootdey.com/image/400x200/E6E6FA/000000" title alt />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End Trending Post */}
        {/* Latest Post */}
        <div className="widget widget-latest-post">
          <div className="widget-title">
            <h3>Latest Post</h3>
          </div>
          <div className="widget-body">
            <div className="latest-post-aside media">
              <div className="lpa-left media-body">
                <div className="lpa-title">
                  <h5><a href="blogsdetails">Prevent 75% of visitors from google analytics</a></h5>
                </div>
                <div className="lpa-meta">
                  <a className="name" href="blogsdetails">
                    Rachel Roth
                  </a>
                  <a className="date" href="blogsdetails">
                    26 FEB 2020
                  </a>
                </div>
              </div>
              <div className="lpa-right">
                <a href="blogsdetails">
                  <img src="https://www.bootdey.com/image/400x200/E6E6FA/000000" title alt />
                </a>
              </div>
            </div>
            <div className="latest-post-aside media">
              <div className="lpa-left media-body">
                <div className="lpa-title">
                  <h5><a href="blogsdetails">Prevent 75% of visitors from google analytics</a></h5>
                </div>
                <div className="lpa-meta">
                  <a className="name" href="blogsdetails">
                    Rachel Roth
                  </a>
                  <a className="date" href="blogsdetails">
                    26 FEB 2020
                  </a>
                </div>
              </div>
              <div className="lpa-right">
                <a href="blogsdetails">
                  <img src="https://www.bootdey.com/image/400x200/FFA07A/000000" title alt />
                </a>
              </div>
            </div>
            <div className="latest-post-aside media">
              <div className="lpa-left media-body">
                <div className="lpa-title">
                  <h5><a href="blogsdetails">Prevent 75% of visitors from google analytics</a></h5>
                </div>
                <div className="lpa-meta">
                  <a className="name" href="blogsdetails">
                    Rachel Roth
                  </a>
                  <a className="date" href="blogsdetails">
                    26 FEB 2020
                  </a>
                </div>
              </div>
              <div className="lpa-right">
                <a href="blogsdetails">
                  <img src="https://www.bootdey.com/image/400x200/FFF0F5/000000" title alt />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End Latest Post */}
        {/* widget Tags */}
        <div className="widget widget-tags">
          <div className="widget-title">
            <h3>Latest Tags</h3>
          </div>
          <div className="widget-body">
            <div className="nav tag-cloud">
              <a href="blogsdetails">Design</a>
              <a href="blogsdetails">Development</a>
              <a href="blogsdetails">Travel</a>
              <a href="blogsdetails">Web Design</a>
              <a href="blogsdetails">Marketing</a>
              <a href="blogsdetails">Research</a>
              <a href="blogsdetails">Managment</a>
            </div>
          </div>
        </div>
        {/* End widget Tags */}
      </div>
    </div>
  </div>
  
</section>

    )
}
export default Blogs