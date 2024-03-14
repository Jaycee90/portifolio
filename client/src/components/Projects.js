import React from 'react';
import project1Image from '../assets/readhub.png'; 
import project2Image from '../assets/vibetrack.png';
import project3Image from '../assets/ecommerce.png';
import Footer from './Footer';
import '../mycss/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function Projects() {
  return (
    <div> 
        <h1 className="projects-heading">VISIT MY PROJECTS</h1>
        <div className="projects-container">
            <div className="project-card">
                <h3>READHUB</h3>
                <img src={project1Image} alt="Project 1" width="400" />
                <div className="project-links">
                    <a href="https://jayces-library.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <span style={{color: 'whitesmoke', fontSize: '15px'}}>LIVE DEMO</span>
                        <FontAwesomeIcon icon={faExternalLinkAlt} color='whitesmoke'/> 
                    </a> 
                    <a href="https://github.com/Jaycee90/Library-vercel/tree/main/client" target="_blank" rel="noopener noreferrer">
                        <span style={{color: 'whitesmoke', fontSize: '15px'}}>CLIENT SIDE</span>
                        <FontAwesomeIcon icon={faExternalLinkAlt} color='whitesmoke'/> 
                    </a>
                    <a href="https://github.com/Jaycee90/Library-vercel/tree/main/server" target="_blank" rel="noopener noreferrer">
                        <span style={{color: 'whitesmoke', fontSize: '15px'}}>SERVER SIDE</span>
                        <FontAwesomeIcon icon={faExternalLinkAlt} color='whitesmoke'/> 
                    </a>
                </div>
            </div>

            {/* Add more project cards as needed */}
            <div className="project-card">
                <h3>VIBETRACK</h3>
                <img src={project2Image} alt="Project 2" width="400"/>
                <div className="project-links">
                    <a href="https://vibetrack.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <span style={{color: 'whitesmoke', fontSize: '15px'}}>LIVE DEMO</span>
                        <FontAwesomeIcon icon={faExternalLinkAlt} color='whitesmoke'/> 
                    </a> 
                    <a href="https://github.com/Jaycee90/NightLife/tree/jayces/VibeTrack/client" target="_blank" rel="noopener noreferrer">
                        <span style={{color: 'whitesmoke', fontSize: '15px'}}>CLIENT SIDE</span>
                        <FontAwesomeIcon icon={faExternalLinkAlt} color='whitesmoke'/> 
                    </a>
                    <a href="https://github.com/Jaycee90/NightLife/tree/jayces/VibeTrack/server" target="_blank" rel="noopener noreferrer">
                        <span style={{color: 'whitesmoke', fontSize: '15px'}}>SERVER SIDE</span>
                        <FontAwesomeIcon icon={faExternalLinkAlt} color='whitesmoke'/> 
                    </a>
                </div>
            </div>

            <div className="project-card">
                <h3>MERN COMMERCE</h3>
                <img src={project3Image} alt="Project 2" width="400"/>
                <div className="project-links">
                    <a href="#link here" target="_blank" rel="noopener noreferrer">
                        <span style={{color: 'whitesmoke', fontSize: '15px'}}>LIVE DEMO</span>
                        <FontAwesomeIcon icon={faExternalLinkAlt} color='whitesmoke'/> 
                    </a> 
                    <a href="#link here" target="_blank" rel="noopener noreferrer">
                        <span style={{color: 'whitesmoke', fontSize: '15px'}}>CLIENT SIDE</span>
                        <FontAwesomeIcon icon={faExternalLinkAlt} color='whitesmoke'/> 
                    </a>
                    <a href="#link here" target="_blank" rel="noopener noreferrer">
                        <span style={{color: 'whitesmoke', fontSize: '15px'}}>SERVER SIDE</span>
                        <FontAwesomeIcon icon={faExternalLinkAlt} color='whitesmoke'/> 
                    </a>
                </div>
            </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;