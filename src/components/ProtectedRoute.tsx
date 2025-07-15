import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import React from 'react';

const ProtectedRoute: React.FC<{ children: React.ReactNode; role: 'admin' | 'user' }> = ({ children, role }) => {
  const { user, role: userRole, loading } = useAuth();

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  if (!user) return <Navigate to="/login" />;
  if (userRole !== role) return <Navigate to={`/${userRole}`} />;
  return <>{children}</>;
};

export default ProtectedRoute; 