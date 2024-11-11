import React from "react";

const LTMANUAL = "http://localhost:3000/LTMANUAL.pdf";
const Doc1 = () => {
  const downloadFileAtURL = (url: string) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName || "download");
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-purple-700 to-blue-700 flex items-center justify-center">
      <div className="w-full max-w-3xl p-8 bg-gray-900 shadow-2xl rounded-lg border border-purple-500 relative">
        <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-75 blur-lg animate-pulse"></div>
        <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-75 blur-lg animate-pulse"></div>

        <div className="p-6 mt-5 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Lugha Tausi</h1>
          <p className="text-lg mb-4 text-gray-300">
            Detailed documentation for Lugha Tausi
          </p>

          <h2 className="text-2xl font-semibold mb-3">Features</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6">
            <li>Easy-to-read syntax</li>
            <li>Powerful libraries for data manipulation</li>
            <li>Strong community support</li>
            <li>Cross-platform compatibility</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3">Installation</h2>
          <p className="text-gray-300 mb-4">
            For our programming language, it’s a drag-and-drop setup, with the
            IDE ready for use on Windows.
          </p>
          <p className="text-gray-300">
            Installation on other Operating Systems:
          </p>
          <p className="font-bold text-gray-300">Coming soon</p>
          <pre className="bg-gray-800 p-4 rounded-md text-purple-300 mb-6">
            <code>npm install lughatausi</code>
          </pre>

          <h2 className="text-2xl font-semibold mb-3">Usage Example</h2>
          <p className="text-gray-300 mb-4">
            Here’s a simple example of how to use Lugha Tausi:
          </p>
          <pre className="bg-gray-800 p-6 rounded-lg text-purple-300 mb-6 max-w-full">
            <code className="block text-sm leading-relaxed">
              {`// Simple Hello World program
jumbe("Hello, World!")
    `}
            </code>
          </pre>
          <pre className="bg-gray-800 p-4 rounded-md text-purple-300 mb-6">
            <code>
              {`// Mpango rahisi wa Hello World
jumbe("Habari, Ulimwengu!")`}
            </code>
          </pre>

          {/* Download Button */}
          <div className="flex justify-center mt-6">
            <button
              className="relative text-white bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-size-200 bg-pos-0 hover:bg-pos-100 hover:text-white text-lg font-semibold transition duration-300 ease-in-out border border-purple-400 rounded-full py-3 px-8 shadow-md"
              onClick={() => downloadFileAtURL(LTMANUAL)}>
              Download Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doc1;
