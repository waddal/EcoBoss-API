import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { About } from '../pages/About';
import { Admin } from '../pages/Admin';
import { Contribution } from '../pages/Contribution';
import { Documentation } from '../pages/Documentation';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Footer, Nav, ProtectedRoute } from './index';

const App = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState(null);

  const handleLogin = (user) => {
    setCredentials(user);
    navigate('/admin');
  };

  return (
    <StyledApp>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/docs" element={<Documentation />} />
        <Route path="/contribute" element={<Contribution />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute credentials={credentials} redirectTo={'/login'}>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </StyledApp>
  );
};

export default App;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  background: #48a14d;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  overflow: hidden;
`;
