import React, { use, useRef } from 'react'
import Image from 'next/image'

import { assets } from '@/assets/assets'

const navbar = () => {

    const sideMenu = useRef();

    const openMenu = () => {
        sideMenu.current.style.transform = 'translateX(-16rem)';
    }

    const closeMenu = () => {
        sideMenu.current.style.transform = 'translateX(16rem)';
    }   







    return (
        <>
            <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4  flex items-center justify-between z-50'>
                <div className="p-3 relative flex flex-col">

                    <a href="#logo">
                        <Image src={assets.logo} alt='logo' className='w-28 cursor-pointer mr-14' />
                    </a>
                    <span className='absolute top-12 left-9'>.dev</span>
                </div>



                <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 shadow-md hover:shadow-lg p-6 bg-white'>
                    <li className='display flex space-x-4'>
                        <a className="font-Ovo " href="#top">Home</a>
                        <a className="font-Ovo" href="#about">AboutMe</a>
                        <a className="font-Ovo" href="#services">Services</a>
                        <a className="font-Ovo" href="#work">MyWork</a>
                        <a className="font-Ovo" href="#contact">Contact</a>
                    </li>
                </ul>
                <div className='flex items-center gap-4'>
                    <button>
                        <Image src={assets.themes} alt='theme' className='w-6' />
                    </button>


                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2 border border-gray-500 rounded-full ml-4 font-Ovo hover:shadow-lg'>Contact
                        <Image src={assets.arrow} alt='arrow' className='w-5' />
                    </a>

                    <button className='block md:hidden' onClick={openMenu}>

                        <Image src={assets.menu} alt='theme' className='w-6' />
                    </button>
                </div>

                {/* mobile menu */}

                <ul ref={sideMenu} className='flex md:hidden flex-col gap-4 px-10 py-20 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>

                    <div className='absolute top-5 right-5' onClick={closeMenu}>
                        <Image src={assets.close} alt='' className='w-7 cursor-pointer' />

                    </div>


                    <li>
                        <a className="font-Ovo " href="#top" onClick={closeMenu}>Home</a>
                    </li>
                        <li>

                        <a className="font-Ovo" href="#about" onClick={closeMenu}>AboutMe</a>
                        </li>
                        <li>
                            
                        <a className="font-Ovo" href="#services" onClick={closeMenu}>Services</a>
                        </li>
                        <li>

                        <a className="font-Ovo" href="#work" onClick={closeMenu}>MyWork</a>
                        </li>
                        <li>

                        <a className="font-Ovo" href="#contact" onClick={closeMenu}>Contact</a>
                        </li>

                </ul>
            </nav>

        </>

    )
}

export default navbar