import React from 'react';
import project1Image from '../assets/readhub.png'; 
import project2Image from '../assets/vibetrack.png';
import project3Image from '../assets/ecom.png';
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
                <p>Welcome to our Library Manager Web Application! Dive into a user-friendly platform designed to simplify library tasks. Track book inventory, facilitate seamless borrowing, and effortlessly manage library operations—all conveniently centralized. Experience the efficiency firsthand by exploring our platform now!</p>
                <img src={project1Image} alt="Project 1" width="400" />
                <div className="project-links">
                    <a href="https://readhub-murex.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <span style={{color: 'whitesmoke', fontSize: '15px'}}>LIVE DEMO</span>
                        <FontAwesomeIcon icon={faExternalLinkAlt} color='whitesmoke'/> 
                    </a> 
                    <a href="https://github.com/Jaycee90/LibraryManager/tree/main/client" target="_blank" rel="noopener noreferrer">
                        <span style={{color: 'whitesmoke', fontSize: '15px'}}>CLIENT SIDE</span>
                        <FontAwesomeIcon icon={faExternalLinkAlt} color='whitesmoke'/> 
                    </a>
                    <a href="https://github.com/Jaycee90/LibraryManager/tree/main/server" target="_blank" rel="noopener noreferrer">
                        <span style={{color: 'whitesmoke', fontSize: '15px'}}>SERVER SIDE</span>
                        <FontAwesomeIcon icon={faExternalLinkAlt} color='whitesmoke'/> 
                    </a>
                </div>
            </div>

            {/* Add more project cards as needed */}
            <div className="project-card">
                <h3>VIBETRACK</h3>
                <p>VibeTrack is your ultimate companion for exploring the nightlife scene. Whether you're searching for the hottest clubs, live music venues, or buzzing events, our web app has you covered. Discover nearby happenings, create personalized itineraries, and connect with fellow enthusiasts, all in one sleek platform.</p>
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
                <p>Discover seamless online shopping with our ecommerce platform. Clients enjoy a user-friendly interface, while store owners efficiently manage inventory and orders through the admin dashboard. Explore our live demo now!</p>
                <img src={project3Image} alt="Project 2" width="400"/>
                <div className="project-links">
                    <a href="https://commerce-react-js.web.app" target="_blank" rel="noopener noreferrer">
                        <span style={{color: 'whitesmoke', fontSize: '15px'}}>LIVE DEMO</span>
                        <FontAwesomeIcon icon={faExternalLinkAlt} color='whitesmoke'/> 
                    </a> 
                    <a href="https://bitbucket.org/team9cs4398/team9repo/src/main/" target="_blank" rel="noopener noreferrer">
                        <span style={{color: 'whitesmoke', fontSize: '15px'}}>CLIENT SIDE</span>
                        <FontAwesomeIcon icon={faExternalLinkAlt} color='whitesmoke'/> 
                    </a>
                    <a href="https://bitbucket.org/team9cs4398/team9repo/src/main/AdminServer/" target="_blank" rel="noopener noreferrer">
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
