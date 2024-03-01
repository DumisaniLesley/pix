import Image from 'next/image'
import React from 'react'

const ProfileDetails = () => {
  return (
    <div className='flex flex-col px-4 mt-12'>
        <div className='flex flex-col justify-center items-center text-center'>
            <div>
                <Image src="/stories/3.jpg" width={130} height={130} alt='story' className='rounded-full'/>
            </div>
            <div className='mt-2'>
                <h2 className='font-bold text-2xl'>Smoke Fire</h2>
                <p className='-mt-1 font-semibold text-[13px] text-gray-500'>@Smoke_202</p>
            </div>
        </div>
        <div className='flex justify-between px-14 text-center mt-3'>
            <div>
                <p className='font-bold'>25K</p>
                <span className='text-gray-500 font-normal'>Followers</span>
            </div>
            <div>
                <p className='font-bold'>500</p>
                <span className='text-gray-500 font-normal'>Following</span>
            </div>
            <div>
                <p className='font-bold'>2K</p>
                <span className='text-gray-500 font-normal'>Posts</span>
            </div>
        </div>
        <button className='bg-gradient-to-r from-cyan-400 to-indigo-600 py-3 rounded-full mt-3 text-xl font-bold text-white'>Follow</button>
    </div>
  )
}

export default ProfileDetails