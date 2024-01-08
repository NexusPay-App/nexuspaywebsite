import Image from 'next/image'
import React from 'react'
import { HeroImg, HeroStats, HeroTitle } from '../svg'

const HeroSection = () => {
  return (
    <div className='flex flex-col md:flex-row items-center p-5 md:p-10 bg-hero-bg'>
        <article className='text-white flex flex-col justify-around md:justify-between h-[500px]'>
            <Image src={HeroTitle} alt='hero-heading' />
            <h2 className='text-xl'>Uniting Africa with cutting-edge stablecoin solutions, providing a secure and efficient alternative to traditional financial systems, and fostering economic empowerment across the continent.</h2>
            <Image src={HeroStats} alt="nexus-logo" />  
        </article>
        <Image src={HeroImg} alt="nexus-logo" className='w-full md:w-[50%]' />  
    </div>
  )
}

export default HeroSection