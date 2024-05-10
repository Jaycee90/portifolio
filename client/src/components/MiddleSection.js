
import React, { useState, useEffect } from 'react';
import '../mycss/MiddleSection.css';
import readhubImage from '../assets/readhub.png';
import vibetrackImage from '../assets/vibetrack.png';
import ecommerce from '../assets/ecom.png'
import mern2 from '../assets/mern2.jpg';
import gradImage from '../assets/gradImage.jpg'; // Import the graduation image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function MiddleSection() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projectImages = [
    readhubImage,
    vibetrackImage,
    ecommerce,
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentProjectIndex(prevIndex =>
        prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, [projectImages.length]);

  return (
    <div className="middle-section">
      <div className="info-box">
        <div className='title'><h2>Graduation Celebration!</h2></div>
        <p>Thank you for joining me on this incredible journey! Stay tuned for what's next as I embark on new adventures and opportunities.</p>
        <div className='grad-carousel'><img src={gradImage} alt="Graduation" width="200" height="200"/></div>
        <a href="https://www.youtube.com/watch?v=U0qRL7lOQ4I&ab_channel=TexasStateUniversity"target="_blank" rel="noopener noreferrer"> <span style={{color: '#228B22', fontWeight: 'bold'}}>2024 Commencement</span></a>
        <a href="/info"> <span style={{color: '#228B22', fontWeight: 'bold'}}>More Info</span></a>
      </div>

      <div className="projects-box">
        <div className='projects-carousel'>
          <img
            src={projectImages[currentProjectIndex]}
            alt={`Project ${currentProjectIndex + 1}`}
            width="100"
            height="200"
          />
        </div>
        <div className="view-projects">
          <a href="/projects" className="external-link">
            <span style={{color: '#228B22', fontWeight: 'bold'}}>PROJECTS</span> <FontAwesomeIcon icon={faExternalLinkAlt} color='whitesmoke'/> 
          </a>
        </div>
      </div>
      
      <div className="contact-box">
        <div className='paragraph'>
          <div className="mern-para">
            <img src={mern2} alt="mern Preview" width="350"/>
          </div>
          <p>
            There is no doubt that code is becoming the language of the 21st century. 
            Get started today on the path toward the digital world, 
            the right investment for your future!
            <br />
          </p>

          <div className='contact-link'>
            <a href="/contactform"> <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" /></a>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default MiddleSection;