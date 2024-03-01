import React from 'react'
import Image from 'next/image'
import { FaCamera  } from "react-icons/fa";
import { MdAttachFile, MdVideocam } from "react-icons/md";


const CreatePost = () => {
  return (
    <div className='mt-12 px-4 py-5 h-screen'>
        <div className='flex gap-3 items-center'>
            <Image src="/stories/3.jpg" width={60} height={60} alt='story' className='rounded-full'/>
            <div>
                <p className='font-bold text-md'>NightWolf</p>
            <span className='font-normal text-gray-400 text-sm'>@nightwolf300</span>
            </div>
        </div>
        <div className='px-2 mt-4 py-4'>
            <form className='w-full'>
                <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
                    <div class="py-2 bg-white rounded-t-lg">
                        <textarea id="comment" rows="16" class="w-full px-4 text-sm text-gray-900 bg-white border-0 focus:ring-0 dark:text-white resize-none" placeholder="What are you sharing today?!" required ></textarea>
                    </div>
                    <div class="flex items-center justify-start gap-4 px-4 py-2 border-">
                        <div>
                            {/* <input type="file" className="absolute opacity-0 w-full h-full" /> */}
                            <FaCamera className='text-xl'/>
                        </div>
                        <div>
                            {/* <input type="file" className="absolute opacity-0 w-full h-full" /> */}
                            <MdAttachFile className='text-xl'/>
                        </div>
                        <div>
                            {/* <input type="file" className="absolute opacity-0 w-full h-full" /> */}
                            <MdVideocam className='text-xl'/>
                        </div>
                    </div>
                </div>
                <button className='bg-gradient-to-r from-cyan-400 to-indigo-600 py-2 rounded-2xl w-full mt-0 text-lg font-semibold text-white'>Post</button>
            </form>
        </div>
    </div>
  )
}

export default CreatePost