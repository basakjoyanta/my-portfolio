"use client"
import React from 'react';
import { useState } from 'react';
import { motion, scale } from 'motion/react';
import { assets } from '../../../assets/assets'

import Image from 'next/image'
const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "382c7109-8c5b-4bec-bbd2-d2fe2b6f3219");
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Network error. Please try again later.");
    }
  }
  return (
    <motion.div  initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} id="contact"  className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
      <motion.h4 initial={{y:-20,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5,delay:0.3}} className='text-center mb-2 text-lg font-semibold dark:bg-none'>Connect with me

        </motion.h4>

        <motion.h2 initial={{y:-20,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5,delay:0.4}} className='text-center mb-2 text-lg  font-sans'>Get in Touch

        </motion.h2>

        <motion.p  initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}}className='text-center max-w-2xl mx-auto mt-5 mb-12 font-semibold'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum veritatis nisi velit. Repellat rerum officiis nemo quis commodi corporis incidunt.
        </motion.p>

  <motion.form  initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,delay:0.9}} onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8'>
                <motion.input initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.6,delay:1.1}}  className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white text-black "type="text" placeholder='Enter Your name' required name='name'/>
                <motion.input initial={{x:50,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.6,delay:1.2}}  className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white text-black " type="email" placeholder='Enter Your Email' required name='email'/>

            </div>
            <motion.textarea initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.6,delay:1.3}}   rows="6" placeholder='Enter Your Message' required className='w-full outline-none p-3 bg-white/80 text-black' name='message'></motion.textarea>
           
            <motion.button whileHover={{scale:1.05}} transition={{duration:0.3}} className="py-3 cursor-pointer w-max flex items-centerjustify-center mx-auto border border-black px-6  rounded-full hover:bg-black hover:text-white transition"type='submit'>Submit Now <Image src={assets.right_arrow_white} alt='Right-arrow-' className='w-4'/></motion.button>

            <motion.p  className='mt-4'>{result}</motion.p>
        
        
        </motion.form>
    </motion.div>
  )
}

export default Contact
