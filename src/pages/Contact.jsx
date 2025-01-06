import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import NewsLatterBox from '../components/NewsLatterBox';

function Contact() {
  return (
    <div>
    <div className=" py-12 px-6 lg:px-16">
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src={assets.contact} 
          alt="Contact Us"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side: Contact Details */}
      <div className="w-full md:w-1/2 md:pl-10 flex flex-col my-10">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Get In Touch</h2>
        <p className="text-gray-700 mb-6">
          We'd love to hear from you! Whether you have questions, feedback, or inquiries, feel free to get in touch with us.
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="text-gray-600 text-2xl mr-4 mb-5">
            <FaLocationDot />
            </span>

            <div className="text-gray-600 flex flex-col">
            <b className=''>Address:</b>
              <p>VillageVeda Farms, Indore, Mp, India</p> 
            </div>

          </div>
          <div className="flex items-center">
            <span className="text-gray-600 text-2xl mr-4 mb-5">
            <FaPhoneAlt />
            </span>
            <div className="text-gray-600 flex flex-col">
            <b className=''>Phone Number:</b>
              <p>+91-9191919191 Monday to Friday - 10AM to 6PM IST </p> 
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600 text-2xl mr-4 mb-5">
            <MdEmail />
            </span>
            <div className="text-gray-600 flex flex-col">
            <b className=''>Email:</b>
              <p>support@villageveda.com</p> 
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  <NewsLatterBox/>
  </div>
  )
}

export default Contact