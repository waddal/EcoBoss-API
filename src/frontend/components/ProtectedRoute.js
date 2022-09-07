import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, credentials, redirectTo }) => {
  return credentials ? children : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;
