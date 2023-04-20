import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';

const Content: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<h1>Error 404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default Content;
