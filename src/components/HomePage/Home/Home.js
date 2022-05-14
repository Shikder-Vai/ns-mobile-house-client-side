import React from "react";
import Benner from "../Bennar/Benner";
import NavBar from "../NavBar/NavBar";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";
import Welcome from "../Welcome/Welcome";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Benner></Benner>
      <Welcome></Welcome>
      <Reviews></Reviews>
      <Products></Products>
    </div>
  );
};

export default Home;
