import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AppWrapper from './AppWrapper';
import Nav from './Nav';
import Footer from './Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';

const App = () => {
  return (
    <AppWrapper>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </AppWrapper>
  );
};

export default App;
