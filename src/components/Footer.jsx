import React from 'react'

// const Footer = () => {
//     return (
//         <>
//             <div className="mt-20 text-[9px] md:text-xs py-20 bg-[#F5F5F7] text-gray-500">
//                 <ul className=" px-1 md:px-[20%] space-y-2">
//                     <li className='font-thin hover:underline'>*Listed pricing is Maximum Retail Price (inclusive of all taxes).</li>
//                     <li className='font-thin hover:underline'>‡Includes instant cashback and No Cost EMI.</li>
//                     <li className='font-thin hover:underline'>No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3- or 6-month tenures from most leading card issuers. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions. Minimum order spend applies as per your card issuer’s threshold. No Cost EMI is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. Terms apply.</li>

//                     <li className='font-thin hover:underline'>Instant cashback is available with the purchase of an eligible product with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10001 applies. Click here to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Instant cashback is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback.</li>

//                     <li className='font-thin hover:underline'>**Mac, iPad and Apple Watch trade-in is available only in-store in India. Apple Retail Online in India does not offer trade-in for Mac, iPad and Apple Watch. Trade‑in values will vary based on the condition, year and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit. Trade‑in value may be applied towards a qualifying new device purchase. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel or limit the quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade‑in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.</li>

//                     <li1>1. Live Translation in Phone and FaceTime is available for one-to-one calls in English (UK, US), French (France), German, Portuguese (Brazil) and Spanish (Spain) when Apple Intelligence is enabled on a compatible iPhone, iPad or Mac.</li1>
//                     <li className='font-thin hover:underline'>2. Compared with the glass back of previous-generation iPhone.</li>
//                     <li className='font-thin hover:underline'>3. Compared with previous-generation iPhone.</li>
//                     <li className='font-thin hover:underline'>4. The display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 15.93 cm / 6.27″ (iPhone 17, iPhone 17 Pro), 16.63 cm / 6.55″ (iPhone Air) or 17.42 cm / 6.86″ (iPhone 17 Pro Max) diagonally. Actual viewable area is less.</li>
//                     <li className='font-thin hover:underline'>5. FaceTime calling requires a FaceTime-enabled device for the caller and recipient and a Wi‑Fi connection. Availability over a cellular network depends on carrier policies; data charges may apply.</li>
//                     <li className='font-thin hover:underline'>6. Enabled by compatible apps.</li>
//                     <li className='font-thin hover:underline'>Enabled by compatible third-party hardware and software.</li>
//                     <li className='font-thin hover:underline'>7.All battery claims depend on network configuration and many other factors; actual results will vary. Battery has limited recharge</li>
//                     <li className='font-thin hover:underline'>8.Genmoji and Image Playground are available in English, French, German, Italian, Japanese, Portuguese (Brazil) and Spanish when Apple Intelligence is enabled on a compatible iPhone.</li>
//                 </ul>



//                 <div className='border-b border-gray-400 text-[9px] md:text-xs px-1 md:px-[20%]' >
//                     <div className='grid grid-cols-5 my-5'>
//                         <div className='flex flex-col md:gap-4'>
//                             <h4 className='text-sm text-gray-600 font-semibold'>Shop and Learn</h4>
//                             <ul className='text-[9px] md:text-xs text-gray-500 flex flex-col gap-4'>
//                                 <li className='hover:cursor-pointer hover:underline'>Store</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Mac</li>
//                                 <li className='hover:cursor-pointer hover:underline'>iPad</li>
//                                 <li className='hover:cursor-pointer hover:underline'>iPhone</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Watch</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Vision</li>
//                                 <li className='hover:cursor-pointer hover:underline'>AirPods</li>
//                                 <li className='hover:cursor-pointer hover:underline'>TV & Home</li>
//                                 <li className='hover:cursor-pointer hover:underline'>AitTag</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Accessories</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Gift Cards</li>
//                             </ul>

//                             <h4 className='text-sm  text-gray-600 font-semibold mt-5'>Apple Wallet</h4>
//                             <ul className='text-[9px] md:text-xs text-gray-500 flex flex-col md:gap-4'>
//                                 <li className='hover:cursor-pointer hover:underline'>Wallet</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Apple Card</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Apple Pay</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Apple Cash</li>
//                             </ul>
//                         </div>

//                         <div className='flex flex-col gap-4'>
//                             <h4 className='text-sm text-gray-600 font-semibold'>Account</h4>
//                             <ul className='text-[9px] md:text-xs text-gray-500 flex flex-col md:gap-4'>
//                                 <li className='hover:cursor-pointer hover:underline'>Manage Your Apple Account</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Apple Store Account</li>
//                                 <li className='hover:cursor-pointer hover:underline'>iCloud.com</li>
//                             </ul>

