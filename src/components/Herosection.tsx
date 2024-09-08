import React from "react";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-black px-4 pt-20">
      <div className="text-center text-purple-400 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Our Institution
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover excellence and innovation. Be part of something
          extraordinary.
        </p>
        <a
          href="/learn-more"
          className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
