import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import image from "../assets/images/person.jpg";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const Artist = () => {
  return (
    <div className="shadow-sm px-[30px] py-[40px] bg-white">
      <img
        className="w-[100%] max-w-[90px] mx-auto rounded-full mb-[20px]"
        src={image}
        alt=""
      />
      <h3 className="text-center mb-[10px] font-semibold">Dominic Basket</h3>
      <h4 className="text-center mb-[20px] text-[12px] font-semibold">
        SENIOR DESIGNER
      </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. enim in eros
        elementum
      </p>
      <div className="flex justify-center items-center gap-[10px] mt-[30px]">
        <button className="w-[30px] h-[30px] border text-slate-600 hover:text-black hover:border-amber-500 transition ease duration-300">
          <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
        </button>
        <button className="w-[30px] h-[30px] border text-slate-600 hover:text-black hover:border-amber-500 transition ease duration-300">
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        </button>
        <button className="w-[30px] h-[30px] border text-slate-600 hover:text-black hover:border-amber-500 transition ease duration-300 ">
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Artist;
