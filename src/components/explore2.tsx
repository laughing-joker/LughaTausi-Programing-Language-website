import React from "react";

const Card = () => {
  return (
    <div className="w-full h-[540px] b shadow-lg rounded-lg overflow-hidden">
      <div className="flex h-full">
        {/* Section One - Gray Background */}
        <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 p-6 w-1/2 h-full">
          <h2 className="text-xl font-bold mb-2">Section One</h2>
          <p className="text-gray-700">
            This is the first section of the card.
          </p>
        </div>

        {/* Vertical Divider */}
        <div className="w-px bg-gray-300 h-full"></div>

        {/* Section Two - Blue to Purple Gradient Background */}
        <div className="bg-gradient-to-b from-blue-500 to-purple-700 p-6 w-1/2 h-full overflow-y-auto text-white">
          <h2 className="text-xl font-bold mb-4">Timu Yetu</h2>
          <p className="mb-4">
            <strong>Mwanzilishi na Mtendaji Mkuu, CIO:</strong>
            <br />
            Christian Masako – Mwanzilishi na Kiongozi Mkuu wa Lugha Tausi, pia
            Mkuu wa Habari na Teknolojia (CIO). Christian ndiye aliyeanzisha
            wazo la Lugha Tausi kwa lengo la kuleta ubunifu na mabadiliko katika
            mfumo wa programu Afrika.
          </p>
          <p className="mb-4">
            <strong>Mkuu wa Teknolojia (CTO):</strong>
            <br />
            Floteus Ngonyani – Mkuu wa masuala yote ya kiufundi ndani ya timu,
            akihakikisha mfumo na miundombinu ya Lugha Tausi inafanya kazi kwa
            ubora wa hali ya juu.
          </p>
          <p className="mb-4">
            <strong>Mkuu wa Ubunifu wa Algorithms:</strong>
            <br />
            Wenceslaus Bahati na John Makweba – Mabingwa wa algorithms,
            wanahusika na kubuni, kuunda na kuboresha misingi ya programu ya
            Lugha Tausi kwa ajili ya matokeo bora na ya kiubunifu.
          </p>
          <p className="mb-4">
            <strong>Kiongozi wa Graphics:</strong>
            <br />
            Omni Standards Team – Kikundi kinachojikita katika muundo na
            mwonekano wa kuvutia wa Lugha Tausi, kuhakikisha kwamba lugha hii
            inavutia kwa watumiaji na inaonekana vizuri katika mitandao.
          </p>
          <p className="mb-4">
            <strong>Mahusiano ya Ndani:</strong>
            <br />
            Festo John – Anahusika na ufanisi wa mawasiliano na ushirikiano wa
            ndani katika timu, akifanya kazi kwa karibu na timu nzima kuimarisha
            mshikamano.
          </p>
          <p className="mb-4">
            <strong>Mahusiano ya Kimataifa:</strong>
            <br />
            Wangkeh Suzzie (Cameroon) – Msimamizi wa mahusiano ya kimataifa,
            anayejenga ushirikiano wa kimataifa kwa niaba ya Lugha Tausi ili
            kuhakikisha mradi unapata msaada na ushirikiano nje ya mipaka ya
            Afrika Mashariki.
          </p>
          <p className="mb-4">
            <strong>Outreach:</strong>
            <br />
            Amos Abdallah na Madam Getrude – Wanashiriki katika shughuli za
            kueneza taarifa kwa jamii, wakifanya Lugha Tausi ijulikane na
            kueleweka zaidi kwa umma kupitia njia tofauti za mawasiliano.
          </p>
          <p>
            <strong>Sekretarieti:</strong>
            <br />
            Madam Getrude – Msimamizi wa shughuli za kiutawala na usaidizi ndani
            ya timu, kuhakikisha uratibu na usimamizi wa mradi unaenda vizuri.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
