import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import image from "../assets/images/plate.png";
const Product = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="border-b product ">
      <div className="overflow-hidden relative">
        <img
          onClick={() => navigate(`/product/${product.trackNumber}`)}
          className="transition ease duration-[0.5s] hover:cursor-pointer"
          src={product.image}
          alt=""
        />
      </div>
      <div className="my-[20px]">
        <h2
          onClick={() => navigate(`/product/${product.trackNumber}`)}
          className="hover:cursor-pointer hover:text-red-800 transition duration-[0.5s] font-semibold text-slate-500 inline"
        >
          {product?.name}
        </h2>
        <h4>$ {product?.price}.00 USD</h4>
      </div>
    </div>
  );
};

export default Product;
