import React from 'react'
import { RiExchangeFundsLine } from "react-icons/ri";
import { MdCheckCircleOutline } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

function OurPolicy() {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 '>
        <div className=''>
        <RiExchangeFundsLine className='text-3xl m-auto mb- 2'/>
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle free exchange policy</p>
        </div>
        <div className=''>
        <MdCheckCircleOutline className='text-3xl m-auto mb-2' />
        <p className='font-semibold'>7 Day Return Policy</p>
        <p className='text-gray-400'>We offer hassle free return policy</p>
        </div>
        <div className=''>
        <BiSupport  className='text-3xl m-auto mb-2'/>
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-gray-400'>We offer best custumer support</p>
        </div>
    </div>
  )
}

export default OurPolicy