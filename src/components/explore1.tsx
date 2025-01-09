import Image from "next/image";
import React from "react";

const SplitCard = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[540px] w-full shadow-lg overflow-hidden">
      {/* Left Side - Content */}
      <div className="w-full md:w-11/12 p-6 flex flex-col justify-center items-start bg-gradient-to-b from-blue-500 to-purple-700 transition-all duration-500">
        <details className="mb-6">
          <summary className="text-3xl font-bold text-white cursor-pointer">
            Karibu kwenye Lugha Tausi: Ubunifu wa Kipekee kwa Afrika
          </summary>
          <p className="text-lg text-white leading-relaxed mt-4">
            Lugha Tausi ni zaidi ya lugha ya programu—ni mwamko wa ajabu na nguvu ya ubunifu inayowaka kwa kasi! Imeundwa kwa Kiswahili, ikichora picha ya mbawa za tausi—kila kipengele kikiwa na uzuri wake wa kipekee. Inachanganya urahisi wa kutumia na nguvu ya uchangamfu.
          </p>
        </details>

        <details className="mb-6">
          <summary className="text-2xl font-semibold text-white cursor-pointer">
            Maono Yetu: Kupasua Mipaka ya Teknolojia
          </summary>
          <p className="text-lg text-white leading-relaxed mt-4">
            Lugha Tausi inafungua milango ya fursa mpya, ikiwa ni daraja linalounganisha wataalamu wa teknolojia wa Afrika na wale wanaotaka kuchangia. Tujivunie, kwa sababu mapinduzi ya kiteknolojia yameanza, na Lugha Tausi inazalisha nguvu hiyo kwa moyo wa Kiafrika!
          </p>
        </details>
      </div>

      {/* Vertical Divider */}
      <div className="w-[2px] bg-white h-full md:h-auto my-4 md:my-0 md:w-[2px]"></div> {/* Divider with adjustments for small screens */}

      {/* Right Side - Logo */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-end bg-gradient-to-b from-gray-900 via-black to-gray-900">
        {/* Placeholder for the Logo */}
        <div className="flex justify-center md:justify-end w-full">
          <Image
            src="/Tausi.jpeg" // Replace this with the actual logo path
            alt="Lugha Tausi Artwork"
            className="object-contain h-[250px] md:h-[540px] w-full"
            layout="intrinsic" // Use intrinsic for better responsiveness
            width={672} // Customize for the image width based on your requirements
            height={200} // Customize for the image height based on your requirements
          />
        </div>
      </div>
    </div>
  );
};

export default SplitCard;
