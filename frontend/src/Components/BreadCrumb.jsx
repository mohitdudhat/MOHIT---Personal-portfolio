import React from "react";

export const BreadCrumb = (props) => {
  return (
    <section
      className="tf__breadcrumb banner"
      style={{ background: "url(images/bg/breadcrumb.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tf__breadcrum_text">
              <h1>{props.page}</h1>
              <ul className="page-breadcrumb">
                <li>
                  <a href="index.html" className="text_hover_animaiton">
                    Home
                  </a>
                </li>
                <li>{props.page}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
