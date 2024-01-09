import Image from 'next/image'
import React from 'react'
import { Cash, Chart, Person } from '../svg'

const HowitWorks = () => {
  return (
    <div className='text-white flex flex-col items-center bg-function bg-center bg-no-repeat p-5'>
        <h1 className='text-4xl font-semibold mb-10'>How does it work?</h1>
        <h4 className='mb-10'>Join us in this journey, where every transaction is a step towards a brighter financial future</h4>
        <div className='flex flex-col md:flex-row justify-around md:justify-between items-center mb-[100px] text-center'>
            <span className='flex flex-col items-center w-[300px]'>
                <Image src={Person} alt="person" className='my-2' />
                <h3 className='text-3xl font-semibold my-2'>Sign Up</h3>
                <h5 className='text-base my-2'>Create an account and verify your identity</h5>
            </span>
            <span className='flex flex-col items-center w-[300px]'>
                <Image src={Cash} alt="person" className='my-2' />
                <h3 className='text-3xl font-semibold my-2'>Fund Your Account</h3>
                <h5 className='text-base my-2'>Deposit funds into your account to begin transacting</h5>
            </span>
            <span className='flex flex-col items-center w-[300px]'>
                <Image src={Chart} alt="person" className='my-2' />
                <h3 className='text-3xl font-semibold my-2'>Start Transacting</h3>
                <h5 className='text-base my-2'>Browse the available cryptocurrencies and place send Transactions in the app.</h5>
            </span>
        </div>
    </div>
  )
}

export default HowitWorks