import React from "react";
import image1 from "../assets/images/showcase_item_01.png";
import image2 from "../assets/images/showcase_item_02.png";
import { motion, useScroll } from "framer-motion";
const Showcase = () => {
  return (
    <div className="lg:px-0 px-[20px] relative showcase-before">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-[70px] items-center lg:mb-0 mb-[70px]">
        <motion.div
          initial={{ x: "-30%" }}
          whileInView={{ opacity: 1, x: "0" }}
          transition={{ duration: "1", type: "spring" }}
          className="relative"
        >
          <img
            className="w-[100%] max-w-[250px]  mx-auto"
            src={image1}
            alt=""
          />
          <div className="h-[100%] max-h-[220px] bg-slate-100 absolute left-0 right-0 top-0 bottom-0 my-auto -z-50"></div>
        </motion.div>
        <motion.div
          initial={{ x: "30%" }}
          whileInView={{ opacity: 1, x: "0" }}
          transition={{ duration: "1", type: "spring" }}
        >
          <h2 className="text-2xl font-semibold mb-[20px]">
            Gold & Black Pottery
          </h2>
          <p className="lg:w-[80%] w-[100%] text-slate-500 font-semibold leading-[24px] mb-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
            eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim
            veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea
            commodo consequatuisaute.
          </p>
          <a href="#" className="hover:underline">
            View Details
          </a>
        </motion.div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-[70px] items-center">
        <motion.div
          initial={{ x: "-30%" }}
          whileInView={{ opacity: 1, x: "0" }}
          transition={{ duration: "1", type: "spring" }}
          className="lg:order-1 order-2"
        >
          <h2 className="text-2xl font-semibold mb-[20px]">
            Gold & Black Pottery
          </h2>
          <p className="lg:w-[80%] w-[100%] text-slate-500 font-semibold leading-[24px] mb-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
            eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim
            veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea
            commodo consequatuisaute.
          </p>
          <a href="#" className="hover:underline">
            View Details
          </a>
        </motion.div>
        <motion.div
          initial={{ x: "30%" }}
          whileInView={{ opacity: 1, x: "0" }}
          transition={{ duration: "1", type: "spring" }}
          className="lg:order-2 order-1 relative lg:mr-[50px] mr-0"
        >
          <img
            className="w-[100%] max-w-[350px]  mx-auto"
            src={image2}
            alt=""
          />
          <div className="h-[100%] max-h-[220px] bg-slate-100 absolute left-0 right-0 top-0 bottom-0 my-auto -z-50"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Showcase;
