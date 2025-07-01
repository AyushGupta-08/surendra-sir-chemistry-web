
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Meet Your Chemistry Mentor
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Surendra Yadav – One of Jamshedpur's Finest Chemistry Educators
            </h3>
            
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
