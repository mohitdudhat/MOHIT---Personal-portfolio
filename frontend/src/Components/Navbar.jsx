import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg main_menu">
        <div className="container main_menu_bg">
          <Link className="navbar-brand" to="index.html">
            <img
              src="images/logo.png"
              alt="MOHIT"
              className="img-fluid w-100"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-sharp fa-regular fa-bars bar_icon"></i>
            <i className="fa-regular fa-xmark close_icon"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <Link className="nav-link text_hover_animaiton active" to="#">
                  Home <i className="far fa-angle-down"></i>
                </Link>
                <ul className="droap_menu">
                  <li>
                    <Link to="index.html">Home 1</Link>
                  </li>
                  <li>
                    <Link to="index_2.html">Home 2</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link text_hover_animaiton" to="#">
                  about us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text_hover_animaiton" to="#service">
                  services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text_hover_animaiton" to="#projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text_hover_animaiton"
                  to="blog_list.html"
                >
                  blog <i className="far fa-angle-down"></i>
                </Link>
                <ul className="droap_menu">
                  <li>
                    <Link to="blog_list.html">Blog List</Link>
                  </li>
                  <li>
                    <Link to="blog_details.html">Blog Details</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text_hover_animaiton"
                  to="contact.html"
                >
                  contact
                </Link>
              </li>
            </ul>
            <span
              className="toggle_icon c-pointer"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <i className="fa-sharp fa-sharp fa-regular fa-bars bar_icon-staggered"></i>
            </span>
          </div>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
      >
        <div className="offcanvas-header">
          <a className="offcanvas-logo" href="index_2.html">
            <img
              src="images/logo2.png"
              alt="ZAYAN"
              className="img-fluid w-100"
            />
          </a>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="fa-regular fa-xmark"></i>
          </button>
        </div>
        <div className="offcanvas-body">
          <div className="tf__design_form offcanvas_form">
            <div className="offcanvas-content-box">
              <h4 className="offcanvas_title">About us</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                tempor incididunt ut labore et magna aliqua. Ut enim ad minim
                veniam laboris.
              </p>
            </div>
            <div className="offcanvas_contact_form">
              <h4 className="offcanvas_title">Get In Touch</h4>
              <form action="#">
                <input
                  type="text"
                  placeholder="Your Name"
                  aria-autocomplete="list"
                />
                <input type="email" placeholder="Your Email" />
                <textarea rows="4" placeholder="Message"></textarea>
                <button type="submit" className="common_btn">
                  submit now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
