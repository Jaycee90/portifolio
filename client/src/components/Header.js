import React, { useState } from 'react';
import '../mycss/Header.css'; 
import myphoto from '../assets/turambepro.jpg';
import resume from '../assets/newResume.png'
import Roadmap from '../assets/Roadmap.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  // eslint-disable-next-line
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = () => {
    setMenuOpen(false); // Close the menu when a menu item is clicked
  };

  return (
    <header>
      <div className="container">
        <div className='box first-box'>
          <img src={myphoto} alt="Portrait of Jayce Turambe" width="350" />
          <div className="text">
            <h2>Full-Stack Developer</h2>
            <h3>Jayce Turambe</h3>
            <p>
              <span role="img" aria-label="Hand waving emoji">🖐🏻</span> Passionate about full-stack development, specializing in React.js, 
              Node.js, Express.js, and MongoDB. Excited by React.js's component-based
              approach and Node.js's server-side execution. Leveraging Express.js 
              for simplified server creation and MongoDB for flexible data management. 
              Ready to innovate and tackle challenges in the digital realm.
            </p>
          </div>
          <div className='external-link-wrapper'>
            <a href="/about" onClick={handleMenuClick} className="external-link">
              <FontAwesomeIcon icon={faExternalLinkAlt} color='whitesmoke' className='icon'/>
            </a>
          </div>

        </div>

        <div className='box'>
          <div className="resume-preview">
            {/* Display a preview image of my resume */}
            <img src={resume} alt="Resume Preview" width="350"/>
          </div>
          <div className="resume-download">
          <p>Dynamic Full-Stack Developer with 2+ years of experience driving innovation and collaboration. <br/>
            Specializing in microservices architectures, I've led the design and implementation of impactful projects across various environments. <br/>
            Proficient in AWS services and serverless architectures, I excel in problem-solving and fostering continuous learning. <br/>
            With a passion for pushing boundaries and a commitment to personal growth, I'm eager to contribute to cutting-edge cloud and software development initiatives.</p>
            {/* Provide a link to download the PDF document */}
            <a href="https://docs.google.com/document/d/1jaEEgkgw8WgxC4NGTq9OVagGUH07mK4r/edit?usp=sharing&ouid=105428653284122264500&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
            <span style={{color: '#DAA520', fontWeight: 'bold'}}>VIEW RESUME</span> <FontAwesomeIcon icon={faExternalLinkAlt} color='goldenrod'/> </a>
          </div>

          <div className='mern-preview'>
          </div>
        </div>

        <div className='box'>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/Jayce90" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="7x" color="#0077B5" />
            </a>
            <a href="https://github.com/Jaycee90" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="7x" color="#211F1F" />
            </a>
          </div>

          <div className="mongo-preview">
            <img src={Roadmap} alt="Mern Preview" width="450"/> 
          </div>

         <div className='profile-link'>
          <p>LET'S STAY CONNECTED</p>
          <a href="tel:+15127711378" style={{ textDecoration: 'none' }}>
            <span style={{ color: '#DAA520', fontWeight: 'bold' }}>Feel free to call me</span>
            <FontAwesomeIcon icon={faPhoneVolume} color='goldenrod' style={{ marginLeft: '5px' }} />
          </a>
         </div>
          
        </div>
      </div>
    </header>
  );
}

export default Header;
