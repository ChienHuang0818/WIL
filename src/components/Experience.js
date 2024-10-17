import React from 'react';
import Header from './Header';
import photo6 from '../assets/photo6.jpeg';
import '../App.css'; // Ensure you have this for any global styling

const Experience = () => {
  return (
    <div className="experience-container">
      <Header />
      <div className="experience-content">
        <h1>Holistic Experience at New Beginnings</h1>
		<img src={photo6} alt="Reflection 6" className="reflection-photo" />
        <p>
          During my internship at New Beginnings, I had the opportunity to work as an app developer, focusing on creating a mobile application 
          designed to educate young students on ocean conservation and the marine ecosystem. The project aligned perfectly with my passion for 
          environmental causes, as it aimed to promote awareness and encourage sustainable actions among younger generations.
        </p>
        <p>
          My primary respnsibility was to design and develop the app from the ground up. This involved collaborating closely with stakeholders 
          to define the core features, including educational content, quizzes for certification, and user-friendly navigation that would engage 
          students and make learning about ocean conservation more interactive and fun.
        </p>
        <p>
          I used front-end technologies such as React Native and JavaScript to ensure a smooth and responsive user experience across multiple 
          platforms. Additionally, I integrated educational resources, interactive elements, and quizzes that allowed users to test their knowledge 
          and earn Level 1 Marine Conservation certification. The app not only provided educational material but also featured a system that tracked 
          users' progress, enabling students to see their achievements as they advanced through the lessons.
        </p>
        <p>
          This internship helped me strengthen my technical skills, particularly in mobile development and user experience design. It also taught me 
          the importance of effective communication with both the technical team and non-technical stakeholders to ensure that the app met the needs 
          of its users while aligning with the organization’s objectives. Overall, my experience at New Beginnings was a valuable learning journey, 
          allowing me to contribute to a meaningful cause through technology.
        </p>
      </div>
    </div>
  );
};

export default Experience;
