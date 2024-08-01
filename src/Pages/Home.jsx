import React from 'react'
import Hero from '../components/hero/Hero'
import FeaturedProperties from '../components/featured/FeaturedProperties.jsx'
import HowItWorks from '../components/howItWorks/HowItWorks.jsx'
import Testimonials from '../components/testimonials/Testimonials.jsx'

function Home() {
  return (
    <div>
        <Hero/>
        <FeaturedProperties />
        <HowItWorks/>
        <Testimonials/>
    </div>
  )
}

export default Home
