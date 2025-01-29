import React, { useState } from "react";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa"; // Icons for the hamburger menu and arrow

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="py-3 px-4 sm:px-12 bg-pink-300 text-black">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <h1>
            <a href="#" className="text-3xl font-bold">
              Be A Creator
            </a>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-7 justify-center text-xl font-semibold">
          <a href="/" className="hover:text-gray-700">
            About
          </a>
          <a href="/about" className="hover:text-gray-700">
            Service
          </a>
          <a href="/Service" className="hover:text-gray-700">
            Cases
          </a>
          <a href="/Creators" className="hover:text-gray-700">
            Creators
          </a>
          <a href="/" className="hover:text-gray-700">
            Contact
          </a>
        </div>

        {/* Get in Touch Button (Desktop) */}
        <div className="hidden md:block">
          <button>
            <a
              href="#"
              className="bg-black rounded-full py-2 px-4 text-white text-lg hover:scale-105 transition-transform flex items-center gap-2"
            >
              <span>Get in touch</span>
              <FaArrowRight />
            </a>
          </button>
        </div>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col gap-4 text-xl font-semibold">
            <a href="/" className="hover:text-gray-700">
              About
            </a>
            <a href="/about" className="hover:text-gray-700">
              Service
            </a>
            <a href="/Service" className="hover:text-gray-700">
              Cases
            </a>
            <a href="/Creators" className="hover:text-gray-700">
              Creators
            </a>
            <a href="/" className="hover:text-gray-700">
              Contact
            </a>
          </div>
          <div className="mt-4">
            <button>
              <a
                href="#"
                className="bg-black rounded-full py-2 px-4 text-white text-lg hover:scale-105 transition-transform flex items-center gap-2"
              >
                <span>Get in touch</span>
                <FaArrowRight />
              </a>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
