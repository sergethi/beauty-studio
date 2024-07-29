'use client'

import React from 'react'
import Hero from './hero'
import ContactInfo from './contact-info'

const Home = () => {
  return (
    <div className='max-h-fit max-w-full flex-col items-center'>
      <Hero />
      <ContactInfo />
    </div>
  )
}

export default Home
