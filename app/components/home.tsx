'use client'

import React from 'react'
import Hero from './hero'
import ContactInfo from './contact-info'
import AboutInfo from './about-info'
import Makeup from './makeup'
import HairStyling from './hair-styling'
import Discount from './discount'

const Home = () => {
  return (
    <div className='max-h-fit max-w-full flex-col items-center'>
      <Hero />
      <ContactInfo />
      <AboutInfo />
      <Makeup />
      <HairStyling />
      <Discount />
    </div>
  )
}

export default Home
