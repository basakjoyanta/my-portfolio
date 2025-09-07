"use client"

// import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { theme } from "../../tailwind.config";
export default function Home() {
  const [isDarkmode,setIsdarkmode]=useState(false);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsdarkmode(true);
    } else {
      setIsdarkmode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkmode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkmode]);
  return (
    <>
    <Navbar isDarkmode={isDarkmode} setIsDarkmode={setIsdarkmode}/>
    <Header />
    <About isDarkmode={isDarkmode} setIsDarkmode={setIsdarkmode}/>
    <Services isDarkmode={isDarkmode}/>
    <Work isDarkmode={isDarkmode}/>
    <Contact isDarkmode={isDarkmode}/>
    <Footer isDarkmode={isDarkmode}/>
    </>
  );
}
