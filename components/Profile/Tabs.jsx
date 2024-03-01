import Link from 'next/link'
import React from 'react'

const Tabs = () => {
  return (
    <div className='flex justify-between px-4 mt-4 font-bold text-[16px]'>
        <Link href="/" className=''>Photos</Link>
        <Link href="/" className='text-gray-400'>Videos</Link>
        <Link href="/" className='text-gray-400'>About</Link>
        <Link href="/" className='text-gray-400'>Favorites</Link>
    </div>
  )
}

export default Tabs