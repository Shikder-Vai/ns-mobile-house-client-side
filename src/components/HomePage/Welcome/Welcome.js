import React from "react";

const Welcome = () => {
  return (
    <div className=" md:mx-10 p-4">
      <div className="md:flex  items-center rounded-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className=" p-3">
          <img
            className="h-96 w-50 rounded-2xl"
            src="https://i.ibb.co/db0jGPm/francesco-de-tommaso-1b-BCt-UAUMFI-unsplash.jpg"
            alt=""
          />
        </div>
        <div className=" ml-10 p-3 rounded-2xl">
          <h5 className="md:mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
