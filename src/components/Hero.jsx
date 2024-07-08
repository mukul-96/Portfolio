import React from 'react';
import { map } from '../assets'; 

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center bg-no-repeat bg-cover">
      <img
        src={map}
        alt="Background map"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectFit: 'cover' }}
      />

      <div className="relative z-10 flex flex-col items-start text-left px-4 sm:px-8 md:px-12 lg:px-20 w-full max-w-5xl ml-10">
        <h1 className="font-black text-eerieBlack text-4xl xs:text-5xl sm:text-6xl lg:text-8xl uppercase leading-tight font-poppins">
          Hi, I'M
        </h1>
        <span className="font-extrabold text-battleGray text-5xl sm:text-7xl lg:text-9xl uppercase mt-4">
          MUKUL
        </span>
        <p className="font-medium text-eerieBlack text-base xs:text-lg sm:text-xl lg:text-2xl lg:leading-10 mt-6">
        <p>I'm a software developer and here is my portfolio</p> <p>website.Here you'll learn about</p> <p>my journey as a software developer.</p>
        </p>
      </div>
    </div>
  );
};

export default Hero;
