import Image from 'next/image'
import React from 'react'
import { assets, Services } from '@/assets/assets'
import { motion } from "motion/react"


const services = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}

            id='services' className='w-full px-[12%] py-10 scroll-mt-20'>

            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'>
                What I offer!
            </motion.h4>


            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'>My Services</motion.h2>

            <motion.p
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='text-center mt-5 mb-12 max-w-2xl mx-auto font-Ovo'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laudantium, recusandae quasi labore hic libero minus. Adipisci, ipsam dicta nemo libero, voluptatum harum fuga velit ullam atque quaerat accusamus! Nulla!
            </motion.p>



            <motion.div

                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.6 }}


                className='w-full grid grid-cols-auto sm:grid-cols-2 lg:grid-cols-4 gap-10 '>
                {Services.map(({ icon, title, description, link }, index) => (

                    <motion.div
                        whileHover={{ scale: 1.05 }}



                        key={index} className='flex flex-col items-center gap-3 border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'>
                        <Image src={icon} alt='icon ' className='w-10' />


                        <h3 className='text-lg my-4 text-gray-700'>{title}</h3>

                        <p className='text-sm text-gray-600 leading-5'>
                            {description}
                        </p>


                        <a href={link} className='flex items-center gap-2 text-sm mt-5' >Read more
                            <Image src={assets.right} alt='arrow' className='w-4 inline-block' />

                        </a>

                    </motion.div>
                ))}

            </motion.div>

        </motion.div>
    )
}

export default services