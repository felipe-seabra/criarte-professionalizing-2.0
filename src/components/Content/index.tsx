import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Courses from '../../pages/Courses';
import Contact from '../../pages/Contact';
import Thanks from '../../pages/Thanks';
import Sorry from '../../pages/Sorry';
import CourseDetail from '../../pages/CourseDetail';
import Error from '../../pages/Error';

function Content() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/cursos/:id" element={<CourseDetail />} />
      <Route path="/cursos" element={<Courses />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="/obrigado" element={<Thanks />} />
      <Route path="/erro" element={<Sorry />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Content;
