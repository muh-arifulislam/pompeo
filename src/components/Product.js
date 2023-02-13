import React from "react";
import image from "../assets/images/plate.png";
const Product = () => {
  return (
    <div className="border-b product ">
      <div className="overflow-hidden relative">
        <img
          className="transition ease duration-[0.5s] hover:cursor-pointer"
          src={image}
          alt=""
        />
      </div>
      <div className="my-[20px]">
        <h2 className="hover:cursor-pointer hover:text-red-800 transition duration-[0.5s] font-semibold text-slate-500 inline">
          Decor Plate
        </h2>
        <h4>$ 65.00 USD</h4>
      </div>
    </div>
  );
};

export default Product;
