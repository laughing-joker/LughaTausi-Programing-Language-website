"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-black text-white mt-2">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-purple-800 via-black to-black text-white flex flex-col justify-center items-center p-8 sm:p-12 lg:p-16 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 opacity-75 animate-pulse"></div>

        <div className="flex flex-col items-center text-center mt-8  z-10 relative">
          {/* Enlarged Text */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-purple-100 animate__animated animate__fadeIn animate__delay-1s">
            <span className="flex justify-start">Lift Your Mind</span>
            <span className="block">Elevate Your Code with Tausi</span>
          </h1>
          <p className="text-lg sm:text-xl text-purple-300 mb-6">
            Discover the programming language that transforms complexity into
            simplicity. Join us and master the art of coding with ease!
          </p>
          <Link href="/home/About">
            <button className="bg-transparent border-2 border-purple-600 text-purple-100 py-2 px-6 rounded-full hover:bg-purple-600 hover:border-transparent transition-all duration-300 transform hover:scale-110 animate__animated animate__pulse animate__delay-3s">
              Explore
            </button>
          </Link>
        </div>

        {/* Logo Section */}
        <div className="mt-12 flex justify-center relative z-10">
          <Image
            src="/Logo.png"
            alt="Tausi Logo"
            width={256}
            height={256}
            className="rounded-full animate__animated animate__zoomIn animate__delay-1s"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-900 text-gray-300 py-16 px-8 sm:px-12 lg:px-16 mt-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            Features of Tausi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Simplicity", "Performance", "Scalability"].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 backdrop-blur-md bg-opacity-75 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition-colors duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 text-purple-200">
                  {feature}
                </h3>
                <p className="text-gray-300">
                  {feature === "Simplicity"
                    ? "Tausi offers a clean and straightforward syntax that makes coding easier and more efficient."
                    : feature === "Performance"
                    ? "Built for speed, Tausi ensures high performance and quick execution of your applications."
                    : "Easily scale your projects with Tausi's robust architecture and flexible design patterns."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-purple-800 text-gray-100 py-16 px-8 sm:px-12 lg:px-16 mt-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            Benefits of Using Tausi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Ease of Learning", "Community Support", "Versatility"].map(
              (benefit, index) => (
                <div
                  key={index}
                  className="bg-purple-700 backdrop-blur-md bg-opacity-75 p-6 rounded-lg shadow-lg text-center hover:bg-purple-600 transition-colors duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-purple-200">
                    {benefit}
                  </h3>
                  <p className="text-gray-200">
                    {benefit === "Ease of Learning"
                      ? "With its intuitive design, Tausi is easy to learn, even for beginners."
                      : benefit === "Community Support"
                      ? "Join a vibrant community of developers who contribute and support each other."
                      : "Tausi is versatile and can be used for web development, mobile apps, and more."}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="bg-gray-900 text-gray-100 py-16 px-8 sm:px-12 lg:px-16 mt-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Get Started with Tausi
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Ready to dive into Tausi? Follow our comprehensive documentation and
            tutorials to start building amazing applications today!
          </p>
          <Link href="/home/Download">
            <button className="bg-purple-600 text-grey-300 py-3 px-6 rounded-full hover:bg-purple-700 transition-all duration-300">
              Start Coding
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
