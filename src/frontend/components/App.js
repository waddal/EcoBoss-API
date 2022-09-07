import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { About } from '../pages/About';
import { Admin } from '../pages/Admin';
import AppWrapper from './AppWrapper';
import { Contribution } from '../pages/Contribution';
import { Documentation } from '../pages/Documentation';
import Footer from './Footer';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import Nav from './Nav';
// import ProtectedRoute from './ProtectedRoute';

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
