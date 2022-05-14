import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Button, Navbar } from "flowbite-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleLogOut = () => {
    signOut(auth);
  };
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Ns Mobile House
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link active={true}>Home</Navbar.Link>
        <NavLink to={"/"}></NavLink>
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/signUp"}></NavLink>
        {user ? (
          <Button className="button-style" onClick={handleLogOut}>
            SIGN OUT
          </Button>
        ) : (
          <NavLink
            as={Link}
            to="/login"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            LOGIN
          </NavLink>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
