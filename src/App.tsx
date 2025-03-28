import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Corporate from './pages/Corporate';
import AI from './pages/AI';
import Contact from './pages/Contact';
import LoginSignup from './pages/LoginSignup';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{name: string, email: string} | null>(null);
  const navigate = useNavigate();

  // Check authentication on initial load
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      // Verify token with your backend in a real app
      setIsAuthenticated(true);
      const userData = localStorage.getItem('user');
      if (userData) setUser(JSON.parse(userData));
    }
  }, []);

  // Auth wrapper component
  const AuthWrapper = ({ children }: { children: JSX.Element }) => {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
  };

  // Handle login
  const handleLogin = (userData: {name: string, email: string}, token: string) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setIsAuthenticated(true);
    navigate('/');
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar 
        isAuthenticated={isAuthenticated}
        user={user}
        onLogout={handleLogout}
      />
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={
          <LoginSignup 
            onLogin={handleLogin} 
            isAuthenticated={isAuthenticated} 
          />
        } />
        
        {/* Protected routes */}
        <Route path="/" element={
          <AuthWrapper>
            <Home />
          </AuthWrapper>
        } />
        <Route path="/about" element={
          <AuthWrapper>
            <About />
          </AuthWrapper>
        } />
        <Route path="/corporate" element={
          <AuthWrapper>
            <Corporate />
          </AuthWrapper>
        } />
        <Route path="/ai" element={
          <AuthWrapper>
            <AI />
          </AuthWrapper>
        } />
        <Route path="/contact" element={
          <AuthWrapper>
            <Contact />
          </AuthWrapper>
        } />
      </Routes>
    </div>
  );
}

export default App;