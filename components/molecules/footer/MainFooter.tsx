"use client"
import React from 'react'
import { FaTwitter } from "react-icons/fa6";
import { IoLogoFacebook, IoLogoWhatsapp, IoLogoInstagram } from "react-icons/io";
import { FaTelegramPlane, FaYoutube } from "react-icons/fa";

function MainFooter() {
  return (
    <>
        <div className="w-full text-lg text-[#08255299] py-10 flex flex-row items-center gap-3">
          <a className="hover:text-[#0066f5]" href="#"><FaTwitter /></a><a className="hover:text-[#0066f5]" href="#"><IoLogoFacebook /></a><a className="hover:text-[#0066f5]" href="#"><IoLogoWhatsapp /></a><a className="hover:text-[#0066f5]" href="#"><FaTelegramPlane /></a><a className="hover:text-[#0066f5]" href="#"><IoLogoInstagram /></a><a className="hover:text-[#0066f5]" href="#"><FaYoutube /></a>
        </div>
        <div className="flex flex-row items-center py-5 justify-between">
          <div className="flex flex-col gap-4">
            <p className="text-lg text-[#082552]">🇳🇬   5C Reverend Ogunbiyi Street, Ikeja GRA, Lagos Nigeria.</p>
            <p className="text-lg text-[#082552]">🇺🇸   2261 Market Street #4817 San Francisco, CA 94114</p>
          </div>
          <div className="bg-white py-2 px-3 border border-[#082552]/10 rounded shadow-sm flex gap-5">
            <img src="https://cdn.cowrywise.com/images/license/sec.png" className="size-8" alt="" />
            <div className="flex flex-col">
              <span className="font-bold text-base">Licensed by the SEC </span><span className="text-sm text-[#08255299]">Fund Manager</span>
            </div>
          </div>
        </div>
        <p className="text-[#0825527a] py-3 text-sm">Cowrywise Financial Technology Limited (“Cowrywise”) is a Fund/Portfolio Manager duly licensed by the Securities and Exchange Commission (SEC) of Nigeria, with License #1940 and its sister company, CFTL Digital Services Limited, is a Digital Sub-Broker duly licensed by the SEC, with License #3005.</p>
        <p className="text-[#0825527a] pb-3 text-sm">Our mutual funds are managed by our fund management partners and made available to our clients through our web and mobile applications. The fund manager for each mutual fund is disclosed on every mutual fund’s profile page. Any historical returns or expected returns are hypothetical in nature and may not reflect actual future performance. <a className="text-[#0066f5]" href="https://cowrywise.com/mutual-funds">View full list of available mutual funds on Cowrywise.</a></p>
        <p className="text-[#0825527a] pb-3 text-sm">Stash is used for the purpose of receiving money transfers in place of a regular debit card. It also receives the proceeds from the sale of any mutual fund on Cowrywise.</p>
        <p className="text-[#0825527a] pb-3 text-sm">The content on this website does not constitute a complete description of Cowrywise’s offerings and services. By using this website, you accept our <a className="text-[#0066f5]" href="https://cowrywise.com/terms">Terms of Use</a> and <a className="text-[#0066f5]" href="https://cowrywise.com/privacy">Privacy Policy.</a></p>
        <p className="text-[#0825527a] pb-3 text-sm">Google Play and the Google Play logo are trademarks of Google LLC. Apple, the Apple logo, and iPhone are trademarks of Apple Inc. registered in the U.S.</p>
        <p className="text-[#0825527a] pb-5 text-sm">©2025 Cowrywise Financial Technology. All rights reserved</p>
    </>
  )
}

export default MainFooter
