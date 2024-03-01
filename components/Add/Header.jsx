import Link from 'next/link'
import { MdOutlineKeyboardBackspace, MdOutlineClose  } from "react-icons/md";

const Header = () => {
  return (
    <div className='px-4 fixed top-0 left-0 w-full py-3'>
  <div className='flex justify-between'>
          <div className='flex gap-3'>
            <Link href='/' >
              <MdOutlineKeyboardBackspace className='text-2xl'/>
            </Link>
            <p className='font-bold'>Create Post</p>
          </div>
          <button>
            <MdOutlineClose className='text-2xl'/>
          </button>
      </div>
    </div>
  )
}

export default Header