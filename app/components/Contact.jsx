import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from 'motion/react'


const contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "cbdfe923-fba2-49aa-922a-f9b6283d055a");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };







    return (
        <motion.div
            initial={{ opacity:0}}
            whileInView={{ opacity:1}}
            transition={{duration:0.1}}
        id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-slate-50 bg-[length:90%_auto]'>

            <motion.h4 
            initial={{ y:-20, opacity:0}}
            whileInView={{ y:0, opacity:1}}
            transition={{duration:0.3, delay:0.5}}
            
            className='text-center mb-2 text-lg font-Ovo'>
                Lets connect
            </motion.h4>


            <motion.h2 
            initial={{ y:-20, opacity:0}}
            whileInView={{y:0,  opacity:1}}
            transition={{duration:0.3, delay:0.5}}
            
            className='text-center text-5xl font-Ovo'>Get in Tocuh</motion.h2>

            <motion.p 
            initial={{ opacity:0}}
            whileInView={{ opacity:1}}
            transition={{duration:0.9, delay:0.7}}
            className='text-center mt-5 mb-12 max-w-2xl mx-auto font-Ovo'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.accusamus! Nulla!
            </motion.p>



            <motion.form 
            initial={{ opacity:0}}
            whileInView={{ opacity:1}}
            transition={{duration:0.9, delay:0.5}}
            
            
            onSubmit={onSubmit} className='max-w-2xl mx-auto'>

                <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                    <motion.input 
                    initial={{x:-50, opacity:0}}
                    whileInView={{x:0, opacity:1}}
                    transition={{delay:1.1, duration:0.6}}
                    
                    type="text" placeholder='Name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='name'/>
                    <motion.input
                    initial={{x:50, opacity:0}}
                    whileInView={{x:0, opacity:1}}
                    transition={{delay:1.2, duration:0.6}}

                    
                    
                    type="email" placeholder='email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='email' />
                </div>
                <motion.textarea 
                initial={{y:100, opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{delay:1.2, duration:0.6}}
                
                
                rows='6' placeholder='Message' required className='w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' name='messgae'></motion.textarea>

                <motion.button 
                whileHover={{scale:1.1}}
                transition={{duration:0.3}}
                
                type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'> Send
                    <Image src={assets.right} alt='arrow' className='w-4' />
                </motion.button>


                <p>{result}</p>
            </motion.form>


        </motion.div>
    )
}

export default contact