"use client"
import { RiArrowDropDownLine } from "react-icons/ri"

const Counter: React.FC = () => {
  return (
    <div className='bg-[url("https://cowrywise.com/images/illos/return-pattern.svg")] min-h-screen bg-no-repeat bg-[0px_0px] flex flex-col items-center justify-center'>
      <div className='relative mx-auto max-w-[1380px] px-5 w-full'>
        <div>
            <h2 className='text-center text-5xl font-[900] text-[#082552]'>Stay the course, reap the rewards.</h2>
            <div className='flex flex-col items-center justify-center'>
                <h6 className="text-2xl py-12 text-[#6c82a3]">If you invested</h6>
                <div className='flex flex-row items-center text-[#082552]'>
                    <sup className="text-[3em]">#</sup>
                    <input type="tel" className='w-[200px] py-2.5 text-center text-7xl border-none bg-transparent outline-none' value="100000" readOnly/>
                </div>
                <div className='flex items-center justify-center gap-10'>
                    <div className='relative flex items-center'>
                        <select name="" id="" className='appearance-none py-2.5 px-1 block cursor-pointer text-[#207cf4] bg-transparent border-none text-lg'>
                            <option value="NGN">Naira</option>
                            <option value="USD">Dollar</option>
                        </select>
                        <div className="text-[#207cf4] text-3xl"><RiArrowDropDownLine /></div>
                    </div>
                    <div className='relative flex items-center'>
                        <select name="" id="" className='appearance-none py-2.5 px-1 block cursor-pointer text-[#207cf4] bg-transparent border-none text-lg'>
                            <option value="onetime">Onetime</option>
                            <option value="weekly">Weekly</option>
                            <option selected="selected" value="monthly">Monthly</option>
                        </select>
                        <div className="text-[#207cf4] text-3xl"><RiArrowDropDownLine /></div>
                    </div>
                    <div className='relative flex items-center'>
                        <select name="" id="" className='appearance-none py-2.5 px-1 block cursor-pointer text-[#207cf4] bg-transparent border-none text-lg'>
                            <option value="12">Last year</option>
                            <option selected="selected" value="36">3 years ago</option>
                            <option value="60">5 years ago</option>
                        </select>
                        <div className="text-[#207cf4] text-3xl"><RiArrowDropDownLine /></div>
                    </div>
                </div>
            </div>
            <div className="relative my-10 flex justify-center">
                <div className="relative w-3/5">
                    <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-[#cbd5e1] -translate-y-1/2 z-0" />
                        <input style={{WebkitAppearance: "none", height: "1px", backgroundColor: "transparent",}} className="appearance-none outline-none border-none w-full overflow-visible bg-[#aeb9cc66] h-[1px]" type="range" min="5000" max="10000000" value="10000" step="1000"/>
                    <style jsx>{`
                        input[type='range']::-webkit-slider-thumb {
                            -webkit-appearance: none;
                            appearance: none;
                            width: 28px;
                            height: 28px;
                            background: transparent;
                            border-radius: 9999px;
                            cursor: pointer;
                            border: 2px solid white;
                            margin-top: -13.5px;
                            box-shadow: 0 0 0 4px rgba(0, 102, 245, 0.2);
                            transition: background 0.3s;
                        }

                        input[type='range']::-moz-range-thumb {
                            width: 28px;
                            height: 28px;
                            background: #0066f5;
                            border-radius: 9999px;
                            cursor: pointer;
                            border: 2px solid white;
                            box-shadow: 0 0 0 4px rgba(0, 102, 245, 0.2);
                        }

                        input[type='range']:focus::-webkit-slider-thumb {
                            background: #0050c4;
                        }
                        `}</style>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="box-border">
                    <h6 className="text-[#6c82a3] text-2xl py-3 text-center font-normal">Today, you'd have</h6>
                    <p className="text-center text-[#6c82a3] flex items-center justify-center font-normal my-3.5 text-2xl">
                        <sup className="mr-1 -top-4 text-[2em]">#</sup>
                        <span className="text-8xl py-3 font-light">4,434,260</span>
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center -mt-[30px]">
                    <div className="mt-6 bg-[#e1f6ff] py-2 px-4 rounded-sm font-medium text-sm text-[#0066f5]">
                        #834,260 earned in returns on cowrywise
                    </div>
                    <p className="text-sm text-[#6c82a3] my-3.5 font-normal">
                        *In a bank you, you'd earn <span className="text-[#082552]">#28,000</span>
                    </p>
                </div>
                <div></div>
            </div>
            <p className="text-[#6c82a3] text-center max-w-[800px] text-sm mt-7 mx-auto font-normal">Calculations are based on the average performance of conservative mutual funds on Cowrywise from 2019. <br /> Calculation excludes processing fees.</p>
        </div>
      </div>
  )
}

export default Counter
