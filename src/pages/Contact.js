import React, { useEffect } from "react";
import bg from "../assets/images/bg_04.jpg";
import image from "../assets/images/tea.jpeg";
import scrollTop from "../hooks/useScrollTop";
const Contact = () => {
  useEffect(() => {
    scrollTop();
  }, []);
  return (
    <div className="bg-slate-100">
      <div
        className="lg:px-[100px] px-[20px] lg:py-[150px] py-[50px] relative"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="z-[999999]">
          <h1 className="text-4xl font-bold mb-[20px]">Contact Us</h1>
          <p className="lg:w-[45%] w-[100%]">
            The attractions of ceramics lie partly in its contradictions. It is
            both difficult and easy, with an element beyond our control. It is
            both extremely fragile and durable. Like 'Sumi' ink painting, it
            does not lend itself to erasures and indecision.
          </p>
        </div>
      </div>
      <div className="lg:px-[100px] py-[100px]">
        <div className="text-center lg:px-[100px]">
          <h4 className="mb-[10px] text-red-600">CONTACT US</h4>
          <h5 className="text-4xl mb-[100px] font-bold tracking-wider">
            Let get in touch
          </h5>
          <div className="grid lg:grid-cols-3 grid-cols-1">
            <div>
              <h5 className="font-semibold mb-[20px]">PHONE</h5>
              <h4 className="font-semibold text-slate-500">
                +88 013 0656 0747
              </h4>
            </div>
            <div>
              <h5 className="font-semibold mb-[20px]">LOCATION</h5>
              <h4 className="font-semibold text-slate-500">
                2567 Fifth Floor, New Market, Cumilla Sadar <br /> Cumilla 3500,
                Bangladesh
              </h4>
            </div>
            <div>
              <h5 className="font-semibold mb-[20px]">EMAIL</h5>
              <h4 className="font-semibold text-slate-500">
                pompoe@pottery1990.com
              </h4>
            </div>
          </div>
        </div>
        <div className="shadow-sm bg-white mt-[50px]">
          <div
            className="w-[100%] h-[200px]"
            style={{
              backgroundImage: `url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "0 51%",
            }}
          ></div>
          <div className="flex lg:flex-row flex-col">
            <div className="lg:w-[40%] w-[100%] p-[50px]  lg:border-r border-0">
              <div className="w-[100%] h-[100%] bg-slate-300 cursor-grab ">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8705.002779856539!2d91.17617613649686!3d23.46036290886454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37547f2f8b565241%3A0x2801ddfaefdddaa!2sNew%20Market%2C%20Comilla!5e0!3m2!1sen!2sbd!4v1676449765659!5m2!1sen!2sbd"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-[100%] lg:h-[100%] h-[40vh]"
                ></iframe>
              </div>
            </div>
            <div className="lg:w-[60%] w-[100%] p-[50px]">
              <h4 className="text-2xl font-semibold">Drop Your Line</h4>
              <form action="">
                <div className="flex gap-[10px] mb-[20px]">
                  <div className="">
                    <label
                      htmlFor=""
                      className="text-[12px] inline-block mb-[8px] font-semibold"
                    >
                      Name:
                    </label>
                    <input
                      className="w-[100%] px-[20px] pl-[50px] py-[10px] border outline-none  relative envelope-after text-[14px] bg-slate-100"
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor=""
                      className="text-[12px] inline-block mb-[8px] font-semibold"
                    >
                      Email:
                    </label>
                    <input
                      className="w-[100%] px-[20px] pl-[50px] py-[10px] border outline-none  relative envelope-after text-[14px] bg-slate-100"
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="text-[12px] inline-block mb-[8px] font-semibold"
                  >
                    Message:
                  </label>
                  <textarea
                    name=""
                    id=""
                    placeholder="How can we help you?"
                    className="w-[100%] h-[35vh] bg-slate-100 border px-[20px] py-[20px] text-[14px] outline-0"
                  ></textarea>
                </div>
                <div className="mt-[20px]">
                  <input
                    type="submit"
                    value="SENT MESSAGE"
                    className="px-[40px] text-[14px] py-[20px] bg-red-700 text-white cursor-pointer lg:w-auto w-[100%]"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
