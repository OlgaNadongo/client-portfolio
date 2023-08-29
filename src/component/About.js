import React from 'react'
import Typewriter from 'typewriter-effect'

const About = () => {
  return (
    <div className='text-white '>
      {/* about me */}
        
        <div className='w-screen pt-32 md:pt-0 p-2 text-center h-screen flex flex-col justify-center  max-w-[75%] m-auto'>

          <p id='home'className='text-[#5fbff9] font-bold p-2'>I'LL MAKE YOUR WORK EASIER</p>
          <h1 id='about' className='md:text-5xl sm:text-4xl text-4xl font-bold md:py-6'>Hello, I am <span className='text-[#5fbff9]'>Geoffrey Anyona</span> </h1>
          <p className='font-bold p-2'>An experienced data annotator with a meticulous eye for detail and a strong commitment to producing high-quality labeled data. Proficient in annotation tools, I ensure accuracy and consistency for diverse data types. Collaborative team player, eager to contribute my skills to advance AI and machine learning projects. Constantly adapting to new methodologies and staying updated on industry trends. My goal is to facilitate the training of robust AI models through precise data labeling. Excited to be part of a dynamic environment that pushes the boundaries of technology and innovation.</p>
          <div>
            {/* services */}
              <p  id='services'className='md:text-3xl sm:text:2xl text:xl font-semibold'>I will help you with
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
