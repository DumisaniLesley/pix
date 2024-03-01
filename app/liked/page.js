import Gallary from '@/components/Liked/Gallary'
import Liked from '@/components/Liked/Liked'
import Header from '@/components/Shared/Header'
import React from 'react'

const LikedPosts = () => {
  return (
    <main className='bg-gray-100'>
        <Header />
        <Liked />
        <Gallary />
        <div className="mt-10">
          <p>Some action buttons here</p>
        </div>
    </main>
  )
}

export default LikedPosts