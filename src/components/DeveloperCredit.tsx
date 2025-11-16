import React from 'react';

const DeveloperCredit = () => {
  return (
    <div className="bg-gradient-to-r from-slate-100 to-blue-50 py-6 border-t border-slate-200">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg px-6 py-4 shadow-sm">
          <p className="text-slate-700 font-bold text-lg mb-2">
            Need a website like this?
          </p>
          <p className="text-slate-600 font-semibold mb-3">
            Contact: <span className="text-blue-600">7562087088</span>
          </p>
          <a 
            href="tel:7562087088"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200"
          >
            Call Now: 7562087088
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCredit;
