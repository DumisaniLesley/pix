
import Image from 'next/image'
import { HiDotsVertical } from "react-icons/hi";
import Notification from './Notification';

const notifications = [
  {
      id: 1,
      username: "JohnDoe",
      imagePath: '/stories/3.jpg',
      timeInMinutes: 15
  },
  {
      id: 2,
      username: "JaneSmith",
      imagePath: '/stories/1.png',
      timeInMinutes: 30
  },
  {
      id: 3,
      username: "AlexJohnson",
      imagePath: '/stories/3.jpg',
      timeInMinutes: 45
  },
  {
      id: 4,
      username: "EmilyBrown",
      imagePath: '/stories/3.jpg',
      timeInMinutes: 60
  },
  {
      id: 5,
      username: "MichaelClark",
      imagePath: '/stories/1.png',
      timeInMinutes: 75
  },
  {
      id: 6,
      username: "SarahWilson",
      imagePath: '/stories/1.png',
      timeInMinutes: 90
  },
  {
      id: 7,
      username: "ChrisLee",
      imagePath: '/stories/1.png',
      timeInMinutes: 105
  },
  {
      id: 8,
      username: "OliviaMartinez",
      imagePath: '/stories/1.png',
      timeInMinutes: 120
  },
  {
      id: 9,
      username: "WilliamGarcia",
      imagePath: '/stories/1.png',
      timeInMinutes: 135
  },
  {
      id: 10,
      username: "AvaLopez",
      imagePath: '/stories/3.jpg',
      timeInMinutes: 150
  }
];

function calculateTime(timeInMinutes) {
  if (timeInMinutes >= 60) {
      const hours = Math.round(timeInMinutes / 60);
      return `${hours}h`;
  } else {
      return `${timeInMinutes}m`;
  }
}

const Notifications = () => {
  return (
    <div className='mt-12 px-4'>
      <div className='flex p-2 gap-2 sticky top-0 bg-white z-10 mt-2 shadow-sm rounded-md'>
        <button className='bg-gray-600 px-4 py-[2px] rounded-full font-semibold text-white'>All</button>
        <button className='px-4 py-[2px] rounded-full border-[1px] border-gray-600 font-semibold'>Mentions</button>
      </div>
      <div className='flex flex-col mt-2'>
        {
          notifications.map(({id, username, imagePath, timeInMinutes}) => (
            <Notification key={id} image={imagePath} time={calculateTime(timeInMinutes)} username={username}/>
          ))
        }
        <Notification image='/stories/1.png' time='1'/>
      </div>
    </div>
  )
}

export default Notifications