//                             <h4 className='text-sm text-gray-600 font-semibold mt-5'>Entertainment</h4>
//                             <ul className='text-[9px] md:text-xs text-gray-500 flex flex-col md:gap-4'>
//                                 <li className='hover:cursor-pointer hover:underline'>Apple One</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Apple TV+</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Apple Music</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Apple Arcade</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Apple Fitness+</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Apple News+</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Apple Podcast</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Apple Books</li>
//                                 <li className='hover:cursor-pointer hover:underline'>App Store</li>
//                             </ul>
//                         </div>

//                         <div className='flex flex-col gap-4'>
//                             <h4 className='text-sm text-gray-600 font-semibold'>Apple Store</h4>
//                             <ul className='text-[9px] md:text-xs text-gray-500 flex flex-col md:gap-4'>
//                                 <li className='hover:cursor-pointer hover:underline'>Find a Store</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Genius Bar</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Today at Apple</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Group Reservations</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Apple Camp</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Apple Store App</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Certified Refurbished</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Apple Trade In</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Financing</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Carrier Deals at Apple</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Order Status</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Shopping Help</li>
//                             </ul>
//                         </div>

//                         <div className='flex flex-col gap-4'>
//                             <h4 className='text-sm text-gray-600 font-semibold'>For Business</h4>
//                             <ul className='text-[9px] md:text-xs text-gray-500 flex flex-col md:gap-4'>
//                                 <li className='hover:cursor-pointer hover:underline'>Apple and Business</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Shop for Business</li>
//                             </ul>

//                             <h4 className='text-sm text-gray-600 font-semibold mt-5'>For Education</h4>
//                             <ul className='text-[9px] md:text-xs text-gray-500 flex flex-col md:gap-4'>
//                                 <li className='hover:cursor-pointer hover:underline'>Apple and Education</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Shop for K-12</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Shop for College</li>
//                             </ul>

//                             <h4 className='text-sm text-gray-600 font-semibold mt-5'>For Healthcare</h4>
//                             <ul className='text-[9px] md:text-xs text-gray-500 flex flex-col md:gap-4'>
//                                 <li className='hover:cursor-pointer hover:underline'>Apple in Healthcare</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Mac in Healthcare</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Health on Apple Watch</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Health Records on iPhone and iPad</li>
//                             </ul>

//                             <h4 className='text-sm text-gray-600 font-semibold mt-5'>For Government</h4>
//                             <ul className='text-[9px] md:text-xs text-gray-500 flex flex-col md:gap-4'>
//                                 <li className='hover:cursor-pointer hover:underline'>Shop for Government</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Shop for Veterans and Military</li>
//                             </ul>
//                         </div>

//                         <div className='flex flex-col gap-4'>
//                             <h4 className='text-sm text-gray-600 font-semibold'>Apple Values</h4>
//                             <ul className='text-[9px] md:text-xs text-gray-500 flex flex-col md:gap-4'>
//                                 <li className='hover:cursor-pointer hover:underline'>Accessibility</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Education</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Environment</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Inclusion and Diversity</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Privacy</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Racial Equity and Justice</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Supply Chain Innovation</li>
//                             </ul>

//                             <h4 className='text-sm text-gray-600 font-semibold mt-5'>About Apple</h4>
//                             <ul className='text-[9px] md:text-xs text-gray-500 flex flex-col md:gap-4 '>
//                                 <li className='hover:cursor-pointer hover:underline'>Newsroom</li>
//                                 <li className='hover:cursor-pointer hover:underline'>Apple Leadership</li>
//                                 <li className='hover:cursor-pointer hover:underline'> Career Opportunities</li>
//                                 <li className='hover:cursor-pointer hover:underline'> Investors</li>
//                                 <li className='hover:cursor-pointer hover:underline'> Ethics & Compliance</li>
//                                 <li className='hover:cursor-pointer hover:underline'> Events</li>
//                                 <li className='hover:cursor-pointer hover:underline'>  Contact Apple</li>
//                             </ul>
//                         </div>
//                     </div>

//                     <div className='text-[9px] md:text-xs text-gray-500 my-2 md:my-5'>
//                         <p>More ways to shop: <a href="" className='text-blue-500 underline'>Find an Apple Store</a> or <a href="" className='text-blue-500 underline'>other retailer</a> near you. Or call <a href="" className='text-blue-500 underline'>1-800-MY-APPLE</a> (1-800-692-7753).</p>
//                     </div>
//                 </div>

