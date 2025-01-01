"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-black text-white mt-2">
      {/* Sehemu ya Kwanza */}
      <section className="relative bg-gradient-to-b from-purple-800 via-black to-black text-white flex flex-col justify-center items-center p-8 sm:p-12 lg:p-16 ml-10 mr-10 mb-10 overflow-hidden rounded-xl">

        {/* Mandhari ya Miondoko */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 opacity-75 animate-pulse"></div>

        <div className="flex flex-col items-center text-center mt-8 z-10 relative">
          {/* Maandishi Makubwa */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-purple-100 animate__animated animate__fadeIn animate__delay-1s">
            <span className="flex justify-start">Inua Akili Yako</span>
            <span className="block">Inua Msimbo Wako na Tausi</span>
          </h1>
          <p className="text-lg sm:text-xl text-purple-300 mb-6">
            Gundua lugha ya programu inayobadilisha ugumu kuwa rahisi. Jiunge nasi na jifunze sanaa ya kuandika msimbo kwa urahisi!
          </p>
          <Link href="/home/About">
            <button className="bg-transparent border-2 border-purple-600 text-purple-100 py-2 px-6 rounded-full hover:bg-purple-600 hover:border-transparent transition-all duration-300 transform hover:scale-110 animate__animated animate__pulse animate__delay-3s">
              Gundua
            </button>
          </Link>
        </div>

        {/* Sehemu ya Nembo */}
        <div className="mt-12 flex justify-center relative z-10">
          <Image
            src="/Logo.png"
            alt="Nembo ya Tausi"
            width={256}
            height={256}
            className="rounded-full animate__animated animate__zoomIn animate__delay-1s"
          />
        </div>
      </section>

      {/* Sehemu ya Sifa */}
      <section className="bg-gray-900 text-gray-300 py-16 px-8 sm:px-12 lg:px-16 mt-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            Sifa za Tausi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Urahisi", "Utendaji", "Uwezo wa Kupanuka"].map((sifa, index) => (
              <div
                key={index}
                className="bg-gray-800 backdrop-blur-md bg-opacity-75 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition-colors duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 text-purple-200">
                  {sifa}
                </h3>
                <p className="text-gray-300">
                  {sifa === "Urahisi"
                    ? "Tausi inatoa muundo safi na rahisi unaorahisisha uandishi wa msimbo."
                    : sifa === "Utendaji"
                    ? "Imejengwa kwa kasi, Tausi inahakikisha utendaji wa hali ya juu na utekelezaji wa haraka wa programu zako."
                    : "Panua miradi yako kwa urahisi kwa usanifu madhubuti wa Tausi na miundo inayobadilika."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sehemu ya Faida */}
      <section className="bg-purple-800 text-gray-100 py-16 px-8 sm:px-12 lg:px-16 mt-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            Faida za Kutumia Tausi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Urahisi wa Kujifunza", "Msaada wa Jamii", "Uwezo wa Kiasi"].map(
              (faida, index) => (
                <div
                  key={index}
                  className="bg-purple-700 backdrop-blur-md bg-opacity-75 p-6 rounded-lg shadow-lg text-center hover:bg-purple-600 transition-colors duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-purple-200">
                    {faida}
                  </h3>
                  <p className="text-gray-200">
                    {faida === "Urahisi wa Kujifunza"
                      ? "Kwa muundo wake wa angavu, Tausi ni rahisi kujifunza hata kwa wanaoanza."
                      : faida === "Msaada wa Jamii"
                      ? "Jiunge na jamii yenye bidii ya waendelezaji wanaosaidiana."
                      : "Tausi ni hodari na inaweza kutumika kwa maendeleo ya wavuti, programu za simu, na zaidi."}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Sehemu ya Kuanza */}
      <section className="bg-gray-900 text-gray-100 py-16 px-8 sm:px-12 lg:px-16 mt-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Anza na Tausi
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Uko tayari kuanza na Tausi? Fuata nyaraka zetu za kina na mafunzo ili
            kuanza kujenga programu bora leo!
          </p>
          <Link href="/home/Download">
            <button className="bg-purple-600 text-grey-300 py-3 px-6 rounded-full hover:bg-purple-700 transition-all duration-300">
              Anza Kuandika Msimbo
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
