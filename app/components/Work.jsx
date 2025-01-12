
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'


const work = () => {
    return (
        <div id="work" className='w-full px-[12%] py-10 scroll-mt-20'>

            <h4 className='text-center mb-2 text-lg font-Ovo'>
                Portfolio
            </h4>


            <h2 className='text-center text-5xl font-Ovo'>My Work</h2>

            <p className='text-center mt-5 mb-12 max-w-2xl mx-auto font-Ovo'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quibusdam, quod in repellat hic illum eius vitae fuga, nisi quia!
            </p>


            <div className='grid grid-cols-auto my-10 gap-5'>
                {workData.map((project, index) => (
                    <div key={index}
                        className='aspect-square bg-cover bg-no-repeat bg-center rounded-lg relative cursor-pointer group'
                        style={{ backgroundImage: `url(${project.bgimage})` }}>

                        <div className='bg-white w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 p-5 flex justify-between items-center duration-500 group-hover:bottom-7 '>


                            <div>
                                <h2 className='font-semibold'>

                                    {project.title}
                                </h2>
                                <p className=' text-sm text-gray-700'>
                                    {project.description}
                                </p>


                            </div>
                            <div className='border border-black rounded-full w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                <Image src={assets.send} alt="img" className='w-5' />
                            </div>

                        </div>


                    </div>
                ))}
            </div>

            <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 hover:-translate-y-1'>
                Show More <Image src={assets.right} alt="img" className='w-4'/>
            </a>


        </div>
    )
}

export default work