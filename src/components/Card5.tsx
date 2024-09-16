import React from "react";

const ToSample = ({ title, description, imageUrl, features }) => {
  return (
    <div className="max-w-4xl rounded-lg overflow-hidden shadow-lg bg-gray-900 dark:bg-gray-800 mx-4 my-6">
      <img
        className="w-full h-80 object-cover"
        src={imageUrl}
        alt={`${title} image`}
      />
      <div className="px-6 py-4 w-[1000px] h-[300px]">
        <h2 className="font-bold text-3xl mb-3 text-purple-500 dark:text-purple-300">
          {title}
        </h2>
        <p className="text-gray-300 dark:text-gray-200 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-6">
        {features.map((feature, index) => (
          <span
            key={index}
            className="inline-block bg-purple-600 dark:bg-purple-500 rounded-full px-4 py-2 text-sm font-semibold text-white dark:text-gray-100 mr-2 mb-2"
          >
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
};

const ToSampleCards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      <ToSample
        title="Super Fast Processor"
        description="Experience lightning-fast performance with the latest Gen 5 processor."
        imageUrl="https://example.com/processor.jpg"
        features={["High Speed", "Low Power", "AI Enabled"]}
      />
      <ToSample
        title="High Resolution Display"
        description="Immerse yourself in stunning visuals with our 4K Ultra HD display."
        imageUrl="https://example.com/display.jpg"
        features={["4K Resolution", "Vibrant Colors", "Energy Efficient"]}
      />
    </div>
  );
};

export default ToSampleCards;
