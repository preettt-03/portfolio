import React, { useState, useEffect } from 'react';
//new arivel
import HeroImage from "../assets/preet.png";
import {MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
    const title = " Full Stack Developer";
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < title.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + title[charIndex]);
        setCharIndex(charIndex + 1);
      }, 120); // Adjust the speed of typing here

      return () => clearTimeout(timeout);
    }
    else {
        // Restart the typing effect
        const timeout = setTimeout(() => {
          setDisplayedText('');
          setCharIndex(0);
        }, 2000); // Adjust the delay before restarting the typing effect
  
        return () => clearTimeout(timeout);
      }
  }, [charIndex, title]);


  return (
    <div name="home" className=' homeSection w-full bg-gradient-to-b from-black via-black to-gray-800'>
        
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'> 
          
            <div className='flex flex-col justify-center md:w-1/2'>
               
               
                <h2 className='text-4xl sm:text-6xl font-bold text-white min-h-[60px]'>
                    I'm a  {displayedText}
                </h2>


                <p className='text-gray-500 py-4 max-w-md'>
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

            <div className='md:w-1/3 self-end flex justify-end mt-8' >
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