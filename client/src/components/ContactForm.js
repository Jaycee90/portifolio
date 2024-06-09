import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../mycss/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_9virzwj', 'template_eo45ae1', form.current, 'HtoEmEPXd-YMfbcsy')
        .then(
          () => {
            console.log('SUCCESS!');
            alert("Your message was submitted!");
            // Reset the form after successful submission
            form.current.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert("Your message was not submitted, please try again later");
          }
        );
    };

    return (
      <div>
        <div className="contact-container">
          <h2><FontAwesomeIcon icon={faPhoneVolume} /> Hit Me Up</h2>
          <div className='call-link'>
            <a href="tel:+15127711378" className="call-link-a">
              <span>Call Me Now: +1 (512) 7711378</span>
            </a>
          </div>
          <h2><FontAwesomeIcon icon={faEnvelope} /> Email Me</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="user_name" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" name="user_email" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea name="message" />
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
        <Footer />
      </div>
    );
}

export default ContactForm;
