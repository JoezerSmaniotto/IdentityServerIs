// src/Routes.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './components/LoginPage';
import { Callback } from './pages/Callback';
import PrivatePage from './components/PrivateRoute';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/callback" element={<Callback />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/*" element={<PrivatePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
