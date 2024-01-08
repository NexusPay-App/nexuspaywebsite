import Image from 'next/image'
import React from 'react'
import { HeroImg, HeroStats, HeroTitle } from '../svg'

const HeroSection = () => {
  return (
    <div className='flex flex-col md:flex-row items-center p-5 md:p-10 bg-hero-bg'>
        <article className='text-white flex flex-col justify-around md:justify-between h-[500px]'>
            <Image src={HeroTitle} alt='hero-heading' />
            <h2 className='text-xl'>Our Mission: To empower Africa with stablecoin technology, offering a secure alternative to traditional mobile money services.</h2>
            <Image src={HeroStats} alt="nexus-logo" />  
        </article>
        <Image src={HeroImg} alt="nexus-logo" className='w-full md:w-[50%]' />  
    </div>
  )
}

export default HeroSection