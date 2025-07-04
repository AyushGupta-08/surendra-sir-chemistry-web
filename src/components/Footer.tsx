
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <h3 className="text-xl font-bold">Surendra Sir</h3>
              <p className="text-sm text-gray-400">Chemistry Classes</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <h4 className="font-semibold mb-2">Contact</h4>
              <p className="text-gray-400">+91 94313 40624</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Location</h4>
              <p className="text-gray-400">Jugsalai, Jamshedpur</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Fee Information</h4>
              <p className="text-gray-400">Contact us for details</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400">
              © 2024 Surendra Sir Chemistry Classes. Making Chemistry Simple & Enjoyable.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
