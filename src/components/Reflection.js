import React from 'react';
import Header from './Header';
import photo1 from '../assets/photo1.jpeg';
import photo2 from '../assets/photo2.jpeg';

const Reflection = () => {
  return (
    <div className="reflection-container">
      <Header />
        <div className="reflection-content">
          <h1>Critical analysis of WIL Placement</h1>
          <img src={photo1} alt="Reflection 1" className="reflection-photo" />
          <img src={photo2} alt="Reflection 2" className="reflection-photo" />  
          <h3>Initial Struggles with Codebase Navigatione</h3>
          <p>
            During my internship, I encountered challenges with navigating a large codebase. My first Jira project involved integrating a toggle component into the UI. However, due to my unfamiliarity with the source code structure, it took me a significant amount of time to locate the relevant component. This delay was further exacerbated by uncertainty about where the issue lay, which led to wasted time. Additionally, working from home (WFH) added to the difficulties, as most team communication was done through written messages. This required me to be much more precise in describing the problems I faced, something I initially struggled with.
          </p>
          <h3>Impact of Communication and Codebase Familiarity</h3>
          <p>
          These experiences had a profound impact on me. My lack of familiarity with the large codebase made it difficult to solve technical issues, which not only affected my work efficiency but also lowered my confidence. The challenge of accurately describing problems in written form further hindered my ability to communicate effectively with my team and seek timely help. From this, I realized how important it is to have a solid understanding of a project’s code structure and how crucial precise communication is in a remote work environment. Effective communication with supervisors or colleagues is essential for faster problem-solving and better teamwork.
          </p>
          <h3>Lessons Learned in Problem-Solving and Teamwor</h3>
          <p>
            Despite the technical challenges, I believe my strength lies in my resilience and willingness to search for solutions independently. My proactive approach to learning allowed me to gradually figure out the codebase and find tools or methods to troubleshoot issues. However, had I communicated more effectively with my supervisor or colleagues when facing confusion, I could have solved problems faster and reduced the frustration I experienced. This highlighted the need for me to improve my communication skills, particularly in remote settings where written communication is the primary form of interaction.
          </p>
          <h3>Action Plan for Technical and Communication Improvement</h3>
          <p>
            To overcome these challenges, I plan to continue strengthening my programming skills, especially in understanding complex codebases and improving my problem-solving abilities. I will take professional courses and use online platforms to deepen my technical knowledge. At the same time, I will focus on improving my communication skills by being more proactive in reaching out to my supervisor and colleagues for help. I aim to set up regular feedback sessions where I can discuss the challenges I’m facing and seek guidance. These steps will help me handle future challenges more effectively, both technically and communicatively, while maintaining my commitment to learning and personal growth.
          </p>
        </div>
    </div>
  );
};

export default Reflection;
