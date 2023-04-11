import React from 'react';
import HeroImage from "../assets/heroImage.png";
import {RiArrowRightCircleLine} from 'react-icons/ri'
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div 
    name="home" 
    className='h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white via-black '>

        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full '>
                <h2 className="text-2xl sm:text-4xl font-bold  text-white">Welcome To My Journey! 😃 </h2>
                <p className=' text-gray-500 py-4 max-w-md'>
                    As a fresher I know programming languages like Java, SQL, HTML, CSS, JavaScript.
                    I love to develop webapps using ReactJS and technologies like TailwindCSS, BootStrap, etc.<br/>
                    I am learning a lot of amazing stuffs to explore in my journey.
                </p>
                <div>
                    <Link 
                    to="portfolio"
                      smooth
                      duration={700}
                     className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-500 to-orange-500 cursor-pointer'>
                    Portfolio 
                        <span className='group-hover:rotate-90 duration-300 px-1 '>
                        <RiArrowRightCircleLine  size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
              <img   src={HeroImage } alt="my profile pic" className="rounded-2xl mx-auto w-2/5 md:w-full hover:scale-105 duration-200 "/>
            </div>
        </div>
    </div>
  )
}

export default Home

