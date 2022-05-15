import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Loading from "../../Loading/Loading";
import Mobile from "./Mobile/Mobile";

const Inventory = () => {
  const [mobiles, setMobile] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(6);
  // const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    fetch(
      `https://auto-shoroom.herokuapp.com/mobiles?limit=${limit}&pageNumber=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMobile(data.mobiles);
        // setPageCount(data.count / limit);
      });
  }, [limit, page]);

  return (
    <div className="flex flex-col bg-gray-300 justify-center items-center">
      <Helmet>
        <title>Inventory - Auto Showroom</title>
      </Helmet>
      <div className="flex bg-login-style w-[100vw] py-10 items-center justify-center">
        <h1 className="font-bold  flex justify-center items-center text-[#FF5400] mx-4 text-3xl">
          INVENTORY
        </h1>
        <div>
          <div className="border-t-2 border-[#FF5400] w-16"></div>
          <div className="border-b-2 border-[#FF5400] w-8 mt-3"></div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 justify-center">
        {mobiles.length ? (
          mobiles.map((mobile) => <Mobile key={mobile._id} mobile={mobile} />)
        ) : (
          <Loading />
        )}
      </div>
      <div className="flex">
        {[...Array(5).keys()].map((number) => (
          <button
            onClick={() => setPage(number)}
            key={number}
            className={`border-2 border-black px-2 m-2 ${
              page === number ? "bg-[#FF5400] text-white" : ""
            }`}
          >
            {number + 1}
          </button>
        ))}
        <select
          defaultValue={limit}
          className="bg-gray-300 border-2 border-black"
          onChange={(e) => setLimit(e.target.value)}
        >
          <option value="6">6</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
        </select>
      </div>
    </div>
  );
};

export default Inventory;
