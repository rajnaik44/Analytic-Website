'use client'
import React from 'react'
import { AiOutlineBars , AiOutlineCloseSquare } from "react-icons/ai";
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNAv = ()=>{
        setNav(!nav);
    }


  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <Link href="/"><h1 className='uppercase w-full text-3xl font-bold text-[#00df98] cursor-pointer'>React.</h1></Link>
      <ul className='hidden md:flex'>
      <Link href="/#home">
        <li className='p-4'>Home</li></Link>
       <Link href="/#company"><li className='p-4'>Company</li></Link>
        <Link href="/#contact"><li className='p-4'>Contact</li></Link>
        <Link href="/#pricing"><li className='p-4'>Pricing</li></Link>
        <Link href="/#policy"><li className='p-4'>Policy</li></Link>
      </ul>
      <div onClick={handleNAv} className='block md:hidden' >
      {!nav ? <AiOutlineCloseSquare size={25} /> : <AiOutlineBars size={25} /> }

      </div>

      <div className={!nav ? 'md:hidden fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-600 ease-in-out duration-500 bg-[#000300]' : 'fixed left-[-100%]'}>
      <h1 className='uppercase w-full text-3xl font-bold text-[#00df98] m-8'>React.</h1>
      <ul className='md:hidden p-4  uppercase '>
      <Link href="/#home"><li className='p-4 border-b border-gray-800'>Home</li></Link>
      <Link href="/#company"><li className='p-4 border-b border-gray-800'>Company</li></Link>
      <Link href="/#contact"><li className='p-4 border-b border-gray-800'>Contact</li></Link>
      <Link href="/#pricing"> <li className='p-4 border-b border-gray-800'>Pricing</li></Link>
      <Link href="/#policy"> <li className='p-4 border-b border-gray-800'>Policy</li></Link>
      </ul>
      
    
      </div>


    </div>
  )
}

export default Navbar

