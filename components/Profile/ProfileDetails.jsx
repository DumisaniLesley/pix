import Image from 'next/image'
import React from 'react'

const ProfileDetails = () => {
  return (
    <div className='flex flex-col px-4 mt-12'>
        <div className='flex flex-col justify-center items-center text-center'>
            <div>
                <Image src="/stories/1.png" width={130} height={130} alt='story' className='rounded-3xl'/>
            </div>
            <div>
                <h2 className='font-bold text-3xl'>Smoke Fire</h2>
                <p>@Smoke_202</p>
            </div>
        </div>
        <div className='flex justify-between px-14 text-center mt-3'>
            <div>
                <p>25K</p>
                <span>Followers</span>
            </div>
            <div>
                <p>500</p>
                <span>Following</span>
            </div>
            <div>
                <p>2K</p>
                <span>Posts</span>
            </div>
        </div>
        <button className='bg-blue-500 py-3 rounded-full mt-3 text-xl font-bold'>Follow</button>
    </div>
  )
}

export default ProfileDetails