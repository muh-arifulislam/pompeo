import React from "react";
import pot from "../assets/images/pot.png";
const Categories = () => {
  return (
    <div className="px-[100px] border border-y py-[100px]">
      <div className="text-center">
        <h4 className="text-xl mb-[40px]">Product Categories</h4>
        <h2 className="text-4xl mb-[60px]">Porcelain & Pottery</h2>
      </div>
      <div className=" flex justify-around relative custom-before">
        <div
          className="w-[240px] h-[240px] rounded-full
       bg-red-800 flex flex-col justify-center items-center border-[30px] border-red-500"
        >
          <img src={pot} className="" alt="" />
          <h4 className="mb-[10px] text-[14px] leading-[38px] tracking-widest text-white">
            VASES
          </h4>
        </div>
        <div
          className="w-[240px] h-[240px] rounded-full
       bg-red-800 flex flex-col justify-center items-center border-[30px] border-red-500"
        >
          <img src={pot} className="" alt="" />
          <h4 className="mb-[10px] text-[14px] leading-[38px] tracking-widest text-white">
            VASES
          </h4>
        </div>
        <div
          className="w-[240px] h-[240px] rounded-full
       bg-red-800 flex flex-col justify-center items-center border-[30px] border-red-500"
        >
          <img src={pot} className="" alt="" />
          <h4 className="mb-[10px] text-[14px] leading-[38px] tracking-widest text-white">
            VASES
          </h4>
        </div>
      </div>
      <div className="mt-[80px] flex gap-[100px]">
        <div>
          <h2 className="text-[2rem] leading-[40px] mb-[20px]">
            Hand Grafted <br /> Pottery since 1990
          </h2>
          <p className="text-justify text-[0.9rem] leading-[1.4rem] font-semibold text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum. Duis cursus, mi quis viverra ornare,
            eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean
            faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem
            vitae risus posuere.
          </p>
        </div>
        <div>
          <h2 className="text-[2rem] leading-[40px] mb-[20px] ">
            We Provide Premium <br /> Pottery Produts
          </h2>
          <p className="text-justify text-[0.9rem] leading-[1.4rem] font-semibold text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum. Duis cursus, mi quis viverra ornare,
            eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean
            faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem
            vitae risus posuere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
