import React from "react";
import Image from "../assets/bg-1.png";
import Image2 from "../assets/bg-2.jpg";
import Image3 from "../assets/HeroImage.jpeg";
import Toggle from "./Toggle";
import Counter from "./Counter";
import ImageGridSection from "./ImageGridSection";

const Home = () => {
  return (
    <div>
      <div>
        <div className="bg-pink-300 px-4 sm:px-8 md:px-12 lg:px-16 py-10">
          {/* Text and Button Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 lg:gap-16">
            {/* Left Side: Heading */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold leading-tight">
                WE SPEAK <br />
                CULTURE
              </h1>
            </div>

            {/* Right Side: Subheading and Button */}
            <div className="w-full md:w-1/2">
              <h4 className="text-xl sm:text-2xl font-semibold mb-4">
                Be a Creator
              </h4>
              <p className="text-xl sm:text-2xl font-semibold mb-6">
                Ein junges Team, das weiß, was cool ist – kreativ,{" "}
                <br className="hidden sm:block" />
                ideenreich, und immer am Puls der Zeit!
              </p>
              <button className="mb-8 md:mb-0">
                <a
                  href="#"
                  className="text-lg sm:text-xl border-2 border-black rounded-full py-2 px-6 hover:bg-black hover:text-white transition-all duration-300"
                >
                  Check Our Work
                </a>
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-10">
            <img
              src={Image3}
              alt="Hero Image"
              className="w-full  mx-auto rounded-lg shadow-lg "
            />
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 py-10">
        {/* Work Section */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            WORK YOU WANT <br />
            TO CHECK OUT
          </h1>
          <p className="text-lg sm:text-xl font-semibold mt-4">
            But hey, we might be biased
          </p>
          <div className="mt-6">
            <button className="border-2 border-black rounded-full py-2 px-6 hover:bg-black hover:text-white transition-all duration-300 text-lg sm:text-xl font-semibold">
              <a href="#">See all Cases</a>
            </button>
          </div>
        </div>

          <ImageGridSection/>
        {/* Experts Section */}
        <div className="mt-20 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            EXPERTS IN <br />
            WHAT WE DO
          </h1>
          <div className="mt-6">
            <button className="border-2 border-black rounded-full py-2 px-6 hover:bg-black hover:text-white transition-all duration-300 text-lg sm:text-xl font-semibold">
              <a href="#">Meet the agency</a>
            </button>
          </div>
        </div>

        <Counter />

        <Toggle />

        {/* Brands Section */}
        <div className="mt-20 bg-pink-300 py-12 px-6 sm:px-8 md:px-12 lg:px-16 text-center rounded-3xl lg:py-50">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            BRANDS WE’VE <br />
            WORKED WITH
          </h2>
        </div>
      </div>

      <div className="bg-pink-300 px-4 sm:px-8 md:px-12 lg:px-16 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left Side: Text and Button */}
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
              WANT to stand <br />
              out and stay in?
            </h1>
            <div className="bg-black h-0.5 my-6"></div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
              <p className="text-lg sm:text-xl">
                Let’s work together! Get in touch
              </p>
              <button>
                <a
                  href="#"
                  className="border-2 border-black rounded-full py-2 px-6 text-lg sm:text-xl hover:bg-black hover:text-pink-300 transition-all duration-300"
                >
                  Let's talk
                </a>
              </button>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <img
              src={Image2}
              alt="Footer Image"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
