"use client";

import React from "react";
import Reviews from "./Reviews";
import Join from "./Join";
import FooterLinks from "./FooterLinks";
import MainFooter from "./MainFooter";

const Footer: React.FC = () => {
  return (
    <div className="mt-5 bg-no-repeat bg-auto pb-[50px] bg-[url('https://cowrywise.com/images/patterns/footer-bg.svg')] bg-[0px_1080px]">
      <div className="mx-auto px-5 w-full max-w-[1380px]">
        <Reviews />
        <Join />
        <FooterLinks />
        <hr className="text-[#082552]/10" />
        <MainFooter />
      </div>
    </div>
  )
}

export default Footer
