import React from "react";
import sadEmoji from "../imgs/404-error.jpg";


const NotFound = () => {
  return (
    <div className="container my-5 p-5 text-center notFound text-light rounded">
      <img src={sadEmoji} alt="" height="150" />
      <h1 className="fw-bold mt-5"> 404 Not Found! </h1>{" "}
      <p>
        404 —  means not found.Basically, you’ re looking for a page but the web
        application you’ re talking to has no idea what you’ re talking about.{" "}
      </p>{" "}
    </div>
  );
};

export default NotFound;
