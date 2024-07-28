import React from 'react';
import Content from '../Component/Content';
import About from './About';
import Project from './Project';
import Contact from './Contact';

const Home = () => {
  return (
    <div>

      <section className="content-section mt-8">
        <Content />
      </section>

      <section className="about-section mt-8">
        <About />
      </section>
      
      <section className="Project-section mt-8">
        <Project />
      </section>

      <section className="Contact-section mt-8">
        <Contact />
      </section>

    </div>
  );
};

export default Home;
