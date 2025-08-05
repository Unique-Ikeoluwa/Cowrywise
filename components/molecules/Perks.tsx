"use client"
import React, { useEffect, useState } from 'react'

const messages = [
  { question: "Licenced and regulated?", answer: "Yup!" },
  { question: "99% service uptime?", answer: "Yup!" },
  { question: "Great interest rates?", answer: "Yup!" },
  { question: "Diversified investment portfolio?", answer: "Sure!" },
  { question: "Secured savings?", answer: "Bet!" },
  { question: "Convinced?", answer: <a href='https://cowrywise.com/choose-account' className='text-[#0066f5]'>Sign up now.</a> },
];

function Perks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setFade(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = messages[currentIndex];

  return (
    <div className='relative mb-[50px] py-[50px]'>
      <div className='mx-auto max-w-[1380px] px-5 w-full'>
        <div className='flex flex-col'>
          <h4 className=" text-[#082552] mb-4 font-semibold">WHY COWRYWISE?</h4>
          <div className='max-w-full h-[80px] overflow-hidden relative'>
            <div
              className={`flex flex-row py-3 absolute transition-all duration-300 ease-in-out
                ${fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
              key={currentIndex}
            >
              <span className='text-[#6c82a3] mb-2 font-normal text-6xl'>{current.question}</span>
              <span className='ml-6 font-normal text-6xl text-[#082552]'>{current.answer}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perks;
