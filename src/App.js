
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from'./componements/layout'
import About from './componements/about';
import Projects from './componements/projects';
import Competences from './componements/skills';
import Contact from './componements/contact';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Layout />} />
         <Route path="*" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;