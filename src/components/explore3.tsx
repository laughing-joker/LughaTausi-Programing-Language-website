import React from 'react';

const Explore3 = () => {
  return (
    <div className="w-full h-[540px] border border-gray-300 shadow-lg rounded-lg overflow-hidden">
      <div className="flex h-full">
        {/* Section One */}
        <div className="bg-gray-100 p-6 w-1/2 h-full">
          <h2 className="text-xl font-bold mb-2">Section One</h2>
          <p className="text-gray-700">This is the first section of the card.</p>
        </div>

        {/* Vertical Divider */}
        <div className="w-px bg-gray-300 h-full"></div>

        {/* Section Two */}
        <div className="bg-white p-6 w-1/2 h-full">
          <h2 className="text-xl font-bold mb-2">Section Two</h2>
          <p className="text-gray-700">This is the second section of the card.</p>
        </div>
      </div>
    </div>
  );
}

export default Explore3;
