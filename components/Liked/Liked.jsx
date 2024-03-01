import React from 'react'
import Image from 'next/image'

const Liked = () => {
  return (
    <div className='mt-16 px-4'>
    <div className='flex flex-col items-center'>
            <Image src='/stories/3.jpg' width={100} height={100} alt='Chama' className='rounded-full mb-4'/>
            <p className='font-bold -mt-2'>Nightwolf</p>
        </div>
    </div>
  )
}

export default Liked