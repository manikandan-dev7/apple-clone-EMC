import React from 'react';
import hero1 from "../assets/images/hero1.jpg";

const HeroSection_1 = () => {
  return (
    <section className="relative flex flex-col items-center w-full py-10 text-center text-white bg-black">
      <h2 className="mb-6 text-lg font-semibold md:text-2xl">
        Heat-forged aluminium unibody design for exceptional pro capability.
      </h2>

      <div className="flex justify-center w-full">
        <img
          src={hero1}
          alt="iPhone Colors"
          className="object-cover w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection_1;
