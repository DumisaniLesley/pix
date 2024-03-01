import React from 'react'
import Post from './Post'

const Posts = () => {
  return (
    <div className='flex flex-col items-center'>
      <Post image="/stories/chama.jpg" post="Feeling great"/>
      <Post image="/stories/code.jpg" post="Programmer's life..."/>
      <Post image="/stories/test.jpg" post="Down memory lane."/>
    </div>
  )
}

export default Posts