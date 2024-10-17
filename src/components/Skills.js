import React from 'react';
import Header from './Header';
import photo3 from '../assets/photo3.jpeg';
import photo4 from '../assets/photo4.jpeg';
import '../App.css'; 

const Skills = () => {
  return (
    <div className="skills-container">
      <Header />
      <div className="skills-content">
        <h1>Transferable Skills</h1>
        <img src={photo3} alt="Reflection 3" className="reflection-photo" />
        <img src={photo4} alt="Reflection 4" className="reflection-photo" />  

        <div className="skills-section">
          <h3>Project Overview</h3>
          <p>
            During my master's internship, I was responsible for developing the Cinefly AI DeepStory storyboard generator, 
            a part of my software development specialization. This application helps users create videos using AI-generated 
            storyboards and guides. My responsibilities included UI design, coding, testing, and optimization. Throughout the 
            internship, I faced numerous challenges, especially in resolving technical issues and communicating effectively with my supervisor.
          </p>
        </div>

        <div className="skills-section">
          <h3>Problem-Solving Approach</h3>
          <p>
            While I often struggled with technical problems, leading to frustration, I did not give up. I relied on proactive research 
            and self-study to tackle these challenges. I learned new technologies like SASS and Redux-Saga, which strengthened my 
            understanding of React. Recognizing the need for better communication, I also increased my interactions with my supervisor 
            and colleagues, seeking their advice and feedback.
          </p>
        </div>

        <div className="skills-section">
          <h3>Outcome and Achievements </h3>
          <p>
            Through these efforts, I not only solved the technical problems but also significantly improved my skillset. I successfully 
            completed the UI design and developed several key features, while learning new technologies that will benefit my future career. 
            Additionally, by enhancing communication with my supervisor, I became better at expressing my challenges and needs, allowing 
            me to resolve issues more quickly.
          </p>
        </div>

        <div className="skills-section">
          <h3>Key Learnings and Takeaways </h3>
          <p>
            This internship taught me that while technical skills are essential, communication is equally important for success. 
            I gained a deeper understanding of React and Redux, and learned how to apply SASS and Redux-Saga for complex projects. 
            In terms of transferable skills, I learned to stay calm under pressure and actively solve problems instead of feeling frustrated. 
            Improved communication skills have made me more confident and effective within a team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
