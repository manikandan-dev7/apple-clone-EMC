import React from 'react';
import heroImg from "../assets/images/hero-image.jpg";
import heroImg1 from "../assets/images/hero1.jpg";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section 1 */}
      <section className="relative w-full bg-[#f5f5f7]">
        <img
          src={heroImg}
          alt="iPhone Hero"
          className="object-cover w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black">
        </div>
      </section>

      {/* Hero Section 2 */}
      <section className="relative flex flex-col items-center w-full py-10 text-center text-white bg-black">
        <h2 className="mb-6 text-lg font-semibold md:text-2xl">
          Heat-forged aluminium unibody design for exceptional pro capability.
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          <img
            src={heroImg1}
            alt="iPhone Colors"
            className="w-[80vw] md:w-[60vw] h-auto object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
