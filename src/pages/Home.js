import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Categories from "../components/Categories";
import HeroBanner from "../components/HeroBanner";
import Product from "../components/Product";
import Showcase from "../components/Showcase";
import bg_01 from "../assets/images/bg-01.jpg";
import image_01 from "../assets/images/bg_03.png";
import bg_02 from "../assets/images/banner_02.jpeg";
import Banner from "../components/Banner";
import Newsletter from "../components/Newsletter";
import scrollTop from "../hooks/useScrollTop";
const bottomBanner = {
  title: "Ready to start shopping?",
  description:
    "Lorem ipsum dolor sit amet, <u>consectetur adipiscing elit</u>. Suspendisse varius enim in eros elementum.",
  bgImage: bg_02,
  image: "",
  buttonText: "New Collection",
  buttonUrl: "www.google.com",
};
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    scrollTop();
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    scrollTop();
  }, []);
  return (
    <div className="overflow-hidden">
      <HeroBanner banner={bottomBanner}></HeroBanner>
      <section className="lg:px-[100px] px-[20px] border-y py-[100px]">
        <Categories></Categories>
      </section>
      <section className="lg:px-[100px] px-[20px] py-[100px] border-b">
        <Showcase></Showcase>
      </section>
      <section className="lg:px-[100px] px-[20px] py-[100px]">
        <h4 className="text-center mb-[20px]">OUR ONLINE STORE</h4>
        <h2 className="text-4xl text-center mb-[50px] lg:px-0 px-[20px]">
          Pottery Collection
        </h2>
        <div className="lg:px-0 px-[20px] grid lg:grid-cols-3 grid-cols-1 gap-[20px]">
          {products?.map((product) => (
            <Product key={product.trackNumber} product={product}></Product>
          ))}
        </div>
        <div className="mt-[50px] text-center">
          <Button>VIEW ALL PRODUCTS</Button>
        </div>
      </section>
      <section className="mb-[100px]">
        <Banner banner={bottomBanner}></Banner>
      </section>
      <section>
        <Newsletter></Newsletter>
      </section>
    </div>
  );
};

export default Home;
