import React from "react";

export const Services = () => {
  return (
    <div>
      <section className="tf__service pt_130 xs_pt_80" id="service">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 m-auto">
              <div className="tf__section_heading mb_40">
                <h5 className="has-animation">MY serivce</h5>
                <h2 className="has-animation">
                  Crafting stories through <br />
                  design and innovation
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="tf__single_service fade_left"
                data-trigerid="service"
              >
                <span>
                  <img
                    src="svg/website-design.svg"
                    alt="service"
                    className="svg w-100"
                  />
                </span>
                <h3>Website Design</h3>
                <p>
                  Nemo design enim ipsam voluptatem quim voluptas sit aspernatur
                  aut odit auting fugit sed thisnquia consequuntur magni dolores
                  eos designer heresm qui
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="tf__single_service fade_left"
                data-trigerid="service"
              >
                <span>
                  <img
                    src="svg/logo-design.svg"
                    alt="service"
                    className="svg w-100"
                  />
                </span>
                <h3>Logo Design</h3>
                <p>
                  Nemo design enim ipsam voluptatem quim voluptas sit aspernatur
                  aut odit auting fugit sed thisnquia consequuntur magni dolores
                  eos designer heresm qui
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="tf__single_service fade_left"
                data-trigerid="service"
              >
                <span>
                  <img
                    src="svg/app-development.svg"
                    alt="service"
                    className="svg w-100"
                  />
                </span>
                <h3>Apps Development</h3>
                <p>
                  Nemo design enim ipsam voluptatem quim voluptas sit aspernatur
                  aut odit auting fugit sed thisnquia consequuntur magni dolores
                  eos designer heresm qui
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
