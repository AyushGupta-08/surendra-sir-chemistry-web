
import React from 'react';
import { FlaskConical, Atom } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white relative overflow-hidden">
      {/* Subtle chemistry background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-16 h-16 border border-teal-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 border border-blue-300 rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-8 h-8 bg-teal-200 rounded-full"></div>
        <div className="absolute top-1/3 right-10 w-6 h-6 bg-blue-200 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Atom className="w-8 h-8 text-teal-600 mr-3" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Meet Your Chemistry Mentor
            </h2>
            <FlaskConical className="w-8 h-8 text-blue-600 ml-3" />
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-white/50 relative overflow-hidden">
            {/* Decorative chemistry elements */}
            <div className="absolute top-4 right-4 opacity-20">
              <FlaskConical className="w-12 h-12 text-teal-500" />
            </div>
            <div className="absolute bottom-4 left-4 opacity-20">
              <Atom className="w-10 h-10 text-blue-500" />
            </div>
            
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                <FlaskConical className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Surendra Yadav – One of Jamshedpur's Finest Chemistry Educators
              </h3>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Surendra Yadav is widely recognized as one of the best Chemistry teachers in Jamshedpur, 
                known for his <strong className="text-teal-600">engaging and playful style of teaching</strong> that transforms 
                complex concepts into easy-to-grasp ideas.
              </p>
              
              <p>
                With a strong focus on <strong className="text-blue-600">board-oriented preparation for both ICSE and CBSE syllabi</strong>, 
                he has been a guiding force for students from Classes 9 to 12.
              </p>
              
              <p>
                His teaching methodology combines <strong className="text-teal-600">conceptual clarity, real-life examples, and exam-focused strategies</strong>, 
                making Chemistry not just understandable—but enjoyable.
              </p>
              
              <p>
                Students appreciate his friendly, approachable nature, and the way he breaks down even the toughest topics 
                into fun, memorable lessons. Whether it's mastering equations, understanding organic chemistry, or cracking 
                tricky numericals, Surendra Yadav ensures his students are not only well-prepared for exams, but also 
                develop a lasting interest in the subject.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
