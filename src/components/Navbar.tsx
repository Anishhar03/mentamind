import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Menu, X, User, LogIn, LogOut } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [authData, setAuthData] = useState({ email: '', password: '', name: '' });
  const [user, setUser] = useState<{name: string, email: string} | null>(null);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/corporate', label: 'Corporate Enquiries' },
    { path: '/ai', label: 'Try Our AI' },
    { path: '/contact', label: 'Contact Us' }
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleAuthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Mock authentication - replace with real API calls
    if (isLogin) {
      // Mock login
      if (authData.email && authData.password) {
        setUser({ name: 'Demo User', email: authData.email });
        setIsAuthModalOpen(false);
        navigate('/dashboard'); // Redirect after login
      } else {
        setError('Please enter both email and password');
      }
    } else {
      // Mock signup
      if (authData.email && authData.password && authData.name) {
        setUser({ name: authData.name, email: authData.email });
        setIsAuthModalOpen(false);
        navigate('/dashboard'); // Redirect after signup
      } else {
        setError('Please fill all fields');
      }
    }
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      {/* Auth Modal */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg p-6 w-full max-w-md"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                {isLogin ? 'Login' : 'Sign Up'}
              </h2>
              <button onClick={() => setIsAuthModalOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={authData.name}
                    onChange={handleAuthChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={authData.email}
                  onChange={handleAuthChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={authData.password}
                  onChange={handleAuthChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                  required
                />
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  {isLogin ? 'Login' : 'Sign Up'}
                </button>

                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Navbar Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">MentaMind</span>
            </Link>
          </motion.div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative ${
                  isActive(item.path) ? 'text-blue-600' : 'text-gray-600'
                } hover:text-blue-600 transition-colors`}
              >
                {item.label}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    initial={false}
                  />
                )}
              </Link>
            ))}

            {user ? (
              <div className="flex items-center space-x-4">
                <span className="flex items-center text-gray-700">
                  <User className="h-5 w-5 mr-1" /> {user.name}
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLogout}
                  className="flex items-center bg-red-50 text-red-600 px-4 py-2 rounded-md hover:bg-red-100 transition-colors"
                >
                  <LogOut className="h-5 w-5 mr-1" /> Logout
                </motion.button>
              </div>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsAuthModalOpen(true)}
                className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                <LogIn className="h-5 w-5 mr-1" /> Login
              </motion.button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-3 py-2 rounded-md ${
                isActive(item.path)
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
              } transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {user ? (
            <div className="pt-2 space-y-2">
              <div className="px-3 py-2 text-gray-700 flex items-center">
                <User className="h-5 w-5 mr-2" /> {user.name}
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="w-full flex items-center justify-center bg-red-50 text-red-600 px-4 py-2 rounded-md hover:bg-red-100 transition-colors"
              >
                <LogOut className="h-5 w-5 mr-1" /> Logout
              </motion.button>
            </div>
          ) : (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsMenuOpen(false);
                setIsAuthModalOpen(true);
              }}
              className="w-full mt-2 flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              <LogIn className="h-5 w-5 mr-1" /> Login
            </motion.button>
          )}
        </div>
      </motion.div>
    </nav>
  );
}