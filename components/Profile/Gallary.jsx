import Image from 'next/image'
import React from 'react'

const images = [
    {
        id: 1,
        src: "/posts/chama.jpg",
        alt: "Chama"
    },
    {
        id: 2,
        src: "/posts/smoke.jpg",
        alt: "Chama"
    },
    {
        id: 3,
        src: "/posts/test.jpg",
        alt: "Chama"
    },
    {
        id: 4,
        src: "/posts/cat.jpeg",
        alt: "Chama"
    },
    {
        id: 5,
        src: "/posts/chama.jpg",
        alt: "Chama"
    },
]

const Gallary = () => {
  return (
    <div className='py-5 md:p-10'>
        <div className='columns-2 gap-5 lg:gap-8 lg:columns-3 xl:columns-4 [&>Image:not(:first-child)]:mt-5 lg:[&>Image:not(:first-child)]:mt-8'>
            {images.map(image => {
            return <Image key={image.id} src={image.src} width={200} height={200} alt={image.alt} className='rounded-md mb-4 shadow-sm'/> 
            })}
        </div>
    </div>
  )
}

export default Gallary