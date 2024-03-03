import React from 'react'
import Singleimg from '@/public/persons/single.png'
import Doubleimg from '@/public/persons/double.jpg'
import Tribleimg from '@/public/persons/trible.png'

import Carditems from './Carditems'

const Cards = () => {
  return (
    <div id='pricing' className='w-full py-[10rem] px-4 bg-white'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
  <Carditems img={Singleimg} users="single user" amount="$49" storage="500 GB Storage" usersno="1 Granted User" send="Send up to 2 GB" />
  <Carditems img={Doubleimg} users="Double user" amount="$49" storage="500 GB Storage" usersno="1 Granted User" send="Send up to 2 GB"  />
  <Carditems img={Tribleimg} users="Triple user" amount="$49" storage="500 GB Storage" usersno="1 Granted User" send="Send up to 2 GB"  />

    </div>
      
    </div>
  )
}

export default Cards
