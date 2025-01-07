import Image from "next/image";
import React from "react";

const SplitCard = () => {
  return (
    <div className="flex h-[540px] w-full shadow-lg rounded-lg overflow-hidden">
      {/* Left Side - Content */}
      <div className="w-1/2 p-6 flex flex-col justify-center items-start bg-gradient-to-b from-blue-500 to-purple-700 transition-all duration-500">
        <h2 className="text-2xl font-bold text-white mb-4">
          Karibu kwenye Lugha Tausi: Mabawa ya Ubunifu kwa Afrika
        </h2>
        <h3 className="text-xl font-semibold text-white mb-2">Maono Yetu</h3>
        <p className="text-white leading-relaxed">
          Lugha Tausi ni zaidi ya lugha ya programu; ni mwamko mpya kwa
          teknolojia inayolenga jamii ya Afrika. Imeundwa kwa Kiswahili,
          ikionyesha uzuri na rangi za mbawa za tausi, kila kipengele kikiwa na
          nafasi maalum katika kukuza ubunifu na urahisi wa kutumia. Lugha Tausi
          ni daraja linalounganisha wataalamu wa teknolojia na wale wanaotaka
          kujiunga, kwa lengo la kuleta mapinduzi ya kiteknolojia kupitia lugha
          yenye asili ya Kiafrika.
        </p>
      </div>

      {/* Vertical Divider */}
      <div className="w-px bg-gray-300 h-full"></div>

      {/* Right Side - Logo */}
      <div className="w-1/2 p-6 flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-black to-gray-900">
        {/* Placeholder for the Logo */}
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src="/Tausi.jpeg" // Replace this with the actual logo path
            alt="Lugha Tausi Artwork"
            className="w-full h-full object-contain rounded-lg"
            width={400} // Customize for the image width based on your requirements
            height={400} // Customize for the image height based on your requirements
          />
        </div>
      </div>
    </div>
  );
};

export default SplitCard;
