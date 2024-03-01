import Link from 'next/link'
import Image from 'next/image'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { currentUser, UserButton } from '@clerk/nextjs';

const Header = async () => {

  const user = await currentUser()

  return (
    <div className='px-4 fixed top-0 left-0 w-full shadow-sm bg-white'>
      <div className='flex justify-between items-center py-3'>
        <Link href='/'>
            <MdOutlineKeyboardBackspace className='text-3xl'/>
          </Link>
          <Link href='/' className='font-extrabold text-[22px]'>Pix</Link>
          <div>
            <UserButton />
          </div>
      </div>
    </div>
  )
}

export default Header