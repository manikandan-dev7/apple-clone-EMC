import React from 'react';
import heroImg from "../assets/images/hero-image.jpg";

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
    </>
  );
};

export default HeroSection;
