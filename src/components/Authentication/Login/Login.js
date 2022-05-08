import React from "react";

const Login = () => {
  return (
    <div className=" bg-slate-400">
      <div className=" border-2 md:mx-96 rounded-xl  bg-slate-200">
        <h5 className="text-xl mb-8 font-medium text-gray-900 dark:text-white">
          Sign in to our platform
        </h5>
        <form>
          <div>
            <label
              htmlFor=""
              className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Email
            </label>{" "}
            <br />
            <input
              type="email"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-60 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />{" "}
            <br />
          </div>
          <div>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Password
            </label>
            <input
              type="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-60 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="************"
              required
            />{" "}
            <br />
          </div>
          <div className="">
            <p className="ml-auto mb-4 text-sm text-blue-700 hover:underline dark:text-blue-500">
              Lost Password?
            </p>
          </div>
          <button
            type="submit"
            class=" w-60 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
