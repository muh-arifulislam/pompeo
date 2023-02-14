import React from "react";
import bg from "../assets/images/bg-01.jpg";
import bg2 from "../assets/images/bg_03.png";
import Button from "./Button";
const HeroBanner = () => {
  return (
    <div
      className={`h-[88vh] flex items-center`}
      style={{
        backgroundImage: `linear-gradient(180deg, hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0.3)), url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0px, 0px, 0px, 0px",
        backgroundSize: "auto, cover",
      }}
    >
      <div className="lg:px-[100px] px-[40px] grid lg:grid-cols-2 grid-cols-1 lg:text-start text-center items-center gap-y-[10px]">
        <div>
          <h3 className="mb-[15px]">POMPEO POTTERY</h3>
          <h2 className="text-5xl leading-[58px] font-semibold mb-[10px]">
            Unique Porcelain <span className="font-play">&</span> <br /> Stone
            Collection
          </h2>
          <p className="mb-[40px]">
            Unique & modern pottery made by our master in porcelain & stones
          </p>
          <Button>SHOP COLLECTION</Button>
        </div>
        <div className="w-[100%]">
          <img className="w-[100%]" src={bg2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
