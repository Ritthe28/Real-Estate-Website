import React, { useState } from 'react'
import {assets} from "../assets/assets"
import { useEffect } from 'react';
const Navbar = () => {
    const [showMobileMenu,  setshowMobileMenu]=useState(false);
    useEffect(() => {
     if (showMobileMenu){
        document.body.style.overflow="hidden"
     }else {
        document.body.style.overflow="auto"

     }

     return ()=>{
                document.body.style.overflow="auto"

     }
    }, [showMobileMenu])
    

  return (
    <div className='absolute top-0 left-0 w-full z-0'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-32 bg-transparent '>
        <img src={assets.logo} alt="" />
        <ul className='hidden md:flex gap-7 text-white'>
            <a href="#Header" className='cursor-pointer hover:text-gray-400'>home</a>
            <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
            <a href="#Projects" className='cursor-pointer hover:text-gray-400'>project</a>
            <a href="#Testimonail" className='cursor-pointer hover:text-gray-400'>Testimonails</a>
        </ul>
        <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign Up</button>
        <img src={assets.menu_icon} onClick={()=>{
            setshowMobileMenu(true)
        }} className="md:hidden w-7 cursor-pointer"alt="" />
      </div>
      {/* ---------------Mobile Menu-------------- */}
      <div className={`md:hidden ${showMobileMenu?'fixed w-full ':'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all duration-1000`}>

<ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
    <div className='flex justify-end p-6 w-full cursor-pointer'>
        <img onClick={()=>{
            setshowMobileMenu(false)
        }} src={assets.cross_icon} className='w-6' alt="" />
    </div>

    <a  onClick={()=>{
            setshowMobileMenu(false)
        }} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
    <a  onClick={()=>{
            setshowMobileMenu(false)
        }} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
    <a  onClick={()=>{
            setshowMobileMenu(false)
        }} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
    <a  onClick={()=>{
            setshowMobileMenu(false)
        }} href="#Testimonial" className='px-4 py-2 rounded-full inline-block'>Testimonial</a>
</ul>

      </div>
    </div>
  )
}

export default Navbar