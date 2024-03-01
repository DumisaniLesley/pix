import Image from 'next/image'
import React from 'react'

const Story = ({user, image}) => {
  return (
    <div >
        <div className='p-[4px] rounded-full border-[1px] border-black w-[70px] h-[70px]'>
          <Image src={image} width={70} height={70} alt='story' className='border-[1px] border-black rounded-full object-cover'/>
        </div>
        <p className='text-center text-[12px] mt-1 font-bold'>{user}</p>
    </div>
  )
}

export default Story