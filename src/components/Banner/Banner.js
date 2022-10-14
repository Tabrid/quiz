import React from "react";
import banner from "../imgs/quiz-page-banner.png";

const Banner = () => {
  return (
    <div className="d-flex align-items-center justify-content-around banner m-5 p-3">
      <img src={banner} alt="" className="img-fluid" />
    </div>
  );
};

export default Banner;
