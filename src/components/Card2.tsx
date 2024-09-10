import React from "react";

const Card2 = () => {
  return (
    <div className="flex justify-center space-x-8 my-12">
      {/* New Card */}
      <div className="bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-purple-300 p-8 rounded-lg shadow-2xl hover:scale-105 transform transition-transform duration-300 w-full max-w-5xl h-[80vh] flex flex-col justify-between">
        <div>
          <h2 className="text-5xl font-bold mb-6">Your New Card Title</h2>
          <p className="text-2xl mb-6">
            This is an enlarged description for the new card. It fits well with
            the landing page and now covers more space.
          </p>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg self-start transition-colors duration-300">
          Learn More
        </button>
      </div>

      {/* Huge Card */}
      <div className="bg-gradient-to-b from-gray-900 via-purple-800 to-gray-900 text-purple-300 p-8 rounded-lg shadow-2xl hover:scale-105 transform transition-transform duration-300 w-full max-w-5xl h-[80vh] flex flex-col justify-between">
        <div>
          <h2 className="text-5xl font-bold mb-6">Huge Card</h2>
          <p className="text-2xl mb-6">
            This huge card has been enlarged and follows the new gray and purple
            color gradient.
          </p>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg self-start transition-colors duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Card2;
