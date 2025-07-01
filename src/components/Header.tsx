
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Surendra Sir</h1>
              <p className="text-sm text-teal-600">Chemistry Classes</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-700 hover:text-teal-600 transition-colors">About</a>
            <a href="#courses" className="text-gray-700 hover:text-teal-600 transition-colors">Courses</a>
            <a href="#testimonials" className="text-gray-700 hover:text-teal-600 transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
