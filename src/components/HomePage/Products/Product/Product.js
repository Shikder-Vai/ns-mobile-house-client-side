import { Card } from "flowbite-react";
import React from "react";

const Product = ({ product }) => {
  const { name, img, price, review, suplier } = product;
  return (
    <div>
      <Card className="max-w-sm">
        <img className=" h-80 p-3 rounded-2xl" src={img} alt="" />
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          <span className="text-2xl font-bold">Name:</span> {name}
        </h5>
        <h5>
          <span className=" text-xl font-semibold">Price:</span>
          {price}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span>Description:</span>
          <br />
          {review}
        </p>
        <h3>
          {" "}
          <span className=" text-lg font-medium">Suplier:</span>
          {suplier}
        </h3>
      </Card>
    </div>
  );
};

export default Product;
