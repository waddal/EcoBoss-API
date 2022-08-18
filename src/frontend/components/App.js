import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PageWrapper from './PageWrapper';
import Nav from './Nav';
import Footer from './Footer';
import Home from '../pages/Home';
import About from '../pages/About';

const App = () => {
  return (
    <PageWrapper>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </PageWrapper>
  );
};

export default App;
