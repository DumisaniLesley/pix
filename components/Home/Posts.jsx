import React from 'react'
import Post from './Post'

const Posts = () => {
  return (
    <div className='flex flex-col items-center'>
      <Post image="/posts/chama.jpg" post="Feeling great"/>
      <Post image="/posts/code.jpg" post="Programmer's life..."/>
      <Post image="/posts/test.jpg" post="Down memory lane."/>
      <Post image="/posts/cat.jpeg" post="beautiful things that make you smile."/>
      <Post image="/posts/smoke.jpg" post="Mortal Kombat's Deadliest killer"/>
      <Post image="/posts/3.jpg" post="AI Image generation"/>
    </div>
  )
}

export default Posts