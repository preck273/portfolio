import React, { useState, useEffect } from 'react';
import web from '../assets/web.jpg';
import api from '../assets/api.jpeg';
import fig from '../assets/fig.jpg';
import db from '../assets/DB.jpg';



const About = () => {
  const [currentImage, setCurrentImage] = useState(web);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const images = [web, api, fig, db];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[currentIndex]);
      setPosition((prevPosition) => (prevPosition === 0 ? 100 : 0)); // Move image to right then back to left
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <div className='mt-20'>
      <h2 className="text-2xl font-semibold text-center text-[#AEADF9]">About Me</h2>
      <section className="flex flex-col md:flex-row items-start p-5 text-gray-300">
        <div className="md:w-1/2 p-4 flex justify-center items-center">
          <img 
            src={currentImage} 
            alt="Code illustration" 
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-112 xl:h-112 shadow-lg border-4 border-[#2F4F6F] transition-transform duration-1000"
            style={{ transform: `translateX(${position}px)` }}
          />
        </div>
        <div className="md:w-1/2 p-4">
          <p className="mb-4 text-base sm:text-sm md:text-base lg:text-lg overflow-wrap break-word">
            Hi, I'm Precious Oziwo, a 3rd year student studying software 
            engineering with interest in web development and design. I am
            passionate about creating beautiful and functional websites
            and eager to enhance my skills through practical experience. 
            My journey in the tech world is driven by a love for solving
            complex problems and a commitment to continuous learning. Additionally,
            I am an ethical hacker and a cybersecurity enthusiast, which complements
            my web development skills and deepens my understanding of security practices in the tech industry.
          </p>
          <h3 className='text-[#AEADF9]'>Education:</h3>
          <p className="mb-4 text-base sm:text-sm md:text-base lg:text-lg overflow-wrap break-word">
            Bachelor: Software Engineering @ NHL Stenden University
            Of Applied Science.
          </p>
          <h3 className='text-[#AEADF9]'>Certification:</h3>
          <p className="mb-4 text-base sm:text-sm md:text-base lg:text-lg overflow-wrap break-word">
            Certified Ethical Hacker CEHv11
          </p>
          <h3 className='text-[#AEADF9]'>Web Development Skills:</h3>
          <ul className="mb-4 text-base sm:text-sm md:text-base lg:text-lg overflow-wrap break-word list-disc pl-5">
            <li>HTML, CSS, React, JavaScript</li>
            <li>PHP, MySQL, Microsoft SQL Server</li>
            <li>UI/UX Design, Figma</li>
          </ul>
          <h3 className='text-[#AEADF9]'>Other Technical Skills:</h3>
          <ul className="mb-4 text-base sm:text-sm md:text-base lg:text-lg overflow-wrap break-word list-disc pl-5">
            <li>MongoDB, C#, Java - Git</li>
            <li>Penetration testing</li>
            <li>Vulnerability assessment</li>
            <li>Networking</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
