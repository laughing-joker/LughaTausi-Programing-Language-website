"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-purple-800 via-black to-black text-white min-h-screen flex flex-col justify-center items-center p-8 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 opacity-75 animate-pulse"></div>

      <div className="flex flex-col items-center text-center mt-24 z-10 relative">
        {/* Enlarged Text */}
        <h1 className="text-8xl font-bold mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Unlock the Future with LughaTausi
        </h1>
        <p className="text-xl text-purple-300 mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Discover the programming language that transforms complexity into
          simplicity. Join us and master the art of coding with ease!
        </p>
        <button className="bg-transparent border-2 border-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-600 hover:border-transparent transition-all duration-300 transform hover:scale-110 animate__animated animate__pulse animate__delay-3s">
          Jua Zaidi
        </button>
      </div>
      <div className="mt-12 flex justify-center relative z-10">
        <img
          src="/Logo.png" // Ensure this path is correct
          alt="LughaTausi Logo"
          className="rounded-full w-64 h-64 animate__animated animate__zoomIn animate__delay-1s"
        />
      </div>
      <div className="mt-20 w-full flex justify-center z-10 relative">
        <div className="bg-gray-800 p-12 rounded-lg shadow-lg max-w-3xl w-full mx-auto relative overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:rotate-6">
          <div className="relative z-10 p-6 flex flex-col items-center">
            <div className="w-full aspect-[1894/544] mb-4">
              <img
                src="/Tausi.png" // Ensure this path is correct
                alt="Learn More"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="bg-purple-600 text-white py-3 px-6 rounded-full hover:bg-purple-700 transition-all duration-300 animate__animated animate__pulse">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
