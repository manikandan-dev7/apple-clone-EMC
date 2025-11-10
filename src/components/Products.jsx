import React from 'react'
import Pro1 from '../assets/images/pro1.jpeg'
import Pro2 from '../assets/images/pro2.jpeg'
import Pro3 from '../assets/images/pro3.jpeg'
import Pro4 from '../assets/images/pro4.jpeg'
import Pro5 from '../assets/images/pro5.jpeg'
import Pro6 from '../assets/images/pro6.jpeg'


let productData = [
    {
        image: Pro1,
        Name: "iSmart Watch Pro",
        description: "Now with a Aid feature",
        btn1: "Learn More",
        btn2: "Buy"
    },
    {
        image: Pro2,
        Name: "MacBook",
        description: "Performance meets perfect design.",
        btn1: "Learn More",
        btn2: "Buy"
    },
    {
        image: Pro3,
        Name: "iPhone",
        description: "Innovative design for ultimate performance",
        btn1: "Learn More",
        btn2: "Buy"
    },
    {
        image: Pro4,
        Name: "AirPods Pro",
        description: "Now with a Hearing Aid feature",
        btn1: "Learn More",
        btn2: "Buy"
    },
    {
        image: Pro5,
        Name: "iPad",
        description: "Now with a Aid feature",
        btn1: "Learn More",
        btn2: "Buy"
    },
    {
        image: Pro6,
        Name: "Privacy",
        description: "iPhone ensures strong user privacy",
        btn1: "Learn More",
        btn2: "Buy"
    },
]

const Products = () => {
    return (
        <>
            <div className='flex items-center justify-around flex-wrap mt-10'>

                {productData.map((data, index) => (
                    <div className='mt-2 space-y-10 space-x-20 '>
                        <div key={index} className='relative inline-block'>
                            <img className='md:w-[48vw] w-[95vw] md:h-[40vw] h-[70vw]' src={data.image} alt="" />
                            <div className='absolute top-2 left-5 md:top-5 md:left-10 text-white'>
                                <h2 className='text-[14px] text-3xl font-bold md:pb-2 pb-1'>{data.Name}</h2>
                                <p className='text-[16px] font-semibold md:text-xl'>{data.description}</p>
                                <div>
                                    <button className='md:my-4 md:p-2 rounded-lg bg-blue-600 font-semibold hover:bg-blue-800 md:text-[16px] px-2 py-1 mt-2 '>{data.btn1} </button>
                                    <button className='md:m-4 md:p-2 rounded-2xl border-2 border-blue-600 md:font-bold px-3 py-1 m-1 font-semibold hover:bg-blue-600 '>{data.btn2}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </>
    )
}

export default Products