"use client"
import Image from 'next/image'
import { Slider } from "@material-tailwind/react";
import { useState } from 'react'

export default function Home() {
  const [value,setValue] = useState(50)
  const [check,setCheck] = useState("monthly")
  return (
    <div className=' w-screen h-screen space-y-10 md:space-y-20 flex flex-col justify-center items-center'>
      <div className=' md:mt-0 pt-20 md:w-[720px] w-10/12 relative flex flex-col'>
        <div className=' text-center text-custom-1000 text-2xl md:text-3xl font-extrabold'>
          Simple, traffic-based pricing
        </div>
        <div className=' mt-5 text-center font-bold text-custom-900 '>
          Sign-up for our 30-day trial. No credit card required.
        </div>
        <div className='-z-10 -bottom-5 left-[40%] absolute'>
          <Image
          src={"/images/pattern-circles.svg"}
          width={146}
          height={145}
          className=' '
          alt='circle'/>
        </div>
      </div>
      <div className=' w-11/12 md:w-[720px]  flex flex-col rounded-xl shadow-lg bg-white'>
        <div className=' relative mt-3 md:mt-10 space-y-16  p-10'>
          <div className=' flex flex-col md:flex-row justify-normal md:justify-between'>
            <div className=' uppercase  flex tracking-widest flex-col md:items-start items-center justify-center text-custom-900 font-semibold'>
              {value*2}K PageViews
            </div>
            <div className=' flex md:mt-0 mt-32 flex-row justify-center md:justify-normal items-center'>
              <div className=' text-5xl  text-custom-1000 font-extrabold'>
                ${check === "monthly" ? (value/3.125).toFixed(2) : ((value/3.125)*0.75).toFixed(2)}
              </div>
              <div className=' text-custom-900 font-semibold'>
                / month
              </div>
            </div>
          </div>
          <div className='px-7 w-full left-0 flex justify-center items-center md:w-full md:static absolute top-16'>  
            <Slider 
            className=" text-custom-200  " 
            barClassName=" bg-custom-100  "
            thumbClassName=" [&::-moz-range-thumb]:rounded-none [&::-webkit-slider-thumb]:hover:shadow-[0_5px_40px_15px_rgba(165,243,235,01)]  [&::-webkit-slider-thumb]:bg-icon [&::-webkit-slider-thumb]:bg-no-repeat [&::-webkit-slider-thumb]:bg-center  [&::-webkit-slider-thumb]:w-10 [&::-webkit-slider-thumb]:h-10 [&::-moz-range-thumb]:-mt-[4px] [&::-webkit-slider-thumb]:-mt-4"
            placeholder={""} defaultValue={50} onChange={(e)=>{setValue(parseInt(e.currentTarget.value))}}  value={value}   />
          </div>
          <div className=' flex justify-center ml-0 md:ml-28 items-center'>
            <div className=' flex justify-center items-center flex-row space-x-2 md:space-x-3 '>
              <div className=' text-custom-900 min-[440px]:text-xs font-semibold'>
                Monthly Billing 
              </div>
              <div className=' flex justify-center items-center'>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" onClick={()=>{{check === "monthly" ? setCheck("yearly") : setCheck("monthly")}}} value={check} className="sr-only peer"/>
                  <div className="w-11 h-6 bg-custom-800 hover:bg-custom-100 peer-focus:outline-none  peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-custom-200"></div>
                </label>
              </div>
              <div className=' text-custom-900 min-[440px]:text-xs font-semibold'>
                Yearly Billing 
              </div>
              <div className=' hidden md:flex text-custom-400 text-xs font-semibold py-1 bg-custom-300 px-2  rounded-full'>
                25% discount
              </div>
              <div className=' md:hidden flex text-custom-400 text-xs font-semibold py-1 bg-custom-300 px-2  rounded-full'>
                -25%
              </div>
            </div>
          </div>
        </div>
        <hr className='h-[2px] w-full bg-custom-700 border-0' />
        <div className=' p-10'>
          <div className=' flex flex-col md:flex-row justify-between'>
            <div className=' flex space-y-3 flex-col'>
              <div className=' flex flex-row md:justify-start justify-center'>
                <div className=' flex justify-center items-center'>
                  <Image
                  src={"/images/icon-check.svg"}
                  width={12}
                  height={11}
                  alt='check'/>
                </div>
                <div className=' text-custom-900 ml-3 font-semibold'>
                  Unlimited websites 
                </div>
              </div>
              <div className=' flex flex-row md:justify-start justify-center'>
                <div className=' flex justify-center items-center'>
                  <Image
                  src={"/images/icon-check.svg"}
                  width={12}
                  height={1}
                  alt='check'/>
                </div>
                <div className=' text-custom-900 ml-3 font-semibold'>
                  100% data ownership
                </div>
              </div>
              <div className=' flex flex-row md:justify-start justify-center'>
                <div className=' flex justify-center items-center'>
                  <Image
                  src={"/images/icon-check.svg"}
                  width={12}
                  height={11}
                  alt='check'/>
                </div>
                <div className=' text-custom-900 ml-3 font-semibold'>
                  Email reports 
                </div>
              </div>

            </div>
            <div className='md:mt-0 mt-10 flex justify-center items-center'>
              <button className=' text-custom-800 font-extrabold bg-custom-1000 py-3 px-10 rounded-full'>
                Start my trial
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )}
