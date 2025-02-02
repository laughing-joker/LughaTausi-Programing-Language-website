import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="w-full h-auto md:h-[540px] shadow-lg rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row h-full">
        {/* Section One - Image Section */}
        <div className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 w-full md:w-1/2 h-[300px] md:h-full">
          {/* Container for Image */}
          <div className="flex justify-start items-start">
            <Image
              src="/Moyo.jpeg" // Replace with actual image path
              alt="Lugha Tausi Artwork"
              className="h-[300px] md:h-[540px]"
              width={960}
              height={200}
            />
          </div>
        </div>

        {/* Section Two - Content Section */}
        <div className="bg-gradient-to-b from-blue-500 to-purple-700 p-6 w-full md:w-1/2 h-auto md:h-full flex flex-col justify-center items-center text-white">
          {/* Dedication Section */}
          <h2 className="text-3xl font-bold mb-4 text-center drop-shadow-lg">
            Kuhusu Timu Yetu
          </h2>
          <p className="mb-6 text-center text-lg drop-shadow-md">
            Timu ya Lugha Tausi imejizatiti kuhakikisha kuwa ubunifu wa
            teknolojia unafanikisha maendeleo barani Afrika. Kwa kujitolea na
            ujuzi wao, wanafanya kazi bila kuchoka ili kuleta suluhisho bunifu
            linalofaa watumiaji wa sasa na wa baadaye.
          </p>

          {/* Button to Portfolio */}
          <div className="flex justify-center mt-6">
            <a
              href="https://lt-team-portfolio.vercel.app/" // Replace with actual portfolio link
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl hover:text-purple-100 hover:scale-105 transition duration-300"
            >
              Tazama Kazi Yetu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
