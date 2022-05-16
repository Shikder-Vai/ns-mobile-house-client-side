import React from "react";

const Footer = () => {
  return (
    <section className=" bg-slate-900 mt-3 text-white w-full font-serif">
      <div className="text-center text-light p-2">
        <h4 className=" text-lg">Ns Mobile House</h4>
        <h5 className=" text-lg">Mobile Inventory Website</h5>
        <h6 className=" text-lg font-medium">
          Developed by
          <a
            className="text-decoration-none text-indigo-200"
            href="https://www.facebook.com/MNS987"
          >
            Ns World
          </a>
        </h6>
        <h6 className=" text-sm">Copyright © 2022 Foods Reviews</h6>
        <p className="mb-3 footer-font">All rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;
