import React, { useEffect, useState } from "react";
import bg from "../assets/images/bg_04.jpg";
import Newsletter from "../components/Newsletter";
import Product from "../components/Product";
import scrollTop from "../hooks/useScrollTop";
import image from "../assets/images/blue_plate.jpg";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useParams } from "react-router-dom";
import { addToCart, addToDb } from "../fakeDb";
const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  useEffect(() => {
    scrollTop();
    fetch("../products.json")
      .then((res) => res.json())
      .then((data) => {
        const products = [...data];
        const product = products.find((product) => product.trackNumber === id);
        setProduct(product);
      });
  }, []);
  return (
    <div>
      <div
        className="lg:px-[100px] px-[20px] lg:py-[150px] py-[50px] relative"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="z-[999999]">
          <h1 className="text-4xl font-bold mb-[20px]">Shop</h1>
          <p className="lg:w-[45%] w-[100%]">
            The attractions of ceramics lie partly in its contradictions. It is
            both difficult and easy, with an element beyond our control. It is
            both extremely fragile and durable. Like 'Sumi' ink painting, it
            does not lend itself to erasures and indecision.
          </p>
        </div>
      </div>
      <div className="py-[100px] lg:px-[100px] px-[40px] border-b">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[60px] items-center">
          <div>
            <img src={product.image} alt="" />
          </div>
          <div>
            <h4 className="mb-[20px]">Product Details</h4>
            <h1 className="mb-[20px] text-3xl font-bold">{product?.name}</h1>
            <h2 className="mb-[20px] font-bold">$ {product?.price}.00 USD</h2>
            <h3 className="mb-[20px]">
              The attractions of ceramics lie partly in its contradictions. It
              is both difficult and easy, with an element beyond our control. It
              is both extremely fragile and durable. Like 'Sumi' ink painting,
              it does not lend itself to erasures and indecision.
            </h3>
            <p className="border-b py-[10px] mb-[10px]">
              <span className="font-semibold mr-[10px]">Category:</span> Plate
            </p>
            <p className="border-b py-[10px] mb-[10px]">
              <span className="font-semibold mr-[10px]">Track Number:</span>{" "}
              {product?.trackNumber}
            </p>
            <div className="py-[10px]">
              <span className="mr-[12px] font-semibold">Share on:</span>
              <button className="ml-[5px] w-[30px] h-[30px] border text-slate-600 transition ease duration-300 hover:border-amber-600">
                <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
              </button>
              <button className="ml-[5px] w-[30px] h-[30px] border text-slate-600 transition ease duration-300 hover:border-amber-600">
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
              </button>
              <button className="ml-[5px] w-[30px] h-[30px] border text-slate-600 transition ease duration-300 hover:border-amber-600">
                <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
              </button>
            </div>
            <div className="mt-[30px] flex flex-col gap-[10px] mb-[10px]">
              <label htmlFor="" className="font-semibold ">
                Quantity
              </label>
              <input
                value={quantity}
                min="0"
                onChange={(e) => setQuantity(e.target.value)}
                type="number"
                className="border outline-none w-[60px] px-[10px] py-[10px]"
              />
            </div>
            <Button
              onClick={() => addToCart(product?.trackNumber, quantity)}
              className="text-[14px] uppercase lg:w-auto w-[100%]"
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
      <div className="py-[100px] lg:px-[100px] px-[40px] border-b">
        <h4 className="text-xl">Related Item</h4>
      </div>
      <div className="py-[100px]">
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};

export default ProductDetails;
