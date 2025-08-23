import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'portfolio' },
    { id: 4, link: 'careerjourney' },
    { id: 5, link: 'experience' },
    { id: 6, link: 'skills' },
    { id: 7, link: 'contact' },
  ];

  return (
      <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4 z-50">
        <div>
          <h1 className="text-3xl font-signature ml-2 mt-6 cursor-pointer">
            Shobhit Srivastava
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
              <li
                  key={id}
                  className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200"
              >
                <Link to={link} smooth duration={700} offset={-80}>
                  {link}
                </Link>
              </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Mobile Menu */}
        {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
              {links.map(({ id, link }) => (
                  <li
                      key={id}
                      className="px-4 cursor-pointer capitalize py-6 text-4xl"
                  >
                    <Link
                        onClick={() => setNav(false)}
                        to={link}
                        smooth
                        duration={700}
                        offset={-80}
                    >
                      {link}
                    </Link>
                  </li>
              ))}
            </ul>
        )}
      </div>
  );
};

export default NavBar;
