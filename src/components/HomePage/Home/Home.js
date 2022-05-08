import React from "react";
import Benner from "../Bennar/Benner";
import Reviews from "../Reviews/Reviews";
import Welcome from "../Welcome/Welcome";

const Home = () => {
  return (
    <div>
      <Benner></Benner>
      <Welcome></Welcome>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
