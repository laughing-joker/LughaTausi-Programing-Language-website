import React from 'react';

const Doc1 = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg border border-gray-300 overflow-hidden">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">MyProgrammingLanguage</h1>
        <p className="text-gray-600 mb-4">
          MyProgrammingLanguage is a versatile programming language designed for modern applications. It offers simplicity, efficiency, and a rich set of features for developers.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">Features</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Easy-to-read syntax</li>
          <li>Powerful libraries for data manipulation</li>
          <li>Strong community support</li>
          <li>Cross-platform compatibility</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">Installation</h2>
        <p className="text-gray-600 mb-4">
          To install MyProgrammingLanguage, run the following command:
        </p>
        <pre className="bg-gray-100 p-4 rounded-md text-gray-800 mb-4">
          <code>npm install my-programming-language</code>
        </pre>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">Usage Example</h2>
        <p className="text-gray-600 mb-4">
          Here’s a simple example of how to use MyProgrammingLanguage:
        </p>
        <pre className="bg-gray-100 p-4 rounded-md text-gray-800 mb-4">
          <code>
            {`// Simple Hello World program
console.log("Hello, World!");`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Doc1;
