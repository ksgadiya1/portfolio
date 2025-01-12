import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const header = () => {
  return (
    <div>
        <div>
            <Image src={assets.profile} alt='image' className='w-32 rounded-full'/>
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I am KamalGadiya <Image src={assets.wave} alt='image' className='w-6'/></h3>
        <h1>
            
        </h1>

    </div>
  )
}

export default header