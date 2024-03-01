import Link from 'next/link'
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const Header = () => {
  return (
    <div className='px-4 fixed top-0 left-0 w-full py-3'>
        <Link href='/'>
          <MdOutlineKeyboardBackspace className='text-2xl'/>
        </Link>
    </div>
  )
}

export default Header