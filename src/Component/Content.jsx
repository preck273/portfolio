import React from 'react';
import me from '../assets/me.png'; // Import the image
import { Link } from 'react-router-dom';

export default function Content() {
  return (
    <section className="flex flex-col md:flex-row items-start p-5 text-gray-300">
      <div className="md:w-1/2 p-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          Hi<br /> I'm <span className='text-[#AEADF9]'>Prec</span>ious<br /> a <span className='text-[#AEADF9]'>Web</span> Developer & <span className='text-[#AEADF9]'>Designer</span>
        </h2>
        <p className="mb-4 text-lg sm:text-base md:text-lg">
          I'm a passionate web developer and designer with a keen eye 
          for detail and a love for crafting beautiful, functional websites.
          With a strong background in both front-end development and graphic design, 
          I create seamless digital experiences that not only look great but also perform
          exceptionally.
        </p>
        <div className="mt-4 md:mt-0 flex space-x-4"> {/* Added margin-top on small screens */}
          <Link to="/project" className="bg-[#AEADF9] hover:bg-blue-700 text-black font-bold py-2 px-3 sm:py-2 sm:px-4 rounded border border-black text-xs sm:text-sm mr-2">
            View My Work
          </Link>
          <Link to="/contact" className="bg-[#AEADF9] hover:bg-purple-700 text-black font-bold py-1 px-3 sm:py-2 sm:px-4 rounded border border-black text-xs sm:text-sm">
            Contact Me
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 p-4 flex justify-center items-center">
        <img 
          src={me} 
          alt="Code illustration" 
          className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-112 xl:h-112 rounded-full object-cover shadow-lg border-4 border-[#2F4F6F]" // Adjust responsive size
        />
      </div>
    </section>
  );
}
