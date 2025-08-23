import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import beepSound from "../assets/beep.mp3"; // 👈 put your beep file in /src/assets

const CareerJourney = () => {
    const journey = [
        {
            year: "2023.08 – Present",
            title: "Junior Software Developer",
            company: "VasyERP Solutions",
            description:
                "Worked on ERP modules, authentication with Spring Security, reports, and integrations with Shopify/WooCommerce.",
            icon: "💼",
        },
        {
            year: "2023.03 – 2023.04",
            title: "Java Developer Intern",
            company: "Oasis Infobyte",
            description:
                "Built scalable Java apps with Hibernate, MySQL, and responsive UIs using TailwindCSS & Bootstrap5.",
            icon: "👨‍💻",
        },
        {
            year: "2021.12 – 2023.07",
            title: "MCA",
            company: "HBTU",
            description: "Focused on Java, DBMS, and software engineering concepts.",
            icon: "🎓",
        },
        {
            year: "2018.07 – 2021.09",
            title: "B.Sc",
            company: "MGKVP",
            description:
                "Built a strong foundation in computer science fundamentals.",
            icon: "📘",
        },
    ];

    const duration = 8; // seconds for car to travel full height
    const audioRef = useRef(new Audio(beepSound));

    // container height detection
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            setHeight(containerRef.current.scrollHeight);
        }
    }, [journey.length]);

    // play beep only when section visible
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

    // play beep only when section visible
    useEffect(() => {
        let interval;
        if (isInView) {
            interval = setInterval(() => {
                // beep only when car is at the start (top card)
                audioRef.current.currentTime = 0;
                audioRef.current.play();
            }, duration * 1000); // beep once per full cycle
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isInView, duration]);

    return (
        <section
            id="careerjourney"
            ref={sectionRef}
            className="pt-32 pb-20 md:pt-40 md:pb-32 px-6
   bg-gradient-to-b from-black via-gray-900 to-gray-800"
        >
            {/* Wrapper for consistent alignment */}
            <div className="max-w-3xl mx-auto">

                {/* Title */}
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">
                        Career Journey
                    </p>
                    {/* optional subtext */}
                    {/* <p className="py-6 text-gray-300">My professional and academic milestones...</p> */}
                </div>

                {/* Timeline Container */}
                <div ref={containerRef} className="relative pb-10 md:pb-20">
                    {/* Road */}
                    <div
                        className="absolute left-6 top-0 bottom-0 w-1
          bg-gradient-to-b from-yellow-400 via-orange-500 to-yellow-300
          rounded-full shadow-[0_0_15px_rgba(255,165,0,0.8)] animate-pulse"
                    ></div>

                    {/* 🚗 Car */}
                    <motion.div
                        className="absolute left-1 text-xl md:text-3xl"
                        initial={{ y: 0 }}
                        animate={{ y: height }}
                        transition={{
                            duration,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        }}
                    >
                        🚗
                    </motion.div>

                    {/* Journey Cards */}
                    <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 mt-10">
                        {journey.map((step, index) => (
                            <motion.div
                                key={index}
                                className="relative flex items-start gap-6"
                                initial={{ opacity: 0, x: -60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                {/* Icon Bubble */}
                                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-2xl shadow-lg border-4 border-white">
                                    {step.icon}
                                </div>

                                {/* Card with Premium Hover */}
                                <motion.div
                                    className="p-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500
        text-white shadow-xl border border-white/20 flex-1 relative overflow-hidden
        transition-all duration-300"
                                    whileHover={{
                                        scale: 1.08,
                                        boxShadow: "0px 0px 30px rgba(0, 255, 200, 0.7)",
                                    }}
                                >
                                    {/* Glow overlay */}
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl transition-opacity duration-300 opacity-0 hover:opacity-20"></div>

                                    <div className="relative z-10">
                                        <span className="text-sm font-semibold text-yellow-200">{step.year}</span>
                                        <h3 className="text-lg font-bold">{step.title}</h3>
                                        <h4 className="text-md font-medium text-green-100">{step.company}</h4>
                                        <p className="mt-2 text-gray-100 text-sm">{step.description}</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerJourney;
