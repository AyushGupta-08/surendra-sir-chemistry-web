
import React from 'react';
import { FlaskConical, Atom } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Enhanced chemistry pattern background */}
      <div className="absolute inset-0 opacity-10">
        {/* Molecular structures */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-teal-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-blue-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-teal-400 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-blue-400 rounded-full"></div>
        <div className="absolute bottom-1/3 right-10 w-6 h-6 bg-teal-400 rounded-full"></div>
        <div className="absolute top-2/3 left-20 w-10 h-10 bg-purple-400 rounded-full"></div>
        
        {/* Chemical bonds */}
        <div className="absolute top-1/4 left-1/3 w-24 h-0.5 bg-teal-300 rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-0.5 bg-blue-300 -rotate-45"></div>
        <div className="absolute top-2/3 left-1/2 w-16 h-0.5 bg-purple-300 rotate-12"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-0.5 bg-teal-300 -rotate-12"></div>
        
        {/* Flask shapes */}
        <div className="absolute top-32 right-1/4 w-4 h-6 bg-blue-300 rounded-t-full"></div>
        <div className="absolute bottom-32 left-1/3 w-3 h-5 bg-teal-300 rounded-t-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <FlaskConical className="w-8 h-8 text-teal-600 mr-3" />
              <Atom className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
              Master Chemistry with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600"> Surendra Sir</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              One of Jamshedpur's finest Chemistry educators, making complex concepts simple and enjoyable for Classes 9-12
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <FlaskConical className="w-5 h-5 mr-2" />
                Enroll Now - ₹1200/month
              </button>
              <button className="border-2 border-teal-500 text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition-all duration-300 flex items-center justify-center">
                <Atom className="w-5 h-5 mr-2" />
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative">
              <img 
                src="/lovable-uploads/9bdf2ac9-e7e2-4837-89b8-bab42e518c8b.png" 
                alt="Surendra Yadav - Chemistry Teacher" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-white/50"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                <div className="text-center">
                  <FlaskConical className="w-6 h-6 mx-auto mb-1" />
                  <div className="text-xs">Best in Jamshedpur</div>
                </div>
              </div>
              
              {/* Floating chemistry elements around the image */}
              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                <Atom className="w-6 h-6 text-white" />
              </div>
              <div className="absolute top-1/2 -right-6 w-8 h-8 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
