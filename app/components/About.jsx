import { assets, infolist, tools } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const about = () => {
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>


            <h4 className='text-center mb-2 text-lg font-Ovo'>
                Introduction
            </h4>


            <h2 className='text-center text-5xl font-Ovo'>About me</h2>

            <div className='w-full flex flex-col lg:flex-row items-center gap-10 my-20'>


                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.kamal_profile} alt=' profile' className='w-full h-full rounded-3xl ' />
                </div>


                <div className=''>

                    <p className='mb-10 max-w-2xl font-Ovo'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti est optio totam cum. Culpa nesciunt tempore velit ab non voluptatibus saepe minima laborum, placeat aliquid. Excepturi in consectetur nobis est!
                    </p>


                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w2xl'>
                        {infolist.map(({ icon, title, description }, index) => (
                            <li className='border-[.05px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'
                                key={index}>
                                <Image src={icon} alt={title} className='w-7 mt-3' />
                                <h1 className='my-4 font-semibold text-gray-700'>{title}</h1>
                                <p className='text-gray-600'>{description}</p>

                            </li>
                        ))}
                    </ul>
                    <h4>
                        Tools I use
                    </h4>

                    <ul className='flex items-center gap-3 sm:gap-5'>
                        {tools.map((tool, index) => (
                            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'
                             key={index}>
                                <Image src={tool} alt='tools'  className='w-5 sm:w-7'/>
                            </li>
                        ))}
                    </ul>


                </div>

            </div>

        </div>


    )
}

export default about