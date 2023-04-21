import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Courses from '../../pages/Courses';
import Contact from '../../pages/Contact';
import Thanks from '../../pages/Thanks';

function Content() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/cursos" element={<Courses />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="/obrigado" element={<Thanks />} />
      <Route path="*" element={<h1>Error 404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default Content;
