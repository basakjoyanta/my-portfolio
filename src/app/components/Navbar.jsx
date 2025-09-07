"use client"

import React, {useState,useEffect, useRef} from 'react'
import { assets } from '../../../assets/assets'

import Image from 'next/image'
const Navbar = ({isDarkmode,setIsDarkmode}) => {
  const [isScroll, setisScroll] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sidemenuref = useRef();

  const openmenu = () => {
    setMobileMenuOpen(true);
  };
  const closemenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setisScroll(true);
      } else {
        setisScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
    <div className='fixed top-0 right-0 w-full h-full -z-10 pointer-events-none translate-y-[-80%] dark:hidden'>
      <Image src={assets.header_bg_color} alt="bg_pattern" className='w-full h-full object-cover' />
    </div>
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] flex py-4 justify-between items-center z-20 transition-all duration-300 ${isScroll ? 'bg-white bg-opacity-70 backdrop-blur-lg shadow-sm dark:bg-black dark:shadow-blue-50' : ''}`}>
      <a href="#top" className="flex items-center">
        <Image src={ isDarkmode ? assets.logo_dark : assets.logo} className="w-24 cursor-pointer mr-4" alt="logo" width={100} height={40} />
      </a>
      <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-8 py-2 ${isScroll ? '' : 'bg-white shadow-sm bg-opacity-30 dark border dark:border-white/50 dark:bg-transparent'}`}>
        <li><a className='font-sans hover:text-amber-500 transition' href="#top">Home</a></li>
        <li><a className='hover:text-amber-500 transition' href="#About">About Me</a></li>
        <li><a className='hover:text-amber-500 transition' href="#Services">Services</a></li>
        <li><a className='hover:text-amber-500 transition' href="#Work">My Work</a></li>
        <li><a className='hover:text-amber-500 transition' href="#Contact">Contact me</a></li>
      </ul>
      <div className='flex items-center gap-3'>
        <button onClick={()=>setIsDarkmode(prev=>!prev)} aria-label="Toggle dark mode" className="p-2 rounded-full hover:bg-gray-100 transition">
          <Image src={ isDarkmode? assets.sun_icon : assets.moon_icon} alt='Toggle dark mode' className='w-6' />
        </button>
        <a className='hidden lg:flex px-6 py-2 items-center gap-2 cursor-pointer border border-amber-300 dark:border-white/50 rounded-full ml-2 hover:bg-amber-50 transition  ' href="#Contact">Contact <Image src={isDarkmode ? assets.arrow_icon_dark : assets.arrow_icon} alt="arrow" className='w-3 ' /></a>
        <button className='block ml-2 md:hidden p-2 rounded-full hover:bg-gray-100 transition' onClick={openmenu} aria-label="Open menu">
          <Image src={isDarkmode ? assets.menu_white :assets.menu_black} alt='Open menu' className='w-6' />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-40 transition-opacity md:hidden" onClick={closemenu}></div>
      )}
      <ul
        ref={sidemenuref}
        className={`flex md:hidden flex-col gap-6 py-20 px-10 fixed right-0 top-0 w-72 z-50 h-full bg-white shadow-lg transition-transform duration-500 dark:bg-amber-400 dark:text-amber-50 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <div className='absolute right-6 top-6'>
          <button onClick={closemenu} aria-label="Close menu" className="p-2 rounded-full hover:bg-gray-100 transition">
            <Image src={isDarkmode ? assets.close_white: assets.close_black} alt='Close menu' className='w-5' />
          </button>
        </div>
        <li><a onClick={closemenu} className='font-sans hover:text-amber-500 transition' href="#top">Home</a></li>
        <li><a onClick={closemenu} className='hover:text-amber-500 transition' href="#About">About Me</a></li>
        <li><a onClick={closemenu} className='hover:text-amber-500 transition' href="#Services">Services</a></li>
        <li><a onClick={closemenu} className='hover:text-amber-500 transition' href="#Work">My Work</a></li>
        <li><a onClick={closemenu} className='hover:text-amber-500 transition' href="#Contact">Contact me</a></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar
