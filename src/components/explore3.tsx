import React from "react";

const Explore3 = () => {
  return (
    <div className="w-full h-[540px] border border-gray-300 shadow-lg rounded-lg overflow-hidden">
      <div className="flex h-full">
        {/* Section One - Why Choose Lugha Tausi */}
        <div className="bg-gray-100 p-6 w-1/2 h-full overflow-y-auto">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            Kwa Nini Uchague Lugha Tausi?
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>1. Urithi wa Kiswahili:</strong> Lugha Tausi imeundwa kwa
            misingi ya lugha ya Kiswahili, ikifanya programu kuwa rahisi
            kufahamika kwa wazungumzaji wa Kiswahili.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>2. Ubunifu na Rangi Kama Mbawa za Tausi:</strong> Kama rangi
            na mwonekano wa mbawa za tausi, Lugha Tausi inajivunia muundo wa
            kipekee na wenye kuvutia, ikiwa na vipengele vinavyowezesha programu
            iwe ya kiubunifu na yenye mvuto.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>3. Urahisi wa Kujifunza:</strong> Ni lugha inayolenga wote,
            ikiwemo wanafunzi, vijana na wataalamu, ili kila mtu aweze kujifunza
            kwa urahisi na kupenda programu.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>4. Lugha ya Kiafrika kwa Maendeleo ya Kiafrika:</strong>{" "}
            Lugha Tausi inaleta mapinduzi kwa kutoa daraja la teknolojia kwa
            jamii za Kiafrika, huku ikijenga fursa za uvumbuzi na maendeleo.
          </p>
          <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-800">
            Kuanza na Lugha Tausi
          </h3>
          <p className="text-gray-700 mb-4">
            Kujiunga na jamii ya Lugha Tausi ni rahisi. Unaweza kuanza kwa
            kupitia "Feathers of Innovation"—kitabu kinachoelezea mchakato wa
            kiufundi wa Lugha Tausi na misingi ya kubuni programu kwa Kiswahili.
            Pia tunatoa tutorials, mafunzo ya video, na mifano ya msimbo ili
            kuwasaidia watumiaji wa viwango vyote.
          </p>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Matarajio Yetu
          </h3>
          <p className="text-gray-700 mb-4">
            Lugha Tausi ina nia ya kuwa lugha ya msingi kwa programu za
            Kiswahili na lugha za Kiafrika, ikiwapa vijana wa Afrika zana za
            kiufundi kwa ajili ya kujenga suluhisho kwa changamoto za bara hili.
            Kwa pamoja, tutaandika historia mpya ya teknolojia Afrika.
          </p>
          <p className="text-gray-700 font-semibold">
            Karibu kwenye Lugha Tausi, pale mbawa za ubunifu na teknolojia
            zinapokutana kwa mwangaza wa Kiswahili!
          </p>
        </div>

        {/* Vertical Divider */}
        <div className="w-px bg-gray-300 h-full"></div>

        {/* Section Two */}
        <div className="bg-white p-6 w-1/2 h-full">
          <h2 className="text-xl font-bold mb-2">Section Two</h2>
          <p className="text-gray-700">
            This is the second section of the card.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Explore3;
