import React, { useState } from 'react';
import '../mycss/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {    
    e.preventDefault();
    try {
      // Connect to the backend server
      const response = await axios.post('https://portifolio-sigma-ebon-98.vercel.app/submit-form', formData); 
      console.log(response.data);
      if (response.data.success) {
        // Form submission successful
        alert("Your message is successfully submitted!");
      } else {
        // Handle failure
        alert("Something went wrong");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
        
        <div className="contact-container">
            <h2><FontAwesomeIcon icon={faEnvelope} /> Contact Me</h2>
            <form onSubmit={handleSubmit}> {/* Fixed the onSubmit function */}
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Message:</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} />
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
        <Footer />
    </div>
  );
}

export default Contact;

