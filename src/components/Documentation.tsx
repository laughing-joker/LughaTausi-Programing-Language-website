import React from "react";

const LTMANUAL = "https://lugha-tausi.vercel.app/Mwongozo.pdf";
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
    <div className="w-full min-h-screen bg-gradient-to-b from-purple-700 to-blue-700 flex items-center justify-center p-4 rounded-xl">
      <div className="w-full max-w-3xl my-8 p-8 bg-gray-900 shadow-2xl rounded-lg border border-purple-500 relative">
        <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-75 blur-lg animate-pulse"></div>
        <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-75 blur-lg animate-pulse"></div>

        <div className="p-6 mt-5 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Lugha Tausi</h1>
          <p className="text-lg md:text-xl mb-4 text-gray-300">
            Hati ya kina kuhusu Lugha Tausi
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Vipengele</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 text-lg">
            <li>Sintaksia rahisi kusoma</li>
            <li>Maktaba zenye nguvu za usindikaji wa data</li>
            <li>Jamii yenye msaada mkubwa</li>
            <li>Ufanisi kwenye majukwaa mbalimbali</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Usakinishaji
          </h2>
          <p className="text-gray-300 mb-4">
            Kwa lugha yetu ya programu, ni mchakato wa kuburuta na kuachia, na
            IDE tayari kwa matumizi kwenye Windows.
          </p>
          <p className="text-gray-300">
            Usakinishaji kwenye mifumo mingine ya uendeshaji:
          </p>
          <p className="font-bold text-gray-300">Inakuja hivi karibuni</p>
          <pre className="bg-gray-800 p-4 rounded-md text-purple-300 mb-6">
            <code># install lughatausi</code>
          </pre>

          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Mfano wa Matumizi
          </h2>
          <p className="text-gray-300 mb-4">
            Hapa kuna mfano rahisi wa jinsi ya kutumia Lugha Tausi:
          </p>
          <pre className="bg-gray-800 p-4 rounded-md text-purple-300 mb-6">
            <code>
              {`// Programu rahisi ya Hello World
jumbe("Habari, Ulimwengu!")`}
            </code>
          </pre>
          <pre className="bg-gray-800 p-4 rounded-md text-purple-300 mb-6">
            <code>
              {`// Simple Hello World program
jumbe("Hello, World!")`}
            </code>
          </pre>

          {/* Download Button */}
          <div className="flex justify-center mt-6">
            <button
              className="relative text-white bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-size-200 bg-pos-0 hover:bg-pos-100 hover:text-white text-lg font-semibold transition duration-300 ease-in-out border border-purple-400 rounded-full py-3 px-8 shadow-md"
              onClick={() => downloadFileAtURL(LTMANUAL)}
            >
              Pakua Hati
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doc1;
