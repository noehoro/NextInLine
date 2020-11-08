import React from "react";

const Spinner = ({ color, classes }) => {
  if (color === "black") {
    return (
      <div className={classes}>
        <div className="spinner-grow text-dark" role="status"></div>
      </div>
    );
  } else {
    return (
      <div className={classes}>
        <div className="spinner-grow text-warning" role="status"></div>
      </div>
    );
  }
};

export default Spinner;
