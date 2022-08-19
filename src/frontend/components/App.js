import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import AppWrapper from './AppWrapper';
import Nav from './Nav';
import Footer from './Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import ProtectedRoute from './ProtectedRoute';
import Admin from '../pages/Admin';

const App = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState(null);

  const handleLogin = (user) => {
    console.log('handling login: ', user);
    setCredentials(user);
    setTimeout(navigate('/admin'), 3000);
  };

  return (
    <AppWrapper>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/admin" element={<Admin credentials={credentials} />} />
      </Routes>
      <Footer />
    </AppWrapper>
  );
};

export default App;
