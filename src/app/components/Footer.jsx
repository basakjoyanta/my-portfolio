import React from 'react'
import Image from 'next/image'
import { assets } from '../../../assets/assets'
const Footer = ({isDarkmode}) => {
  return (
    <div className='mt-10'>
        <div className='text-center'>
            {/* <Image src={assets.logo} alt='logo' className='w-36 mx-auto mb-2'/> */}

            <div>
                <Image src={isDarkmode ? assets.mail_icon_dark :assets.mail_icon} alt='icon' className='w-6'/> basakjoyanta5@gmail.com
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>©️ 2025 Joyanta Basak.All rights reserved</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li> <a target='_blank' href='https://github.com/basakjoyanta'>Github </a></li>
                    <li> <a target='_blank' href='https://www.linkedin.com/in/joyanta-basak-52ab30252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app '>LinkedIn</a></li>
                </ul>
            </div>
        </div>

      
    </div>
  )
}

export default Footer
