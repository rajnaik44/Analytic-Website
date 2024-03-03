'use client'
import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div id="home" className="text-white">
      <div className=" max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center justify-center flex flex-col">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold md:py-6 ">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="text-xl sm:text-4xl md:text-5xl font-bold py-4">
            Fast,Flexible Financing For 
          </p>
            <ReactTyped 
            className="text-xl sm:text-4xl md:text-5xl md:pl-4 font-bold pl-2"
            strings={[
              "BTB",
              "BTC",
              "SASS",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          
        </div>
        <p className="text-xl md:text-2xl font-bold  text-gray-500 ">Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms</p>
        <button className="bg-[#00ff90] w-[200px] rounded-md font-bold mx-auto my-6 py-3 text-black shadow-xl shadow-blue-400 hover:scale-75 ease-in duration-100">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
