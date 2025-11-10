import React from 'react';
import heroImg from "../assets/images/hero-image.jpg";

const HeroSection = () => {
    return (
        <>
            <div className="relative bg-black w-full h-auto">
                <img src={heroImg} alt="hero image" className="w-full h-auto md:px-32 pt-8" />

                {/* Overlay content */}
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 md:pb-10 text-white text-center">
                    <button className="rounded-lg py-2 px-4 text-xs md:rounded-3xl text-white md:text-xl bg-[#0076DF] md:py-2 md:px-6 hover:bg-[#045094] font-semibold mb-2">
                        Buy
                    </button>
                    <p className="text-xs md:text-xl font-semibold">
                        From ₹134900.00* or ₹21650.00/mo. for 6 mo.‡
                    </p>
                </div>
            </div>
        </>
    );
};

export default HeroSection