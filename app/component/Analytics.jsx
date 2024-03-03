import React from 'react'
import Laptopimg from '@/public/laptop.webp'
import Image from 'next/image'

const Analytics = () => {
  return (
    <div id='company' className='w-full bg-white py-16 px-4'>
    <div className='max-w-[1240px] mx-auto grid  md:grid-cols-2'>
    <div className='  '>
    <Image className='w-[500px] mx-auto my-4 rounded-xl p-5' src={Laptopimg} alt='/' />
    </div>
    <div className='flex flex-col justify-center' >
      <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
      <h1 className='text-2xl sm:text-3xl md:text-4xl py-2 font-bold'>Manage Data Analytics Centrally</h1>
      <p>Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate rerum eveniet porro molestiae error! Quidem fugiat autem dolorem.</p>
      <button className="bg-[#00ff90] w-[200px] rounded-md font-bold mx-auto md:mx-0 my-6 py-3 text-black shadow-xl shadow-blue-400 hover:scale-75 ease-in duration-100">Get Started</button>
    </div>
    
    </div>  
    </div>
  )
}

export default Analytics
