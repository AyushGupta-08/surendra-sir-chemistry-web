
import React from 'react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-teal-50 to-blue-100 relative overflow-hidden">
      {/* Chemistry pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-teal-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-blue-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-teal-400 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-blue-400 rounded-full"></div>
        <div className="absolute bottom-1/3 right-10 w-6 h-6 bg-teal-400 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
              Master Chemistry with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600"> Surendra Sir</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              One of Jamshedpur's finest Chemistry educators, making complex concepts simple and enjoyable for Classes 9-12
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Enroll Now - ₹1200/month
              </button>
              <button className="border-2 border-teal-500 text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative">
              <img 
                src="/lovable-uploads/9bdf2ac9-e7e2-4837-89b8-bab42e518c8b.png" 
                alt="Surendra Yadav - Chemistry Teacher" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                Best in Jamshedpur
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
