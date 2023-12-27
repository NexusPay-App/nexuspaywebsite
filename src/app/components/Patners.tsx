import Image from 'next/image'
import React from 'react'
import { Green } from '../svg'

const Patners = () => {
  return (
    <div className='bg-white flex justify-around'>
        <Image src={Green} alt='partner' className='' />
        <Image src={Green} alt='partner' className='' />
        <Image src={Green} alt='partner' className='' />
        <Image src={Green} alt='partner' className='' />
        <Image src={Green} alt='partner' className='' />
    </div>
  )
}

export default Patners