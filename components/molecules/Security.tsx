"use client";

import React from "react";
import { FaAngleRight } from "react-icons/fa";

const Security: React.FC = () => {
  return (
    <div className="pb-[150px] relative overflow-x-hidden bg-[#0066f5] text-white py-[50px]">
      <div className="mx-auto max-w-[1380px] px-5 w-full">
        <div className="box-border w-full flex flex-row flex-wrap">
          <div className="box-border basis-[35.67%] max-w-[46.67%]">
            <h2 className="text-4xl py-5 font-bold">
              Keeping your money safe is our business
            </h2>
            <p className="my-3.5 font-normal text-[15px]">
              Trust is our currency. We are committed to the security of your
              money and the protection of your account.
            </p>
            <a
              className="text-[12.5px] flex items-center text-white/80 font-semibold hover:gap-1.5"
              href="https://cowrywise.com/security"
            >
              LEARN MORE <FaAngleRight className="text-lg" />
            </a>
          </div>
        </div>

        <div className="box-border w-[70.8%] gap-16 grid grid-cols-1 md:grid-cols-2">
          {[
            {
              title: "Top-Notch Security",
              description:
                "We use industry-standard encryption technology to protect user data. We also use two-factor authentication to verify all customer accounts, so you can be sure that your funds are safe and secure.",
            },
            {
              title: "Assets Custody",
              description:
                "Our users’ financial assets are held with a licensed custodian, Zenith Nominees Limited, for safekeeping to prevent misappropriation, misuse, theft, and/or loss, and in accordance with applicable law.",
            },
            {
              title: "Regulatory Compliance",
              description:
                "Cowrywise is a duly registered fund manager with the Securities and Exchange Commission (SEC) of Nigeria. All our activities are in full compliance with regulatory requirements to the ultimate protection of our clients.",
            },
            {
              title: "Best-In-Class Assets",
              description:
                "All the investment options listed on Cowrywise, are carefully screened, managed by professional fund managers. All the diverse mutual funds registered with the SEC, with standard third-party custodian structure.",
            },
          ].map((item, index) => (
            <div className="box-border" key={index}>
              <div className="flex flex-row gap-5 mt-[30px]">
                <div className="w-16 h-4 rounded-sm mt-2 bg-white shadow-[3px_3px_0px_rgba(255,255,255,0.8)]"></div>
                <div>
                  <h2 className="mb-[15px] font-semibold text-2xl">
                    {item.title}
                  </h2>
                  <p className="text-white/80 my-[15px] text-lg font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute -right-68 top-[150px] w-[780px] bg-[url('https://cowrywise.com/images/illos/security.svg')] 
        opacity-50 bg-no-repeat z-40 pointer-events-none bg-[length:110%] h-[780px]"
      ></div>
    </div>
  );
};

export default Security;
