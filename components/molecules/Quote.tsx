'use client';

import React from 'react';

const Quote: React.FC = () => {
  const cards: string[] = [
    ' Automate and build my savings',
    ' Access Naira & USD investments',
    ' Get better returns on my money',
    " Invest my business' cash",
    ' Invest in mutual funds easily',
    ' Invest with very low fees',
  ];

  const renderCards = () =>
    cards.map((text, index) => (
      <a
        key={index}
        href="#"
        className="flex justify-center items-center mr-8 p-8 border border-[#0066f5] font-bold rounded-3xl min-h-[320px] max-w-[480px] text-[#0066f5] text-5xl shrink-0"
      >
        <h4>" <br />{text}</h4>
      </a>
    ));

  return (
    <div className="overflow-hidden py-[50px]">
      <style jsx>{`
        @keyframes scrollX {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scrollX 25s linear infinite;
        }
      `}</style>

      <div className="mx-auto max-w-[1380px] py-20">
        <h2 className="text-[#082552] text-7xl font-bold">
          You name it, <br />
          we've figured it <br /> out.
        </h2>
      </div>

      <div className="w-screen h-[400px] mt-10 overflow-x-hidden relative">
        <div className="absolute flex w-max animate-scroll">
          <div className="flex">{renderCards()}</div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
