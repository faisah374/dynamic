import Navbar from '@/components/Navbar'
import React from 'react'

function Country () {
  return (
    <div className='m-4 text-center m-b2'>
      
<h1 className=' text-white-2x1 border-2 p-2 bg-purple-400 m-4'>List of countries</h1>
<Navbar href="/country/pakistan"name ='pakistan' />
<Navbar href="/country/india"name='india'/>
<Navbar href="/country/sudiarb"name='sudiarb'/>
<Navbar href="/country/england" name='england '/>
<Navbar href="/country/iran"name='iran'/>


    </div>
  )
}

export default Country 

 