import React from "react";

export const Subscribe = () => {
  return (
    <div>
      <div
        className="tf__subscribe"
        style={{ background: "url(images/bg/subscribe.jpg)" }}
      >
        <div className="tf__subscribe_overlay pt_115 xs_pt_75 pb_120 xs_pb_80">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-8 col-md-10 m-auto">
                <div className="tf__subscribe_text">
                  <h3 className="has-animation">SUBSCRIBE MY NEWSLETTER</h3>
                  <form action="#" className="">
                    <input type="text" placeholder="Enter Your Email" />
                    <button type="submit" className="common_btn">
                      Notify Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
