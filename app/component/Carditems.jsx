import React from 'react'
import Image from 'next/image'

const Carditems = (props) => {
  return (
    <div className='w-full rounded-xl shadow-xl shadow-gray-600 flex flex-col p-4 md:my-0 my-8 hover:scale-105 ease-in duration-300 '>
    <Image className='w-20 mx-auto mt-[-3rem] bg-white' src={props.img} alt='/' />
    <h2 className='text-2xl text-center font-bold py-4'>{props.users}</h2>
    <p className='text-center text-4xl font-bold'>{props.amount}</p>
    <div className='text-center font-medium' >
        <p className='py-3 border-b mx-8 mt-8'>{props.storage}</p>
        <p className='py-3 border-b mx-8'>{props.usersno}</p>
        <p className='py-3 border-b mx-8'>{props.send}</p>
    </div>
    <button className="bg-[#00ff90] w-[200px] rounded-md font-bold mx-auto my-6 py-3 text-black shadow-xl shadow-blue-400 hover:scale-75 ease-in duration-100">Start Trial</button>

    </div>
    
  )
}

export default Carditems
