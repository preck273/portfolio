import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 px-6 flex flex-col md:flex-row items-center justify-between">
      <div className="mb-4 md:mb-0"> 
        <p className="text-sm md:text-base">&copy; 2024 Oziwo</p> 
      </div>
      <div className="flex items-center space-x-10 mb-4 md:mb-0"> 
        <a href="https://linkedin.com/in/precious-oziwo-708363228/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
        <a href="https://github.com/preck273" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <i className="fab fa-github fa-lg"></i>
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <i className="fas fa-envelope fa-lg"></i>
          <p className="text-sm md:text-base ml-1">Pepelito273@outlook.com</p>
        </div>
        <div className="flex items-center">
          <i className="fas fa-phone fa-lg"></i>
          <p className="text-sm md:text-base ml-1">0685135674</p> 
        </div>
      </div>
    </footer>
  );
}
