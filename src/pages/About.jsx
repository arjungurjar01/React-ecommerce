import React from 'react'
import Title from './../components/Title'
import { assets } from '../assets/assets'
import NewsLatterBox from './../components/NewsLatterBox'
function About() {
  return (
    <div>
      <div className='text-2xl text-center border-t pt-8'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='flex my-10 flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about} alt="about" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Welcome to VillageVeda, a brand rooted in the timeless traditions of Indian villages and committed to bringing you the purest,
           most authentic products that embody the essence of rural heritage.</p>
        <p>At VillageVeda, we believe in preserving the age-old wisdom of our ancestors while catering to the needs of modern lifestyles. Our journey began with a simple vision: to deliver wholesome, unadulterated,
           and natural products straight from the heart of Indian villages to your home.</p>   
         <b className='text-gray-800'>Our Mission -</b>
         <p>To promote a healthier lifestyle by offering pure, high-quality products made using traditional methods, while supporting rural communities and sustainable practices.</p>  
        </div>
      </div>

      {/* <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div> */}

      <div className='flex flex-col md:flex-row text-sm mb-20 sm:mt-20 mt-10 pt-10'>
      <div className="max-w-4xl mx-auto text-center ">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Why Choose VillageVeda?</h2>
        <div className="space-y-6">
          {/* Reason 1 */}
          <div className="border-2 border-gray-400 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-700">Purity Guaranteed:</h3>
            <p className="text-gray-600">
              Our products are 100% natural, free from harmful additives, and crafted with the utmost care.
            </p>
          </div>
          {/* Reason 2 */}
          <div className="border-2 border-gray-400 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-700">From Our Farms to Your Table:</h3>
            <p className="text-gray-600">
            Our products are made directly on our own farmland, ensuring complete control over quality.  
              Ghee is prepared at home using milk from our goshala, where cows are nurtured with love and care.
            </p>
          </div>
          {/* Reason 3 */}
          <div className="border-2 border-gray-400 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-700">Tradition Meets Trust:</h3>
            <p className="text-gray-600">
              Combining the rich heritage of Indian villages with modern quality standards you can rely on.
            </p>
          </div>
        </div>
      </div>
      </div>

      {/* Newslatter */}
      <NewsLatterBox/>
    </div>
  )
}

export default About