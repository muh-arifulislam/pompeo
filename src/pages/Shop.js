import React, { useEffect } from "react";
import bg from "../assets/images/bg_04.jpg";
import Newsletter from "../components/Newsletter";
import Product from "../components/Product";
import scrollTop from "../hooks/useScrollTop";
const Shop = () => {
  useEffect(() => {
    scrollTop();
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
        <h5 className="text-center mb-[20px]">OUR ONLINE STORE</h5>
        <h2 className="text-center text-4xl font-bold">Ceramic Collection</h2>
        <div className="mt-[50px] grid lg:grid-cols-3 grid-cols-1 gap-[20px]">
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </div>
      </div>
      <div className="py-[100px]">
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};

export default Shop;
