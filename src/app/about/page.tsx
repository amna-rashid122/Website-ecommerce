import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js
import { FaTruckFast } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import { VscCreditCard } from "react-icons/vsc";
import { LuSprout } from "react-icons/lu";

const CollectionContainer = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Container with text on the left and button on the right */}
      <div className="flex justify-between items-center">
        {/* Left side: Text */}
        <div className="text-left">
          <p className="text-2xl  text-black">
          A brand built on the love of craftmanship,
        
          </p>
          <p className="text-black text-2xl mt-2">
            Discover the est trends in our new collection, available now. Find your perfect style today!
          </p>
        </div>

        {/* Right side: View Collection button */}
        <div className="text-right">
          <button
            className="px-6 py-2 bg-gray-300 text-black rounded-none hover:bg-gray-400 transition-all duration-300"
          >
            View Our Products 
          </button>
        </div>
      </div>

      {/* Container with text and image below */}
      <div className="mt-8 flex justify-between items-center space-x-8"> {/* Adjusted to justify-between */}
        {/* Left side: Dark Blue Background Container */}
        <div 
          className="bg-[rgba(42,37,75,1)] text-white p-6 rounded-none flex flex-col justify-between" 
          style={{ width: '634px', height: '478px' }} // Set custom width and height
        >
          <div>
            <h3 className="text-xl ">It started with a small idea</h3>
            <p className="mt-4">
            A global brand with local beginnings, our story begain in a 
            </p>
            <p>small studio in South London in early 2014</p>
          </div>

          {/* View Collection Button at the bottom */}
          <div className="mt-auto">
            <a 
              href="/view-all"  // Link to the desired page
              className="inline-block px-6 py-2 bg-gray-500 text-white rounded-none hover:bg-gray-700 transition-all duration-300"
            >
              View Collection
            </a>
          </div>
        </div>

        {/* Right side: Image */}
        <div className="w-2/3 flex justify-end"> {/* Updated for right alignment */}
          <Image
            src="/Image Block.png"
            alt="Collection"
            width={600}  // Set the width of the image
            height={400} // Set the height of the image
            className="rounded-none shadow-lg" // Optional styling for the image
          />
        </div>
      </div>

      {/* New Section: Image and Light Gray Container with Text + Button */}
      <div className="mt-12 flex items-center space-x-0">
        {/* Left side: Image */}
        <div className="flex-shrink-0 w-[720px] h-[603px]">
          <Image
            src="/Image.png" // Change to your image path
            alt="New Arrival"
            width={720}
            height={603}
            className="object-cover" // Ensures the image covers the container space properly
          />
        </div>

        {/* Right side: Light Gray Container with Text and Button */}
        <div className="bg-gray-100 text-black p-6 rounded-lg w-[720px] h-[603px] flex flex-col justify-between">
          <div>
            <h3 className="text-xl ">Our service isn’t just personal, it’s actually
            hyper personally exquisite</h3>
            <p className="mt-4">
            When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. 
            </p>
            <p className='mt-6'>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
          </div>

          {/* Get in touch Button at the bottom */}
          <div className="mt-auto">
            <a 
              href="/get-more"  // Link to the desired page
              className="inline-block px-6 py-2 bg-white text-black rounded-none hover:bg-gray-700 transition-all duration-300"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      {/* Brand Section - What makes our brand different */}
      <div>
        <h1 className="text-center text-2xl mb-6 mt-10">What makes our brand different</h1> {/* Added mt-10 for space */}
      </div>

      <div className="flex flex-wrap justify-between gap-8">
        {/* Brand Item 1 */}
        <div className="flex flex-col items-center w-1/4 sm:w-1/5 md:w-1/6 bg-[rgba(249,249,249,1)] p-6 rounded-none mt-[-20px]"> {/* Added negative margin */}
          <FaTruckFast className="text-black text-3xl sm:text-4xl hover:text-orange-500 hover:scale-110 transition-all duration-300" />
          <div className="text-center mt-2">
            <p className="font-semibold">Next day as standard</p>
            <p className="text-sm">Order before 3pm and get your order the next day as standard</p>
          </div>
        </div>

        {/* Brand Item 2 */}
        <div className="flex flex-col items-center w-1/4 sm:w-1/5 md:w-1/6 bg-[rgba(249,249,249,1)] p-6 rounded-none mt-[-20px]"> {/* Added negative margin */}
          <CiCircleCheck className="text-black text-3xl sm:text-4xl hover:text-green-500 hover:scale-110 transition-all duration-300" />
          <div className="text-center mt-2">
            <p className="font-semibold">Made by true artisans</p>
            <p className="text-sm">Handmade crafted goods made with real passion and craftsmanship</p>
          </div>
        </div>

        {/* Brand Item 3 */}
        <div className="flex flex-col items-center w-1/4 sm:w-1/5 md:w-1/6 bg-[rgba(249,249,249,1)] p-6 rounded-none mt-[-20px]"> {/* Added negative margin */}
          <VscCreditCard className="text-black text-3xl sm:text-4xl hover:text-red-500 hover:scale-110 transition-all duration-300" />
          <div className="text-center mt-2">
            <p className="font-semibold">Unbeatable prices</p>
            <p className="text-sm">For our materials and quality, you won’t find better prices anywhere</p>
          </div>
        </div>

        {/* Brand Item 4 */}
        <div className="flex flex-col items-center w-1/4 sm:w-1/5 md:w-1/6 bg-[rgba(249,249,249,1)] p-6 rounded-none mt-[-20px]"> {/* Added negative margin */}
          <LuSprout className="text-black text-3xl sm:text-4xl hover:text-yellow-500 hover:scale-110 transition-all duration-300" />
          <div className="text-center mt-2">
            <p className="font-semibold">Recycled packaging</p>
            <p className="text-sm">We use 100% recycled packaging to ensure our footprint is manageable</p>
          </div>
        </div>
      </div>

      {/* Newsletter Sign-up Section */}
      <div className="bg-[rgba(249,249,249,1)] py-12"> {/* Outer container with gray background */}
        <div className="flex justify-center">
          <div className="w-[1273px] h-[364px] bg-white flex flex-col items-center justify-center text-center p-6">
            {/* Heading (h1) centered perfectly with black color */}
            <h1 className="text-3xl text-black mb-4">
              Join the club and get the benefits
            </h1>

            {/* Paragraph with smaller text and grey color */}
            <p className="text-sm text-gray-600">
              Sign up for our newsletter and receive exclusive offers on new ranges,
            </p>
            <p className="text-sm text-gray-600">
              sales, pop-up stores, and more.
            </p>

            {/* Email input and Sign Up button */}
            <div className="mt-6 flex items-center">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-72 p-2 border-2 border-gray-300 rounded-l-md text-gray-800 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-[rgba(42,37,75,1)] text-white py-2 px-6 rounded-r-md hover:bg-[rgba(42,37,75,.8)] transition-all">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionContainer;

