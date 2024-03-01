import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 bg-transparent backdrop-blur-sm w-full py-3 shadow-md'>
      <div className='flex justify-between items-center mx-auto w-full space-x-[270px] px-4'>
        <div>
              <h1 className='font-extrabold text-[22px]'>Pix</h1>
          </div>
          <div>
              <FaSearch className='text-xl'/>
          </div>
      </div>
    </header>
  )
}

export default Header