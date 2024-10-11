import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div>
     <ul className='flex flex-row space-x-6 m-8 justify-center items-center bg-pink-600 h-16 text-lg text-white'>
        <Navbar href='/'name='Home'/>
        <Navbar href='/country'name='country' />
        </ul> 
    </div>
  )
}
export default Header


