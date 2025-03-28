import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface AuthWrapperProps {
  children: ReactNode;
  isAuthenticated: boolean;
}

export default function AuthWrapper({ children, isAuthenticated }: AuthWrapperProps) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}