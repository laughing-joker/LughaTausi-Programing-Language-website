import React from "react";

const ProductFeaturesCard = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[85vh] bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      <div className="bg-gradient-to-b from-gray-900 via-purple-800 to-gray-900 text-purple-300 p-16 rounded-lg shadow-lg w-full max-w-5xl h-full">
        <h2 className="text-5xl font-bold mb-8">Product Features</h2>
        <ul className="list-disc list-inside text-2xl mb-8 space-y-4">
          <li>High-Quality Materials</li>
          <li>Innovative Design</li>
          <li>Affordable Pricing</li>
          <li>Customer Support</li>
          <li>Eco-Friendly Packaging</li>
        </ul>
        <button className="bg-purple-600 hover:bg-purple-700 text-white py-4 px-8 rounded-lg">
          View More Features
        </button>
      </div>
    </div>
  );
};

export default ProductFeaturesCard;
