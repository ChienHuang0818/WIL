import React from 'react';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Reflection from './components/Reflection';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Ethical from './components/Ethical'
import Experience from './components/Experience';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/reflection" element={<Reflection/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/ethical" element={<Ethical/>} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
