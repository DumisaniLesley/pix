import { currentUser, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Header = async () => {

  const user = await currentUser()

  return (
    <header className='fixed top-0 left-0 w-full py-3 shadow-sm bg-white'>
      <div className='flex justify-between items-center mx-auto w-full  px-4'>
        <div>
              <h1 className='font-extrabold text-[22px]'>Pix</h1>
          </div>
      
          <div className=' flex justify-center'>
        <input type="text" placeholder='Search...' className='w-[170px] px-2 py-1 rounded-full bg-gray-200 placeholder:text-black placeholder:font-light placeholder:text-sm placeholder:px-1 focus:outline-none focus:cursor-wait'/>
          </div>
          <div>
              <UserButton />
          </div>
      </div>
    </header>
  )
}

export default Header