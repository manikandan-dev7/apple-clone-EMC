import React from 'react'
import Pro1 from '../assets/images/pro1.jpeg'
import Pro2 from '../assets/images/pro2.jpeg'
import Pro3 from '../assets/images/pro3.jpeg'
import Pro4 from '../assets/images/pro4.jpeg'

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
]

const Products = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-10">
      {productData.map((data, index) => (
        <div
          key={index}
          className="relative bg-black rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300"
          style={{ width: 'fit-content' }}
        >
          {/* image */}
          <img
            src={data.image}
            alt={data.Name}
            className="w-[90vw] md:w-[45vw] h-auto object-cover md:object-contain"
          />

          {/* overlay content */}
          <div className="absolute top-0 left-0 flex flex-col items-start justify-start w-full h-full p-4 text-white md:justify-center md:p-8 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
            <h2 className="text-2xl font-bold md:text-4xl">{data.Name}</h2>
            <p className="text-sm font-semibold md:text-lg">{data.description}</p>
            <div className="flex gap-3 mt-3">
              <button className="px-4 py-2 text-sm font-semibold bg-blue-600 rounded-lg hover:bg-blue-800 md:text-base">
                {data.btn1}
              </button>
              <button className="px-4 py-2 text-sm font-semibold border-2 border-blue-600 rounded-lg hover:bg-blue-600 md:text-base">
                {data.btn2}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products
