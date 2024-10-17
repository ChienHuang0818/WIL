import React from 'react';
import Header from './Header';
import photo5 from '../assets/photo5.jpeg';
import '../App.css'; // Assuming you already have this CSS file for global styling

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <Header />
      <div className="about-me-content">
        <h1>About Me</h1>
        <img src={photo5} alt="Reflection 5" className="reflection-photo" />
        <p>
          Hi, I’m Chien Huang, a dedicated front-end developer with a passion for creating seamless and engaging web experiences. 
          I specialize in building user-friendly, interactive interfaces that prioritize both functionality and design. My experience 
          spans across various front-end technologies, including React, JavaScript, HTML, CSS, and Sass. I take pride in writing clean, 
          maintainable code that brings designs to life while ensuring performance and responsiveness across devices.
        </p>
        <p>
          Over the years, I have developed a strong interest in understanding how to improve user interaction through thoughtful design and 
          efficient code. My focus is on delivering applications that not only look great but also perform efficiently. Whether it's optimizing 
          load times or ensuring accessibility, I am always looking for ways to enhance user experience. I’ve worked on a variety of projects, 
          from small landing pages to more complex web applications, all of which have strengthened my understanding of front-end development.
        </p>
        <p>
          I am a continuous learner and thrive on the excitement of discovering new technologies. I am constantly evolving my skill set to stay 
          current with industry trends, whether that means diving into new JavaScript frameworks, exploring web performance techniques, or learning 
          about user-centered design. One of my goals is to build products that make a difference, improving both the user experience and the 
          functionality of the web as a whole.
        </p>
        <p>
          When I’m not coding, you can find me exploring new places, traveling, or engaging in ocean conservation projects. I am deeply committed to 
          environmental causes and enjoy dedicating my time to helping protect marine ecosystems. Whether in the digital or natural world, I believe in 
          making a positive impact and constantly strive to combine my passions with my work.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
