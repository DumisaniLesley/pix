import Link from 'next/link'
import React from 'react'

const Tabs = () => {
  return (
    <div className='flex justify-between px-4 mt-4 font-bold text-lg'>
        <Link href="/">Photos</Link>
        <Link href="/">Videos</Link>
        <Link href="/">About</Link>
        <Link href="/">Favorites</Link>
    </div>
  )
}

export default Tabs