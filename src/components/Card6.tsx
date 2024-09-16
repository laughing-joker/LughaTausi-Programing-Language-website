import React from "react";

const DeveloperCard = ({ title, description, requirements, applyLink }) => {
  return (
    <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-gray-900 dark:bg-gray-800 mx-4 my-6 p-4">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-2xl mb-3 text-purple-500 dark:text-purple-300 text-center">
          {title}
        </h2>
        <p className="text-gray-300 dark:text-gray-200 text-base mb-4 text-center">
          {description}
        </p>
        <div className="bg-gray-800 dark:bg-gray-700 rounded-lg p-4 mb-4 w-full">
          <h3 className="font-semibold text-lg text-purple-500 dark:text-purple-300 mb-2">
            Requirements:
          </h3>
          <ul className="list-disc list-inside text-gray-300 dark:text-gray-200">
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
        <a
          href={applyLink}
          className="bg-purple-600 dark:bg-purple-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700 dark:hover:bg-purple-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default DeveloperCard;
