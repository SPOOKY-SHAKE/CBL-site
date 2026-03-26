import React from 'react';
import { Button } from './ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#FDF5F0] z-50 border-b border-[#E8D5C4]">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-white">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cg fill='%23C4A574'%3E%3Cpath d='M35 20 L50 10 L65 20 L65 45 L50 55 L35 45 Z' fill='none' stroke='%23C4A574' stroke-width='2'/%3E%3Crect x='48' y='35' width='4' height='25' fill='%23C4A574'/%3E%3Ccircle cx='50' cy='65' r='3' fill='%23C4A574'/%3E%3Cpath d='M30 70 L50 60 L70 70' fill='none' stroke='%23C4A574' stroke-width='2'/%3E%3Ctext x='50' y='90' font-family='serif' font-size='12' text-anchor='middle' fill='%23C4A574' font-weight='bold'%3ECBL%3C/text%3E%3C/g%3E%3C/svg%3E"
              alt="CBL Logo"
              className="w-12 h-12" />

          </div>
          <div className="ml-1">
            <div className="text-xs uppercase tracking-wider text-gray-600">CENTER FOR</div>
            <div className="text-sm font-semibold text-gray-800">BUSINESS LAWS</div>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={`text-sm ${isActive('/') ? 'text-[#E31E24] font-medium' : 'text-gray-600 hover:text-[#E31E24]'} transition-colors`}>Home</Link>
          <Link to="/about" className={`text-sm ${isActive('/about') ? 'text-[#E31E24] font-medium' : 'text-gray-600 hover:text-[#E31E24]'} transition-colors`}>About</Link>
          <Link to="/services" className={`text-sm ${isActive('/services') ? 'text-[#E31E24] font-medium' : 'text-gray-600 hover:text-[#E31E24]'} transition-colors`}>Services</Link>
          <Link to="/blog" className={`text-sm ${isActive('/blog') ? 'text-[#E31E24] font-medium' : 'text-gray-600 hover:text-[#E31E24]'} transition-colors`}>Blog</Link>
          <Link to="/contact" className={`text-sm ${isActive('/contact') ? 'text-[#E31E24] font-medium' : 'text-gray-600 hover:text-[#E31E24]'} transition-colors`}>Contact</Link>
        </nav>
        
        <Link to="/get-started">
          <Button
            variant="outline"
            className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-full px-6">

            GET STARTED
          </Button>
        </Link>
      </div>
    </header>);

};

export default Header;