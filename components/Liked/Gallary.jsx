import Image from 'next/image'
import { FaCamera  } from "react-icons/fa";
import { MdVideocam } from "react-icons/md";

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
    <div className='p-5 md:p-10'>
    <div className='flex justify-between'>
        <h4 className='font-bold'>Liked Posts</h4>
            <div className='flex gap-4'>
                <FaCamera className='text-2xl'/>
                <MdVideocam className='text-3xl'/>
            </div>
        </div>
        <div className='columns-2 gap-5 lg:gap-8 lg:columns-3 xl:columns-4 [&>Image:not(:first-child)]:mt-5 lg:[&>Image:not(:first-child)]:mt-8'>
            {images.map(image => {
            return <Image key={image.id} src={image.src} width={200} height={200} alt={image.alt} className='rounded-md mb-4'/> 
            })}
        </div>
    </div>
  )
}

export default Gallary