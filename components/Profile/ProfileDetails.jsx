import { currentUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const ProfileDetails = async () => {

    const user = await currentUser()

//   console.log(user)
  return (
    <div className='flex flex-col px-4 py-5 mt-12 bg-white shadow-sm rounded-md'>
        <div className='flex flex-col justify-center items-center text-center'>
            <div>
                <Image src={user.imageUrl} width={120} height={120} alt='story' className='rounded-full aspect-square'/>
            </div>
            <div className='mt-2'>
                <h2 className='font-bold text-2xl'>{user.firstName}</h2>
                <p className='-mt-1 font-semibold text-[13px] text-gray-500'>@{user.username}</p>
            </div>
        </div>
        <div className='flex justify-between px-8 text-center mt-3'>
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
        <button className='bg-gradient-to-r from-cyan-400 to-indigo-600 py-2 rounded-full mt-3 text-lg font-semibold text-white'>Follow</button>
    </div>
  )
}

export default ProfileDetails