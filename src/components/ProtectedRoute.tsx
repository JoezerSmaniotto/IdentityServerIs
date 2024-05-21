import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'react-oidc-context';

const ProtectedRoute: React.FC = () => {
  const auth = useAuth();

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
