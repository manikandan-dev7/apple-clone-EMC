import React from 'react'
import { useState } from "react";
import { FaApple, FaShoppingBag, FaSearch, FaChevronRight } from "react-icons/fa"
import { FiMenu } from "react-icons/fi"


const NavLink = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "TV & Home",
    "Entertainment",
    "Acessories",
    "Support",
];



const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='flex items-center justify-center p-3 space-x-10 bg-black ' style={{ color: "#9CA3AF" }}>
                <h1 className='text-xl text-gray-500 cursor-pointer hover:text-white'><FaApple /></h1>

                <ul className='hidden md:flex space-x-8 text-[14px] font-semibold hover:cursor-pointer'>
                    {NavLink.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} className='hover:text-white'>{link}</a>
                        </li>
                    ))}
                </ul>
                <h1 className='text-[16px] text-gray-300 hover:text-white'><FaSearch /></h1>
                <h1 className='text-[16px] text-gray-300 hover:text-white'><FaShoppingBag /></h1>
                <h1 className='cursor-pointer text-[20px] text-gray-300 md:hidden' onClick={() => setOpen(true)}><FiMenu /></h1>
            </div>

            <div className="bg-[#1D1D1F] p-4 text-white ">
                <p className="text-center text-[9px] md:text-[14px] flex items-center justify-center">Get ₹5000 instant cashback on iPhone 17 Pro with eligible cards. Plus up to 6 months of No Cost EMI. ‡ <a href="" className="text-blue-600 hover:underline flex items-center justify-center text-[15px] " style={{ paddingLeft: "2px" }}> Buy <FaChevronRight className="w-3 h-3" /></a></p>
            </div>

            {open && (
                <div className="fixed top-0 left-0 z-50 flex flex-col w-full h-full text-white bg-black bg-opacity-80">
                    <div className="flex items-center justify-between p-5 border-b border-gray-600">
                        <FaApple className="text-2xl" />
                        <button className="text-xl" onClick={() => setOpen(false)}>✕</button>
                    </div>

                    <ul className="p-6 space-y-4 text-lg font-semibold">
                        {NavLink.map((item, index) => (
                            <li key={index} className="pb-2 hover:text-gray-700">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default Navbar