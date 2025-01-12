"use client";
import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaFacebook, FaInstagram, FaSkype, FaTwitter, FaPinterest } from 'react-icons/fa'; // Importing icons from react-icons

const Footer = () => {
  // Track if the component is mounted on the client
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set the mounted state to true once the component is mounted on the client side
    setMounted(true);
  }, []);

  // Render nothing until the component is mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <footer style={{ backgroundColor: "rgba(42, 37, 75, 1)", color: "white", padding: "40px 20px" }}>
      <div className="flex justify-between items-start space-x-8">
        {/* Left section: Menu and Our Company */}
        <div className="flex space-x-12">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Menu</h4>
            <ul>
              <li>New arrivals</li>
              <li>Best sellers</li>
              <li>Recently viewed</li>
              <li>Popular this week</li>
              <li>All products</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Categories</h4>
            <ul>
              <li>Crockery</li>
              <li>Furniture</li>
              <li>Homeware</li>
              <li>Plant pots</li>
              <li>Chairs</li>
              <li>Crockery</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Company</h4>
            <ul>
              <li>About Us</li>
              <li>Vacancies</li>
              <li>Contact us</li>
              <li>Privacy</li>
              <li>Returns policy</li>
            </ul>
          </div>
        </div>

        {/* Right section: Email input bar and Sign Up button */}
        <div className="flex flex-col items-start justify-center mt-6" style={{ width: '627px', height: '56px', marginRight: '0px', marginLeft: '10px' }}>
          {/* Heading above the email bar */}
          <h4 className="text-white mb-2">Join our mailing list</h4>

          {/* Email bar and button attached */}
          <div className="flex w-full">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-2 border-none bg-transparent text-white rounded-none" 
              style={{
                padding: "0.5rem 1rem", 
                borderRadius: "0", 
                border: "1px solid #ccc", 
                height: '100%',
                width: '80%',  // Make the email bar take up 80% of the width
                left: '730px'
              }}
            />
            <button 
              className="bg-white text-black py-2 px-6 rounded-none hover:bg-gray-300 transition-all"
              style={{ cursor: 'pointer', borderRadius: "0", height: '100%', width: '20%' }} // Button now fills remaining 20%
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Footer bottom section */}
      <div className="flex flex-col mt-6 border-t border-gray-400 pt-4">
        {/* Left: Copyright Text with margin-top */}
        <p className="text-sm mt-2">Copyright 2022 Avion LTD</p>

        {/* Right: Social media icons */}
        <div className="flex space-x-4 mt-4 justify-end">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.skype.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaSkype size={24} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-600">
            <FaPinterest size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
