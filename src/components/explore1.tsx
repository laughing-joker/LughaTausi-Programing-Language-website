import React from 'react';

const SplitCard = () => {
  return (
    <div className="flex h-[540px] w-full shadow-lg rounded-lg border border-gray-300 overflow-hidden">
      {/* Left Side */}
      <div className="w-1/2 p-6 flex flex-col justify-center items-center bg-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Left Side</h2>
        <p className="text-gray-700 text-center">This is the left side content of the card.</p>
      </div>

      {/* Vertical Divider */}
      <div className="w-px bg-gray-300 h-full"></div>

      {/* Right Side */}
      <div className="w-1/2 p-6 flex flex-col justify-center items-center bg-white">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Right Side</h2>
        <p className="text-gray-700 text-center">This is the right side content of the card.</p>
      </div>
    </div>
  );
};

export default SplitCard;
