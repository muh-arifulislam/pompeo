import React from "react";
import envelope from "../assets/icon/envelope.png";
const Newsletter = () => {
  return (
    <div className="mb-[100px] text-center">
      <h4 className="mb-[20px]">LATEST NEWS</h4>
      <h2 className="text-5xl mb-[70px]">
        Latest news <span className="font-play">&</span> New updates
      </h2>
      <div className="">
        <form action="" className="envelope-before">
          <input
            className="w-[25vw] px-[20px] pl-[50px] py-[10px] border outline-none  relative envelope-after"
            type="text"
            name=""
            id=""
            placeholder="Enter your email"
          />
          <button
            className={`px-[50px] py-[12px] text-[14px] shadow-md bg-black text-white hover:bg-red-700 transition duration-[0.4s] ease`}
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
