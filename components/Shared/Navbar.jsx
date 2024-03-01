'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { AiFillHome } from "react-icons/ai";
import { FaHeart, FaPlusCircle, FaUser   } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";


const Links = [
  {
      id: 1,
      title: "Home",
      path: "/",
      icon: <AiFillHome/>,
  },
  {
      id: 2,
      title: "Liked",
      path: "/liked",
      icon: <FaHeart/>,
  },
  {
      id: 3,
      title: "New Post",
      path: "/add",
      icon: <FaPlusCircle/>,
  },
  {
      id: 4,
      title: "Notifications",
      path: "/notifications",
      icon: <MdNotifications/>,
  },
  {
      id:5,
      title: "Profile",
      path: "/profile",
      icon: <FaUser/>,
  },
]

const Navbar = () => {

  const pathname = usePathname()

  return (
    <nav className='w-full bg-white py-4 px-4 fixed bottom-0 shadow-[0px_-3px_13px_3px_#00000024]'>
      <ul className='flex justify-between'>
        {Links.map((link) => (
          <li key={link.id} className='px-2'>
            <Link href={link.path} className={`text-[26px] ${pathname === link.path ? 'text-black' : 'text-gray-400'}`}>
              {link.icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar