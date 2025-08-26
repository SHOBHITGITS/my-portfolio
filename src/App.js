import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from './components/Portfolio';
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from './components/Footer';
import CareerJourney from './components/CareerJourney';
import ScrollToTop from './components/ScrollToTop';
import React, { useState, useEffect } from "react";
function App() {
    const [darkMode, setDarkMode] = useState(true); // 👈 default dark

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);
  return (
      <div className="min-h-screen bg-gray-900 text-white dark:bg-white dark:text-black transition-colors duration-300">
      <NavBar/>
        {/* Toggle Button */}
        <div className="fixed top-4 right-4 z-50">
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white shadow-md"
            >
                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
        </div>
      <Home/>
      <About/>
      <CareerJourney/>
      <Portfolio/>
      <Experience/>
      <Skills/>
      <Contact/>
      <Footer/>
      <SocialLinks/>
      <ScrollToTop/>
    </div>
  );
}

export default App;
