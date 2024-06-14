import React from 'react';
import HeroImage from "../assets/preet.png"
import {MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div name="home" className=' homeSection w-full bg-gradient-to-b from-black via-black to-gray-800'>
        
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'> 
          
            <div className='flex flex-col justify-center '>
               
               
                <h2 className='text-4xl sm:text-6xl font-bold text-white'>
                    I'm a Full Stack Developer
                </h2>


                <p className='text-gray-500 py-4 max-w-md '>
                I specialize in building dynamic and responsive web applications using modern technologies. With a deep understanding of both frontend and backend development, I create seamless and efficient user experiences. My skills include working with JavaScript, React, Node.js, and various databases, ensuring that your projects are both scalable and maintainable.

            </p>

                <div>
                    <Link to="portfolio" smooth duration={500}
                     className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                         <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>

            <div >
                <img  
                    src={HeroImage} 
                    alt="My profile"
                    className='rounded-3xl mx-auto w-2/3 md:w-full' 
                />
            </div>
        </div>
    </div>
  )
}

export default Home;