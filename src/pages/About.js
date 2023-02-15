import React from "react";
import bg from "../assets/images/bg_about-us.jpg";
import Artist from "../components/Artist";
import Categories from "../components/Categories";
import image from "../assets/images/showcase_item_01.png";
import image2 from "../assets/images/showcase_item_02.png";
const About = () => {
  return (
    <section>
      <div
        className="lg:px-[100px] px-[20px] lg:py-[150px] py-[50px]"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div>
          <h1 className="text-4xl font-bold mb-[20px]">About Us</h1>
          <p className="lg:w-[45%] w-[100%]">
            The attractions of ceramics lie partly in its contradictions. It is
            both difficult and easy, with an element beyond our control. It is
            both extremely fragile and durable. Like 'Sumi' ink painting, it
            does not lend itself to erasures and indecision.
          </p>
        </div>
      </div>
      <div className="lg:px-[100px] px-[20px] py-[100px] border-b">
        <Categories></Categories>
      </div>
      <div className="lg:px-[100px] px-[40px] py-[100px] border-b bg-slate-100">
        <h2 className="text-center mb-[20px]">OUR CREW</h2>
        <h1 className="text-center font-bold text-4xl">Talented Artist</h1>
        <div className="mt-[50px] grid lg:grid-cols-3 grid-cols-1 gap-[30px]">
          <Artist></Artist>
          <Artist></Artist>
          <Artist></Artist>
        </div>
      </div>
      <div className="lg:px-[100px] px-[40px] pt-[200px] lg:pb-[200px] pb-[100px] grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-[50px] gap-[80px] border-b">
        <div className="relative h-[250px] flex justify-center lg:mr-[30px] mr-0">
          <img
            className="absolute top-0 bottom-0 lg:h-[150%] h-[100%] my-auto translate-x-[-20%]"
            src={image2}
            alt=""
          />
          <img
            className="absolute top-0 bottom-0 lg:h-[200%] h-[150%] my-auto translate-x-[20%]"
            src={image}
            alt=""
          />
          <div className="h-[100%] max-h-[200px] bg-slate-100 absolute left-0 right-0 top-0 bottom-0 my-auto -z-50"></div>
        </div>
        <div>
          <h4 className="font-semibold text-2xl mb-[20px]">
            Created With Love <span className="font-play">&</span> Passion
          </h4>
          <p className="mb-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum. Duis cursus, mi quis viverra ornare,
            eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
          <a className="hover:underline transition ease duration-500" href="#">
            View More Pieces
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
