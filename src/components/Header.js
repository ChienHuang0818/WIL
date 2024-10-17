import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome} from '@fortawesome/free-solid-svg-icons'; 
const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>  
          </li>
          <li>
            <Link to="/reflection">
             WIL Reflection
            </Link>
          </li>
          <li>
            <a href="/skills">
              Technical Skill
            </a>
          </li>
          <li>
            <a href="/ethical">
              Ethics & Accountability
            </a>
          </li>
          <li>
            <Link to="/about">
             About Me
            </Link>  
          </li>
          <li>
            <a href="/experience">
            Holistic Experience
            </a>
          </li>
          <li>
            <a href="/contact">
             Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
