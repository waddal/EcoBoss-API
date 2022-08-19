import React from 'react';
import { Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children, credentials }) => {
  const navigate = useNavigate();

  if (!credentials) {
    return navigate('/login');
  } else {
    return <Route>{children}</Route>;
  }
};

export default ProtectedRoute;
