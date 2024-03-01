import React from 'react'
import Post from './Post'

const Posts = () => {
  return (
    <div className='flex flex-col items-center'>
      <Post image="/posts/chama.jpg" post="Feeling great"/>
      <Post image="/posts/code.jpg" post="Programmer's life..."/>
      <Post image="/posts/test.jpg" post="Down memory lane."/>
      <Post image="/posts/cat.jpeg" post="Down memory lane."/>
      <Post image="/posts/smoke.jpg" post="Down memory lane."/>
    </div>
  )
}

export default Posts