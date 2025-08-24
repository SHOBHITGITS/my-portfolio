import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import beepSound from "../assets/beep.wav";

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
            description: "Built a strong foundation in computer science fundamentals.",
            icon: "📘",
        },
    ];

    const audioRef = useRef(new Audio(beepSound));
    const containerRef = useRef(null);
    const sectionRef = useRef(null);
    const controls = useAnimation();
    const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

    const [positions, setPositions] = useState([]);

    // Calculate stop positions on mount and resize
    useEffect(() => {
        const calculatePositions = () => {
            if (!containerRef.current) return;
            const stops = Array.from(
                containerRef.current.querySelectorAll(".journey-card")
            ).map((el) => el.offsetTop);
            setPositions(stops);
        };

        calculatePositions();
        window.addEventListener("resize", calculatePositions);
        return () => window.removeEventListener("resize", calculatePositions);
    }, [journey.length]);

    // Animate car to stops
    useEffect(() => {
        if (!positions.length) return;

        let index = 0;
        let isActive = true;

        const animateStep = async () => {
            while (isActive && isInView) {
                const y = positions[index];
                await controls.start({
                    y,
                    transition: { duration: 1, ease: "easeInOut" },
                });

                // beep at stop
                if (isInView) {
                    audioRef.current.currentTime = 0;
                    audioRef.current.play();
                }

                index = (index + 1) % positions.length;

                // pause 1s at each stop
                await new Promise((res) => setTimeout(res, 1000));
            }
        };

        animateStep();

        return () => {
            isActive = false;
        };
    }, [isInView, positions, controls]);

    return (
        <section
            id="careerjourney"
            ref={sectionRef}
            className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 bg-gradient-to-b from-black via-gray-900 to-gray-800"
        >
            <div className="max-w-3xl mx-auto">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">
                        Career Journey
                    </p>
                </div>

                <div ref={containerRef} className="relative pb-10 md:pb-20">
                    {/* Road */}
                    <div
                        className="absolute left-6 top-0 bottom-0 w-1
              bg-gradient-to-b from-yellow-400 via-orange-500 to-yellow-300
              rounded-full shadow-[0_0_15px_rgba(255,165,0,0.8)] animate-pulse"
                    ></div>

                    {/* Car */}
                    <motion.div
                        className="absolute left-0 md:left-1 text-xl md:text-3xl flex items-center gap-1 z-30"
                        animate={controls}
                    >
                        🚗 <span className="text-yellow-300 animate-pulse">🎶</span>
                    </motion.div>

                    {/* Journey Cards */}
                    <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 mt-10">
                        {journey.map((step, index) => (
                            <motion.div
                                key={index}
                                className="relative flex items-start gap-6 journey-card"
                                initial={{ opacity: 0, x: -60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-2xl shadow-lg border-4 border-white">
                                    {step.icon}
                                </div>

                                {/* Card with mobile-friendly hover/tap */}
                                <motion.div
                                    className="p-6 rounded-2xl
                  bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400
                  text-white shadow-xl border border-white/20 flex-1 relative overflow-hidden
                  transition-all duration-300"
                                    whileHover={{
                                        scale: 1.08,
                                        boxShadow: "0px 0px 30px rgba(255,165,0,0.7)",
                                    }}
                                    whileTap={{
                                        scale: 1.05,
                                        boxShadow: "0px 0px 25px rgba(255,165,0,0.5)",
                                    }}
                                >
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl transition-opacity duration-300 opacity-0 hover:opacity-20"></div>

                                    <div className="relative z-10">
                    <span className="text-sm font-semibold text-yellow-200">
                      {step.year}
                    </span>
                                        <h3 className="text-lg font-bold">{step.title}</h3>
                                        <h4 className="text-md font-medium text-green-100">
                                            {step.company}
                                        </h4>
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
