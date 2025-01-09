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
              width={679}
              height={200}
            />
          </div>
        </div>

        {/* Section Two - Content Section */}
        <div className="bg-gradient-to-b from-blue-500 to-purple-700 p-6 w-full md:w-1/2 h-auto md:h-full overflow-y-auto text-white">
          {/* Timu Yetu Section */}
          <h2 className="text-2xl font-bold mb-6">Timu Yetu ya Lugha Tausi</h2>
          <details className="mb-4">
            <summary className="font-semibold">Mwanzilishi na Mtendaji Mkuu, CIO:</summary>
            <p>Christian Masako ndiye aliyeanzisha Lugha Tausi, akilenga ubunifu wa programu Afrika.</p>
          </details>
          <details className="mb-4">
            <summary className="font-semibold">Mkuu wa Teknolojia (CTO):</summary>
            <p>Filoteus Ngonyani anahakikisha miundombinu ya teknolojia inafanya kazi kwa ufanisi.</p>
          </details>
          <details className="mb-4">
            <summary className="font-semibold">Mabingwa wa Algorithms:</summary>
            <p>Wenceslaus Bahati na John Makweba wanahakikisha misingi ya programu inaboresha matokeo bora.</p>
          </details>
          <details className="mb-4">
            <summary className="font-semibold">Kiongozi wa Graphics:</summary>
            <p>Omni Standards Team inahakikisha mwonekano wa Lugha Tausi unavutia watumiaji.</p>
          </details>

          {/* Ubora Section */}
          <h2 className="text-2xl font-bold mt-8 mb-6">
            Jinsi Timu Yetu Inavyoweka Lugha Tausi Katika Ubora Wake
          </h2>
          <details className="mb-4">
            <summary className="font-semibold">Ubunifu wa Teknolojia:</summary>
            <p>Tunatumia teknolojia za kisasa kubuni suluhisho bora.</p>
          </details>
          <details className="mb-4">
            <summary className="font-semibold">Ushirikiano wa Kimataifa:</summary>
            <p>Tunashirikiana na wadau kutoka sehemu mbalimbali duniani.</p>
          </details>
          <details className="mb-4">
            <summary className="font-semibold">Ubora wa Mwonekano:</summary>
            <p>Tunahakikisha mwonekano wa kitaalamu kwa watumiaji.</p>
          </details>
          <details className="mb-4">
            <summary className="font-semibold">Mawasiliano:</summary>
            <p>Tunajitahidi kueneza taarifa kupitia kampeni za kijamii na ushirikiano.</p>
          </details>
          <details className="mb-4">
            <summary className="font-semibold">Utawala Imara:</summary>
            <p>Tunaweka mipango thabiti kuhakikisha maendeleo ya mradi.</p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Card;