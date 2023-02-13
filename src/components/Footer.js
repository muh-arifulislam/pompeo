import React from "react";
import location from "../assets/icon/location.png";
import call from "../assets/icon/call.png";
import envelope from "../assets/icon/envelope.png";
const Footer = () => {
  return (
    <footer className="">
      <div className="text-center px-[100px] mb-[100px]">
        <h2 className="text-3xl font-logo">Pompeo</h2>
        <p className="w-[30vw] mx-auto mt-[20px]">
          I have always striven to fix beauty in wood, stone, glass or pottery,
          that has been my creed.
        </p>
        <div className="grid grid-cols-3 mt-[70px]">
          <div>
            <img className="w-[40px] mx-auto mb-[10px]" src={envelope} alt="" />
            <h5 className="text-black text-[14px] font-semibold mb-[20px]">
              EMAIL
            </h5>
            <h4 className="text-[14px] font-semibold text-slate-600 tracking-wide">
              pompeopotery@gmail.com
            </h4>
          </div>
          <div>
            <img className="w-[40px] mx-auto mb-[10px]" src={location} alt="" />
            <h5 className="text-black text-[14px] font-semibold mb-[20px]">
              FIND
            </h5>
            <h4 className="text-[14px] font-semibold text-slate-600 tracking-wide">
              Central Park, Manhattan <br /> New York, 1101
            </h4>
          </div>
          <div>
            <img className="w-[40px] mx-auto mb-[10px]" src={call} alt="" />
            <h5 className="text-black text-[14px] font-semibold mb-[20px]">
              CALL
            </h5>
            <h4 className="text-[14px] font-semibold text-slate-600 tracking-wide">
              +1 292 345 678
            </h4>
          </div>
        </div>
      </div>
      <div className="py-[30px] bg-slate-100 border-t text-center">
        <p className="text-slate-600">
          <small>
            Template design by Dorian Hoxha | Website developed by{" "}
            <a
              href="https://www.linkedin.com/in/muh-arifulislam"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-black hover:underline hover:text-red-500 transition ease duration-500"
            >
              Md. Ariful Islam
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
