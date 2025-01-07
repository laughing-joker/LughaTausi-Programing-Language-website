import Image from "next/image";
import React from "react";

const Explore3 = () => {
  return (
    <div className="w-full h-[540px] shadow-lg rounded-lg overflow-hidden">
      <div className="flex h-full">
        {/* Section One - Why Choose Lugha Tausi */}
        <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 p-6 w-full sm:w-1/2 h-full overflow-y-auto text-white">
          <h2 className="text-xl font-bold mb-4">
            Kwa Nini Uchague Lugha Tausi?
          </h2>
          <p className="mb-4">
            <strong>1. Urithi wa Kiswahili:</strong> Lugha Tausi imeundwa kwa
            misingi ya lugha ya Kiswahili, ikifanya programu kuwa rahisi
            kufahamika kwa wazungumzaji wa Kiswahili.
          </p>
          <p className="mb-4">
            <strong>2. Ubunifu na Rangi Kama Mbawa za Tausi:</strong> Kama rangi
            na mwonekano wa mbawa za tausi, Lugha Tausi inajivunia muundo wa
            kipekee na wenye kuvutia, ikiwa na vipengele vinavyowezesha programu
            iwe ya kiubunifu na yenye mvuto.
          </p>
          <p className="mb-4">
            <strong>3. Urahisi wa Kujifunza:</strong> Ni lugha inayolenga wote,
            ikiwemo wanafunzi, vijana na wataalamu, ili kila mtu aweze kujifunza
            kwa urahisi na kupenda programu.
          </p>
          <p className="mb-4">
            <strong>4. Lugha ya Kiafrika kwa Maendeleo ya Kiafrika:</strong>{" "}
            Lugha Tausi inaleta mapinduzi kwa kutoa daraja la teknolojia kwa
            jamii za Kiafrika, huku ikijenga fursa za uvumbuzi na maendeleo.
          </p>
          <h3 className="text-lg font-semibold mt-6 mb-2">
            Kuanza na Lugha Tausi
          </h3>
          <p className="mb-4">
            Kujiunga na jamii ya Lugha Tausi ni rahisi. Unaweza kuanza kwa
            kupitia
            <strong>Feathers of Innovation</strong>—kitabu kinachoelezea
            mchakato wa kiufundi wa Lugha Tausi na misingi ya kubuni programu
            kwa Kiswahili. Pia tunatoa tutorials, mafunzo ya video, na mifano ya
            msimbo ili kuwasaidia watumiaji wa viwango vyote.
          </p>
          <h3 className="text-lg font-semibold mb-2">Matarajio Yetu</h3>
          <p className="mb-4">
            Lugha Tausi ina nia ya kuwa lugha ya msingi kwa programu za
            Kiswahili na lugha za Kiafrika, ikiwapa vijana wa Afrika zana za
            kiufundi kwa ajili ya kujenga suluhisho kwa changamoto za bara hili.
            Kwa pamoja, tutaandika historia mpya ya teknolojia Afrika.
          </p>
          <p className="font-semibold">
            Karibu kwenye Lugha Tausi, pale mbawa za ubunifu na teknolojia
            zinapokutana kwa mwangaza wa Kiswahili!
          </p>
        </div>

        {/* Vertical Divider */}
        <div className="w-px bg-gray-300 h-full hidden sm:block"></div>

        {/* Section Two */}
        <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 p-6 w-full sm:w-1/2 h-full flex justify-center items-center">
          <Image
            src="/tausi.jpeg" // Replace this with the actual logo path
            alt="Lugha Tausi Artwork"
            className="w-full h-full object-contain max-w-full max-h-[90%] sm:max-h-full rounded-lg"
            width={400} // Customize for the image width based on your requirements
            height={400} // Customize for the image height based on your requirements
          />
        </div>
      </div>
    </div>
  );
};

export default Explore3;
