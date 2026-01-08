
import React from 'react';
import { FlaskConical, Atom, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
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
            <div className="flex items-center justify-center lg:justify-start mb-6 animate-fade-in">
              <FlaskConical className="w-10 h-10 text-teal-400 mr-3" />
              <Atom className="w-10 h-10 text-blue-400" />
            </div>
            
            {/* SEO-Optimized H1 */}
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in animation-delay-200">
              Best Chemistry Teacher in Jamshedpur
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 block mt-2">
                Surendra Sir Chemistry Classes
              </span>
              <span className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-300 block mt-4">
                Expert Chemistry Coaching for Class 9–12 | ICSE, CBSE & ISC Boards
              </span>
            </h1>
            
            {/* SEO-rich introductory paragraph */}
            <p className="text-xl lg:text-2xl text-gray-200 mb-6 leading-relaxed animate-fade-in animation-delay-400 max-w-4xl">
              Looking for the <strong>top chemistry teacher in jamshedpur</strong>? Join Surendra Sir's trusted chemistry coaching in Jugsalai – the <strong>best chemistry coaching center in jamshedpur</strong> for Class 9 to 12 students. We are the leading <strong>chemistry coaching institute in jamshedpur</strong> providing <strong>affordable chemistry coaching in jamshedpur</strong> with proven results.
            </p>
            
            {/* Updated Online/Offline Information with keywords */}
            <div className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-teal-400/30 animate-fade-in animation-delay-500">
              <p className="text-lg lg:text-xl text-white font-medium text-center">
                We offer <strong>chemistry tuition classes in jamshedpur</strong> – both Online and Offline modes available. Whether you need a <strong>private chemistry tutor in jamshedpur</strong> or prefer group classes, we have flexible options for every student.
              </p>
            </div>
            
            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-600">
              <a
                href="https://wa.me/919431340624"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-lg"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Join Now - Contact on WhatsApp
              </a>
              <a 
                href="#contact"
                className="border-2 border-teal-400 text-teal-400 px-8 py-4 rounded-full font-semibold hover:bg-teal-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center text-lg"
              >
                <FlaskConical className="w-6 h-6 mr-3" />
                Contact for Chemistry Coaching Near Me
              </a>
            </div>
          </div>
          <div className="flex-1 relative animate-fade-in animation-delay-800">
            <div className="relative">
              <img 
                src="/lovable-uploads/9bdf2ac9-e7e2-4837-89b8-bab42e518c8b.png" 
                alt="Surendra Sir - Best Chemistry Teacher in Jamshedpur, Jugsalai - Expert Chemistry Tutor for Class 9-12 CBSE ICSE ISC" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-white/20"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                <div className="text-center">
                  <FlaskConical className="w-8 h-8 mx-auto mb-1" />
                  <div className="text-xs">Most Trusted</div>
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
