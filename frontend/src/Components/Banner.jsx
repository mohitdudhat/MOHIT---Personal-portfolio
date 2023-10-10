import React from "react";
import { Link } from "react-router-dom";
export const Banner = () => {
  return (
    <div>
      <section
        className="tf__banner banner"
        style={{ background: "url(images/bg/banner.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6 col-lg-8">
              <div className="tf__banner_text">
                <h1>
                  Hi, I'm Mohit! Creative
                  <span className="cd-headline rotate-1">
                    <span className="cd-words-wrapper">
                      <b className="is-visible">Designer</b>
                      <b>Coder</b>
                      <b>Player</b>
                    </span>
                  </span>
                </h1>
                <p>
                  I'm a passionate UI/UX designer with a mission to create
                  delightful and intuitive digital experiences. With a strong
                  foundation in design principles and a keen eye for detail, I
                  specialize in translating complex ideas into user-friendly
                  interfaces that captivate and engage.
                </p>
                <ul>
                  <li>
                    <Link className="common_btn" to="#">
                      Download Cv
                      <i className="fa-solid fa-arrow-down-to-line"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="banner_video_btn play_btn"
                      to="https://www.youtube.com/watch?v=B-ytMSuwbf8"
                    >
                      <i className="fa-sharp fa-solid fa-circle-play"></i> Watch
                      the Video
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-4">
              <div className="tf__banner_img">
                <div className="img">
                  <img
                    src="images/banner_img_1.png"
                    alt="ZYAN"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
