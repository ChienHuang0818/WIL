import React from 'react';
import Header from './Header';
import '../App.css'; 

const Ethical = () => {
  return (
    <div className="skills-container">
      <Header />
      <div className="skills-content">
        <h1>Ethical Reflection on Cinefly AI DeepStory</h1>

        <div className="skills-section">
          <h3>Introduction</h3>
          <p>
            During my placement at Cinefly, I was tasked with developing the AI-powered DeepStory storyboard generator. 
            While this project presented exciting opportunities to innovate in the video creation space, it also posed several 
            ethical questions regarding the use of AI, data privacy, and access to technology.
          </p>
        </div>

        <div className="skills-section">
          <h3>Data Privacy Concerns</h3>
          <p>
            One of the key ethical dilemmas involved how Cinefly handled user data. While the application collected personal preferences 
            and project details to generate storyboards, there was a lack of transparency about how this data was stored or shared with 
            third parties. This raised concerns about user privacy, as individuals were not fully aware of how their personal information 
            might be used. I advocated for clearer data handling policies, but more could have been done to inform users about the potential 
            risks and protections in place.
          </p>
        </div>

        <div className="skills-section">
          <h3>Restricted Access and Equity</h3>
          <p>
            Another issue I observed was the restricted access to the AI-generated storyboards. Only a select group of stakeholders, 
            such as investors and high-profile clients, were given access to the tool, despite it being marketed as a product that democratizes 
            video creation. This created an ethical question about equitable access to technology. I believe the product should have been 
            opened up to a wider audience gradually, with proper security and privacy protocols in place.
          </p>
        </div>

        <div className="skills-section">
          <h3>Intellectual Property and AI Transparency</h3>
          <p>
            The proprietary nature of Cinefly's AI also raised concerns about intellectual property and transparency. Since the codebase 
            was not open to public scrutiny, there was little accountability for potential biases or flaws in the algorithm. While we 
            maintained a high level of security for the source code, I feel that more transparency, such as through regular audits or open-source 
            practices, could have ensured that the technology was both fair and reliable.
          </p>
        </div>

        <div className="skills-section">
          <h3>Conclusion and Future Steps</h3>
          <p>
            My experience at Cinefly highlighted the importance of addressing ethical concerns when developing AI-powered applications. 
            Ensuring privacy, equitable access, and transparency are crucial for building trust with users and fostering a culture of responsibility. 
            In the future, I plan to advocate for clearer data usage policies and more transparency in AI development to help mitigate potential 
            ethical issues.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ethical;
