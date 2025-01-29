import React from "react";
import Image from "../assets/HeroImage.jpeg"; 



const Hero = () => {
  return (
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
          src={Image}
          alt="Hero Image"
          className="w-full  mx-auto rounded-lg shadow-lg "
        />
      </div>
    </div>
  );
};

export default Hero;
