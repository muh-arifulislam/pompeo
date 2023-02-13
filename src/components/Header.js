import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-[100%] top-0 bg-white h-[80px] grid content-center shadow-md z-50">
      <div className="px-[7vw] flex items-center justify-between ">
        <div>
          <h3 className="text-xl">Pompeo</h3>
        </div>
        <div>
          <nav className="flex items-center">
            <ul className="flex">
              <li className="px-[20px]">
                <Link to="#">HOME</Link>
              </li>
              <li className="px-[20px]">
                <Link to="#">ABOUT</Link>
              </li>
              <li className="px-[20px]">
                <Link to="#">SHOP</Link>
              </li>
              <li className="px-[20px]">
                <Link to="#">CONTACT</Link>
              </li>
            </ul>
            <div className="flex items-center">
              <span className="w-[1px] h-[30px] bg-slate-300 mr-[20px]"></span>
              <p className="mr-[20px]">Cart</p>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
