import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const header = () => {
  return (
    <div className='w-11/12 max-w-3xl mx-auto text-center h-screen flex flex-col items-center justify-center gap-4'>
        <div>
            <Image src={assets.profile} alt='image' className='w-32 rounded-full'/>
        </div>



        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I am KamalGadiya <Image src={assets.wave} alt='image' className='w-6'/></h3>



        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            FullStack Developer based in Ahmedabad, India
        </h1>


        <p className='max-w-2xl max-auto font-Ovo items-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, omnis dolore? Porro iure omnis neque, minima distinctio eveniet aspernatur veniam?</p>


        <div className='flex flex-col sm:flex-row items-center gap-5 mt-10'>
          <a href="#contact"
          className='px-10 py-3 border rounded-full border-gray-500 bg-black text-white flex items-center gap-2'
          >Contact <Image src={assets.right} alt='image' className='w-6'/> </a>
          <a href="/kamal.pdf" download 
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>Resume <Image src={assets.download} alt='image' className='w-6'/> </a>
        </div>

    </div>
  )
}

export default header