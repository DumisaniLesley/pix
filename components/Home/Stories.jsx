import Image from 'next/image'
import React from 'react'
import Story from './Story'

const stories = [
  {
    id: 1,
    name: 'add',
    src: '/stories/plus.png',
  },
  {
    id: 2,
    name: 'Wolf',
    src: '/stories/1.png',
  },
  {
    id: 3,
    name: 'Chung',
    src: '/stories/1.png',
  },
  {
    id: 4,
    name: 'Danny',
    src: '/stories/1.png',
  },
  {
    id: 5,
    name: 'Jane',
    src: '/stories/1.png',
  },
  {
    id: 5,
    name: 'Jack',
    src: '/stories/1.png',
  },
  {
    id: 6,
    name: 'Scopion',
    src: '/stories/1.png',
  },
  {
    id: 7,
    name: 'Jade',
    src: '/stories/1.png',
  },
]

const Stories = () => {
  return (
    <div className='flex gap-4 overflow-x-auto mt-10'>
      {stories.map((story, index) => (
        <Story user={story.name} key={index}/>
      ))}
    </div>
  )
}

export default Stories