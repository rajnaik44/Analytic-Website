import React from 'react'
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare

} from 'react-icons/fa'

const Footer = () => {
  return (
    <div id='policy' className='max-w-[1240px] mx-auto py-16 px-14 grid lg:grid-cols-3 gap-8 text-gray-300'>
    <div>
    <h1 className='uppercase w-full text-3xl font-bold text-[#00df98]'>React.</h1>
    <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eligendi modi autem, consequatur eius dolores.</p>
    <div className='flex md:w-[75%] justify-between my-6'>
        <FaFacebookSquare size={30} className='hover:scale-75 ease-in duration-100 cursor-pointer'/>
        <FaInstagram size={30} className='hover:scale-75 ease-in duration-100 cursor-pointer'/>
        <FaTwitterSquare size={30} className='hover:scale-75 ease-in duration-100 cursor-pointer'/>
        <FaGithubSquare size={30} className='hover:scale-75 ease-in duration-100 cursor-pointer'/>
    </div>
    </div>
    <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
    <h6 className='font-medium text-gray-400'>Soutions</h6>
        <ul>
            <li className='text-sm py-2'>Ananlytics</li>
            <li className='text-sm py-2'>Marketing</li>
            <li className='text-sm py-2'>Ecommerce</li>
            <li className='text-sm py-2'>Insights</li>
        </ul>
    </div>
    <div>
    <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
            <li className='text-sm py-2'>Guides</li>
            <li className='text-sm py-2'>Projects</li>
            <li className='text-sm py-2'>Pricing</li>
            <li className='text-sm py-2'>Documentation</li>
        </ul>
    </div>
    <div>
    <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='text-sm py-2'>About</li>
            <li className='text-sm py-2'>Blog</li>
            <li className='text-sm py-2'>Jobs</li>
            <li className='text-sm py-2'>Careers</li>
        </ul>
    </div>
    <div>
    <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='text-sm py-2'>Claims</li>
            <li className='text-sm py-2'>Policy</li>
            <li className='text-sm py-2'>Terms</li>
        </ul>
    </div>

    </div>
      
    </div>
  )
}

export default Footer
