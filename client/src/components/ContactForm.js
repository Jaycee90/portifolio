import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../mycss/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_9virzwj', 'template_eo45ae1', form.current, {
          publicKey: 'HtoEmEPXd-YMfbcsy',
        })
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
          },
        );
    };
  return (
    <div>
      <div className="contact-container">
        <h2><FontAwesomeIcon icon={faEnvelope} /> Contact Me</h2>
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

          {/* <input type="submit" value="Send" /> */}
        </form>
      </div>
      <Footer />
    </div>

  )
}

export default ContactForm
