import CreatePost from '@/components/Add/CreatePost'
import Header from '@/components/Add/Header'
import React from 'react'

const AddPostPage = () => {
  return (
    <main className='h-screen'>
        <Header />
        <CreatePost />
        {/* <div className="mt-12">
            some info
        </div> */}
    </main>
  )
}

export default AddPostPage