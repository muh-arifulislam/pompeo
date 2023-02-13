import React from "react";
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
import Footer from "../components/Footer";
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
  return (
    <div className="">
      <HeroBanner banner={bottomBanner}></HeroBanner>
      <section>
        <Categories></Categories>
      </section>
      <section>
        <Showcase></Showcase>
      </section>
      <section className="px-[100px] py-[100px]">
        <h4 className="text-center mb-[20px]">OUR ONLINE STORE</h4>
        <h2 className="text-4xl text-center mb-[50px]">Pottery Collection</h2>
        <div className="grid grid-cols-3 gap-[20px]">
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
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
      <Footer></Footer>
    </div>
  );
};

export default Home;
