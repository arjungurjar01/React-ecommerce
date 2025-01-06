import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLatterBox from '../components/NewsLatterBox'

function Home() {
  return (
    <div className=''>
      
        <Hero />
        <LatestCollection/>
        <BestSeller/>
        <OurPolicy/>
        <NewsLatterBox/>
    </div>
  )
}

export default Home