import React from 'react';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faGithub, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'; 
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import homeimage from '../assets/home.JPG';
import '../App.css'; 

const Home = () => {
    return (
        <div className="home">
            <Header />
            <div className="home-content">
                <div className="introduction">
                    <h2>Hi, I am Chien Huang</h2>
                    <p>
                        Hello, I’m Chien Huang, a professional front-end engineer currently interning at Cinefly. 
                        During this internship, I have not only gained a deep understanding of the processes involved 
                        in video production and storyboard design but also contributed to key projects, including UI 
                        design, feature implementation, and solving technical challenges.
                    </p>
                    <p>
                        Through hands-on experience, I have enhanced my technical skills, learned how to collaborate 
                        effectively within a team, adapt to changing requirements, and tackle complex technical issues. 
                        Beyond the technical aspects, I have also developed a deeper understanding of ethical considerations 
                        in front-end development, striving to practice responsible tech development in my projects. I look 
                        forward to continuing my growth and applying these experiences to bring value to future work.
                    </p>
                    
                    {/* Profile Photo */}
                    <img 
                        src={homeimage} 
                        alt="Chien Huang" 
                        className="profile-photo"
                    />
                    
                    {/* Contact Information */}
                    <div className="contact-info">
                        <p>
                            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                            0476499461
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                            <a href="mailto:betty556611@gmail.com">betty556611@gmail.com</a>
                        </p>
                    </div>
                </div>

                {/* Social Links */}
                <div className="social-links">
                    <a href="https://github.com/ChienHuang0818" target="_blank" rel="noopener noreferrer" className="icon">
                        <FontAwesomeIcon icon={faGithub} size="3x" />
                    </a>
                    <a href="https://linkedin.com/in/chien-huang-sarah" target="_blank" rel="noopener noreferrer" className="icon">
                        <FontAwesomeIcon icon={faLinkedin} size="3x" />
                    </a>
                    <a href="https://www.instagram.com/qien_huang/" target="_blank" rel="noopener noreferrer" className="icon">
                        <FontAwesomeIcon icon={faInstagram} size="3x" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100001346677555" target="_blank" rel="noopener noreferrer" className="icon">
                        <FontAwesomeIcon icon={faFacebook} size="3x" />
                    </a>
                </div>
            </div>  
        </div>
    );
};

export default Home;
