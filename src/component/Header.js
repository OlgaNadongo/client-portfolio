// trying new way to create responsive navbar
import React from 'react'

const Header = () => {

    let Links=[
        {name:'Home',link:'/'},
        {name:'About Me',link:'/'},
        {name:'Services',link:'/'},
        {name:'Projects',link:'/'},
        {name:'Testimonials',link:'/'},
        {name:'Contact',link:'/'},
    ]
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:px-10 py-4 px-7 md:flex justify-between items-centre' >
        <div className='flex text-2x1 cursor-pointer items-center gap-2'>
       
            {/* logo here */}
            <span className='w-full text-3xl font-bold text-[#5fbff9]'>Geoffrey Anyona</span>
        
       </div>
         
         {/* navigation links here */}
         <ul className='md:flex p1-9 md:p1-0'>
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