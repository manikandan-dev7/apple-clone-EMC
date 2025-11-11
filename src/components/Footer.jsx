import React, { useState } from 'react';

const sections = [
  {
    title: 'Shop and Learn',
    items: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards'],
  },
  {
    title: 'Apple Wallet',
    items: ['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash'],
  },
  {
    title: 'Account',
    items: ['Manage Your Apple Account', 'Apple Store Account', 'iCloud.com'],
  },
  {
    title: 'Entertainment',
    items: ['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Fitness+', 'Apple News+', 'Apple Podcasts', 'Apple Books', 'App Store'],
  },
  {
    title: 'Apple Store',
    items: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Group Reservations', 'Apple Camp', 'Apple Store App', 'Certified Refurbished', 'Apple Trade In', 'Financing', 'Order Status', 'Shopping Help'],
  },
  {
    title: 'For Business & Education',
    items: ['Apple and Business', 'Shop for Business', 'Apple and Education', 'Shop for K-12', 'Shop for College'],
  },
  {
    title: 'Apple Values',
    items: ['Accessibility', 'Education', 'Environment', 'Inclusion & Diversity', 'Privacy', 'Supply Chain Innovation'],
  },
  {
    title: 'About Apple',
    items: ['Newsroom', 'Leadership', 'Careers', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple'],
  },
];

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <footer className="bg-[#F5F5F7] text-gray-600">
      {/* small legal / short notes */}
      <div className="px-4 py-6 mx-auto text-xs max-w-7xl md:px-8 md:py-8 md:text-sm">
        <p className="mb-2 font-thin">
          *Listed pricing is Maximum Retail Price (inclusive of all taxes). ‡Includes instant cashback and No Cost EMI.
        </p>
        <p className="mb-4 font-thin">
          No Cost EMI is available with eligible cards on select tenures. Terms apply. Instant cashback is available with select cards. More details on product pages.
        </p>
      </div>

      {/* accordion for mobile, grid for md+ */}
      <div className="border-t border-gray-300">
        {/* MOBILE: accordion */}
        <div className="px-4 py-4 md:hidden">
          {sections.map((sec, i) => (
            <div key={sec.title} className="border-b border-gray-200">
              <button
                onClick={() => toggle(i)}
                className="flex items-center justify-between w-full py-3 font-medium text-left text-gray-800"
                aria-expanded={openIndex === i}
              >
                <span>{sec.title}</span>
                <span className="text-gray-500">{openIndex === i ? '−' : '+'}</span>
              </button>

              <div
                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                  openIndex === i ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <ul className="py-2 pb-4 pl-2 space-y-2 text-sm text-gray-600">
                  {sec.items.map((item) => (
                    <li key={item} className="hover:underline hover:cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP: grid */}
        <div className="hidden px-8 py-8 mx-auto md:block max-w-7xl">
          <div className="grid grid-cols-5 gap-8">
            {sections.slice(0, 5).map((sec) => (
              <div key={sec.title}>
                <h4 className="mb-3 text-sm font-semibold text-gray-700">{sec.title}</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {sec.items.map((item) => (
                    <li key={item} className="hover:underline hover:cursor-pointer">{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* combine remaining sections in two columns on the right */}
            <div>
              {sections.slice(5, 8).map((sec) => (
                <div key={sec.title} className="mb-6">
                  <h4 className="mb-3 text-sm font-semibold text-gray-700">{sec.title}</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {sec.items.map((item) => (
                      <li key={item} className="hover:underline hover:cursor-pointer">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-600">
            <p>
              More ways to shop: <a href="#" className="text-blue-600 underline">Find an Apple Store</a> or <a href="#" className="text-blue-600 underline">other retailer</a> near you. Or call <a href="#" className="text-blue-600 underline">1-800-MY-APPLE</a>.
            </p>
          </div>
        </div>
      </div>

      {/* bottom small legal + links */}
      <div className="px-4 py-4 mx-auto text-xs text-gray-500 max-w-7xl md:px-8 md:py-6 md:text-sm">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>© 2025 Apple Inc. All rights reserved.</div>

          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
            <a className="hover:underline" href="#">Privacy Policy</a>
            <span className="mx-1">|</span>
            <a className="hover:underline" href="#">Terms of Use</a>
            <span className="mx-1">|</span>
            <a className="hover:underline" href="#">Sales and Refunds</a>
            <span className="mx-1">|</span>
            <a className="hover:underline" href="#">Legal</a>
            <span className="mx-1">|</span>
            <a className="hover:underline" href="#">Site Map</a>
          </div>

          <div className="text-sm text-gray-600">United States</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
