import React, { useState } from "react";
import { XIcon } from '@heroicons/'
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [open, setOpen] = useState(false);
  return (
    <nav className="bg-indigo-200 p-2">
      <div onClick={() => setOpen(!open)} className="w-8 h-9 md:hidden">
        {open ?  : <MenuIcon></MenuIcon>}
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
          to={"/reviews"}
        >
          Reviews
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " text-teal-500 font-bold mr-5"
              : "mr-5 text-blue-900 font-semibold"
          }
          to={"/dashboard"}
        >
          Dashboard
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
      </div>
    </nav>
  );
};

export default NavBar;
