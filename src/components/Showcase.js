import React from "react";
import image1 from "../assets/images/showcase_item_01.png";
import image2 from "../assets/images/showcase_item_02.png";
const Showcase = () => {
  return (
    <div className="px-[100px] py-[100px] relative showcase-before border border-b">
      <div className="grid grid-cols-2 gap-[70px] items-center">
        <div className="relative">
          <img className="w-[45%] mx-auto" src={image1} alt="" />
          <div className="h-[40vh] bg-slate-100 absolute left-0 right-0 top-0 bottom-0 my-auto -z-50"></div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Gold & Black Pottery</h2>
          <p className="w-[80%] text-slate-500 font-semibold leading-[24px] mb-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
            eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim
            veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea
            commodo consequatuisaute.
          </p>
          <a href="#" className="hover:underline">
            View Details
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[70px] items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-[20px]">
            Gold & Black Pottery
          </h2>
          <p className="w-[80%] text-slate-500 font-semibold leading-[24px] mb-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
            eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim
            veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea
            commodo consequatuisaute.
          </p>
          <a href="#" className="hover:underline">
            View Details
          </a>
        </div>
        <div className="relative mr-[50px]">
          <img className="w-[70%] mx-auto" src={image2} alt="" />
          <div className="h-[40vh] bg-slate-100 absolute left-0 right-0 top-0 bottom-0 my-auto -z-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
