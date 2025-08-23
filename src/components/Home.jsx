import React from 'react';
import HeroImage from "../assets/heroImage.png";
import { RiArrowRightCircleLine } from 'react-icons/ri';
import { Link } from "react-scroll";
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white via-black "
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-screen">
                    <h2 className="mt-40 text-4xl sm:text-4xl font-bold flex flex-col text-white">
                        Welcome To My Journey! 😃
                    </h2>

                    {/* 👇 Writing animation paragraph */}
                    <p className="text-gray-300 py-4 max-w-md text-lg leading-relaxed">
                        <Typewriter
                            words={[
                                "Java Developer with 2 years of experience in building scalable applications using Spring Boot, Hibernate, and REST APIs. Skilled in PostgreSQL/MySQL and front-end integration with ReactJS, Bootstrap, and JavaScript. Passionate about clean code, Agile practices, and continuous learning to deliver efficient, user-focused solutions."
                            ]}
                            loop={false}      // only once
                            typeSpeed={35}    // speed of typing
                            deleteSpeed={0}   // no delete
                            delaySpeed={1000} // delay before start
                        />
                    </p>

                    <div>
                        <Link
                            to="careerjourney"
                            smooth
                            duration={700}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-500 to-orange-500 cursor-pointer"
                        >
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300 px-1 ">
                <RiArrowRightCircleLine size={25} className="ml-1" />
              </span>
                        </Link>
                    </div>
                </div>

                <div>
                    <img
                        src={HeroImage}
                        alt="my profile pic"
                        className="rounded-2xl mx-auto w-2/5 md:w-4/5 hover:scale-105 duration-200 cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
