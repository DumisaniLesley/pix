import Link from 'next/link'
import { MdOutlineKeyboardBackspace, MdOutlineClose  } from "react-icons/md";

const Header = () => {
  return (
    <div className='px-4 fixed top-0 left-0 w-full py-3'>
  <div className='flex justify-between'>
          <div className='flex gap-3'>
            <p className='font-bold text-lg'>Create Post</p>
          </div>
            <Link href='/'>
              <MdOutlineClose className='text-2xl'/>
            </Link>
      </div>
    </div>
  )
}

export default Header