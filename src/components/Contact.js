import React from 'react';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Correct package
import chienImage from '../assets/chien.jpeg';

const Contact = () => {
  return (
    <div className="contact-container">
      <Header />
      <div className="contact-content">
        <h1>Contact Me</h1>
        <p>
          Feel free to reach out to me if you have any questions, collaboration ideas, or just want to say hello!
        </p>

        {/* Adding your profile picture */}
        <div className="profile-picture">
          <img src={chienImage} alt="Chien Huang" />
        </div>

        {/* Email link for sending mail */}
        <div className="email-link">
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <a href="mailto:betty556611@gmail.com">Send me an email</a>
          </p>
        </div>

        {/* Adding GitHub and LinkedIn links */}
        <div className="social-links">
            <a href="https://github.com/ChienHuang0818" target="_blank" rel="noopener noreferrer" className="icon">
                <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
            <a href="https://linkedin.com/in/chien-huang-sarah" target="_blank" rel="noopener noreferrer" className="icon">
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

