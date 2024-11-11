import React from "react";
import heroImg from "../../public/images/hero-image.png";
import brand1 from "../../public/images/flipkart.png";
import brand2 from "../../public/images/amazon.png";

const Hero = () => {
  return (
      <div className="hero flex items-center h-full">
        <div className="title flex-1">
          <h1 className="text-[6rem] font-bold leading-tight">
            YOUR FEET DESERVE THE BEST
          </h1>
          <p className="w-[70%]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio rerum dolores aut laborum
            reprehenderit cupiditate numquam aliquam sint quia cumque!
          </p>
          <div className="btn flex gap-5 mt-9">
            <div className="btn1 bg-red-700 text-white px-5 py-1 border-2">Shop Now</div>
            <div className="btn2 px-5 py-1 border-2">Category</div>
          </div>

          <div className="shoping py-5">
            <p>Also Available On</p>
            <div className="brand-icon flex gap-5 pt-3">
              <img src={brand1} alt="brand-1" />
              <img src={brand2} alt="brand-2" />
            </div>
          </div>
        </div>
        <div className="hero-img">
          <img src={heroImg} alt="HeroImg" />
        </div>
      </div>
  );
};

export default Hero;
