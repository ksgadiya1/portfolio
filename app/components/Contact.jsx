import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'


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
        <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-slate-50 bg-[length:90%_auto]'>

            <h4 className='text-center mb-2 text-lg font-Ovo'>
                Lets connect
            </h4>


            <h2 className='text-center text-5xl font-Ovo'>Get in Tocuh</h2>

            <p className='text-center mt-5 mb-12 max-w-2xl mx-auto font-Ovo'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.accusamus! Nulla!
            </p>



            <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>

                <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                    <input type="text" placeholder='Name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='name'/>
                    <input type="email" placeholder='email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='email' />
                </div>
                <textarea rows='6' placeholder='Message' required className='w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' name='messgae'></textarea>

                <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'> Send
                    <Image src={assets.right} alt='arrow' className='w-4' />
                </button>


                <p>{result}</p>
            </form>


        </div>
    )
}

export default contact