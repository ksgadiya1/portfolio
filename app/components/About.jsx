import { assets, infolist, tools } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const about = () => {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id='about' className='w-full px-[12%] py-10 scroll-mt-20'>


            <motion.h4
            initial={{ opacity: 0, y:-20}}
            whileInView={{ opacity: 1, y:0 }}
            transition={{ duration: 1, delay: 0.3 }}

            
            className='text-center mb-2 text-lg font-Ovo'>
                Introduction
            </motion.h4>


            <motion.h2 
            initial={{ opacity: 0, y:-20}}
            whileInView={{ opacity: 1, y:0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='text-center text-5xl font-Ovo'>About me</motion.h2>

            <motion.div 
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: .8 }}
            className='w-full flex flex-col lg:flex-row items-center gap-10 my-20'>


                <motion.div 
                initial={{ opacity: 0, scale: 0.9}}
                whileInView={{ opacity: 1, scale: 1}}
                transition={{ duration: 0.6 }}
                className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.kamal_profile} alt=' profile' className='w-full h-full rounded-3xl ' />
                </motion.div>


                <motion.div 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className='flex-1'>

                    <p className='mb-10 max-w-2xl font-Ovo'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti est optio totam cum. Culpa nesciunt tempore velit ab non voluptatibus saepe minima laborum, placeat aliquid. Excepturi in consectetur nobis est!
                    </p>


                    <motion.ul 
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: .8, delay: 1 }}
                    className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w2xl'>
                        {infolist.map(({ icon, title, description }, index) => (
                            <motion.li
                            whileHover={{scale: 1.1}}
                            className='border-[.05px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'
                                key={index}>
                                <Image src={icon} alt={title} className='w-7 mt-3' />
                                <h1 className='my-4 font-semibold text-gray-700'>{title}</h1>
                                <p className='text-gray-600'>{description}</p>

                            </motion.li>
                        ))}
                    </motion.ul>
                    <motion.h4
                    initial={{ opacity: 0, y:20}}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 1.3, delay: 0.5 }}
                    >
                        Tools I use
                    </motion.h4>

                    <motion.ul 
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 1.5, delay: 0.6 }}
                    className='flex items-center gap-3 sm:gap-5'>
                        {tools.map((tool, index) => (
                            <motion.li 
                            whileHover={{ scale: 1.1 }}
                            className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'
                             key={index}>
                                <Image src={tool} alt='tools'  className='w-5 sm:w-7'/>
                            </motion.li>
                        ))}
                    </motion.ul>


                </motion.div>

            </motion.div>

        </motion.div>


    )
}

export default about