//                 <div className='text-gray-500 text-xs flex justify-between my-5 flex-wrap md:px-[20%]'>
//                     <div>
//                         <p>Copyrights &copy; 2025  Apple Inc. All rights reserved.</p>
//                     </div>
//                     <div className='flex gap-2'>
//                         <p className='hover:underline hover:cursor-pointer text-gray-600 font-medium'>Privacy Policy </p>
//                         <p>|</p>
//                         <p className='hover:underline hover:cursor-pointer text-gray-600 font-medium'>Terms of Use</p>
//                         <p>|</p>
//                         <p className='hover:underline hover:cursor-pointer text-gray-600 font-medium'>Sales and Refund</p>
//                         <p>|</p>
//                         <p className='hover:underline hover:cursor-pointer text-gray-600 font-medium'>Legal</p>
//                         <p>|</p>
//                         <p className='hover:underline hover:cursor-pointer text-gray-600 font-medium'>Site Map</p>
//                     </div>
//                     <div>
//                         <p>United States</p>
//                     </div>

//                 </div>


//             </div>
//         </>
//     )
// }

const Footer = () => {
  return (
    <>
    <div className='bg-gray-500 text-white w-full h-auto mt-4'>
        <p className='px-5 pt-8 md:text-xl font-thin'>◊No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3-, 6-, 9- or 12-month tenures from most leading card issuers. Eligible AirPods, HomePod and Beats products are available with No Cost EMI on 3- and 6-month tenures only. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions. Minimum order spend applies as per your card issuer’s threshold.</p>
        <p className='px-5 pt-8  md:text-xl font-thin'>◊No Cost EMI is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. Terms apply. Representative example: A purchase of ₹79900.00 repaid over 12 months with an interest rate of 15.99% p.a. and No Cost EMI savings of ₹6514.00 requires monthly payments of ₹6658.00. Total amount payable: ₹79900.00.</p>
        <p className='px-5 pt-8  md:text-xl font-thin'>‡Instant cashback is available with the purchase of an eligible product with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10001.00 applies. Click here to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card.</p>
        <p className='px-5 pt-8  md:text-xl font-thin'>Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Instant cashback is not available to Business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback.</p>
        <p className='px-5 pt-8  md:text-xl font-thin'>1. Available in two models: AirPods 4 and AirPods 4 with Active Noise Cancellation. Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set to Chinese (Simplified), English (Australia, Canada, India, Ireland, New Zealand, Singapore, South Africa, UK or US), French, German, Italian, Japanese, Korean, Portuguese (Brazil) or Spanish, as part of an iOS 18, iPadOS 18 and macOS Sequoia software update, with more languages coming over the course of the year, including Vietnamese. Some features may not be available in all regions or languages. A subscription is required for Apple TV+. Features are subject to change. Some features, applications and services may not be available in all regions or all languages.</p>
        <hr className='border-gray-300 my-6 md:mx-20 mx-10' />

        <div className='container flex justify-around '>
            <div>
                <h2 className='pb-3 md:text-xl'>Shop & Learn</h2>
                <ul>
                    <li className='font-thin hover:underline'>Store</li>
                    <li className='font-thin hover:underline'>Mac</li>
                    <li className='font-thin hover:underline'>iPad</li>
                    <li className='font-thin hover:underline'>iPhone</li>
                    <li className='font-thin hover:underline'>Watch</li>
                    <li className='font-thin hover:underline'>AirPods</li>   
                </ul>
            </div>

            <div>
                <h2 className='pb-3 md:text-xl'>Account</h2>
                <ul>
                    <li className='font-thin hover:underline'>Manage Your Account</li>
                    <li className='font-thin hover:underline'>Sign In</li>
                    <li className='font-thin hover:underline'>Create Account</li>
                    <li className='font-thin hover:underline'>Order History</li>
                    <li className='font-thin hover:underline'>Billing Information</li>
                    <li className='font-thin hover:underline'>Payment Methods</li>   
                </ul>
            </div>

            <div>
                <h2 className='pb-3 md:text-xl'>Entertainment</h2>
                <ul>
                    <li className='font-thin hover:underline'>Apple One</li>
                    <li className='font-thin hover:underline'>Apple TV+</li>
                    <li className='font-thin hover:underline'>Apple Music</li>
                    <li className='font-thin hover:underline'>Apple Arcade</li>
                    <li className='font-thin hover:underline'>Apple Fitness+</li>
                    <li className='font-thin hover:underline'>Apple News+</li>   
                </ul>
            </div>
        </div>
        <hr className='border-gray-300 mt-6 md:mx-20 mx-10' />
        <p className='text-center py-2'>Copyright &copy; 2025 Apple Inc. All rights reserved.</p>
    </div>
    </>
  )
}

export default Footer

