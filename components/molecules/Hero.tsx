"use client";

import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const names: string[] = ["damilola", "oyindamola", "funmilola", "conscience", "moyosoluwa"];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="relative overflow-hidden bg-[#d4d4d6] h-screen py-[50px]">
        <div className='absolute h-full md:w-[150vw] box-border top-[278px] md:top-0 md:left-40 z-10'>
            <video className='object-contain overflow-clip scale-y-115 scale-x-117' autoPlay loop playsInline muted src="https://cdn.cowrywise.com/videos/hero-video-new-c5.mp4"></video>
        </div>
        <div className="mx-auto max-w-[1380px] px-5 w-full">
          <div className="grid grid-cols-1 gap-10 md:pt-[137px] grid-flow-dense">
            <div className="pt-[60px] z-10">
              <h1 className="md:mb-5 text-5xl md:text-[85px] font-semibold text-[#082552]">
                Put your <br />money to work
              </h1>
              <h2 className="text-2xl text-[#082552] md:text-3xl relative mt-5 md:mt-8 h-[1em]">
                Invest wisely like{" "}
                <span className="text-[#727272] text-xl ml-1 py-1 px-2.5 font-medium absolute -top-1 left rounded-br-sm rounded-[20px] bg-[#c8c8c8]">
                  {names[currentIndex]}
                </span>
              </h2>
              <button type="submit" className="md:hidden mt-9 font-bold text-[17px] px-7 bg-[#0066f5] rounded-md cursor-pointer text-white relative leading-11 shadow-md">Start Investing</button>
              <form action="" className="hidden mt-10 mb-6 md:flex max-w-4/5">
                <input className="mr-2.5 flex border border-solid border-[#0825521c] h-[45px] bg-white rounded-md outline-none text-2xl px-6 py-[18px] text-[#082552]" type="email" required name="email" placeholder="Your email..."/>
                <input type="submit" className="font-bold text-base px-7 bg-[#0066f5] rounded-md cursor-pointer text-white relative leading-11 shadow-md" value="Start Investing"/>
              </form>
              <div className="hidden md:flex gap-1 items-center cursor-pointer">
                <svg width="14" height="14" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" tabIndex={-1}>
                  <circle opacity=".3" cx="22" cy="22" r="22" fill="#444"></circle>
                  <path
                    d="M30.25 20.412c1.222.706 1.222 2.47 0 3.176l-11 6.35c-1.222.706-2.75-.176-2.75-1.587V15.649c0-1.411 1.528-2.293 2.75-1.587l11 6.35z"
                    fill="#fff"
                  ></path>
                </svg>
                <span className="text-sm">See how 1M+ customers are investing</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
