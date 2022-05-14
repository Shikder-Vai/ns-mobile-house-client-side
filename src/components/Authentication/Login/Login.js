import React from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/home";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  let errorMessage;

  if (loading || sending) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  if (error) {
    errorMessage = <p className="text-danger">{error?.message} </p>;
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    signInWithEmailAndPassword(email, password);
  };

  const resetPassword = async (event) => {
    const email = event.target.email.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };
  return (
    <div className=" py-5 bg-slate-400 h-screen">
      <div className=" border-2 py-6 md:mx-96 rounded-xl  bg-slate-200">
        <h5 className=" border-cyan-300 font-serif m-3 border-2 rounded-xl text-xl mb-8 font-medium text-gray-900 dark:text-white">
          SignIn to our platform
        </h5>
        <form onSubmit={handleLogin}>
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
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-60 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />{" "}
            <br />
          </div>
          <div className="mb-4">
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

          <button
            type="submit"
            className=" w-60 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>
        </form>
        {errorMessage}
        <div className=" flex p-5 flex-row justify-between">
          <p className=" text-sm text-blue-700 hover:underline dark:text-blue-500">
            <button onClick={resetPassword} type="reset">
              Lost Password?
            </button>
          </p>

          <Link
            to="/signUp"
            className=" text-sm text-blue-700 hover:underline dark:text-blue-500"
          >
            New? Please Register
          </Link>
        </div>
        <SocialLogin></SocialLogin>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
