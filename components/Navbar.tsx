import Link from 'next/link'
import React from 'react'
import { NavbarProps } from '@/types/types'

const Navbar:React.FC<NavbarProps> = ({name,href}) => {
  return (
    <div>
      
        <li className='text-white bg-transparent hover:bg-teal-400 roundrd hover:text-black p=2'>
            <Link href={href}>{name}</Link>

        </li>
      
    </div>
  )
}

export default Navbar
