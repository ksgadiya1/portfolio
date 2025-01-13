import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const footer = () => {
    return (
        <div className='mt-20' >
            <div className='flex flex-col items-center'>

                <div className='text-center'>
                    <Image src={assets.logo} alt='logo' className='w-36 mx-auto mb-2' />
                </div>

                <div className='w-max flex items-center gap-2 max-auto'>
                    <Image src={assets.email} alt='logo' className='w-12' />
                    kamalgadiya@gmail.com
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>
                    @2025 Kamal Gadiya all rights reserved
                </p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li>
                        <a target="_blank" href="">
                            <Image src={assets.github} alt='github' className='w-12' />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="">
                            <Image src={assets.linkedin} alt='linkdien' className='w-12' />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="">
                            <Image src={assets.instagram} alt='instagram' className='w-12' />
                        </a>
                    </li>
                </ul>
            </div>




        </div>
    )
}

export default footer