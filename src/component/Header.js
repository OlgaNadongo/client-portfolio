// trying new way to create responsive navbar
import React,{useState} from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

const Header = () => {

    let Links=[
        {name:'Home',link:'/'},
        {name:'About Me',link:'/'},
        {name:'Services',link:'/'},
        {name:'Projects',link:'/'},
        {name:'Testimonials',link:'/'},
        {name:'Contact',link:'/'},
    ]

    const [isOpen,setisOpen]=useState(false)

    const handleNav=()=>{
        setisOpen(!isOpen)
    }

 

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:px-10 py-4 px-7 md:flex justify-between items-centre' >
        <div className='flex text-2x1 cursor-pointer items-center gap-2'>
       
            {/* logo here */}
            <span className='w-full text-3xl font-bold text-[#5fbff9]'>Geoffrey Anyona</span>
        
       </div>

       {/* menu icons */}
         <div onClick={handleNav} className=' block w-7 h-7  right-9 top-9 text-blue-800 cursor-pointer md:hidden' >
             

             {!isOpen ?<AiOutlineClose/>:<AiOutlineMenu/> }
         </div>


         {/* navigation links here */}
         {/* <ul className='md:flex p1-9 md:p1-0'> */}
         <ul className={`md:flex p1-9 md:p1-0  md:items-center md:pb-0 pb-12  md:z-auto z-[1] left-0 w-full md:w-auto md:p1-0 p1-9 transition-all duration-500 ease-in ${isOpen ? 'hidden':'top-[-490px]' } `} > 

            {
                Links.map(link=>
                <li className='p-4 text-[#ffffff] font-semibold' >
                    <a href='/'>{link.name}</a>
                </li>)
            }
         </ul>

    </div>


    
    </div>  
  )
}

export default Header