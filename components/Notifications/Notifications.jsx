
import Image from 'next/image'
import { HiDotsVertical } from "react-icons/hi";
import Notification from './Notification';

const Notifications = () => {
  return (
    <div className='mt-12 px-4'>
      <div className='flex gap-4 py-2 sticky top-0 bg-white z-10 mt-2'>
        <button className='bg-gray-600 px-4 py-[2px] rounded-full font-semibold text-white'>All</button>
        <button className='px-4 py-[2px] rounded-full border-[1px] border-gray-600 font-semibold'>Mentions</button>
        <button className='px-4 py-[2px] rounded-full border-[1px] border-gray-600 font-semibold'>Tags</button>
      </div>
      <div className='flex flex-col mt-2'>
        <Notification image='/stories/1.png' time='1'/>
        <Notification image='/stories/3.jpg' time='4'/>
        <Notification image='/stories/3.jpg' time='2'/>
        <Notification image='/stories/1.png' time='13'/>
        <Notification image='/stories/1.png' time='9'/>
        <Notification image='/stories/3.jpg' time='2'/>
      </div>
    </div>
  )
}

export default Notifications