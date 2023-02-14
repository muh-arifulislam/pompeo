import React from "react";
import bg from "../assets/images/bg-01.jpg";
import bg2 from "../assets/images/bg_03.png";
import Button from "./Button";
const Banner = ({ banner }) => {
  const { title, description, bgImage, buttonText, buttonUrl } = banner;
  return (
    <div
      className={`h-[70vh] flex items-center relative `}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0px, 0px, 0px, 0px",
        backgroundSize: "cover",
      }}
    >
      <div className="lg:px-[100px] px-[40px] grid lg:grid-cols-2 grid-cols-1 items-center">
        <div className="">
          <h3 className="mb-[15px]">POMPEO POTTERY</h3>
          <h2 className="text-5xl leading-[58px] font-semibold mb-[10px]">
            {title}
          </h2>
          <p className="mb-[40px]">{description}</p>
          <Button>SHOP COLLECTION</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
