import React from 'react'

const Newsletter = () => {
  return (
    <div id='contact' className='w-full py-16 text-white px-4'>
    <div className='max-w-[1250px] mx-auto grid lg:grid-cols-3'>
    <div className='lg:col-span-2 my-4'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold py-2'>Want tip & tricks to optimize your flow? </h1>
        <p>Sign up to our newsletter and stay up to date.</p>
    </div>
    <div className='my-4'>

        <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className='p-3 flex  w-full rounded-md text-black' type="email" placeholder='Enter Your Email' />
            <button className="bg-[#00ff90] w-[200px] rounded-md font-medium ml-4  my-6 px-6 py-3 text-black shadow-xl shadow-blue-400 hover:scale-75 ease-in duration-100">Notify Me</button>
        </div>
            <p>We care about the protection of your data. Read our <span className="text-[#00ff90]">privacy policy</span></p>
    </div>

    </div>
      
    </div>
  )
}

export default Newsletter
