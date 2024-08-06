import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import UserPage from '../pages/UserPage';
import UserDetailsPage from '../pages/UserDetailsPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage /> } />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/users/:id" element={<UserDetailsPage/>}  />
      <Route path="/users" element={<UserPage />} />
      <Route path="/" element={<LoginPage />}  />
    </Routes>
  );
};

export default AppRoutes;
