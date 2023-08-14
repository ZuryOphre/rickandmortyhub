import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function ProtectedRoute({ path, element }) {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return element; {}
}

export default ProtectedRoute;
