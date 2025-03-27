import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Corporate from './pages/Corporate';
import AI from './pages/AI';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App