import React from 'react';
import { useInView } from 'react-intersection-observer';
import apod from '../assets/apod.jpg';
import imgSearch from '../assets/imageSearch2.jpg';
import phone from '../assets/phone.jpg';
import travel from '../assets/travel.jpg';
import design from '../assets/Design.jpg';

const projects = [
  {
    title: 'Apod',
    description: 'This is a simple project to fetch and display today image and description using nasa api. Everyday is a different image ',
    imageUrl: apod,
    websiteUrl: 'https://todays-nasa-image.netlify.app/',
    githubUrl: 'https://github.com/preck273/nasa-react-api'
  },
  {
    title: 'Image Search',
    description: 'This is an image search web app where you can search for any image. This app uses Unsplash api to fetch the images',
    imageUrl: imgSearch,
    websiteUrl: 'https://easyimage-search.netlify.app/',
    githubUrl: 'https://github.com/preck273/Image-Search'
  },
  {
    title: 'Interactive Design',
    description: 'This is an interactive design for mobile phone, the goal is to inspire listeners to explore and find fresh podcasts on Spotify via a game.',
    imageUrl: phone,
    websiteUrl: 'https://www.figma.com/proto/oKcJkOLf6VInWe9LOYsDNe/Spotify?node-id=140-456&scaling=scale-down&page-id=0%3A1&starting-point-node-id=140%3A456',
    githubUrl: 'https://github.com/preck273/Interactive-Design'
  },
  {
    title: 'Travel Guild',
    description: 'This web app allows you to search for hotels, restaurant and attraction around you, using google maps and Tripadvisor api ',
    imageUrl: travel,
    websiteUrl: 'https://travelfindplaces.netlify.app',
    githubUrl: 'https://github.com/preck273/TravelGuide'
  },
  {
    title: 'Portfolio Design',
    description: 'This is a figma design of my portfolio, showcasing my design skill, there is still room for improvement of course.',
    imageUrl: design,
    websiteUrl: 'https://www.figma.com/design/FyfhIu0gfvslYqpBePCACA/Untitled?node-id=15-212&t=9EcHtPdKUHQ78YW1-0',
    githubUrl: 'https://github.com/preck273/portfolio'
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#AEADF9]">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.3,    // Percentage of the element that must be visible to trigger the effect
  });

  const transitionDelay = `${index * 0.4}s`; // Stagger the animation by 0.2s for each item

  return (
    <div
      ref={ref}
      className={`transform transition duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      style={{ transitionDelay }}
    >
      <div className="bg-[#25243e] text-gray-300 rounded-lg shadow-2xl overflow-hidden">
        <div className="w-full h-48 bg-gray-200">
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="mb-4">{project.description}</p>
          <div className="flex justify-between">
            <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-[#AEADF9] hover:underline">Website</a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[#AEADF9] hover:underline">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
