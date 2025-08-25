import React from "react";
import HeroImage1 from "../assets/hero1.png";
import HeroImage2 from "../assets/hero2.png";
import HeroImage3 from "../assets/hero3.png";
import HeroImage4 from "../assets/hero4.png";
import { RiArrowRightCircleLine } from "react-icons/ri";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
    return (
        <div
            name="home"
            className="w-full bg-gradient-to-b from-black via-black to-gray-800 text-white pt-20"
        >
            <div
                className="
      max-w-screen-lg mx-auto
      flex flex-col md:flex-row items-center justify-between
      px-4 gap-10
      py-10" >
                {/* LEFT CONTENT (always on top in mobile) */}
                <div className="flex flex-col justify-center w-full md:w-1/2 order-1 md:order-none">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white text-center md:text-left">
                        Welcome To My Journey! 😃
                    </h2>

                    {/* AUTO HEIGHT TYPING BLOCK */}
                    <div className="mt-3">
                        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed text-center md:text-left">
                            <Typewriter
                                words={[
                                    "Software Development Engineer with 2 years of experience in building scalable applications using Spring Boot, Hibernate, and REST APIs. Skilled in PostgreSQL/MySQL and front-end integration with ReactJS, Bootstrap, and JavaScript. Passionate about clean code, Agile practices, and continuous learning to deliver efficient, user-focused solutions.",
                                ]}
                                loop={false}
                                typeSpeed={35}
                                deleteSpeed={0}
                                delaySpeed={1000}
                            />
                        </p>
                    </div>

                    <div className="flex justify-center md:justify-start">
                        <Link
                            to="careerjourney"
                            smooth
                            duration={700}
                            className="group text-white w-fit px-6 py-3 my-4 flex items-center rounded-md bg-gradient-to-r from-yellow-500 to-orange-500 cursor-pointer"
                        >
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300 px-1">
                <RiArrowRightCircleLine size={25} className="ml-1" />
              </span>
                        </Link>
                    </div>
                </div>

                {/* RIGHT CONTENT - SLIDER */}
                <div className="w-full md:w-1/2 flex justify-center order-2 md:order-none">
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        loop={true}
                        navigation={true}
                        pagination={{ clickable: true }}
                        className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl shadow-lg"
                    >
                        {[HeroImage1, HeroImage2, HeroImage3, HeroImage4].map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <img
                                    src={img}
                                    alt={`profile ${idx}`}
                                    className="rounded-2xl w-full h-full object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Home;
