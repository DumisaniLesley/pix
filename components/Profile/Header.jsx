import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='px-4 mt-4 fixed top-0'>
        <Link href='/'>Back</Link>
    </div>
  )
}

export default Header