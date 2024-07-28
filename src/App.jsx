import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import './index.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Project from './Pages/Project';

function App() {
  return (
    <Router>
      <div className='min-h-screen flex flex-col bg-[#141E30] text-white text-sm sm:text-base'>
        <Header />
        <main className='flex-grow p-8'>
          <Routes>
            <Route exact path="/" element={<Home /> } />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;