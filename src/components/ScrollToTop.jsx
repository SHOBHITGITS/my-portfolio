import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // scroll listener
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {   // 500px ke baad button dikhega
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-800 text-white shadow-lg hover:bg-blue-600 transition-all duration-300"
                >
                    <FaArrowUp size={10} />
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
