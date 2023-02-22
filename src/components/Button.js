import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`px-[40px] py-[20px] text-[12px] shadow-md bg-red-700 text-white hover:bg-black transition duration-[0.4s] ease hover:translate-y-[-7px] ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
