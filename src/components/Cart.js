import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import image from "../assets/images/set_potterys.png";
import { deleteFromDb } from "../fakeDb";
import Button from "./Button";
const Cart = ({ activeCart, setActiveCart }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartDep, setCartDep] = useState(0);
  useEffect(() => {
    fetch("../products.json")
      .then((res) => res.json())
      .then((data) => {
        const storedCart = JSON.parse(localStorage.getItem("shopping-cart"));
        const storedProducts = [];
        if (data) {
          for (const trackNumber in storedCart) {
            const addedProduct = data.find(
              (product) => product.trackNumber === trackNumber
            );
            if (addedProduct) {
              const quantity = storedCart[trackNumber];
              addedProduct.quantity = quantity;
              storedProducts.push(addedProduct);
            }
          }
        }
        setCartProducts(storedProducts);
      });
  }, [cartDep]);
  return (
    <aside>
      <div
        className={`fixed top-0 w-[100vw] h-[100vh] z-[9999999999] lg:w-[35%]  bg-slate-50 ${
          activeCart
            ? "translate-x-[0] transition ease duration-500"
            : "translate-x-[-100%] transition ease duration-500"
        }`}
      >
        <div className={`h-[100%]`}>
          <div
            className="py-[10px] pl-[24px] pr-[14px] border-y
            flex items-center justify-between"
          >
            <h5 className="text-[15px] font-semibold">My Cart</h5>
            <button
              onClick={() => setActiveCart(false)}
              className="text-[24px] px-[10px]"
            >
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </button>
          </div>
          {cartProducts ? (
            <div className="h-[auto] relative">
              <div className="p-[20px]">
                {cartProducts.map((item) => (
                  <div className="flex justify-between mb-[25px]">
                    <div className="flex gap-[15px]">
                      <img
                        className="w-[60px] h-[80px]"
                        src={item.image}
                        alt=""
                      />
                      <div>
                        <h4 className="text-[14px] font-semibold">
                          {item?.name}
                        </h4>
                        <p className="text-[14px] font-semibold">
                          $ <span>{item?.price}</span>.00 USD
                        </p>
                        <button
                          onClick={() => {
                            setCartDep(cartDep + 1);
                            deleteFromDb(item?.trackNumber);
                          }}
                          className="text-[14px] text-slate-600"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div>
                      <input
                        value={item?.quantity}
                        min="0"
                        type="number"
                        className="border outline-none w-[60px] px-[10px] py-[7px]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="h-[100%] flex justify-center items-center">
              <p className="translate-y-[-100%] text-[14px]">No items found.</p>
            </div>
          )}
          <div className="fixed bottom-0 w-[100%] border-t">
            <div className="px-[30px] mb-[20px]">
              <div className="py-[20px] flex justify-between">
                <p className="text-slate-600 text-[16px]">Subtotal</p>
                <p className="text-slate-700 font-semibold">$ 500.00 USD</p>
              </div>
              <Button className=" w-[100%] font-semibold">
                CONTINUE TO CHECKOUT PROCESS
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setActiveCart(false)}
        className={`bg-black opacity-80 fixed top-0 right-0 h-[100vh] w-[65vw] z-[50] lg:block hidden ${
          activeCart
            ? "scale-1 transition ease duration-[0.6s]"
            : "scale-0 transition ease duration-[0.6s]"
        }`}
      ></div>
    </aside>
  );
};

export default Cart;
