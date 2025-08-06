"use client"
import React from 'react'

function Join() {
  return (
    <>
        <div className="rounded-xl bg-[#0066f5] shadow-2xl shadow-[#0067f54d] mb-10 py-20">
            <div className="max-w-[1380px] mx-auto py-5 px-32 flex flex-row justify-between items-center flex-wrap">
                <h3 className="text-white text-4xl font-semibold max-w-[600px]">
                Join over 1 million customers on Cowrywise today
                </h3>

                <form action="https://cowrywise.com/choose-account" className="w-full sm:w-auto">
                <div className="relative rounded-md py-2.5 px-6 bg-white/40 flex items-center">
                    <input
                    type="email"
                    className="text-white bg-transparent border-none h-[38px] focus:outline-none placeholder-white/70"
                    placeholder="Your email..."
                    />
                    <button
                    type="submit"
                    className="-mr-4 text-[#082552] border-none py-3 px-5 rounded-lg font-bold bg-white whitespace-nowrap"
                    >
                    Sign Up For Free
                    </button>
                </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Join
