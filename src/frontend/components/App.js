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
import Contribution from '../pages/Contribution';
import Documentation from '../pages/Documentation';

const App = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState(null);

  const handleLogin = (user) => {
    setCredentials(user);
    navigate('/admin');
  };

  return (
    <AppWrapper>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/docs" element={<Documentation />} />
        <Route path="/contribute" element={<Contribution />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/admin" element={<Admin credentials={credentials} />} />
      </Routes>
      <Footer />
    </AppWrapper>
  );
};

export default App;
