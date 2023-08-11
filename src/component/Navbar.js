import React,{useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

    const[nav,setNav]=useState(false)

    const handleNav=()=>{
        setNav(!nav)
    }


  return (

    <div className='flex justify-between items-centre h-24 max-w-[1240px] mx-auto px-4  text-[#ffffff]'>
       <h1 className='w-full text-3xl font-bold text-[#5fbff9]'>Geoffrey Anyona</h1> 
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About Me</li>
            <li className='p-4'>Services</li>
            <li className='p-4'>Projects</li>
            <li className='p-4'>Testimonials</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav? <AiOutlineClose size={20}/>:<AiOutlineMenu  size={25}/>}
        </div>

        <div className={!nav ?'fixed left-0 top-0 w-[60%] border-r  h-full border-r-gray-900 bg-[#0b0612] ease-in-out duration-500':'fixed left-[-100%]'}>

        <h1 className='w-full text-3xl font-bold text-[#5fbff9] m-8'>Geoffrey Anyona</h1>

        <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>About Me</li>
            <li className='p-4 border-b border-gray-600'>Services</li>
            <li className='p-4 border-b border-gray-600'>Projects</li>
            <li className='p-4 border-b border-gray-600'>Testimonials</li>
            <li className='p-4'>Contact</li>
        </ul>
        </div>
       
    </div>
  )
}

export default Navbar