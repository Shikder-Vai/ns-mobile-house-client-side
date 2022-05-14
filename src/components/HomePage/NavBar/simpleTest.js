import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { Link, NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);
  const handleLogOut = () => {
    signOut(auth);
  };
  return (
    <nav className="bg-indigo-200 flex space-x-96 p-3 justify-center">
      <div className=" flex items-start">
        <button className=" font-serif font-bold text-orange-400 text-2xl">
          NS MOBILE HOUSE
        </button>
      </div>
      <div>
        <div onClick={() => setOpen(!open)} className="w-8 h-9 md:hidden">
          {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
        </div>
        <div
          className={`text-2xl md:flex font-serif justify-center w-full bg-indigo-200 absolute md:static duration-500 ease-in ${
            open ? "top-10" : "top-[-130px]"
          }`}
        >
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " text-teal-500 font-bold mr-5"
                : "mr-5 text-blue-900 font-semibold"
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " text-teal-500 font-bold mr-5"
                : "mr-5 text-blue-900 font-semibold"
            }
            to={"/blogs"}
          >
            Blogs
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " text-teal-500 font-bold mr-5"
                : "mr-5 text-blue-900 font-semibold"
            }
            to={"/blogs"}
          >
            About
          </NavLink>
          {user ? (
            <button className="button-style" onClick={handleLogOut}>
              SIGN OUT
            </button>
          ) : (
            <NavLink
              as={Link}
              to="/login"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              LOGIN
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
