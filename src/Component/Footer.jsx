import React from "react";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white py-12 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Left Side: Logo, Social Icons, and Links */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold">BE A CREATOR</h2>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-pink-500 p-3 rounded-full hover:bg-white hover:text-pink-500 transition-all duration-300"
            >
              <FaInstagramSquare className="text-2xl" />
            </a>
            <a
              href="#"
              className="bg-pink-500 p-3 rounded-full hover:bg-white hover:text-pink-500 transition-all duration-300"
            >
              <IoLogoTwitter className="text-2xl" />
            </a>
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-pink-500 transition-all duration-300"
            >
              Datenschutz
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transition-all duration-300"
            >
              Impressum
            </a>
          </div>
          <p className="text-sm">©2025 – Be A Creator</p>
        </div>

        {/* Right Side: Contact Info and Button */}
        <div className="flex flex-col gap-6">
          <button className="border-2 border-white rounded-full py-2 px-6 hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2">
            <span>Let's talk</span>
            <FaArrowRight />
          </button>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <MdOutlineEmail className="text-xl" />
              <p>info@beacreator.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-xl" />
              <p>+8801738612417</p>
            </div>
          </div>
          <p className="text-sm">Mulackstraße 14, 10119 Berlin</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
