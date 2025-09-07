import React from 'react'
import { assets,workData } from '../../../assets/assets'
import Image from 'next/image'
import { motion } from 'motion/react'
const Work = ({isDarkmode}) => {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4 initial={{y:-20,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5,delay:0.3}} className='text-center mb-2 text-lg font-semibold'>My Portfolio

        </motion.h4>

        <motion.h2 initial={{y:-20,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5,delay:0.3}}  className='text-center mb-2 text-lg  font-sans'>My latest Work

        </motion.h2>

        <motion.p  initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,delay:0.7}}  className='text-center max-w-2xl mx-auto mt-5 mb-12 font-semibold'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum veritatis nisi velit. Repellat rerum officiis nemo quis commodi corporis incidunt.
        </motion.p>
        <motion.div  initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6,delay:0.9}} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5 dark:text-amber-700'>
          {workData.map((project, index) => (
            <motion.div   whileHover={{scale:1.05}} transition={{duration:0.3}}
              key={index}
              className="aspect-square h-64 bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group transition-transform duration-300 hover:-translate-y-2 shadow-md"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 shadow-lg'>
                <h2 className="font-semibold text-base">{project.title}</h2>
                <p className="text-sm text-gray-500 ml-2">{project.description}</p>
                <div className="border rounded-full border-black w-9 aspect-square fle-items-center justify-center flex shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                  <Image src={assets.send_icon} alt="send-icon" className="w-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.a   initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,delay:1.1}}href='' className='w-max flex items-centerjustify-center mx-auto border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition dark:text-white/80 dark:hover:bg-white/80'>
          Show More <Image src={isDarkmode ?assets.right_arrow_bold_dark:assets.right_arrow_bold} alt='Right-arrow' className='w-4'/>

          
        </motion.a>
      
    </motion.div>
  )
}

export default Work
