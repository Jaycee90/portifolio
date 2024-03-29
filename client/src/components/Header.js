import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../mycss/Header.css'; 
import myphoto from '../assets/turam.jpg';
import resume from '../assets/resume.png'
import Roadmap from '../assets/Roadmap.webp'
import Mongopic from '../assets/Express.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
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
            {/* Provide a link to download the PDF */}
            <a href="https://drive.google.com/file/d/1VUIn9Y3pVeNRVf2VchrlE9Lz1vbT_AHJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <span style={{color: '#228B22', fontWeight: 'bold'}}>VIEW RESUME</span> <FontAwesomeIcon icon={faExternalLinkAlt} color='whitesmoke'/> </a>
          </div>

          <div className='mern-preview'>
          <img src={Roadmap} alt="Mern Preview" width="350"/>
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
            <img src={Mongopic} alt="Mongo Preview" width="350"/>
          </div>
          
          <div className="profile-link">
            <p>LET'S STAY CONNECTED</p>
            <Link to="/about" onClick={handleMenuClick} className="external-link">
            <span style={{color: '#228B22', fontWeight: 'bold'}}>PROFILE</span> <FontAwesomeIcon icon={faExternalLinkAlt} color='whitesmoke'/> </Link>
          </div>


    
        </div>
      </div>
    </header>
  );
}

export default Header;
