import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className=''>
        {/* upper footer */}
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm justify-between '>
            <div className='flex flex-col '>
               <img className='w-[25%] mb-4' src={assets.logo} alt="logo" /> 
                <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quam, nobis molestias consequuntur, et qui labore ut rerum, vitae error dolorum quo blanditiis? Natus, nobis nesciunt perferendis id nisi officia.</p>
            </div>

            <div>
                    <h1 className='text-xl font-medium mb-5'>COMPANY</h1>
                <ul className='flex flex-col gap-1 text-gray-600'>    
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivary</li>
                    <li>Privacy Policy</li>

                </ul>
            </div>

            <div className='flex flex-col '>
               <h1 className='text-xl font-medium mb-5'>GET IN TOUCH</h1>
               <ul className='flex flex-col gap-1 text-gray-600'>
               <li>+91-9191919191</li>
               <li>info@company.com</li>
               <li>Instagram</li>
               </ul>
            </div>
        </div>
         {/* Bottum footer */}
        <div >
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer