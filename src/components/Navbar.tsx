import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Menu, X, User, LogIn, LogOut } from 'lucide-react';

interface NavbarProps {
  isAuthenticated: boolean;
  user: { name: string; email: string } | null;
  onLogout: () => void;
}

export default function Navbar({ isAuthenticated, user, onLogout }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
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

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
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
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Navigation */}
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

            {/* Auth Section */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-gray-700">
                  <User className="h-5 w-5 mr-1" />
                  <span className="hidden sm:inline">{user?.name || 'User'}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onLogout}
                  className="flex items-center bg-red-50 text-red-600 px-4 py-2 rounded-md hover:bg-red-100 transition-colors"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  <span className="hidden sm:inline">Logout</span>
                </motion.button>
              </div>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/login')}
                className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                <LogIn className="h-5 w-5 mr-1" />
                <span className="hidden sm:inline">Login</span>
              </motion.button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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
              onClick={handleMobileLinkClick}
              className={`block px-3 py-2 rounded-md ${
                isActive(item.path)
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
              } transition-colors`}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Auth Section */}
          {isAuthenticated ? (
            <div className="pt-2 space-y-2">
              <div className="px-3 py-2 text-gray-700 flex items-center">
                <User className="h-5 w-5 mr-2" />
                {user?.name || 'User'}
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  onLogout();
                  handleMobileLinkClick();
                }}
                className="w-full flex items-center justify-center bg-red-50 text-red-600 px-4 py-2 rounded-md hover:bg-red-100 transition-colors"
              >
                <LogOut className="h-5 w-5 mr-1" />
                Logout
              </motion.button>
            </div>
          ) : (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                navigate('/login');
                handleMobileLinkClick();
              }}
              className="w-full mt-2 flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              <LogIn className="h-5 w-5 mr-1" />
              Login
            </motion.button>
          )}
        </div>
      </motion.div>
    </nav>
  );
}