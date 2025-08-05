"use client";

import React from "react";

const Steps: React.FC = () => {
  return (
    <div className="bg-[url('https://cowrywise.com/images/patterns/home/home-device-section.svg')] bg-no-repeat bg-[length:65%] bg-[10%] bg-[#fcfcfc] py-[50px]">
      <div className="mx-auto max-w-[1380px] px-5 w-full">
        <div className="box-border w-full flex justify-between items-center flex-row">
          <div className="max-w-[33%]">
            <div className="relative w-full">
              <img
                alt="save online Nigeria cowrywise"
                loading="lazy"
                src="https://cdn.cowrywise.com/images/mockups/cowrywise-app-investment-platform-nigeria.png"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 -mr-50 flex flex-col gap-6">
            <h2 className="text-5xl font-extrabold text-[#082552]">
              It takes 5 minutes
            </h2>

            <div className="flex flex-col pt-16 gap-6 relative">
              <div className="flex items-start gap-4 opacity-100 relative">
                <div className="flex flex-col items-center">
                  <span className="text-[#0066f5] text-xl font-bold">01</span>
                  <div className="w-px h-[70px] bg-[#0066f5] mt-1"></div>
                </div>
                <div className="pb-10">
                  <span className="block text-2xl pb-5 font-bold text-[#082552]">
                    Create an account
                  </span>
                  <p className="text-[#082552] text-base">
                    Sign up for an account with your name,
                    <br /> email and phone number.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 opacity-100 relative">
                <div className="flex flex-col items-center">
                  <span className="text-[#0066f5] text-xl font-bold">02</span>
                  <div className="w-px h-[70px] bg-[#0066f5] mt-1"></div>
                </div>
                <div className="pb-10">
                  <span className="block text-2xl pb-5 font-semibold text-[#082552]">
                    Add a payment method
                  </span>
                  <p className="text-[#082552] text-base">
                    Using your debit card or a bank transfer, <br /> setup your
                    first plan.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 opacity-100">
                <div className="flex flex-col items-center">
                  <span className="text-[#0066f5] text-xl font-bold">03</span>
                </div>
                <div className="pb-5">
                  <span className="block text-2xl pb-5 font-semibold text-[#082552]">
                    Watch your money grow
                  </span>
                  <p className="text-[#082552] text-base">
                    Sit back, relax &amp; let your money work for you <br /> all
                    day, everyday.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://cowrywise.com/choose-account/"
              className="mt-4 inline-block text-center bg-[#0066f5] text-white w-fit px-6 py-3 rounded-lg font-medium hover:bg-[#0050c4] transition duration-300"
            >
              Sign up now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
