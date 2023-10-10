import React from "react";

export const ScrollButton = () => {
  return (
    <div>
      <div className="progress active c-pointer">
        <svg
          className="progress-svg"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
        </svg>
      </div>
      <script src="js/scroll_button.js"></script>
    </div>
  );
};
