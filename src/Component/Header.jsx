import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import oz from '../assets/oz.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-white p-5 flex flex-col md:flex-row justify-between items-center shadow-lg">
      <div className="flex items-center justify-between w-full md:w-auto">
        {/* <span className="text-sm sm:text-xl md:text-2xl purple">OZIWO</span> */}
        <img src={oz} alt="Oziwo Logo" class="h-8 sm:h-10 md:h-12 purple"></img>
        <button 
          className="md:hidden text-xl focus:outline-none" 
          onClick={toggleNavbar} >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <nav className={`${isOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <li><Link to="/" className="text-sm sm:text-sm md:text-base hover:underline hover:text-[#AEADF9]">Home</Link></li>
          <li><Link to="/project" className="text-sm sm:text-sm md:text-base hover:underline hover:text-[#AEADF9]">Projects</Link></li>
          <li><Link to="/about" className="text-sm sm:text-sm md:text-base hover:underline hover:text-[#AEADF9]">About</Link></li>
          <li><Link to="/contact" className="text-sm sm:text-sm md:text-base hover:underline hover:text-[#AEADF9]">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
