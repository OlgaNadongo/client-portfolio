import React from 'react'
import Typewriter from 'typewriter-effect'

const About = () => {
  return (
    <div className='text-white'>
      {/* about me */}
        
        <div className='max-w-[800px] mt-[-96px] w-full h-screen text-center flex flex-col justify-center items-center'>

          <p className='text-[#5fbff9] font-bold p-2'>LET'S MAKE YOUR WORK EASIER</p>
          <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold md:py-6'>Hello, I am <span className='text-[#5fbff9]'>Geoffrey Anyona</span> </h1>
          <div>
            {/* services */}
              <p className='md:text-4xl sm:text:3xl text:xl font-semibold'>I will help you with
                <span className='text-[#5fbff9] '>
                <Typewriter
                   options={{
                    strings: ['Data Annotation','Data Entry','Digital Marketing','Transcription'],
                    autoStart: true,
                    loop: true,
                  }}/>
                </span>
                  
               </p>
          </div>

        </div>
    </div>
  )
}

export default About
