import React from "react";

const NewCard = ({ title, content, imageSrc }) => {
  return (
    <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-lg overflow-hidden shadow-lg bg-gray-900 dark:bg-gray-800 mx-4 my-6">
      <img
        className="w-full h-64 object-cover"
        src={imageSrc}
        alt={`${title} image`}
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-2xl mb-3 text-purple-500 dark:text-purple-300">
          {title}
        </h2>
        <p className="text-gray-300 dark:text-gray-200 text-base">{content}</p>
      </div>
    </div>
  );
};

export default NewCard;
