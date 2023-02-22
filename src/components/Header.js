import {
  faCartShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
const Header = () => {
  const [active, setActive] = useState(false);
  const [activeCart, setActiveCart] = useState(false);
  return (
    <header className="relative">
      <nav>
        <div className="fixed w-[100%] top-0 bg-white h-[80px] grid content-center shadow-md z-50">
          <div className="lg:px-[7vw] px-[15px] flex items-center justify-between ">
            <div>
              <h3 className="text-xl font-logo">Pompeo</h3>
            </div>
            <div>
              {/* Desktop view */}
              <div className="flex items-center">
                <div className="lg:block hidden">
                  <ul className="flex text-[12px] font-semibold text-slate-600 tracking-widest leading-[22px]">
                    <li className="px-[20px] hover:text-black transition">
                      <Link to="/">HOME</Link>
                    </li>
                    <li className="px-[20px] hover:text-black transition">
                      <Link to="/shop">SHOP</Link>
                    </li>
                    <li className="px-[20px] hover:text-black transition">
                      <Link to="/about-us">ABOUT US</Link>
                    </li>
                    <li className="px-[20px] hover:text-black transition">
                      <Link to="/contact-us">CONTACT</Link>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center text-slate-600">
                  <span className="w-[1px] h-[30px] bg-slate-300 mr-[20px]"></span>
                  <button
                    onClick={() => setActiveCart(true)}
                    className="flex items-center"
                  >
                    <span className="px-[2px]">
                      <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                    </span>
                    <p className="ml-1">Cart</p>
                  </button>
                  <button
                    onClick={() => setActive(!active)}
                    className="ml-[20px] px-[10px] text-[24px] lg:hidden inline"
                  >
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* mobile view  */}
        <div
          className={`fixed top-[80px] left-0 right-0 bg-white z-[1] ${
            active
              ? "translate-y-[0] transition ease duration-500"
              : "translate-y-[-100%] transition ease duration-500"
          }`}
        >
          <ul className="text-[12px] font-semibold tracking-widest leading-[22px] text-slate-600 uppercase ">
            <li className="p-[20px] border-y">
              <Link onClick={() => setActive(!active)} to="/">
                Home
              </Link>
            </li>
            <li className="p-[20px] border-y">
              <Link onClick={() => setActive(!active)} to="/shop">
                SHOP
              </Link>
            </li>
            <li className="p-[20px] border-y">
              <Link onClick={() => setActive(!active)} to="/about-us">
                ABOUT US
              </Link>
            </li>
            <li className="p-[20px] border-y">
              <Link onClick={() => setActive(!active)} to="contact-us">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Cart setActiveCart={setActiveCart} activeCart={activeCart}></Cart>
    </header>
  );
};

export default Header;
