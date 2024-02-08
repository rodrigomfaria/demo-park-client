import React from 'react';

import './Content.css'
import { Route, Routes } from 'react-router-dom';
import About from '../../views/examples/About';
import Home from '../../views/examples/Home';

const Content = () =>  {
  return (
    <main className="Content">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default Content;