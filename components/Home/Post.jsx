import Image from 'next/image'
import React from 'react'

const Post = ({ image, post}) => {
  return (
    <div className='flex flex-col mt-6 w-full shadow-md rounded-lg my-3 p-2'>
        <div className='flex justify-between'>
            <div className='flex items-center gap-3'>
                <div className='p-1 rounded-lg'>
                    <Image src="/stories/1.png" width={45} height={45} alt='story' className='rounded-lg border-[1px] border-white'/>
                </div>
                <div className='flex flex-col justify-center'>
                    <h2 className='font-bold text-[14px] '>Smoke_202</h2>
                    <p className='text-[12px] mt-0'>40 min ago</p>
                </div>
            </div>
            <div>
                <p className='font-extrabold text-3xl'>...</p>
            </div>
        </div>
        <div className='mt-4 w-full h-auto flex justify-center'>
            <Image src={image} width={400} height={400} alt='story' className='rounded-xl'/>
        </div>
        <div className='px-2 mt-2'>
            <div>
                liked by <b>amy_adams and 299</b> others
            </div>
            <p className='font-semibold text-gray-600'>{post}</p>
            <p>View all 20 comments</p>
            <p><b>Smoke_202 </b><span>Very nice</span></p>
        </div>
    </div>
  )
}

export default Post