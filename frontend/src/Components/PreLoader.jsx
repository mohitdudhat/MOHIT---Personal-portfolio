import React from "react";

export const PreLoader = () => {
  return (
    <div className="preloader">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>
      <h5 className="preloader-text">Loading</h5>
    </div>
  );
};
