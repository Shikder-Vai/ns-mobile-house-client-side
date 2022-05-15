import React from "react";
import NotFound from "../Images/404.gif";

const Error404 = () => {
  return (
    <div>
      <div className="container flex justify-center items-center">
        <img className="mt-2 img-fluid rounded-2xl" src={NotFound} alt="" />
      </div>
    </div>
  );
};

export default Error404;
