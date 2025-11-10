import React from 'react'
import hero2Img from "../assets/images/hero2-image.jpg"
const HeroSection2 = () => {
  return (
    <>
      <div className="relative">
        <img src={hero2Img} alt="hero2 image" className="w-full" />

        {/* Overlay text */}
        <div className="absolute inset-0 flex items-start justify-center pt-6 md:pt-10">
          <h1 className="text-[12px] md:text-[20px] text-white font-semibold text-center max-w-[90%] md:max-w-[60%]">
            Heat-forged aluminium unibody design for exceptional pro capability.
          </h1>
        </div>
      </div>
    </>
  );
};


export default HeroSection2