import React from 'react'
import Image from 'next/image'

const PostHeader = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex items-center gap-4'>
          <div className='p-1 rounded-lg'>
              <Image src="/stories/1.png" width={45} height={45} alt='story' className='rounded-lg border-[1px] border-white'/>
          </div>
          <div className='flex flex-col justify-center'>
              <h2 className='font-bold text-md '>Smoke_202</h2>
              <p className='text-sm -mt-1'>40 min ago</p>
          </div>
      </div>
      <div>
          <p className='font-extrabold text-3xl'>...</p>
      </div>
  </div>
  )
}

export default PostHeader