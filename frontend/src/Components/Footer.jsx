import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <footer className="footer" id="footer">
        <div className="footer-container">
          <div className="pt_120 xs_pt_80 sm_pt_80">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div
                    className="tf__footer_content fade_right"
                    data-trigerid="footer"
                    data-stagger=".25"
                  >
                    <div className="icon">
                      <div className="icon-contianer">
                        <img
                          src="svg/map.svg"
                          alt="footer"
                          className="img-fluid w-100 svg"
                        />
                      </div>
                    </div>
                    <div className="text">
                      <h3>Address</h3>
                      <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="tf__footer_content fade_right"
                    data-trigerid="footer"
                    data-stagger=".25"
                  >
                    <div className="icon">
                      <div className="icon-contianer">
                        <img
                          src="svg/phone.svg"
                          alt="footer"
                          className="img-fluid w-100 svg"
                        />
                      </div>
                    </div>
                    <div className="text">
                      <h3>Lets talk us</h3>
                      <Link to="callto:1234567890">(603) 555-0123</Link>
                      <Link to="callto:1234567890">(603) 555-0123</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="tf__footer_content fade_right"
                    data-trigerid="footer"
                    data-stagger=".25"
                  >
                    <div className="icon">
                      <div className="icon-contianer">
                        <img
                          src="svg/envelope.svg"
                          alt="footer"
                          className="img-fluid w-100 svg"
                        />
                      </div>
                    </div>
                    <div className="text">
                      <h3>Send us email</h3>
                      <Link to="mailto:example@gmail.com">
                        deanna.curtis@example.com
                      </Link>
                      <Link to="mailto:example@gmail.com">
                        curtis@example.com
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="tf__footer_copyright">
                    <p>© CodeeFly 2023 | All Rights Reserved</p>
                    <ul>
                      <li>
                        <Link to="#" className="text_hover_animaiton">
                          Trams & Condition
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="text_hover_animaiton">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="text_hover_animaiton">
                          Sitemap
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
