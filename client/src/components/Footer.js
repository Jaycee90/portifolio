
import React from 'react';
import mylogo from '../assets/jay.png'; 
import '../mycss/Footer.css';

function Footer() {
  return (
    <footer className="footerbox">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={mylogo} alt="Logo" width="100"/>
        </div>

        <div className="footer-text">
          <p>© 2024 Jayce Turambe Website. All rights reserved.</p>
          <p>Remember to connect with me!</p>
        </div>
      </div>

      <div className="footer-linkedin">
        <a href="https://www.linkedin.com/in/Jayce90" target="_blank" rel="noopener noreferrer">
          Linkedin
        </a>
      </div>

      <div className="footer-github">
        <a href="https://github.com/Jaycee90" target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </div>
    </footer>
  );
}

export default Footer;


