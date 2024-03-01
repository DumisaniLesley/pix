import Link from 'next/link'
import { IoMdExit } from 'react-icons/io';
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const Header = () => {
  return (
    <div className='px-4 fixed top-0 left-0 w-full shadow-sm bg-white'>
      <div className='flex justify-between py-3'>
        <Link href='/'>
            <MdOutlineKeyboardBackspace className='text-3xl'/>
          </Link>
          <Link href='/' className='font-extrabold text-[22px]'>Pix</Link>
          <div>
              <IoMdExit className='text-3xl font-bold'/>
          </div>
      </div>
    </div>
  )
}

export default Header